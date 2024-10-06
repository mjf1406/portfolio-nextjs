import { getBlogPosts } from "../[locale]/blog/utils";

type BlogPost = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    locale: string;
  };
  slug: string;
  content: string;
};

export async function GET() {
  let allBlogs: BlogPost[] = await getBlogPosts();

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .map((post) => `
      <item>
        <title>${post.metadata.title}</title>
        <link>${process.env.NEXT_PUBLIC_SITE_URL}/${post.metadata.locale}/blog/${post.slug}</link>
        <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        <description>${post.metadata.summary}</description>
      </item>
    `)
    .join('');

  const feedXml = `
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Your Blog Title</title>
        <link>${process.env.NEXT_PUBLIC_SITE_URL}</link>
        <description>Your Blog Description</description>
        <language>en</language>
        ${itemsXml}
      </channel>
    </rss>
  `;

  return new Response(feedXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}