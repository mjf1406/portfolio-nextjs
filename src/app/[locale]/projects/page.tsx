const projectsOld = [
    {
        name: "New Teacher Onboarding",
        one_sentence:
            "Pioneer developer of new teaching onboarding; was the first foreign head teacher; on fast-track to work at HQ",
        description:
            "Led the design and implementation of new teacher onboarding that equipped new teachers with classroom management skills through observations and pair-teaching prior to being placed into their own classrooms. Routine observations were performed by me to collaborate with them to help them be the best teacher they could be.",
        role: "Head Native-English Teacher",
        workplace: "Better English",
        date: "2014/5",
    },
    {
        name: "TOEFL Curriculum Revamp",
        one_sentence:
            "Gamified the TOEFL curriculum and utilized Google Docs to increase efficiency.",
        description:
            "Developed a gamified TOEFL curriculum that had the students leveling up as they made progress in their TOEFL test-taking journey. Integrated Google Docs for real-time feedback and document sharing between students and teachers, thereby improving the efficiency of feedback.",
        example:
            "Before the integration of Google Docs, I graded their essays before classes every day. It used up all my free time, so I did not really have enough time to actually prepare for lessons, so I took the initiative and started having the class in the computer lab using Google Docs.",
        role: "English Teacher - Hand-picked to be the sole TOEFL Teacher",
        workplace: "Avalon English",
        date: "2016/3",
    },
    {
        name: "Google Suite Integration",
        one_sentence:
            "Implemented Google Suite of products for students to use, improving grading efficiency.",
        description:
            "Integrated Google Suite of products for monthly projects, weekly journals, and monthly essays to improve feedback and teach the kids the skills the need for success.",
        example:
            "This removed the need of having a physical journal, so there was no time pressure to get the journals graded before Wednesday/Thursday each week. This allowed students to start their journals whenever they wanted.",
        role: "English Teacher",
        workplace: "Maple Bear",
        date: "2022/4",
    },
    {
        name: "4th Grade Curriculum Revamp",
        one_sentence:
            "Revamped every module to incorporate all STEAM elements through project- and inquiry-based learning.",
        description:
            "Transformed the 4th grade curriculum from 4-week modules to 8-week modules that integrated science, technology, engineering, art, and math (STEAM) into each 8-week module. Each module was project- and inquiry-driven, allowing for greater personalized learning.",
        example:
            "My favorite project that they completed was designing and building a zoo enclosure. Science was accounted for by having to satisfy each animal's needs, engineering was accounted for by having them build it, art was accounted for in their design, allowing for creative freedom and each group created a poster for their animal. Math was accounted for requiring the student to calculate how much food they would need in kilograms, the area of their enclosures and they had to convert it to scale.",
        role: "4th Grade Team Lead",
        workplace: "Maple Bear",
        date: "2023/1",
    },
    {
        name: "4th Grade Science Revamp",
        one_sentence:
            "Revamped every science-specific module to require an actual experiment instead of a demonstration.",
        description:
            "The students we had were very advanced, top performers at their day schools and they were bored when we only did demonstrations as they knew what would happen and were only learning the same content in English, so I added in experiment attributes, like the three variables (independent, dependent, control) and test subjects. Each experiment was performed multiple times allowing for them to realize the scientific method is a cycle that should be repeated. It taught them the iterative process.",
        example:
            "The hallmark of these modules was that the students got to pick any demonstration/experiment they wanted as long as it fit the modules theme, and if it was a demonstration, they needed to turn it into an experiment. One team elected to create a water filter because the theme was 'Save Earth'. The best part was their conclusion when they said that they did their experiment 5 times, and while it never worked as they hypothesized, they learned something each time they did it and enjoyed iterating.",
        role: "4th Grade Team Lead",
        workplace: "Maple Bear",
        date: "2023/1",
    },
    {
        name: "Vocabulary Revamp",
        one_sentence:
            "Utilized differentiated materials and integrated all core subjects into vocabulary instruction for the 5th grade team.",
        description:
            "Vocabulary used to be 20 words split into two lists of 10 for each 8-week module. There was only one vocabulary class prior to a quiz, so they only did vocabulary 4 out of the 8 weeks. It was my idea to split each list into 2 additional lists of 5 words and have the students hunt for these words in a reading passage tailored to their reading level. We provide definitions and example sentences at 4 different levels.",
        example:
            "Vocabulary is now a weekly class that follows this format: (1) List 1 Part 1: Students hunt for the words in differentiated reading passages (Vocabulary Hunt), trying to guess which words are vocabulary words. They also write down words they do not know, so the teacher can go over them as they read or afterwards. Next, they write down the appropriate definition for them. As long as they understand the definition, they can write it down. They also play a game called Definition Dive, where they work in pairs or groups to sort all the definitions (there are 4 per word) into the correct word column. (2) List 1 Part 2: same as week one but for the next 5 words. The Vocabulary Hunt in this week is a continuation of week 1's; it's a story! (3) Students complete worksheets to help them review for the vocabulary quiz: the worksheets include fill in the blank, cloze, words search, crossword, unscramble, and make a story using the vocab. words. (4) List 1 quiz. (5) List 2 Part 1: again the Vocabulary Hunt continues the story. (6) List 2 Part 2, same deal with the Vocabulary Hunt. (7) Same review packet as week 3, but for List 2. (8) List 2 quiz.",
        role: "5th Grade English Homeroom",
        workplace: "Younghoon Elementary",
        date: "2024/7",
    },
    {
        name: "Bespoke AI Tutors",
        one_sentence:
            "Setup website for teachers to create RAG-utilizing LLM tutors.",
        description:
            "I set up a website hosted at my server at my home that connects to Open AI's API to create retrieval augmented generation-capable (RAG) large language model (LLM) tutors specific to any content the teacher specifies. I led a professional development (PD) session where I trained the teachers how to set them up.",
        example:
            "I had some free time, with which I like to think hard about new ideas for my classroom and I had this one. I thought to create one that has access to the review materials for the final exam of the module (module test). I taught my students how to interact with it in a quick 40-minute lesson and informed them of LLM limitations, ethics, and safety concerns. I set up each tutor in such a way that it will only guide the students who chat with it, never offering an answer. It will also direct them to search for the material first before it tells them, then will only walk them through an example, going step-by-step.",
        role: "5th Grade Homeroom",
        workplace: "Younghoon",
        date: "2024/10",
    },
];

