'use client';

import React, { useEffect, useState } from 'react';
import { createClient } from '@sanity/client';
import Image from 'next/image';

// Define the type for an article
type Article = {
  title: string;
  slug: { current: string };
  mainImage: { asset: { url: string } };
  body: { children: { text: string }[] }[];
  author: { name: string };
  publishedAt: string;
};

// Sanity client setup
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'defaultProjectId',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'defaultDataset',
  useCdn: true,
  apiVersion: '2023-10-01',
});

const NewsComponent = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const query = `*[_type == "post"]{
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
        publishedAt
      }`;
      const articles = await client.fetch(query);
      setArticles(articles);
    };

    fetchArticles();
  }, []);

  return (
    <div className="news-container">
      {articles.map((article) => (
        <div key={article.slug.current} className="news-item">
          <Image
            src={article.mainImage.asset.url}
            alt={article.title}
            width={300}
            height={200}
            className="news-image"
          />
          <h2 className="news-title">{article.title}</h2>
          <p className="news-author">By {article.author.name}</p>
          <p className="news-date">{new Date(article.publishedAt).toLocaleDateString()}</p>
          <p className="news-body">{article.body[0].children[0].text}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
