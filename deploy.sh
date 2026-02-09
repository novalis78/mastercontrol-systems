#!/bin/bash
set -e
npm run build
echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy dist --project-name=mastercontrol-systems
echo "Deployment complete!"
