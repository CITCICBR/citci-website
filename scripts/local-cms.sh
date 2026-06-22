#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$SCRIPT_DIR/.."
CONFIG_DIR="$ROOT_DIR/public/admin"
CONFIG_PROD="$CONFIG_DIR/config.yml"
CONFIG_LOCAL="$CONFIG_DIR/config.local.yml"

cleanup() {
  echo ""
  echo "Restoring production config..."
  cp "$CONFIG_PROD.bak" "$CONFIG_PROD"
  rm -f "$CONFIG_PROD.bak"
  echo "Done. config.yml restored to Netlify OAuth backend."
}
trap cleanup EXIT

# Backup the production config
cp "$CONFIG_PROD" "$CONFIG_PROD.bak"

# Swap in the local config
cp "$CONFIG_LOCAL" "$CONFIG_PROD"
echo "Switched to local proxy backend."

# Start the Decap CMS proxy server in the background
echo "Starting Decap CMS proxy server on localhost:8081..."
npx decap-server &
PROXY_PID=$!

# Start Next.js dev server
echo "Starting Next.js dev server on localhost:3000..."
cd "$ROOT_DIR"
npm run dev &
NEXT_PID=$!

# Wait for both processes
wait $PROXY_PID $NEXT_PID
