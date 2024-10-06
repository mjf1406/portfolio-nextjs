import { notFound } from "next/navigation";
import { CustomMDX } from "src/components/mdx";
import { getBlogPosts } from "src/app/blog/utils";
import { baseUrl } from "src/app/sitemap";
import TableOfContents from "src/components/TableOfContents";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    let posts = getBlogPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export function generateMetadata({ params }) {
    let post = getBlogPosts().find((post) => post.slug === params.slug);
    if (!post) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;
    let ogImage = image
        ? image
        : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${baseUrl}/blog/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Blog({ params }) {
    let post = getBlogPosts().find((post) => {
        return post.slug === params.slug;
    });
    if (!post) {
        notFound();
    }

    return (
        <div>
            <section>
                <script
                    type="application/ld+json"
                    suppressHydrationWarning
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "BlogPosting",
                            headline: post.metadata.title,
                            datePublished: post.metadata.publishedAt,
                            dateModified: post.metadata.publishedAt,
                            description: post.metadata.summary,
                            image: post.metadata.image
                                ? `${baseUrl}${post.metadata.image}`
                                : `/og?title=${encodeURIComponent(
                                      post.metadata.title
                                  )}`,
                            url: `${baseUrl}/blog/${post.slug}`,
                            author: {
                                "@type": "Person",
                                name: "My Portfolio",
                            },
                        }),
                    }}
                />
                <Link
                    href={"/blog"}
                    className="hover:opacity-50 flex items-center"
                >
                    <ArrowLeft
                        size={24}
                        className="mr-1"
                    />{" "}
                    Back
                </Link>
                <div className="grid grid-cols-15">
                    <article className="prose col-span-14">
                        <CustomMDX
                            source={post.content}
                            publishedAt={post.metadata.publishedAt}
                            readingTime={post.metadata.readingTime}
                        />
                    </article>
                    <div className="col-span-1">
                        <TableOfContents content={post.content} />
                    </div>
                </div>
            </section>
        </div>
    );
}
