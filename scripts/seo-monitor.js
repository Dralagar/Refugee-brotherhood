#!/usr/bin/env node

/**
 * SEO Monitoring Script for Refugee Brotherhood
 * This script checks various SEO metrics and generates reports
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.refugeebrotherhood.org';
const PAGES_TO_CHECK = [
  '/',
  '/programs',
  '/programs/livelihood',
  '/programs/psychosocial',
  '/programs/peace',
  '/programs/advocacy',
  '/about',
  '/contact'
];

class SEOMonitor {
  constructor() {
    this.results = [];
    this.startTime = Date.now();
  }

  async checkPage(url) {
    return new Promise((resolve, reject) => {
      const fullUrl = `${SITE_URL}${url}`;
      
      https.get(fullUrl, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          const seoScore = this.analyzeSEO(data, url);
          resolve({
            url: fullUrl,
            statusCode: res.statusCode,
            seoScore,
            responseTime: Date.now() - this.startTime,
            headers: res.headers
          });
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  }

  analyzeSEO(html, url) {
    const score = {
      total: 0,
      maxScore: 100,
      checks: []
    };

    // Check for title tag
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      const title = titleMatch[1].trim();
      if (title.length > 10 && title.length < 60) {
        score.total += 10;
        score.checks.push({ name: 'Title Tag', status: '✅', score: 10 });
      } else {
        score.checks.push({ name: 'Title Tag', status: '⚠️', score: 0, note: 'Title should be 10-60 characters' });
      }
    } else {
      score.checks.push({ name: 'Title Tag', status: '❌', score: 0 });
    }

    // Check for meta description
    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
    if (descMatch) {
      const desc = descMatch[1].trim();
      if (desc.length > 50 && desc.length < 160) {
        score.total += 10;
        score.checks.push({ name: 'Meta Description', status: '✅', score: 10 });
      } else {
        score.checks.push({ name: 'Meta Description', status: '⚠️', score: 0, note: 'Description should be 50-160 characters' });
      }
    } else {
      score.checks.push({ name: 'Meta Description', status: '❌', score: 0 });
    }

    // Check for Open Graph tags
    const ogTags = ['og:title', 'og:description', 'og:image', 'og:url'];
    let ogScore = 0;
    ogTags.forEach(tag => {
      const regex = new RegExp(`<meta[^>]*property=["']${tag}["'][^>]*content=["']([^"']+)["']`, 'i');
      if (regex.test(html)) {
        ogScore += 2.5;
      }
    });
    score.total += ogScore;
    score.checks.push({ name: 'Open Graph Tags', status: ogScore === 10 ? '✅' : '⚠️', score: ogScore });

    // Check for structured data
    const structuredData = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis);
    if (structuredData && structuredData.length > 0) {
      score.total += 10;
      score.checks.push({ name: 'Structured Data', status: '✅', score: 10 });
    } else {
      score.checks.push({ name: 'Structured Data', status: '❌', score: 0 });
    }

    // Check for H1 tags
    const h1Tags = html.match(/<h1[^>]*>([^<]+)<\/h1>/gi);
    if (h1Tags && h1Tags.length === 1) {
      score.total += 10;
      score.checks.push({ name: 'H1 Tag', status: '✅', score: 10 });
    } else {
      score.checks.push({ name: 'H1 Tag', status: '⚠️', score: 0, note: 'Should have exactly one H1 tag' });
    }

    // Check for images with alt text
    const images = html.match(/<img[^>]*>/gi);
    if (images) {
      let imagesWithAlt = 0;
      images.forEach(img => {
        if (img.match(/alt=["'][^"']+["']/i)) {
          imagesWithAlt++;
        }
      });
      const altScore = Math.min(10, (imagesWithAlt / images.length) * 10);
      score.total += altScore;
      score.checks.push({ name: 'Image Alt Text', status: altScore === 10 ? '✅' : '⚠️', score: altScore });
    }

    // Check for internal links
    const internalLinks = html.match(/href=["']\/[^"']+["']/gi);
    if (internalLinks && internalLinks.length >= 3) {
      score.total += 10;
      score.checks.push({ name: 'Internal Links', status: '✅', score: 10 });
    } else {
      score.checks.push({ name: 'Internal Links', status: '⚠️', score: 0, note: 'Should have at least 3 internal links' });
    }

    // Check for mobile responsiveness
    const viewport = html.match(/<meta[^>]*name=["']viewport["'][^>]*>/i);
    if (viewport) {
      score.total += 10;
      score.checks.push({ name: 'Mobile Responsive', status: '✅', score: 10 });
    } else {
      score.checks.push({ name: 'Mobile Responsive', status: '❌', score: 0 });
    }

    // Check for canonical URL
    const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    if (canonical) {
      score.total += 10;
      score.checks.push({ name: 'Canonical URL', status: '✅', score: 10 });
    } else {
      score.checks.push({ name: 'Canonical URL', status: '❌', score: 0 });
    }

    // Check for robots meta tag
    const robots = html.match(/<meta[^>]*name=["']robots["'][^>]*>/i);
    if (robots) {
      score.total += 10;
      score.checks.push({ name: 'Robots Meta Tag', status: '✅', score: 10 });
    } else {
      score.checks.push({ name: 'Robots Meta Tag', status: '⚠️', score: 0 });
    }

    return score;
  }

  async generateReport() {
    console.log('🔍 SEO Monitoring Report for Refugee Brotherhood');
    console.log('=' .repeat(60));
    console.log(`📅 Generated: ${new Date().toLocaleString()}`);
    console.log(`🌐 Site: ${SITE_URL}`);
    console.log('');

    for (const page of PAGES_TO_CHECK) {
      try {
        console.log(`\n📄 Checking: ${page}`);
        const result = await this.checkPage(page);
        
        console.log(`   Status: ${result.statusCode === 200 ? '✅' : '❌'} (${result.statusCode})`);
        console.log(`   SEO Score: ${result.seoScore.total}/${result.seoScore.maxScore} (${Math.round(result.seoScore.total)}%)`);
        
        result.seoScore.checks.forEach(check => {
          const note = check.note ? ` - ${check.note}` : '';
          console.log(`   ${check.name}: ${check.status} (${check.score}/10)${note}`);
        });

        this.results.push(result);
      } catch (error) {
        console.log(`   ❌ Error: ${error.message}`);
      }
    }

    // Generate summary
    console.log('\n' + '=' .repeat(60));
    console.log('📊 SUMMARY');
    console.log('=' .repeat(60));
    
    const avgScore = this.results.reduce((sum, r) => sum + r.seoScore.total, 0) / this.results.length;
    console.log(`Average SEO Score: ${Math.round(avgScore)}%`);
    
    const workingPages = this.results.filter(r => r.statusCode === 200).length;
    console.log(`Working Pages: ${workingPages}/${PAGES_TO_CHECK.length}`);
    
    // Save report to file
    const reportData = {
      timestamp: new Date().toISOString(),
      site: SITE_URL,
      results: this.results,
      summary: {
        averageScore: Math.round(avgScore),
        workingPages,
        totalPages: PAGES_TO_CHECK.length
      }
    };

    const reportPath = path.join(__dirname, '../seo-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2));
    console.log(`\n📄 Report saved to: ${reportPath}`);
  }
}

// Run the monitor
async function main() {
  const monitor = new SEOMonitor();
  await monitor.generateReport();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = SEOMonitor; 