# 📝 Git & GitHub Command Cheatsheet

## 🚀 QUICK START - Upload Pertama Kali

```bash
# 1. Inisialisasi Git
git init

# 2. Tambahkan semua file
git add .

# 3. Commit pertama
git commit -m "Initial commit: Carent Indonesia website"

# 4. Connect ke GitHub (ganti USERNAME dan REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 5. Rename branch ke main
git branch -M main

# 6. Push ke GitHub
git push -u origin main
```

---

## 📤 Update Code (Setelah Upload Pertama)

```bash
# Check status
git status

# Tambahkan file yang berubah
git add .

# Commit dengan pesan
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push
```

---

## 🔍 Useful Git Commands

### Check Status
```bash
git status              # Lihat file yang berubah
git log                 # Lihat history commit
git log --oneline       # Lihat history singkat
```

### Undo Changes
```bash
git restore file.txt    # Undo perubahan file
git reset HEAD~1        # Undo commit terakhir (keep changes)
git reset --hard HEAD~1 # Undo commit terakhir (delete changes)
```

### Branches
```bash
git branch              # Lihat semua branch
git branch feature-x    # Buat branch baru
git checkout feature-x  # Pindah ke branch
git merge feature-x     # Merge branch
```

### Remote
```bash
git remote -v           # Lihat remote repository
git remote remove origin # Hapus remote
git remote add origin URL # Tambah remote baru
```

---

## 🌐 Deploy Commands

### Vercel
```bash
npm i -g vercel         # Install Vercel CLI
vercel login            # Login
vercel                  # Deploy
vercel --prod           # Deploy to production
```

### Netlify
```bash
npm i -g netlify-cli    # Install Netlify CLI
netlify login           # Login
netlify deploy          # Deploy draft
netlify deploy --prod   # Deploy production
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 🔑 Setup SSH Key (Optional - Lebih Aman)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your_email@example.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub

# Paste ke GitHub: Settings → SSH Keys → Add SSH Key
```

Setelah setup SSH, gunakan SSH URL:
```bash
git remote add origin git@github.com:USERNAME/REPO_NAME.git
```

---

## 📋 Common Scenarios

### Scenario 1: Lupa Push Setelah Commit
```bash
git push
```

### Scenario 2: Pull Changes dari GitHub
```bash
git pull origin main
```

### Scenario 3: Clone Repository
```bash
git clone https://github.com/USERNAME/REPO_NAME.git
```

### Scenario 4: Remote Origin Already Exists
```bash
git remote remove origin
git remote add origin https://github.com/USERNAME/NEW_REPO.git
```

### Scenario 5: Merge Conflict
```bash
# Edit conflicted files manually
git add .
git commit -m "Resolve merge conflict"
git push
```

---

## 🎯 Best Practices

### Commit Messages
```bash
# ✅ Good
git commit -m "Add: responsive navigation for mobile"
git commit -m "Fix: image loading issue on Services page"
git commit -m "Update: improve animation performance"

# ❌ Bad
git commit -m "update"
git commit -m "fix bug"
git commit -m "changes"
```

### Commit Prefixes
- `Add:` - Fitur baru
- `Fix:` - Bug fix
- `Update:` - Update existing feature
- `Remove:` - Hapus feature
- `Refactor:` - Improve code structure
- `Style:` - CSS/styling changes
- `Docs:` - Documentation changes

---

## 🆘 Troubleshooting

### Error: Permission Denied
```bash
# Setup Personal Access Token
# GitHub → Settings → Developer Settings → Personal Access Tokens
# Use token sebagai password saat git push
```

### Error: Failed to Push
```bash
git pull origin main --rebase
git push
```

### Error: Large File (>100MB)
```bash
# Add to .gitignore
echo "large-file.zip" >> .gitignore
git rm --cached large-file.zip
git commit -m "Remove large file"
```

### Reset to Last Commit
```bash
git reset --hard HEAD
```

### Undo Last Push (DANGEROUS!)
```bash
git reset --hard HEAD~1
git push --force
```

---

## 📚 Learning Resources

- [GitHub Docs](https://docs.github.com)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Interactive Git Tutorial](https://learngitbranching.js.org/)

---

## 🎓 Git Workflow untuk Tim

```bash
# 1. Clone repository
git clone URL

# 2. Buat branch untuk feature
git checkout -b feature/new-feature

# 3. Develop & commit
git add .
git commit -m "Add: new feature"

# 4. Push branch
git push origin feature/new-feature

# 5. Create Pull Request di GitHub

# 6. After merge, update main
git checkout main
git pull origin main
```

---

## ⚡ Quick Commands

| Command | Description |
|---------|-------------|
| `git init` | Initialize repo |
| `git add .` | Stage all files |
| `git commit -m "msg"` | Commit changes |
| `git push` | Push to remote |
| `git pull` | Pull from remote |
| `git status` | Check status |
| `git log` | View history |
| `git branch` | List branches |
| `git checkout -b name` | Create branch |
| `git merge name` | Merge branch |

---

**💡 Pro Tip:** Commit often, commit small, push regularly!
