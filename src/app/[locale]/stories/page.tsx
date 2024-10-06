import { Construction, ExternalLink } from "lucide-react";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "src/i18n/routing";

const stories = [
    {
        pseudonym: "Hyerin",
        workplace: "Younghoon Elementary",
        year: "2024",
        story: "",
    },
    {
        pseudonym: "Jayce",
        workplace: "Maple Bear",
        year: "2022",
        story: "My proudest achievement as a teacher is helping a 2nd-grade boy with major behavior issues. It was through my recommendation and the support of admin that we convinced his parents to take him to a psychologist. But, it was all the hard work I put in in the first 2-3 months with him that I think was the crux of the relationship we have now. I was always nice to him and whenever he had an issue, we would go into the hallway to talk about it in private. After a while, he would open up to me and we worked together to solve these issues. He would walk up to me when he was upset and specifically ask to speak with me in private. I have continued to be nice to him and to defend him in class when necessary to sustain this bond and trust and now he is SHINING and I’m so proud! Under my tutelage, this boy has gone from yelling at every single instance of conflict and shutting down to engaging in conflict in a calm, constructive manner. He’s gone from being the outcast of the class to making such good friends with another boy in the class that they are hugging nearly every day and they celebrate being such a good team, partly due to my praise of this by using the very same phrase whenever they synergize in a moment or action.",
    },
    {
        pseudonym: "Hyeyoon",
        workplace: "Younghoon Elementary",
        year: "2024",
        story: "",
    },
    {
        pseudonym: "Rayeon",
        workplace: "Younghoon Elementary",
        year: "2024",
        story: "",
    },
    {
        pseudonym: "Lacy",
        workplace: "Better English",
        year: "2014",
        story: "I successfully paired the highest performing student with the lowest performing student (PALS) in a class of 1st and 2nd graders. This pairing, over the 3 months that I measured it, resulted in increased test scores for the lowest-performing student. She went from failing to getting Cs! Not only that, but the top performer made the low-performer her project at my direction. She really took charge of taking care of her every day. She encouraged her, pushed her, and never gave up at all! So much so, that they became good friends. It was heartwarming to hear that they had started playing together outside of class. This friendship led to the low-performer's meteoric rise in her social life, making friends and being friendly with everyone in the class.",
    },
    {
        pseudonym: "Ronald",
        workplace: "Maple Bear",
        year: "2023",
        story: "",
    },
];

export const metadata = {
    title: "Impactful Stories",
    description: "Meet the students on whom I've had the largest impact.",
};

export default function Philosophy({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    return (
        <section className="space-y-5">
            {/* philosophy_title */}
            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Impactful Stories
            </h2>
            {/* philosophy_subtitle */}
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Read the stories of the students I had the greatest impact on.
                Each name below is a pseudonym.
            </h4>
            <div className="grid grid-cols-1 gap-6">
                {stories.map((student, index) => (
                    <div
                        key={index}
                        className="border border-gray-400 dark:border-gray-800 rounded-lg p-6 shadow-md"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                            {student.pseudonym}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {student.workplace}, {student.year}
                        </p>
                        {student.story ? (
                            <p className="mt-4 text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {student.story}
                            </p>
                        ) : (
                            <p className="mt-4 italic text-gray-400 dark:text-gray-500">
                                Story coming soon...
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
