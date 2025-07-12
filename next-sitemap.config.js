/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.refugeebrotherhood.org',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin/*', '/api/*', '/_next/*', '/private/*'],
  
  // Robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/api/',
          '/_next/',
          '/private/',
          '/temp/',
          '/draft/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
    ],
    additionalSitemaps: [
      'https://www.refugeebrotherhood.org/sitemap.xml',
      'https://www.refugeebrotherhood.org/sitemap-programs.xml',
      'https://www.refugeebrotherhood.org/sitemap-news.xml',
    ],
    host: 'https://www.refugeebrotherhood.org',
  },

  // Transform function for custom priority and changefreq
  transform: async (config, path) => {
    // Homepage - highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: 'https://www.refugeebrotherhood.org',
            hreflang: 'en',
          },
          {
            href: 'https://www.refugeebrotherhood.org',
            hreflang: 'x-default',
          },
        ],
      }
    }
    
    // Programs pages - high priority
    if (path.startsWith('/programs/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: `https://www.refugeebrotherhood.org${path}`,
            hreflang: 'en',
          },
        ],
      }
    }

    // Main program categories
    if (path === '/programs/livelihood') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: new Date().toISOString(),
      }
    }

    if (path === '/programs/psychosocial') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: new Date().toISOString(),
      }
    }

    if (path === '/programs/peace') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: new Date().toISOString(),
      }
    }

    if (path === '/programs/advocacy') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.95,
        lastmod: new Date().toISOString(),
      }
    }
    
    // About and Contact pages - medium-high priority
    if (path === '/about' || path === '/contact') {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    // News/Blog pages - medium priority
    if (path.startsWith('/news/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }

    // Default configuration
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  // Additional sitemaps
  additionalPaths: async (config) => {
    const result = []
    
    // Add dynamic program pages
    const programs = [
      { path: '/programs/livelihood', priority: 0.95 },
      { path: '/programs/psychosocial', priority: 0.95 },
      { path: '/programs/peace', priority: 0.95 },
      { path: '/programs/advocacy', priority: 0.95 },
    ]

    programs.forEach((program) => {
      result.push({
        loc: program.path,
        changefreq: 'weekly',
        priority: program.priority,
        lastmod: new Date().toISOString(),
      })
    })

    return result
  },

  // Sitemap generation options
  generateIndexSitemap: true,
  autoLastmod: true,
  
  // Custom sitemap names
  sitemapBaseFileName: 'sitemap',
  
  // Output directory
  outDir: 'public',
  
  // Source directory
  sourceDir: 'app',
  
  // Transform async
  transformAsync: async (config, path) => {
    // This can be used for async transformations if needed
    return config.transform(config, path)
  },
};
