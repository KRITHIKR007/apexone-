# ApexOne Studios Website

The AI Operating System for Business Growth - Official Website

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
apex-one-studio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog section
│   ├── contact/           # Contact form
│   ├── legal/             # Legal pages
│   ├── products/          # Product pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── loading.tsx        # Global loading state
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── Navigation.tsx     # Smart navigation
│   ├── Footer.tsx         # Footer with animations
│   └── [18 more components]
├── hooks/                 # Custom React hooks
├── public/               # Static assets
└── Configuration files
```

## ✨ Features

### **Performance**
- ✅ Next.js 16 with Turbopack
- ✅ Automatic image optimization
- ✅ Static page generation
- ✅ React Compiler enabled

### **User Experience**
- ✅ Responsive mobile menu
- ✅ Smooth scroll animations
- ✅ Loading states
- ✅ Error boundaries
- ✅ Animated wave footer

### **SEO**
- ✅ Comprehensive metadata
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured data (Schema.org)
- ✅ Sitemap & Robots.txt

### **Accessibility**
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Semantic HTML

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Web3Forms API Key (optional - has fallback)
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_api_key_here
```

## 🎨 Tech Stack

- **Framework**: Next.js 16.1.1
- **React**: 19.2.3
- **TypeScript**: v5
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Analytics**: Vercel Analytics

## 📱 Pages

- `/` - Homepage
- `/about` - Team & Company Info
- `/blog` - Insights & Articles
- `/contact` - Contact Form
- `/careers` - Career Opportunities
- `/products/golden-goose` - Business Intelligence AI
- `/products/ciip` - Central Intelligence Platform
- `/products/growth-os` - Growth Operating System
- `/products/enterprise-os` - Enterprise Operating System
- `/products/acn` - Apex Creators Network
- `/legal/privacy` - Privacy Policy
- `/legal/terms` - Terms of Service
- `/legal/security` - Security Information

## 🚀 Deployment

### **Vercel (Recommended)**

```bash
vercel --prod
```

The site is optimized for Vercel deployment with:
- Automatic builds on push
- Preview deployments for PRs
- Edge network distribution
- Analytics integration

## 🔍 Key Components

### **Navigation**
- Auto-hide on scroll down
- Show on scroll up
- Active section tracking
- Responsive mobile menu

### **Error Boundary**
- Catches React errors
- User-friendly error UI
- Refresh & home options

### **Image Optimization**
- Next.js Image component
- Automatic WebP conversion
- Lazy loading
- Responsive images

## 📊 Build Output

```
Route (app)
┌ ○ /                          (Homepage)
├ ○ /about                     (About)
├ ○ /blog                      (Blog)
├ ƒ /blog/[slug]              (Dynamic blog posts)
├ ○ /contact                   (Contact)
├ ○ /legal/privacy            (Privacy)
├ ○ /legal/security           (Security)
├ ○ /legal/terms              (Terms)
├ ○ /products/acn             (ACN)
├ ○ /products/ciip            (CIIP)
├ ○ /products/enterprise-os   (Enterprise OS)
├ ○ /products/golden-goose    (Golden Goose)
└ ○ /products/growth-os       (Growth OS)

○ (Static)  - Prerendered as static content
ƒ (Dynamic) - Server-rendered on demand
```

## 🎯 Performance

- **Build Time**: ~8-9 seconds
- **Static Pages**: 16
- **Dynamic Routes**: 1
- **Image Optimization**: Enabled
- **Code Splitting**: Automatic

## 📝 Recent Updates

See [FIXES_SUMMARY.md](./FIXES_SUMMARY.md) for detailed changelog of recent improvements.

### **Latest Improvements**:
- ✅ Mobile menu implementation
- ✅ Image optimization (Next.js Image)
- ✅ Error boundary added
- ✅ Loading states
- ✅ Section ID navigation
- ✅ Code cleanup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2026 ApexOne Studios. All rights reserved.

## 📞 Contact

- **Email**: apexonestudio@gmail.com
- **Phone**: +91-9902079990
- **Website**: [apexonestudio.com](https://apexonestudio.com)
- **LinkedIn**: [apex-one-studio](https://www.linkedin.com/company/apex-one-studio)

---

**Built with ❤️ by ApexOne Studios**
