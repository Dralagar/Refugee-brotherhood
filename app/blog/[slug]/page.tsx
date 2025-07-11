'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styles from '../../styles/BlogPost.module.css';

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

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'defaultProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2025-01-29',
});

const BlogPostPage = () => {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const query = `*[_type == "post" && slug.current == $slug][0] {
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
        const post = await client.fetch(query, { slug });
        setPost(post);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderBody = (body: any[]) => {
    if (!body || !Array.isArray(body)) return null;
    
    return body.map((block, index) => {
      if (block._type === 'block') {
        return (
          <div key={index} className={styles.bodyBlock}>
            {block.children?.map((child: any, childIndex: number) => (
              <span key={childIndex}>{child.text}</span>
            ))}
          </div>
        );
      }
      return null;
    });
  };

  if (loading) {
    return (
      <div className={styles.blogPostContainer}>
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={styles.blogPostContainer}>
        <div className={styles.errorContainer}>
          <h1>Post Not Found</h1>
          <p>{error || 'The blog post you are looking for does not exist.'}</p>
          <Link href="/news" className={styles.backButton}>
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogPostContainer}>
      {/* Back Navigation */}
      <div className={styles.navigation}>
        <Link href="/news" className={styles.backLink}>
          ← Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <article className={styles.article}>
        <header className={styles.articleHeader}>
          <div className={styles.articleMeta}>
            <span className={styles.articleDate}>
              {formatDate(post.publishedAt)}
            </span>
            {post.categories && post.categories.length > 0 && (
              <span className={styles.articleCategory}>
                {post.categories[0].title}
              </span>
            )}
          </div>
          
          <h1 className={styles.articleTitle}>{post.title}</h1>
          
          {post.excerpt && (
            <p className={styles.articleExcerpt}>{post.excerpt}</p>
          )}
          
          {post.author?.name && (
            <div className={styles.articleAuthor}>
              <span>By {post.author.name}</span>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {post.mainImage?.asset?.url && (
          <div className={styles.featuredImageContainer}>
            <Image
              src={post.mainImage.asset.url}
              alt={post.title}
              width={800}
              height={400}
              className={styles.featuredImage}
            />
          </div>
        )}

        {/* Article Body */}
        <div className={styles.articleBody}>
          {renderBody(post.body)}
        </div>

        {/* Article Footer */}
        <footer className={styles.articleFooter}>
          <div className={styles.shareSection}>
            <h3>Share this story</h3>
            <div className={styles.shareButtons}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                Facebook
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </article>

      {/* Related Posts CTA */}
      <div className={styles.relatedSection}>
        <h2>More Stories</h2>
        <p>Discover more inspiring stories from our community.</p>
        <Link href="/news" className={styles.ctaButton}>
          View All Posts
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage; 