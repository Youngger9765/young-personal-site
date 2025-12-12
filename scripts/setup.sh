#!/bin/bash

# Setup script for Young's Personal Site

echo "🚀 Setting up Young's Personal Site..."

# Check if .env exists
if [ ! -f .env ]; then
  echo "📝 Creating .env file from .env.example..."
  cp .env.example .env
  echo "⚠️  Please edit .env and add your ANTHROPIC_API_KEY"
else
  echo "✅ .env file already exists"
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p content/blog
mkdir -p knowledge
mkdir -p public

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env and add your ANTHROPIC_API_KEY"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "Optional:"
echo "- Add more blog posts to content/blog/"
echo "- Customize knowledge/about-me.md for the AI assistant"
echo "- Update project information in app/projects/page.tsx"
echo ""
