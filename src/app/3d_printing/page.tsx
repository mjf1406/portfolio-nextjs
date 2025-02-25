/** @format */

export const metadata = {
    title: "About",
    description: "Get to know Michael.",
};

export default function Printing() {
    return (
        <section className="space-y-5">
            <div className="text-base">
                {/* about_title */}
                <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                    3D Printing
                </h2>
                {/* about_subtitle */}
                <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Learn about all the 3D models I&apos;ve designed and printed
                    for use in my life.
                </h4>
                {/* about_content */}
            </div>
        </section>
    );
}
