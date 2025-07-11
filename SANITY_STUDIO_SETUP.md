# 🎨 Sanity Studio Setup - Separate Application

## 🚀 Overview
Sanity Studio is now set up as a **separate standalone application** that runs independently from your main website.

## 📋 Quick Start

### 1. Navigate to Sanity Directory
```bash
cd sanity
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Environment Variables
Create a `.env` file in the `sanity` directory:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
```

### 4. Start Sanity Studio
```bash
npm run dev
```

### 5. Access Studio
Open your browser to: `http://localhost:3333`

## 🔗 URLs

- **Main Website**: `http://localhost:3000` (your Next.js app)
- **Sanity Studio**: `http://localhost:3333` (separate CMS)
- **Blog**: `http://localhost:3000/news` (shows content from Sanity)

## 📝 How It Works

1. **Sanity Studio** runs on port 3333 (separate from your website)
2. **Your website** runs on port 3000 and fetches content from Sanity
3. **Blog posts** created in Sanity Studio automatically appear on your website

## 🎯 Creating Content

1. Go to `http://localhost:3333`
2. Click "Create new" → "Post"
3. Fill in your content
4. Publish
5. View on your website at `http://localhost:3000/news`

## 🚀 Production Deployment

### Deploy Sanity Studio
```bash
cd sanity
npm run deploy
```

### Deploy Website
Deploy your main website to Vercel/Netlify as usual.

## 📞 Benefits of Separate Setup

- ✅ **Independent**: Studio doesn't interfere with website development
- ✅ **Faster**: No need to restart website when making CMS changes
- ✅ **Flexible**: Can deploy studio separately
- ✅ **Professional**: Dedicated CMS interface

## 🔧 Troubleshooting

If you get errors:
1. Make sure you're in the `sanity` directory
2. Check that environment variables are set
3. Verify your project ID is correct
4. Ensure all dependencies are installed

## 📚 Next Steps

1. Set up your environment variables
2. Start both applications:
   - `npm run dev` (in main directory for website)
   - `npm run dev` (in sanity directory for CMS)
3. Create your first blog post! 