const projects = [
    {
        name: "New Teacher Onboarding",
        one_sentence:
            "Pioneered new teacher onboarding as the first foreign head teacher, fast-tracked to work at HQ.",
        description:
            "Led the design and implementation of an onboarding program that equipped new teachers with classroom management skills through observations and pair-teaching, followed by routine observations to ensure continuous development.",
        example:
            "I observed new teachers regularly to offer feedback, helping them enhance their classroom management and teaching skills.",
        role: "Head Native-English Teacher",
        workplace: "Better English",
        date: "2014/5",
    },
    {
        name: "TOEFL Curriculum Revamp",
        one_sentence:
            "Gamified the TOEFL curriculum and integrated Google Docs to boost efficiency.",
        description:
            "Developed a gamified TOEFL curriculum that allowed students to level up as they progressed, integrating Google Docs for real-time feedback, making the feedback process more efficient.",
        example:
            "Before Google Docs, I spent all my free time grading essays. After shifting classes to the computer lab and using Google Docs, students received real-time feedback, which freed up time for lesson preparation.",
        role: "English Teacher - Hand-picked to be the sole TOEFL Teacher",
        workplace: "Avalon English",
        date: "2016/3",
    },
    {
        name: "Google Suite Integration",
        one_sentence:
            "Integrated Google Suite for student projects, improving grading efficiency.",
        description:
            "Implemented Google Suite for monthly projects, weekly journals, and essays, streamlining feedback and teaching essential digital skills for students' future success.",
        example:
            "By moving journals online, students had more flexibility, and I could grade without time pressure, enhancing the feedback process for both students and teachers.",
        role: "English Teacher",
        workplace: "Maple Bear",
        date: "2022/4",
    },
    {
        name: "4th Grade Curriculum Revamp",
        one_sentence:
            "Integrated STEAM into 8-week project- and inquiry-based learning modules.",
        description:
            "Transformed the curriculum from 4-week to 8-week modules that incorporated science, technology, engineering, art, and math (STEAM), with a focus on project-based and inquiry-driven learning for greater personalization.",
        example:
            "In one project, students designed a zoo enclosure, incorporating science (animal needs), engineering (building), math (calculating food and enclosure sizes), and art (creative design).",
        role: "4th Grade Team Lead",
        workplace: "Maple Bear",
        date: "2023/1",
    },
    {
        name: "4th Grade Science Revamp",
        one_sentence:
            "Shifted science modules from demonstrations to hands-on experiments.",
        description:
            "Revised the science curriculum by incorporating actual experiments instead of demonstrations, teaching students about the scientific method and its iterative nature through repeated trials.",
        example:
            "One group chose to build a water filter, testing it five times. Even though their hypothesis didn’t work, they learned from each iteration and embraced the experimental process.",
        role: "4th Grade Team Lead",
        workplace: "Maple Bear",
        date: "2023/1",
    },
    {
        name: "Vocabulary Revamp",
        one_sentence:
            "Developed differentiated vocabulary materials, integrating core subjects into instruction.",
        description:
            "Redesigned the vocabulary program by breaking it into smaller, more frequent lessons that incorporated differentiated reading passages and integrated core subjects, offering a more comprehensive approach to vocabulary acquisition.",
        example:
            "Vocabulary classes now follow a structured weekly format, including a Vocabulary Hunt in differentiated reading passages, a Definition Dive game, and various review activities like fill-in-the-blank exercises and word puzzles before quizzes.",
        role: "5th Grade English Homeroom",
        workplace: "Younghoon Elementary",
        date: "2024/7",
    },
    {
        name: "Bespoke AI Tutors",
        one_sentence:
            "Developed a website for teachers to create RAG-based LLM tutors for customized learning.",
        description:
            "Created a website for teachers to generate RAG-powered LLM tutors connected to specific content, helping students receive tailored guidance. Led a professional development session to train teachers on how to set up and use the tutors.",
        example:
            "I set up a tutor for a final exam review, teaching students how to interact with it. The tutor guided students through problem-solving without providing direct answers and encouraged them to search for materials before offering any assistance.",
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
            {/* projects_title */}
            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Projects
            </h2>
            {/* projects_subtitle */}
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                See how I made positive change at every place I have worked.
            </h4>
            <div className="grid grid-cols-1 gap-8">
                {sortedProjects.map((accomplishment, index) => (
                    <div
                        key={index}
                        id={`#${accomplishment.name}`}
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
                            {accomplishment.example && (
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    <strong>Example:</strong>{" "}
                                    {accomplishment.example}
                                </p>
                            )}
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
