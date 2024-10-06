import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { routing } from "src/i18n/routing";

export const metadata = {
    title: "About",
    description: "Get to know Michael.",
};

export default function About({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);

    const t = useTranslations("about");

    return (
        <section className="space-y-5">
            <div className="text-base">
                {/* about_title */}
                <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                    About Me
                </h2>
                {/* about_subtitle */}
                <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Learn more about my journey in teaching, web development,
                    and how I bring these two passions together.
                </h4>
                {/* about_content */}
                <p className="mb-4">
                    {`I'm a teacher, and yeah, it's my calling.`}
                </p>
                {/* about_content_2 */}
                <p className="mb-4">
                    {`Hello there! My name is Michael Fitzgerald. I excel at using data in class and integrating technology. I have developed several websites to improve my and my students' in-class lives.`}
                </p>
                {/* about_content_3 */}
                <p className="mb-4">
                    {`Everywhere I have been, I have developed new systems that were adopted by other teachers. At Better English, I created a shared materials system and revamped their onboarding for new teachers. At Avalon, I created a robust TOEFL curriculum using Google Suite, massively improving efficiency.`}
                </p>
                {/* about_content_4 */}
                <p className="mb-4">
                    {`At Maple Bear, I had my largest impact. Not only did I integrate Google Suite, but I also began developing several websites, which were utilized by me and my colleagues. I also had a positive influence on my colleagues due to my "teacher personality", which stems from my teaching philosophy. At Younghoon, I took the initiative to develop a system to allow teachers to create bespoke AI tutors.`}
                </p>
                {/* about_content_5 */}
                <p className="mb-4">
                    {`I love to learn and am always learning to live and to be a better teacher. My favorite process is the iterative process! Every time I do something in the classroom, I look for ways to make it better the next time.`}
                </p>
            </div>
        </section>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
