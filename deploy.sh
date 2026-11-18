#!/bin/bash
set -e

echo "🔨 Building website..."
npm run build

echo "📦 Deploying frontend to server..."
scp -r dist/* berksai:/var/www/berksai/

echo "📦 Deploying backend to server..."
# Copy server files
scp -r server berksai:/var/www/berksai/

# Copy package.json and package-lock.json for backend dependencies
scp package.json package-lock.json berksai:/var/www/berksai/

echo "🔄 Installing backend dependencies and restarting PM2..."
ssh berksai << 'EOF'
cd /var/www/berksai
npm install --production
pm2 restart berksai-api || pm2 start server/index.js --name berksai-api
pm2 save
EOF

echo "✅ Deployed successfully!"
echo "Frontend: https://berksai.com"
echo "Backend API: https://berksai.com/api/health"

