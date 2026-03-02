# 🌟 Carent Indonesia Website

<div align="center">
  <img src="https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite" alt="Vite">
</div>

<br>

<div align="center">
  <h3>Youth Development Through Comprehensive Soft Skills Empowerment</h3>
  <p>A fully responsive, modern website for Carent Indonesia Foundation</p>
</div>

---

## 🎯 About Carent Indonesia

Carent Indonesia is a youth-focused foundation established to prepare young people to thrive in a rapidly changing, highly competitive, and increasingly cross-disciplinary world of work.

### Our Focus
- 🎓 **Youth Development** through comprehensive soft skills empowerment
- 💼 **Career Readiness** and professional adaptability
- 🤝 **Leadership & Collaboration** building
- 💡 **Critical Thinking & Creativity** enhancement
- 🌐 **Strategic Partnerships** with government, BUMN, and industry

---

## ✨ Features

### 📱 Fully Responsive Design
- ✅ Mobile-first approach (320px - 768px)
- ✅ Tablet optimized (768px - 1024px)
- ✅ Desktop enhanced (1024px+)
- ✅ No horizontal scrolling on any device
- ✅ Touch-optimized interactions

### 🎨 Modern UI/UX
- ✅ Smooth page transitions
- ✅ Animated entrance effects
- ✅ Interactive hover states
- ✅ Fluid typography with clamp()
- ✅ Accessible design patterns

### 🚀 Performance
- ✅ Fast loading times
- ✅ Optimized images
- ✅ Lazy loading ready
- ✅ SEO friendly structure
- ✅ Clean, maintainable code

### 🗂️ Multiple Pages
- 🏠 **Home** - Hero section with brand identity
- 👤 **Profile** - About, Vision, Mission
- 📋 **Program** - Educational programs and initiatives
- 🤝 **Partnership** - Collaboration opportunities
- 🎯 **Services** - Target beneficiaries and flagship programs

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling |
| **React Router** | Navigation |
| **Vite** | Build tool |
| **Lucide React** | Icons |
| **Motion** | Animations |

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/carent-indonesia-website.git
cd carent-indonesia-website

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:5173
```

### Build for Production

```bash
# Build project
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
carent-indonesia-website/
├── imports/                  # Figma imported components
│   ├── Cover.tsx            # Home page component
│   ├── Iphone.tsx           # Mobile version
│   └── svg-*.ts             # SVG path data
├── components/              # Reusable components
│   ├── Navigation.tsx       # Navigation bar
│   ├── ProfileSections.tsx  # Profile page sections
│   ├── ProgramPage.tsx      # Program page
│   └── ServicesPage.tsx     # Services page
├── pages/                   # Page components
│   ├── Home.tsx
│   ├── Profile.tsx
│   ├── Program.tsx
│   ├── Partnership.tsx
│   └── Services.tsx
├── styles/                  # Global styles
│   └── globals.css
├── utils/                   # Utility functions
├── App.tsx                  # Root component
├── routes.ts                # Route configuration
└── package.json             # Dependencies
```

---

## 🎨 Design System

### Colors
- **Primary Blue**: `#1E08B1`
- **White**: `#FFFFFF`
- **Text**: Dynamic based on background

### Typography
- **Primary Font**: Work Sans
- **Secondary Font**: Montserrat
- **Signature Font**: Photograph Signature

### Responsive Breakpoints
```css
/* Mobile */
< 768px: Single column, hamburger menu

/* Tablet */
768px - 1024px: Two columns, expanded nav

/* Desktop */
> 1024px: Full layouts, all features
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

---

## 📱 Screenshots

### Desktop View
![Desktop](https://via.placeholder.com/1200x600/1E08B1/FFFFFF?text=Desktop+View)

### Mobile View
![Mobile](https://via.placeholder.com/400x800/1E08B1/FFFFFF?text=Mobile+View)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

© 2026 Carent Indonesia. All rights reserved.

This project is created for Carent Indonesia Foundation.

---

## 📞 Contact

### Carent Indonesia
- 🌐 Website: [Coming Soon]
- 📧 Email: carentfoundation@gmail.com
- 📱 Instagram: [@carenfound.indonesia](https://www.instagram.com/carenfound.indonesia/)
- 💼 LinkedIn: [Carent Indonesia](https://www.linkedin.com/company/carent-indonesia/)
- 📞 WhatsApp: [+62 887-0641-5817](https://wa.me/+6288706415817/)

---

## 🙏 Acknowledgments

- Design inspiration from Figma
- Icons from Lucide React
- Animations powered by Motion
- Built with ❤️ by the Carent Indonesia team

---

<div align="center">
  <h3>⭐ Star this repository if you find it helpful!</h3>
  <p>Made with 💙 for Indonesian Youth Development</p>
</div>
