const projects = [
    {
        name: "New Teacher Onboarding",
        one_sentence:
            "Pioneer developer of new teaching onboarding; was the first foreign head teacher; on fast-track to work at HQ",
        description: "",
        example: "",
        role: "Head Native-English Teacher",
        workplace: "Better English",
        date: "2014/5",
    },
    {
        name: "TOEFL Curriculum Revamp",
        one_sentence:
            "Gamified the TOEFL curriculum and utilized Google Docs to increase efficiency.",
        description: "",
        example: "",
        role: "English Teacher - Hand-picked to be the sole TOEFL Teacher",
        workplace: "Avalon English",
        date: "2016/3",
    },
    {
        name: "Google Suite Integration",
        one_sentence:
            "Implemented Google Suite of products for students to use, improving grading efficiency.",
        description: "",
        example: "",
        role: "English Teacher",
        workplace: "Maple Bear",
        date: "2022/4",
    },
    {
        name: "4th Grade Curriculum Revamp",
        one_sentence:
            "Revamped every module to incorporate all STEAM elements through project- and inquiry-based learning.",
        description: "",
        example: "",
        role: "4th Grade Team Lead",
        workplace: "Maple Bear",
        date: "2023/1",
    },
    {
        name: "Vocabulary Revamp",
        one_sentence:
            "Utilized differentiated materials and integrated all core subjects into vocabulary instruction for the 5th grade team.",
        description: "",
        example: "",
        role: "5th Grade English Homeroom",
        workplace: "Younghoon Elementary",
        date: "2024/7",
    },
    {
        name: "Bespoke AI Tutors",
        one_sentence:
            "Setup website for teachers to create RAG-utilizing LLM tutors.",
        description: "",
        example: "",
        role: "5th Grade Homeroom",
        workplace: "Younghoon",
        date: "2024/10",
    },
];

export const metadata = {
    title: "Projects",
    description: "Discover my projects.",
};

export default function Projects() {
    const sortedProjects = projects.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <section className="space-y-10">
            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Projects
            </h2>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                See how I made positive change at every place I have worked.
            </h4>
            <div className="grid grid-cols-1 gap-8">
                {sortedProjects.map((accomplishment, index) => (
                    <div
                        key={index}
                        className="shadow-md rounded-lg overflow-hidden border border-gray-400 dark:border-gray-800"
                    >
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                {accomplishment.name || "Untitled"}
                            </h3>
                            {accomplishment.one_sentence && (
                                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                                    {accomplishment.one_sentence}
                                </p>
                            )}
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                <strong>Description:</strong>{" "}
                                {accomplishment.description}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                <strong>Example:</strong>{" "}
                                {accomplishment.example}
                            </p>
                            <div className="mt-4">
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Role:</strong> {accomplishment.role}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Workplace:</strong>{" "}
                                    {accomplishment.workplace}
                                </p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <strong>Date:</strong> {accomplishment.date}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
