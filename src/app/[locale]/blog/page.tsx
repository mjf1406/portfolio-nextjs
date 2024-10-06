import { unstable_setRequestLocale } from "next-intl/server";
import { BlogPosts } from "src/components/posts";
import { routing } from "src/i18n/routing";

export const metadata = {
    title: "Blog",
    description: "Read my blog.",
};

export default async function Page({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    return (
        <section>
            {/* blog_title */}
            <h1 className="font-semibold text-3xl mb-8 tracking-tighter">
                Blog
            </h1>
            {/* blog_subtitle */}
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Discover my thoughts and insights on teaching, web development,
                and how these fields intersect.
            </h4>
            <BlogPosts locale={locale} />
        </section>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
