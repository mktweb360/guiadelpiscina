#!/bin/bash
export PATH="/usr/bin:/home/mktwe/.local/share/fnm/node-versions/v22.22.3/installation/bin:$PATH"
cd /home/mktwe/guiadelpiscina
git push -u origin main 2>&1
echo "Exit code: $?"
echo "COMMIT: $(git rev-parse HEAD)"
