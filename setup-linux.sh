#!/usr/bin/env bash
set -euo pipefail

# Linux setup for Club PWA Prototype (React + Vite + Bootstrap)
# No emojis, no special characters.

MIN_NODE_MAJOR=18
TARGET_NODE_MAJOR=20

has_cmd() { command -v "$1" >/dev/null 2>&1; }

ensure_nvm() {
  if [ ! -d "$HOME/.nvm" ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
  fi
  export NVM_DIR="$HOME/.nvm"
  # shellcheck disable=SC1091
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
}

echo "Checking Node.js..."

if has_cmd node; then
  current=$(node -p "process.versions.node.split('.')[0]")
  if [ "$current" -lt "$MIN_NODE_MAJOR" ]; then
    echo "Node version too old. Installing Node $TARGET_NODE_MAJOR with nvm."
    ensure_nvm
    nvm install "$TARGET_NODE_MAJOR"
    nvm use "$TARGET_NODE_MAJOR"
  else
    echo "Node version is sufficient."
  fi
else
  echo "Node not found. Installing with nvm..."
  ensure_nvm
  nvm install "$TARGET_NODE_MAJOR"
  nvm use "$TARGET_NODE_MAJOR"
fi

echo "Installing npm dependencies..."
if [ -f package-lock.json ]; then
  npm ci
else
  npm install --include=dev
fi

echo "Starting Vite development server..."
npm run dev
