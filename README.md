# Refugee Brotherhood - Refugee Led Organisation

A modern, responsive website for Refugee Brotherhood, a refugee-led organisation empowering communities in Nairobi, Embakasi, Patanisho, and Kayole through sustainable programs.

## 🚀 Features

- **Modern Design**: Professional, mobile-first responsive design
- **Sanity CMS**: Separate standalone content management system
- **Blog System**: Dynamic blog with Sanity Studio integration
- **SEO Optimized**: Complete meta tags, structured data, and search optimization
- **Performance**: Optimized with Next.js 14 and modern web standards

## 📋 Pages & Sections

- **Home**: Hero section, programs overview, impact statistics
- **About**: Mission, team, impact, partners, success stories
- **Programs**: Livelihood, Psychosocial Support, Peace Building, Advocacy
- **Blog**: News and stories (powered by Sanity CMS)
- **Partners**: Partner organizations showcase
- **Contact**: Contact information and form
- **Alumni**: Success stories and alumni network

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **CMS**: Sanity Studio (separate standalone application)
- **Styling**: CSS Modules + Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account (free at [sanity.io](https://sanity.io))

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd refugee-brotherhood
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Website: [http://localhost:3000](http://localhost:3000)

## 📝 Content Management (Sanity Studio)

### Setup Sanity Studio (Separate Application)

1. **Navigate to Sanity directory**
   ```bash
   cd sanity
   ```

2. **Install Sanity dependencies**
   ```bash
   npm install
   ```

3. **Set environment variables**
   Create a `.env` file in the `sanity` directory:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
   ```

4. **Start Sanity Studio**
```bash
npm run dev
   ```

5. **Access Studio**
   - Sanity Studio: [http://localhost:3333](http://localhost:3333)

### Blog Management
- **Blog Listing**: `/news` - Shows all published blog posts
- **Individual Posts**: `/blog/[slug]` - Full blog post pages
- **Studio Access**: `http://localhost:3333` - Separate content management interface

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#3674B5`
- **Secondary Blue**: `#578FCA`
- **Light Blue**: `#A1E3F9`
- **Mint Green**: `#D1F8EF`

### Typography
- **Primary**: Poppins (body text)
- **Secondary**: Montserrat (headings)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production
Make sure to set these in your hosting platform:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
```

### Deploy Sanity Studio
```bash
cd sanity
npm run deploy
```

## 📚 Documentation

- **Sanity Studio Setup**: See `SANITY_STUDIO_SETUP.md` for detailed CMS setup
- **Sanity Setup**: See `SANITY_SETUP.md` for detailed CMS configuration
- **Content Guidelines**: Follow the guidelines in the Sanity setup guide
- **SEO**: All pages are optimized for search engines

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For technical support or questions about the Refugee Brotherhood website, please refer to the documentation or contact the development team.

---

**Built with ❤️ for Refugee Brotherhood**
