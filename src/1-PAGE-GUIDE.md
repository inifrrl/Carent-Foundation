# ⚡ 1-PAGE QUICK GUIDE

## 🎯 3 LANGKAH → WEBSITE LIVE

---

### 📤 STEP 1: UPLOAD KE GITHUB (10 menit)

```bash
# 1. Buat repo di github.com:
#    → Klik "+" → New repository
#    → Nama: carent-indonesia-website
#    → Create repository

# 2. Copy URL repository (contoh):
#    https://github.com/USERNAME/carent-indonesia-website.git

# 3. Di Terminal/CMD, jalankan:
git init
git add .
git commit -m "Initial commit: Carent Indonesia website"
git remote add origin https://github.com/USERNAME/carent-indonesia-website.git
git branch -M main
git push -u origin main

# Ganti USERNAME dengan username GitHub Anda!
```

✅ **Done!** Code sekarang ada di GitHub

---

### 🚀 STEP 2: DEPLOY KE VERCEL (5 menit)

```
1. Buka: vercel.com
2. Klik: "Sign up" → Continue with GitHub
3. Klik: "New Project"
4. Pilih: carent-indonesia-website
5. Klik: "Deploy"
6. Tunggu: 2-3 menit
7. Klik: "Visit" untuk lihat website
```

✅ **Done!** Website live di internet!

**URL:** `https://carent-indonesia-website.vercel.app`

---

### ✅ STEP 3: VERIFY (5 menit)

Cek di berbagai device:
- [ ] Desktop browser
- [ ] Mobile phone
- [ ] Tablet
- [ ] Semua page works
- [ ] Images loaded
- [ ] Navigation works

✅ **Done!** Website siap digunakan!

---

## 🔄 UPDATE WEBSITE (Nanti)

```bash
# Setiap kali edit code:
git add .
git commit -m "Update: apa yang diubah"
git push

# Vercel otomatis rebuild (2-3 menit)
```

---

## 📚 DOKUMENTASI LENGKAP

| Butuh bantuan? | Baca file ini |
|----------------|---------------|
| 📑 Index semua docs | [`INDEX.md`](./INDEX.md) |
| ⚡ Quick start | [`QUICK_START.md`](./QUICK_START.md) |
| 📤 Upload detail | [`GITHUB_UPLOAD_GUIDE.md`](./GITHUB_UPLOAD_GUIDE.md) |
| 🚀 Deploy detail | [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) |
| 💻 Git commands | [`GIT_COMMANDS_CHEATSHEET.md`](./GIT_COMMANDS_CHEATSHEET.md) |
| 🗺️ Visual guide | [`VISUAL_WORKFLOW.md`](./VISUAL_WORKFLOW.md) |
| ✅ Checklist | [`CHECKLIST.md`](./CHECKLIST.md) |

---

## 🆘 JIKA ERROR

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/USER/REPO.git
```

### "failed to push"
```bash
git pull origin main --rebase
git push
```

### "Build failed" di Vercel
```bash
npm run build  # test local dulu
# Fix error
git add .
git commit -m "Fix: build error"
git push
```

---

## ⏱️ TOTAL TIME: 20 MENIT

```
Upload:  10 menit  ████████████
Deploy:   5 menit  ██████
Verify:   5 menit  ██████
───────────────────────────
Total:   20 menit  ████████████████████████
```

---

## 🎉 SUCCESS!

```
✅ Code backed up di GitHub
✅ Website live di internet
✅ Auto-deploy saat push
✅ Responsive all devices
✅ Fast loading
```

---

## 📞 CONTACT

**Carent Indonesia**
- Email: carentfoundation@gmail.com
- WhatsApp: +62 887-0641-5817
- Instagram: @carenfound.indonesia

---

## 🚀 NEXT STEPS (Optional)

1. **Custom Domain** (2 hari)
   - Beli: niagahoster.co.id
   - Setup: Vercel → Settings → Domains

2. **SEO** (1 jam)
   - Meta tags
   - Google Search Console

3. **Analytics** (30 menit)
   - Google Analytics
   - Vercel Analytics

---

**Ready? Follow 3 steps above! 🚀**

**Questions? Read [`INDEX.md`](./INDEX.md) for all guides! 📚**
