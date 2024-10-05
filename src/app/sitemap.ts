import fs from 'fs';
import path from 'path';
import { getBlogPosts } from './[locale]/blog/utils';

export const baseUrl = 'https://mr-monkey-portfolio.vercel.app';

// Update this to the `app` directory if you're using Next.js `app` router
const pagesDirectory = path.join(process.cwd(), 'src', 'app');

// Helper function to recursively get all 'page.tsx' files in the app directory
function getStaticRoutes(dir = pagesDirectory) {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  let routes: { url: string; lastModified: string }[] = [];

  files.forEach((file) => {
    const fullPath = path.posix.join(dir, file.name);

    if (file.isDirectory()) {
      // Recursively handle subdirectories
      routes = [...routes, ...getStaticRoutes(fullPath)];
    } else if (file.name === 'page.tsx' && !fullPath.includes('[')) {
      // Handle the 'page.tsx' file
      const route = fullPath
        .replace(pagesDirectory, '') // remove base app directory from path
        .replace('/page.tsx', ''); // remove '/page.tsx' from path

      // Fetch last modification time for each file
      const { mtime } = fs.statSync(fullPath);

      routes.push({
        url: `${baseUrl}${route === '/index' ? '' : route}`.replace(/\/+$/, ''), // Remove trailing slashes
        lastModified: mtime.toISOString().split('T')[0],
      });
    }
  });

  return routes;
}


export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let staticRoutes = getStaticRoutes();

  return [...staticRoutes, ...blogs];
}
