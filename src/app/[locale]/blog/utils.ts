import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  readingTime?: string;
  locale: string;
};

function parseFrontmatter(fileContent: string) {
  const { data, content } = matter(fileContent);
  
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const readingTime = Math.ceil(words / wordsPerMinute);

  const metadata: Metadata = {
    title: data.title || '',
    publishedAt: data.publishedAt || '',
    summary: data.summary || '',
    image: data.image,
    readingTime: `${readingTime} min read`,
    locale: data.locale || 'en' // Default to 'en' if not specified
  };

  return { metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function generateSlug(title: string): string {
  return encodeURIComponent(title
    .toLowerCase()
    .replace(/[^a-z0-9\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf\uac00-\ud7af]+/g, '-')
    .replace(/(^-|-$)+/g, ''));
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = generateSlug(metadata.title);
    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`No posts directory found at ${postsDirectory}`);
    return [];
  }
  
  return getMDXData(postsDirectory);
}

export function getAvailableLocales() {
  const posts = getBlogPosts();
  return Array.from(new Set(posts.map(post => post.metadata.locale)));
}

export function getBlogPostBySlug(locale: string, slug: string) {
  const posts = getBlogPosts();
  return posts.find(post => post.metadata.locale === locale && post.slug === slug);
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    console.error("Invalid date string provided.");
    return "Invalid Date";
  }

  const year = date.getFullYear();
  const month = date.toLocaleString('default', { month: 'numeric' });
  const day = date.getDate();

  return `${year}-${month}-${day}`;
}