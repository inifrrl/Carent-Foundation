#!/bin/bash

# ===================================
# 🚀 QUICK GITHUB UPLOAD SCRIPT
# ===================================
# Jalankan script ini untuk upload ke GitHub dengan cepat!

echo "🎯 Carent Indonesia - GitHub Upload Script"
echo "=========================================="
echo ""

# Ganti ini dengan URL repository GitHub Anda
GITHUB_REPO_URL="https://github.com/USERNAME/carent-indonesia-website.git"

echo "📝 Langkah 1: Inisialisasi Git Repository"
git init

echo ""
echo "📦 Langkah 2: Tambahkan semua file"
git add .

echo ""
echo "💬 Langkah 3: Commit pertama"
git commit -m "Initial commit: Carent Indonesia responsive website"

echo ""
echo "🔗 Langkah 4: Connect ke GitHub"
echo "⚠️  PENTING: Edit GITHUB_REPO_URL di script ini dulu!"
echo "    Ganti USERNAME dengan username GitHub Anda"
read -p "Apakah sudah edit URL? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]
then
    git remote add origin $GITHUB_REPO_URL
    git branch -M main
    
    echo ""
    echo "🚀 Langkah 5: Push ke GitHub"
    git push -u origin main
    
    echo ""
    echo "✅ SELESAI! Website sudah di GitHub!"
    echo "🌐 Buka: $GITHUB_REPO_URL"
else
    echo ""
    echo "❌ Upload dibatalkan. Edit script ini dulu!"
    echo "   Buka file ini dan ganti USERNAME di GITHUB_REPO_URL"
fi

echo ""
echo "=========================================="
echo "📚 Next Steps:"
echo "1. Deploy ke Vercel: https://vercel.com"
echo "2. Deploy ke Netlify: https://netlify.com"
echo "3. Setup custom domain (optional)"
echo "=========================================="
