import { AlertTriangle } from "lucide-react";
import { BlogPosts } from "src/components/posts";

export const metadata = {
    title: "Blog",
    description: "Read my blog.",
};

export default function Page() {
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
            <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-500 p-4 mb-4 rounded-r-lg shadow-md">
                <div className="flex items-center">
                    <AlertTriangle
                        className="text-amber-500 dark:text-amber-400 mr-3"
                        size={24}
                    />
                    <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-100">
                        Disclaimer: Evolving Perspectives
                    </h3>
                </div>
                <p className="mt-2 text-amber-700 dark:text-amber-200">
                    Some posts in this blog archive are dated. They represent my
                    thoughts and opinions at the time of writing, which may not
                    align with my current views. To gain a comprehensive
                    understanding of how my perspective has evolved, I encourage
                    you to explore multiple posts across different time periods.
                </p>
                <p className="mt-2 text-amber-700 dark:text-amber-200">
                    As a dedicated skeptic, I take pride in my ability to adapt
                    my viewpoints based on new evidence and insights. This
                    commitment to intellectual growth is reflected throughout my
                    writing journey.
                </p>
            </div>
            <BlogPosts />
        </section>
    );
}
