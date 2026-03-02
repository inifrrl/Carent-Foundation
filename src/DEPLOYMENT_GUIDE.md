# 🚀 Panduan Deploy Website - 3 Cara Termudah

## 📊 Perbandingan Platform Hosting

| Platform | Kecepatan | Gratis? | Custom Domain | Rekomendasi |
|----------|-----------|---------|---------------|-------------|
| **Vercel** | ⚡⚡⚡ | ✅ Ya | ✅ Ya | ⭐⭐⭐⭐⭐ TERBAIK |
| **Netlify** | ⚡⚡⚡ | ✅ Ya | ✅ Ya | ⭐⭐⭐⭐ |
| **GitHub Pages** | ⚡⚡ | ✅ Ya | ✅ Ya | ⭐⭐⭐ |

---

## 🥇 CARA 1: Vercel (PALING MUDAH & RECOMMENDED)

### ✨ Keuntungan:
- ⚡ Deploy otomatis dari GitHub
- 🔄 Auto-rebuild saat ada commit baru
- 🌐 Free SSL certificate
- 📊 Analytics gratis
- 🚀 CDN global (super cepat)

### 📝 Langkah-langkah:

#### Step 1: Upload ke GitHub dulu
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/carent-indonesia-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Deploy ke Vercel

1. **Buka** [vercel.com](https://vercel.com)
2. **Klik** "Sign Up" → Pilih "Continue with GitHub"
3. **Authorize** Vercel untuk akses GitHub
4. **Klik** "New Project"
5. **Import** repository `carent-indonesia-website`
6. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
7. **Klik** "Deploy"
8. **Tunggu** 2-3 menit
9. ✅ **SELESAI!** Website live!

#### Step 3: Setup Custom Domain (Optional)

1. Beli domain (Niagahoster, Namecheap, dll)
2. Di Vercel: Settings → Domains
3. Tambahkan domain Anda: `carentindonesia.com`
4. Update DNS di registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. Tunggu 24-48 jam
6. ✅ Website live di domain sendiri!

### 🔄 Update Website

Setiap kali push ke GitHub, Vercel otomatis rebuild:

```bash
# Edit code
git add .
git commit -m "Update: perubahan baru"
git push

# Vercel otomatis deploy! (2-3 menit)
```

---

## 🥈 CARA 2: Netlify

### ✨ Keuntungan:
- 🎯 Drag & drop deploy
- 🔄 Auto-deploy dari GitHub
- 🌐 Free SSL
- 📝 Form handling gratis

### 📝 Langkah-langkah:

#### Via GitHub (Recommended)

1. **Upload ke GitHub** (sama seperti Cara 1)
2. **Buka** [netlify.com](https://netlify.com)
3. **Sign up** dengan GitHub
4. **Klik** "Add new site" → "Import an existing project"
5. **Pilih** GitHub → pilih repository
6. **Configure:**
   - Build command: `npm run build`
   - Publish directory: `dist`
7. **Deploy site**
8. ✅ **SELESAI!**

#### Via Drag & Drop (Tercepat!)

1. **Build locally:**
   ```bash
   npm run build
   ```
2. **Buka** [app.netlify.com/drop](https://app.netlify.com/drop)
3. **Drag** folder `dist` ke browser
4. ✅ **SELESAI!** Instant deploy!

⚠️ **Note:** Drag & drop = manual update setiap kali

---

## 🥉 CARA 3: GitHub Pages

### ✨ Keuntungan:
- 🆓 100% gratis
- 🔗 Terintegrasi dengan GitHub
- 📄 Bagus untuk dokumentasi

### ⚠️ Kekurangan:
- ⚙️ Butuh konfigurasi lebih
- 🐢 Lebih lambat dari Vercel/Netlify
- 🔧 React Router butuh workaround

### 📝 Langkah-langkah:

#### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Tambahkan di `package.json`:

```json
{
  "homepage": "https://USERNAME.github.io/carent-indonesia-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 3: Update vite.config.ts

```typescript
export default defineConfig({
  base: '/carent-indonesia-website/',
  // ... rest of config
})
```

#### Step 4: Deploy

```bash
npm run deploy
```

#### Step 5: Enable GitHub Pages

1. Buka repository di GitHub
2. Settings → Pages
3. Source: `gh-pages` branch
4. Save
5. ✅ Live di: `https://USERNAME.github.io/carent-indonesia-website`

### 🔧 Fix React Router di GitHub Pages

Buat file `public/_redirects`:
```
/*    /index.html   200
```

Atau buat `public/404.html` yang sama dengan `index.html`

---

## 🎯 Rekomendasi Berdasarkan Kebutuhan

### 🏢 Untuk Website Professional
→ **Vercel** dengan custom domain
```
carentindonesia.com
```

### 🚀 Untuk Prototype Cepat
→ **Netlify** drag & drop
```
Build local → drag dist folder → done!
```

### 📚 Untuk Project Personal/Portfolio
→ **GitHub Pages**
```
username.github.io/project-name
```

---

## 📊 Statistik Deployment

### Vercel
- ⏱️ Deploy time: ~2 menit
- 🌍 CDN: 70+ locations
- 📈 Bandwidth: Unlimited
- 💰 Harga: Gratis (hobby plan)

### Netlify
- ⏱️ Deploy time: ~2-3 menit
- 🌍 CDN: Global
- 📈 Bandwidth: 100GB/bulan
- 💰 Harga: Gratis (starter plan)

### GitHub Pages
- ⏱️ Deploy time: ~5 menit
- 🌍 CDN: GitHub CDN
- 📈 Bandwidth: 100GB/bulan
- 💰 Harga: Gratis

---

## 🔗 URLs yang Akan Didapat

### Vercel
```
https://carent-indonesia-website.vercel.app
https://carent-indonesia-website-username.vercel.app
```

### Netlify
```
https://carent-indonesia-website.netlify.app
https://random-name-12345.netlify.app (bisa diganti)
```

### GitHub Pages
```
https://username.github.io/carent-indonesia-website
```

---

## ✅ Checklist Sebelum Deploy

- [ ] `npm run build` berhasil tanpa error
- [ ] Test di localhost (`npm run dev`)
- [ ] Semua gambar tampil
- [ ] Navigation links bekerja
- [ ] Responsive di mobile & desktop
- [ ] `.gitignore` sudah benar
- [ ] `README.md` sudah dibuat
- [ ] Code sudah di-push ke GitHub

---

## 🆘 Troubleshooting

### ❌ Build Failed di Vercel/Netlify
```bash
# Check build locally dulu
npm run build

# Lihat error message
# Fix error
# Push lagi ke GitHub
```

### ❌ Blank Page Setelah Deploy
- Check browser console (F12)
- Pastikan `base` di vite.config.ts benar
- Pastikan routes di React Router benar

### ❌ Images Not Loading
- Pastikan path relatif benar
- Check case-sensitive filenames
- Figma assets (figma:asset) mungkin perlu special handling

### ❌ 404 on Page Refresh
- Tambahkan `_redirects` file (Netlify)
- Configure `vercel.json` rewrites (Vercel)
- GitHub Pages: gunakan hash router

---

## 🎉 Setelah Deploy Berhasil

### Share Website:
```
LinkedIn Post:
"Excited to launch Carent Indonesia's new website! 🚀
Check it out: https://your-domain.com
#YouthDevelopment #WebDevelopment"

Instagram Story:
"Website baru Carent Indonesia sudah live! 🎉
Link in bio!"
```

### Monitor Traffic:
- Vercel Analytics (built-in)
- Google Analytics
- Microsoft Clarity (free heatmaps)

### SEO Optimization:
- Submit sitemap ke Google Search Console
- Add meta tags
- Optimize images
- Add structured data

---

## 📚 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [GitHub Pages Docs](https://docs.github.com/pages)
- [React Router Deployment](https://reactrouter.com/en/main/guides/deployment)

---

## 🎯 Recommended Flow

```
1. Develop locally (npm run dev)
   ↓
2. Test build (npm run build)
   ↓
3. Push to GitHub
   ↓
4. Deploy to Vercel (auto)
   ↓
5. Check live website
   ↓
6. Setup custom domain
   ↓
7. Share to world! 🌍
```

---

**💡 Pro Tip:** Gunakan Vercel untuk production, Netlify untuk staging/testing!

**🚀 Ready to launch? Pilih salah satu cara di atas dan go live!**
