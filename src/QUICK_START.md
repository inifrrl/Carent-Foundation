# 🎯 QUICK REFERENCE - Upload & Deploy

## ⚡ 3 COMMANDS TO GITHUB

```bash
git init
git add .
git commit -m "Initial commit: Carent Indonesia website"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

**Ganti:** `USERNAME` dan `REPO` dengan milik Anda

---

## 🚀 VERCEL DEPLOY (TERCEPAT)

1. Push ke GitHub (commands di atas)
2. Buka vercel.com → Sign in with GitHub
3. Import repository → Deploy
4. **Done in 3 minutes!**

URL: `https://project-name.vercel.app`

---

## 📝 UPDATE WEBSITE

```bash
# Setiap kali edit code:
git add .
git commit -m "Update: apa yang diubah"
git push

# Vercel otomatis deploy!
```

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

### "Build failed"
```bash
npm run build  # test local
# Fix error yang muncul
git add .
git commit -m "Fix: build error"
git push
```

---

## 📞 CONTACT INFO TO UPDATE

Update di:
- `README.md` → Contact section
- `Cover.tsx` → Footer links
- Social media links

---

## ✅ CHECKLIST

- [ ] Git installed
- [ ] GitHub account created
- [ ] Code tested locally (`npm run dev`)
- [ ] `.gitignore` file ada
- [ ] README.md dibuat
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain (optional)

---

## 🎯 RECOMMENDED WORKFLOW

```
1. Code → Test locally
2. Git add + commit + push
3. Vercel auto-deploy
4. Check live site
5. Share! 🎉
```

---

**Need help? Read full guides:**
- `GITHUB_UPLOAD_GUIDE.md` - Detailed GitHub tutorial
- `DEPLOYMENT_GUIDE.md` - Deployment options
- `GIT_COMMANDS_CHEATSHEET.md` - All Git commands
