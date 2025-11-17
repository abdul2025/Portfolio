# 🎨 Abdulwahab Alshehri - Portfolio

A modern, responsive Angular portfolio showcasing my professional experience, skills, and projects as a Senior Software Engineer.

🌐 **Live Site**: [https://abdul2025.github.io/Portfolio/](https://abdul2025.github.io/Portfolio/)

---

## 📋 About

Professional portfolio website built with Angular 19, featuring:

- ✨ Modern gradient design with smooth animations
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Clean, professional UI/UX
- ⚡ Optimized performance
- 🔧 40+ custom SVG icons

---

## 🚀 Features

### Hero Section
- Professional introduction
- Social media links (GitHub, LinkedIn, Email, Phone)
- Eye-catching gradient background

### Experience Timeline
- 5+ years of professional experience
- 4 positions at leading companies
- Detailed achievements and impact metrics
- Interactive timeline design

### Skills & Expertise
- 40+ technical skills with custom icons
- Categorized by domain:
  - Programming & Frameworks
  - Architecture & Design
  - Cloud, DevOps & Data
  - Business & Leadership
- Certifications and awards

### Education & Projects
- Academic background
- Freelance projects portfolio
- Professional timeline

### Contact Section
- Direct contact information
- Social media integration
- Professional contact cards

---

## 🛠️ Built With

- **Angular 19** - Frontend framework
- **TypeScript** - Programming language
- **CSS3** - Modern styling with animations
- **SVG** - Custom icons
- **GitHub Pages** - Hosting

---

## 💻 Local Development

### Prerequisites
- Node.js v20.19 or higher
- npm v9 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/abdul2025/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 🏗️ Build & Deploy

### Build for Production

```bash
# Build with correct base href
npm run build -- --base-href "https://abdul2025.github.io/Portfolio/"
```

### Deploy to GitHub Pages

```bash
# Deploy to GitHub Pages
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

---

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── hero/          # Landing section
│   │   │   ├── experience/    # Work history
│   │   │   ├── skills/        # Skills & certifications
│   │   │   ├── education/     # Education & projects
│   │   │   └── contact/       # Contact information
│   │   ├── app.ts            # Main component
│   │   └── app.routes.ts     # Routing config
│   ├── styles.css            # Global styles
│   └── index.html            # Entry point
├── angular.json              # Angular configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 🎨 Customization

### Update Personal Information

Edit the component TypeScript files:

```typescript
// src/app/components/hero/hero.ts
name = 'YOUR NAME';
title = 'YOUR TITLE';
// ... more fields
```

### Modify Colors

Edit CSS variables in `src/styles.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
}
```

### Add Skills

Edit `src/app/components/skills/skills.ts` to add/remove skills.

---

## 📊 Performance

- **Bundle Size**: 280 KB (optimized)
- **Initial Load**: < 100 KB transferred
- **Performance Score**: 95+
- **Accessibility**: WCAG compliant
- **SEO**: Optimized meta tags

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: < 768px
- **Desktop**: > 768px

---

## 📄 License

This project is open source and available for personal use.

---

## 👤 Contact

**Abdulwahab Alshehri**
- 📧 Email: contact@abdulwahab.dev
- 📱 Phone: +966568615094
- 💼 LinkedIn: [abdulwahabalshehri](https://linkedin.com/in/abdulwahabalshehri)
- 🐱 GitHub: [@abdul2025](https://github.com/abdul2025)
- 🌐 Portfolio: [abdul2025.github.io/Portfolio](https://abdul2025.github.io/Portfolio/)

---

## 🙏 Acknowledgments

- Angular Team for the amazing framework
- Feather Icons for SVG inspiration
- GitHub Pages for free hosting

---

## 📈 Version History

- **v1.0.0** (2024-11-17)
  - Initial release
  - Modern skills section with icons
  - Responsive design
  - Full portfolio content

---

**⭐ Star this repo if you like it!**

Built with ❤️ using Angular
