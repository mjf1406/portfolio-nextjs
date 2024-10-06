import fs from 'fs';
import path from 'path';
import { getBlogPosts, getAvailableLocales } from 'src/app/[locale]/blog/utils';

export const baseUrl = 'https://mr-monkey-portfolio.vercel.app';

const pagesDirectory = path.join(process.cwd(), 'src', 'app');

interface SitemapEntry {
  url: string;
  lastModified: string;
}

function getStaticRoutes(dir = pagesDirectory, locale = ''): SitemapEntry[] {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  let routes: SitemapEntry[] = [];

  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      if (file.name === '[locale]') {
        // Handle [locale] directory
        const localeRoutes = getStaticRoutes(fullPath, locale);
        routes = [...routes, ...localeRoutes];
      } else if (!file.name.startsWith('_') && !file.name.startsWith('[')) {
        // Recursively handle other non-dynamic subdirectories
        const subRoutes = getStaticRoutes(fullPath, locale);
        routes = [...routes, ...subRoutes];
      }
    } else if (file.name === 'page.tsx' && !fullPath.includes('[')) {
      // Handle static page.tsx files
      let route = fullPath
        .replace(pagesDirectory, '')
        .replace('/page.tsx', '')
        .replace(/^\/\[locale\]/, '');

      if (locale) {
        route = `/${locale}${route}`;
      }

      const { mtime } = fs.statSync(fullPath);
      routes.push({
        url: `${baseUrl}${route === '/index' ? '' : route}`.replace(/\/+$/, ''),
        lastModified: mtime.toISOString().split('T')[0],
      });
    }
  }

  return routes;
}

export default async function sitemap(): Promise<SitemapEntry[]> {
  const locales = getAvailableLocales();
  let allRoutes: SitemapEntry[] = [];

  // Generate static routes for each locale
  for (const locale of locales) {
    const staticRoutes = getStaticRoutes(pagesDirectory, locale);
    allRoutes = [...allRoutes, ...staticRoutes];
  }

  // Generate blog post routes for each locale
  const blogs = getBlogPosts();
  for (const locale of locales) {
    const localizedBlogs: SitemapEntry[] = blogs
      .filter(post => post.metadata.locale === locale)
      .map(post => ({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: post.metadata.publishedAt,
      }));
    allRoutes = [...allRoutes, ...localizedBlogs];
  }

  // Add routes for the root URL in each locale
  const rootRoutes: SitemapEntry[] = locales.map(locale => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  allRoutes = [...allRoutes, ...rootRoutes];

  return allRoutes;
}