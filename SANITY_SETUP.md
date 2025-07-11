# Sanity CMS Setup Guide for Refugee Brotherhood Blog

## 🚀 Overview

This guide will help you set up and manage the Sanity CMS for the Refugee Brotherhood blog. The blog is fully integrated with Sanity CMS, allowing you to create, edit, and publish blog posts through a user-friendly interface.

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Sanity account (free at [sanity.io](https://sanity.io))

## 🔧 Initial Setup

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
```

### 2. Get Your Sanity Project ID

1. Go to [sanity.io](https://sanity.io) and create an account
2. Create a new project called "Refugee Brotherhood Blog"
3. Copy the Project ID from your project settings
4. Replace `your_project_id_here` in the `.env.local` file

### 3. Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### 4. Initialize Sanity Studio

```bash
# Navigate to the sanity directory
cd sanity

# Install dependencies
npm install

# Start the Sanity Studio
npm run dev
```

## 📝 Content Types Setup

### Blog Post Schema

The blog uses the following content structure:

```javascript
// schemas/post.js
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
```

### Author Schema

```javascript
// schemas/author.js
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
```

### Category Schema

```javascript
// schemas/category.js
export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
}
```

## 🎯 How to Create Blog Posts

### 1. Access Sanity Studio

1. Run `npm run dev` in the sanity directory
2. Open your browser to `http://localhost:3333`
3. Log in with your Sanity account

### 2. Create a New Post

1. Click "Create new" → "Blog Post"
2. Fill in the required fields:
   - **Title**: The main title of your blog post
   - **Slug**: Auto-generated from title (URL-friendly version)
   - **Author**: Select or create an author
   - **Main Image**: Upload a featured image (recommended: 800x400px)
   - **Categories**: Select relevant categories
   - **Published At**: Set the publication date
   - **Excerpt**: A brief summary (appears in blog listing)
   - **Body**: The main content of your post

### 3. Publishing

- **Draft**: Save as draft to work on later
- **Publish**: Click "Publish" to make it live on the website

## 🔗 Blog URLs

- **Blog Listing**: `https://yourdomain.com/news`
- **Individual Post**: `https://yourdomain.com/blog/[slug]`

## 🎨 Content Guidelines

### Image Requirements
- **Featured Image**: 800x400px (16:9 ratio)
- **Format**: JPG, PNG, or WebP
- **File Size**: Under 2MB for optimal performance

### Writing Guidelines
- **Title**: Keep under 60 characters for SEO
- **Excerpt**: 150-200 characters
- **Content**: Use clear headings and paragraphs
- **Categories**: Use relevant categories for organization

### Recommended Categories
- Community Stories
- Program Updates
- Success Stories
- Events
- Advocacy
- Peace Building
- Livelihood Programs
- Psychosocial Support

## 🔧 Technical Integration

### Frontend Integration

The blog is integrated using the Sanity client:

```javascript
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2025-01-29',
});
```

### API Queries

The blog uses GROQ queries to fetch content:

```javascript
// Fetch all posts
const query = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  mainImage{asset->{url}},
  body,
  author->{name},
  publishedAt,
  excerpt,
  categories[]->{title}
}`;

// Fetch single post
const query = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage{asset->{url}},
  body,
  author->{name},
  publishedAt,
  excerpt,
  categories[]->{title}
}`;
```

## 🚀 Deployment

### Environment Variables for Production

Make sure to set these environment variables in your hosting platform (Vercel, Netlify, etc.):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-29
```

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 📱 Mobile Management

You can also manage content using the Sanity mobile app:
1. Download "Sanity Studio" from App Store/Google Play
2. Log in with your Sanity account
3. Select your Refugee Brotherhood project
4. Create and edit posts on the go

## 🔒 Security & Permissions

### CORS Settings

Configure CORS in your Sanity project settings:

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to API → CORS Origins
4. Add your domain: `https://yourdomain.com`

### API Tokens

For production, consider creating a read-only API token:

1. Go to API → Tokens
2. Create a new token with "Viewer" permissions
3. Use this token in your frontend for better security

## 📞 Support

### Common Issues

1. **Images not loading**: Check CORS settings
2. **Posts not appearing**: Verify dataset is set to "production"
3. **Build errors**: Ensure all environment variables are set

### Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio Guide](https://www.sanity.io/docs/studio)

## 🎉 Handover Checklist

Before handing over to the client:

- [ ] Sanity project created and configured
- [ ] Environment variables set up
- [ ] Sample blog posts created
- [ ] CORS settings configured
- [ ] Mobile app access provided
- [ ] Content guidelines shared
- [ ] Admin credentials provided
- [ ] Backup strategy discussed

## 📋 Maintenance

### Regular Tasks

1. **Weekly**: Review and approve draft posts
2. **Monthly**: Update categories and authors as needed
3. **Quarterly**: Review and optimize images
4. **Annually**: Update content guidelines

### Backup Strategy

- Sanity automatically backs up all content
- Consider exporting content quarterly
- Keep local backups of important assets

---

**Need Help?** Contact the development team or refer to the Sanity documentation for additional support. 