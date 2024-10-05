export default function Page() {
    return (
        <section className="space-y-5">
            <div className="flex flex-col gap-5 justify-center items-center text-center">
                {/* karate_kid_quote */}
                <div className="text-sm uppercase">{`"No such thing as bad student, only bad teacher." —Mr. Miyagi, The Karate Kid`}</div>
                <h1 className="text-5xl font-bold">Michael J. Fitzgerald</h1>
                {/* home_blurb */}
                <div className="text-xl">
                    Elementary School Teacher, Web Developer, Programmer,
                    Translator (Mandarin → English), D&D Forever DM, Cyclist
                </div>
                {/* home_intro */}
                <div className="text-lg">
                    <p>
                        Highly accomplished homeroom teacher with nearly a
                        decade of experience teaching ESL, math, science, and
                        language arts who has leveraged in-class games for
                        engaging lessons, and who has utilized Python, advanced
                        Excel techniques, and other tools to gain valuable
                        insights into students and their behaviors all in order
                        to better educate them.
                    </p>
                </div>
            </div>
        </section>
    );
}
