# 🚀 Panduan Upload ke GitHub - Carent Indonesia Website

## 📋 Langkah-Langkah Upload ke GitHub

### 1️⃣ **Persiapan Awal**

#### Install Git (jika belum)
- **Windows**: Download dari [git-scm.com](https://git-scm.com/download/win)
- **Mac**: Sudah terinstall atau `brew install git`
- **Linux**: `sudo apt-get install git`

#### Buat Akun GitHub (jika belum)
- Kunjungi [github.com](https://github.com)
- Sign up dengan email Anda

---

### 2️⃣ **Download Project dari Figma Make**

1. Di Figma Make, klik tombol **"Export"** atau **"Download"**
2. Download semua file project sebagai ZIP
3. Extract ZIP ke folder di komputer Anda
4. Buka folder tersebut di Terminal/Command Prompt

---

### 3️⃣ **Inisialisasi Git Repository**

Buka Terminal/Command Prompt di folder project, lalu jalankan:

```bash
# Inisialisasi git
git init

# Tambahkan semua file
git add .

# Commit pertama
git commit -m "Initial commit: Carent Indonesia responsive website"
```

---

### 4️⃣ **Buat Repository di GitHub**

1. Login ke [GitHub](https://github.com)
2. Klik tombol **"+"** di pojok kanan atas → **"New repository"**
3. Isi detail repository:
   - **Repository name**: `carent-indonesia-website`
   - **Description**: "Youth Development Foundation - Responsive Website"
   - **Public** atau **Private** (pilih sesuai kebutuhan)
   - **JANGAN** centang "Initialize with README"
4. Klik **"Create repository"**

---

### 5️⃣ **Connect & Push ke GitHub**

Setelah repository dibuat, GitHub akan menampilkan instruksi. Copy dan jalankan:

```bash
# Tambahkan remote origin (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/carent-indonesia-website.git

# Ganti nama branch ke main
git branch -M main

# Push ke GitHub
git push -u origin main
```

**Contoh:**
```bash
git remote add origin https://github.com/carentindonesia/carent-indonesia-website.git
git branch -M main
git push -u origin main
```

---

### 6️⃣ **Update Code di Masa Depan**

Setiap kali ada perubahan:

```bash
# Tambahkan file yang berubah
git add .

# Commit dengan pesan
git commit -m "Update: menambahkan fitur baru"

# Push ke GitHub
git push
```

---

## 🌐 Deploy Website (Hosting Gratis)

### **Option 1: Vercel (RECOMMENDED)** ⭐

Vercel adalah platform terbaik untuk React apps:

1. Buka [vercel.com](https://vercel.com)
2. Sign up dengan GitHub
3. Klik **"New Project"**
4. Import repository `carent-indonesia-website`
5. Vercel akan otomatis detect React app
6. Klik **"Deploy"**
7. ✅ Website live dalam 2-3 menit!

**URL akan seperti**: `carent-indonesia-website.vercel.app`

---

### **Option 2: Netlify**

1. Buka [netlify.com](https://netlify.com)
2. Sign up dengan GitHub
3. Klik **"Add new site"** → **"Import from Git"**
4. Pilih repository Anda
5. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Klik **"Deploy"**

**URL akan seperti**: `carent-indonesia-website.netlify.app`

---

### **Option 3: GitHub Pages**

⚠️ **Catatan**: GitHub Pages untuk static sites, butuh konfigurasi khusus untuk React Router.

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Edit `package.json`, tambahkan:
```json
{
  "homepage": "https://USERNAME.github.io/carent-indonesia-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

---

## 🔧 Konfigurasi Tambahan untuk Deployment

### **Tambahkan `.gitignore`**

Buat file `.gitignore` di root folder:

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Environment variables
.env
.env.local
.env.production

# Misc
.DS_Store
*.log
npm-debug.log*
.vscode/
.idea/

# Temporary files
.cache/
tmp/
temp/
```

### **Tambahkan `README.md`**

Buat file `README.md`:

```markdown
# Carent Indonesia Website

Youth Development Foundation - Responsive Website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo
[View Website](https://your-domain.com)

## 📱 Features
- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- Interactive navigation
- Multiple pages (Home, Profile, Program, Partnership, Services)

## 🛠️ Tech Stack
- React
- TypeScript
- Tailwind CSS v4
- React Router
- Lucide Icons

## 💻 Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
\`\`\`

## 📄 License
© 2026 Carent Indonesia. All rights reserved.
```

---

## 🎯 Struktur Folder yang Akan Di-Upload

```
carent-indonesia-website/
├── imports/               # Figma imported components
│   ├── Cover.tsx
│   ├── Iphone.tsx
│   └── svg-*.ts
├── components/           # React components
│   ├── Navigation.tsx
│   ├── ProfileSections.tsx
│   └── ...
├── pages/               # Page components
│   ├── Home.tsx
│   ├── Profile.tsx
│   └── ...
├── styles/             # CSS files
│   └── globals.css
├── utils/             # Utility functions
├── App.tsx           # Main app component
├── routes.ts         # React Router config
├── package.json      # Dependencies
├── tsconfig.json     # TypeScript config
├── vite.config.ts    # Vite config
├── .gitignore        # Git ignore rules
└── README.md         # Project documentation
```

---

## ✅ Checklist Sebelum Upload

- [ ] Semua file sudah tersimpan
- [ ] `.gitignore` sudah dibuat
- [ ] `README.md` sudah dibuat
- [ ] Test website di localhost (npm run dev)
- [ ] Tidak ada error di console
- [ ] Semua gambar tampil dengan benar
- [ ] Navigation links berfungsi
- [ ] Responsive di semua device

---

## 🆘 Troubleshooting

### **Error: Permission Denied**
```bash
# Setup SSH key atau gunakan personal access token
# Di GitHub: Settings → Developer settings → Personal access tokens
```

### **Error: Remote Origin Already Exists**
```bash
# Hapus dan tambahkan lagi
git remote remove origin
git remote add origin https://github.com/USERNAME/REPO.git
```

### **Error: Images Not Loading After Deploy**
- Pastikan semua import path benar
- Gunakan relative paths untuk local images
- Figma assets (figma:asset) harus di-handle khusus

---

## 📞 Kontak & Support

Jika ada pertanyaan:
- Email: carentfoundation@gmail.com
- Instagram: @carenfound.indonesia
- LinkedIn: Carent Indonesia

---

## 🎉 Selamat!

Website Anda sekarang sudah di GitHub dan bisa diakses dari mana saja!

**Next Steps:**
1. ✅ Connect custom domain (optional)
2. ✅ Setup Google Analytics (optional)
3. ✅ Add SEO meta tags (optional)
4. ✅ Enable HTTPS (automatic di Vercel/Netlify)
