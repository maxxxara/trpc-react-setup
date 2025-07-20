#!/bin/bash

# 🚀 Vercel Deployment Script for tRPC Monorepo

set -e  # Exit on any error

echo "🔍 Checking prerequisites..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install it first."
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "vercel.json" ]; then
    echo "❌ vercel.json not found. Are you in the project root?"
    exit 1
fi

echo "✅ Prerequisites checked"

echo "📦 Installing dependencies..."
pnpm install

echo "🔨 Building packages..."
pnpm run build

echo "✅ Build completed successfully!"

echo "🚀 Ready for Vercel deployment!"
echo ""
echo "Next steps:"
echo "1. Push your changes to GitHub"
echo "2. Connect your repository to Vercel"
echo "3. Or run: vercel --prod (if you have Vercel CLI)"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions" 