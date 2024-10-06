import { notFound } from "next/navigation";
import { CustomMDX } from "src/components/mdx";
import { baseUrl } from "src/app/sitemap";
import {
    formatDate,
    getBlogPosts,
    getBlogPostBySlug,
    getAvailableLocales,
} from "../utils";
import { unstable_setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
    const locales = getAvailableLocales();
    let params: Array<{ locale: string; slug: string }> = [];

    for (const locale of locales) {
        const posts = getBlogPosts();
        params = params.concat(
            posts.map((post) => ({ locale, slug: post.slug }))
        );
    }

    return params;
}

export function generateMetadata({
    params,
}: {
    params: { locale: string; slug: string };
}) {
    unstable_setRequestLocale(params.locale);

    let post = getBlogPostBySlug(params.locale, params.slug);

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
            url: `${baseUrl}/${params.locale}/blog/${post.slug}`,
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

export default function Blog({
    params,
}: {
    params: { locale: string; slug: string };
}) {
    unstable_setRequestLocale(params.locale);
    let post = getBlogPostBySlug(params.locale, params.slug);

    if (!post) {
        notFound();
    }

    return (
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
                            : `${baseUrl}/og?title=${encodeURIComponent(
                                  post.metadata.title
                              )}`,
                        url: `${baseUrl}/${params.locale}/blog/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: "My Portfolio",
                        },
                    }),
                }}
            />
            <h1 className="title font-semibold text-2xl tracking-tighter">
                {post.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-sm">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(post.metadata.publishedAt)}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {post.metadata.readingTime}
                </p>
            </div>
            <article className="prose">
                <CustomMDX source={post.content} />
            </article>
        </section>
    );
}
