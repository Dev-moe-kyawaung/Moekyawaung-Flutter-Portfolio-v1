# 🐦 Moe Kyaw Aung — Flutter Portfolio PWA
### Senior Android Developer | Tachileik, Myanmar 🇲🇲

---

## 🚀 GitHub Pages Deployment Guide

### Step 1 — Create Repository
```bash
# Option A: New repo named exactly:
your-username.github.io

# Option B: Any repo name (deploys to /repo-name/)
moe-portfolio
```

### Step 2 — Upload Files
Upload these 3 files to your repository root:
```
index.html      ← Main portfolio page
manifest.json   ← PWA manifest
sw.js           ← Service Worker (offline support)
```

**Optional but recommended:**
```
icon-192.png    ← App icon 192×192px (Flutter logo style)
icon-512.png    ← App icon 512×512px
```

### Step 3 — Enable GitHub Pages
1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **master** → **/ (root)**
4. Click **Save**
5. Wait ~60 seconds → visit `https://your-username.github.io`

---

## 📱 PWA Install — How It Works

### On Chrome (Android/Desktop):
- Visit your GitHub Pages URL
- Browser shows **"Add to Home Screen"** banner automatically
- OR: address bar → ⋮ menu → **Install App**

### On Safari (iOS):
1. Open in Safari
2. Tap **Share** button (box with arrow)
3. Tap **Add to Home Screen**
4. Tap **Add**

### The portfolio handles install automatically:
- `beforeinstallprompt` event captured
- Install banner shown after 3 seconds
- Install button triggers native prompt
- Works fully offline after first visit

---

## 📁 File Structure

```
your-username.github.io/
├── index.html          # Complete single-file portfolio
├── manifest.json       # PWA manifest (icons, name, colors)
├── sw.js               # Service Worker (offline caching)
├── icon-192.png        # PWA icon (create with any tool)
└── icon-512.png        # PWA icon large
```

---

## 🎨 Features

| Feature | Status |
|---------|--------|
| Flutter-themed UI | ✅ |
| Dark/Light mode toggle | ✅ |
| Custom cursor | ✅ |
| Particle canvas animation | ✅ |
| Typing animation | ✅ |
| Animated counter stats | ✅ |
| Skill progress bars | ✅ |
| Scroll reveal animations | ✅ |
| Timeline experience | ✅ |
| PWA install banner | ✅ |
| Service Worker / Offline | ✅ |
| Mobile hamburger menu | ✅ |
| Back to top button | ✅ |
| Sticky hire me CTA | ✅ |
| Contact form → mailto | ✅ |
| 43 GitHub accounts section | ✅ |
| 82+ Certificates grid | ✅ |
| Responsive (mobile-first) | ✅ |

---

## 🔧 Customization

### Update your info in `index.html`:
- **Name**: Search `Moe Kyaw Aung` → replace
- **Email**: Search `moekyawaung@gmail.com` → replace
- **Photo**: Update Cloudinary URL in `about-photo img src`
- **GitHub accounts**: Update links in GitHub section
- **Projects**: Update project cards with real URLs
- **Social links**: Update href attributes

### Create PWA Icons:
1. Go to https://realfavicongenerator.net
2. Upload a 512×512 Flutter logo PNG
3. Download icons → rename to `icon-192.png` and `icon-512.png`
4. Upload alongside index.html

---

## 🌐 Custom Domain (Optional)

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Add `CNAME` file to repo root:
   ```
   moekyawaung.dev
   ```
3. Point DNS: `CNAME www → your-username.github.io`
4. Enable HTTPS in GitHub Pages settings

---

Built with 🐦 Flutter Spirit · © 2026 Moe Kyaw Aung

