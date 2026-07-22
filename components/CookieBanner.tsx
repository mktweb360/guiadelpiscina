"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";

const STORAGE_KEY = "guiadelpiscina_consent_v2";
const LEGACY_STORAGE_KEY = "guiadelpiscina_consent";

type Consent = { advertising: boolean; analytics: boolean };

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Traduce el consentimiento al formato de Google Consent Mode v2. */
function pushConsentUpdate({ advertising, analytics }: Consent) {
  if (typeof window.gtag !== "function") return;
  const ads = advertising ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: ads,
    ad_user_data: ads,
    ad_personalization: ads,
    analytics_storage: analytics ? "granted" : "denied",
  });
}

/**
 * Lee el consentimiento guardado, migrando desde la clave antigua si hace
 * falta. La clave antigua guardaba `"accepted"` / `"rejected"` como texto
 * plano en versiones tempranas y `{ state, analytics }` en las posteriores;
 * ambas formas se aceptan aquí.
 */
function readStoredConsent(): Consent | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as Partial<Consent>;
      return {
        advertising: parsed.advertising === true,
        analytics: parsed.analytics === true,
      };
    }

    const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!legacy) return null;

    let migrated: Consent;
    if (legacy === "accepted") {
      migrated = { advertising: true, analytics: true };
    } else if (legacy === "rejected") {
      migrated = { advertising: false, analytics: false };
    } else {
      const parsed = JSON.parse(legacy) as { state?: string; analytics?: boolean };
      const granted = parsed.state === "accepted" || parsed.analytics === true;
      migrated = { advertising: granted, analytics: granted };
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
    localStorage.removeItem(LEGACY_STORAGE_KEY);
    return migrated;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [reopened, setReopened] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [advertisingOk, setAdvertisingOk] = useState(false);
  const [analyticsOk, setAnalyticsOk] = useState(false);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      setAdvertisingOk(stored.advertising);
      setAnalyticsOk(stored.analytics);
      // El default del layout es "denied" en cada carga: hay que reaplicar
      // la decisión ya tomada por el usuario.
      pushConsentUpdate(stored);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    function reopen() {
      setReopened(true);
      setShowCustom(false);
    }
    window.addEventListener("openCookieBanner", reopen);
    return () => window.removeEventListener("openCookieBanner", reopen);
  }, []);

  const save = useCallback((next: Consent) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    localStorage.removeItem(LEGACY_STORAGE_KEY);
    pushConsentUpdate(next);
    setConsent(next);
    setAdvertisingOk(next.advertising);
    setAnalyticsOk(next.analytics);
    setShowCustom(false);
    setReopened(false);
  }, []);

  // El script de AdSense solo se monta con consentimiento de publicidad.
  const adsense = consent?.advertising ? (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6063067965030118"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  ) : null;

  const showBanner = loaded && (consent === null || reopened);

  if (!showBanner) return adsense;

  if (showCustom) {
    return (
      <>
        {adsense}
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/40">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6">
            <h2 className="text-lg font-bold mb-2 text-gray-900">Personalizar cookies</h2>
            <p className="text-sm text-gray-600 mb-4">
              Selecciona qué cookies deseas aceptar.
            </p>
            <label className="flex items-center gap-3 mb-3 cursor-pointer">
              <input type="checkbox" checked disabled className="w-4 h-4" />
              <span className="text-sm text-gray-700">
                <strong>Cookies necesarias</strong> — siempre activas
              </span>
            </label>
            <label className="flex items-center gap-3 mb-3 cursor-pointer">
              <input
                type="checkbox"
                checked={advertisingOk}
                onChange={(e) => setAdvertisingOk(e.target.checked)}
                className="w-4 h-4 accent-sky-500"
              />
              <span className="text-sm text-gray-700">
                <strong>Cookies de publicidad</strong> — Google AdSense
              </span>
            </label>
            <label className="flex items-center gap-3 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={analyticsOk}
                onChange={(e) => setAnalyticsOk(e.target.checked)}
                className="w-4 h-4 accent-sky-500"
              />
              <span className="text-sm text-gray-700">
                <strong>Cookies de analítica</strong> — medición de audiencia
              </span>
            </label>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() =>
                  save({ advertising: advertisingOk, analytics: analyticsOk })
                }
                className="px-4 py-2 bg-sky-500 text-white rounded-lg font-semibold text-sm hover:bg-sky-600 transition-colors"
              >
                Guardar preferencias
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {adsense}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-gray-600 flex-1">
            Usamos cookies para mostrar publicidad personalizada (Google AdSense) y mejorar tu experiencia.
            Consulta nuestra{" "}
            <a href="/politica-de-cookies" className="text-sky-600 underline">
              Política de cookies
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-2 shrink-0">
            <button
              onClick={() => save({ advertising: false, analytics: false })}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Rechazar
            </button>
            <button
              onClick={() => setShowCustom(true)}
              className="px-4 py-2 border border-sky-400 text-sky-600 rounded-lg text-sm font-medium hover:bg-sky-50 transition-colors"
            >
              Personalizar
            </button>
            <button
              onClick={() => save({ advertising: true, analytics: true })}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
