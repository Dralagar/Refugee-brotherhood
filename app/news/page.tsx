'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Blog.module.css';

// Define the type for a blog post
type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  body: { children: { text: string }[] }[];
  author: { name: string };
  publishedAt: string;
  excerpt?: string;
  categories?: { title: string }[];
};

// Sanity client setup using the existing configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'defaultProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2025-01-29',
});

const BlogComponent = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log('Fetching posts from Sanity...');
        console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
        
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          author->{name},
          publishedAt,
          excerpt,
          categories[]->{title}
        }`;
        
        const posts = await client.fetch(query);
        console.log('Fetched posts:', posts);
        setPosts(posts);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError(`Failed to load blog posts: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const getExcerpt = (post: BlogPost) => {
    if (post.excerpt) return post.excerpt;
    if (post.body && post.body[0] && post.body[0].children && post.body[0].children[0]) {
      return truncateText(post.body[0].children[0].text);
    }
    return 'Read more about this story...';
  };

  if (loading) {
    return (
      <div className={styles.blogContainer}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Our Blog</h1>
          <p className={styles.heroSubtitle}>
            Our Story, Voicing Our Impact: Refugee Brotherhood
          </p>
        </div>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading our stories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.blogContainer}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Our Blog</h1>
          <p className={styles.heroSubtitle}>
            Our Story, Voicing Our Impact: Refugee Brotherhood
          </p>
        </div>
        <div className={styles.errorContainer}>
          <p>{error}</p>
          <p style={{ fontSize: '0.9rem', marginTop: '1rem', opacity: 0.7 }}>
            Make sure your Sanity project ID is set in the environment variables.
          </p>
          <button onClick={() => window.location.reload()} className={styles.retryButton}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogContainer}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Our Blog</h1>
          <p className={styles.heroSubtitle}>
            Our Story, Voicing Our Impact: Refugee Brotherhood
          </p>
          <p className={styles.heroDescription}>
            Discover the transformative journeys, community triumphs, and powerful voices that shape our mission. 
            From individual success stories to collective impact, our blog shares the real stories behind our work 
            in empowering refugees and building stronger communities.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className={styles.blogContent}>
        {posts.length === 0 ? (
          <div className={styles.emptyState}>
            <h2>Welcome to Our Blog!</h2>
            <p>We're excited to share our stories with you. Our first blog posts will appear here soon.</p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '1rem' }}>
                To create your first blog post:
              </p>
              <ol style={{ textAlign: 'left', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
                <li>Go to <code style={{ background: '#f0f0f0', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>/studio</code></li>
                <li>Click "Create new" → "Post"</li>
                <li>Fill in your content and publish</li>
                <li>Your post will appear here automatically!</li>
              </ol>
            </div>
            <Link href="/studio" className={styles.ctaButton} style={{ marginTop: '2rem' }}>
              Open Sanity Studio
            </Link>
          </div>
        ) : (
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <article key={post._id} className={styles.postCard}>
                <div className={styles.postImageContainer}>
                  {post.mainImage?.asset?.url ? (
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      width={400}
                      height={250}
                      className={styles.postImage}
                    />
                  ) : (
                    <div className={styles.placeholderImage}>
                      <span>📝</span>
                    </div>
                  )}
                </div>
                
                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      {formatDate(post.publishedAt)}
                    </span>
                    {post.categories && post.categories.length > 0 && (
                      <span className={styles.postCategory}>
                        {post.categories[0].title}
                      </span>
                    )}
                  </div>
                  
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  
                  {post.author?.name && (
                    <p className={styles.postAuthor}>By {post.author.name}</p>
                  )}
                  
                  <p className={styles.postExcerpt}>
                    {getExcerpt(post)}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className={styles.readMoreButton}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2>Share Your Story</h2>
        <p>Have a story to tell? We'd love to hear from our community members.</p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default BlogComponent;
