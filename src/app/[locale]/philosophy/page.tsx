import { Construction, ExternalLink } from "lucide-react";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { routing } from "src/i18n/routing";

const philosophy = [
    {
        name: "",
        image: "",
        description: "",
        points: [
            {
                name: "",
                description: "",
                citation: {
                    name: "",
                    url: "",
                },
            },
            {
                name: "",
                description: "",
                citation: {
                    name: "",
                    url: "",
                },
            },
            {
                name: "",
                description: "",
                citation: {
                    name: "",
                    url: "",
                },
            },
        ],
    },
    {
        name: "Mindfulness",
        image: "/hakxue/mindfulness.png",
        description:
            "Mindfulness practices in elementary classrooms can improve focus, reduce stress, and promote emotional well-being in young students. However, these practices must be adapted for age-appropriate engagement, ensuring that they are inclusive and supportive of all students.",
        points: [
            {
                name: "Improved Focus and Attention",
                description:
                    "Introducing mindfulness can help students improve their focus and attention during lessons. Techniques like guided breathing or mindful listening are simple ways to encourage students to stay present and attentive.",
                citation: {
                    name: "Mindfulness for Kids: Helping Students Focus",
                    url: "https://www.edutopia.org/mindfulness-classroom-learning-benefits",
                },
            },
            {
                name: "Stress and Anxiety Reduction",
                description:
                    "Mindfulness techniques, such as body scans or meditation, can reduce stress and anxiety among elementary school students. This is particularly useful during stressful times, like before tests or after recess.",
                citation: {
                    name: "How Mindfulness Can Help Students with Anxiety",
                    url: "https://childmind.org/article/mindfulness-activities-for-kids/",
                },
            },
            {
                name: "Ensuring Inclusivity",
                description:
                    "When implementing mindfulness, it's important to be mindful of students’ cultural and personal beliefs. Not all students may be comfortable with meditation-like practices, so offering alternatives (e.g., quiet drawing or reading) ensures inclusivity.",
                citation: {
                    name: "Incorporating Mindfulness for Diverse Students",
                    url: "https://www.mindfulschools.org/mindfulness-in-education/inclusive-mindfulness-practices/",
                },
            },
        ],
    },
    {
        name: "Personalized Learning",
        image: "/hakxue/personalized-learning.png",
        description:
            "Personalized learning focuses on tailoring education to meet the individual needs, strengths, and interests of each student. It allows students to take ownership of their learning paths, promoting engagement and fostering success at their own pace.",
        points: [
            {
                name: "Individualized Pacing",
                description:
                    "Personalized learning allows students to progress through material at their own pace. This ensures that each student gets the time they need to understand concepts fully, without feeling rushed or left behind.",
                citation: {
                    name: "Why Personalized Learning Matters",
                    url: "https://www.understood.org/articles/en/personalized-learning-what-you-need-to-know",
                },
            },
            {
                name: "Increased Engagement",
                description:
                    "When lessons are tailored to a student's interests and strengths, they become more engaged in the learning process. Personalized learning helps increase motivation and enthusiasm for learning.",
                citation: {
                    name: "The Power of Personalized Learning",
                    url: "https://www.edutopia.org/personalized-learning-benefits",
                },
            },
            {
                name: "Building Self-Directed Learners",
                description:
                    "A key component of personalized learning is fostering self-directed learners who take responsibility for their education. This can build confidence and independence as students learn to make choices about their learning paths.",
                citation: {
                    name: "Self-Direction and Personalized Learning",
                    url: "https://www.teachthought.com/pedagogy/12-ways-to-empower-students-through-personalized-learning/",
                },
            },
        ],
    },
    {
        name: "Compassion & Empathy",
        image: "/hakxue/compassion-empathy.png",
        description:
            "Compassion and empathy are fundamental in fostering a supportive learning environment. By teaching students to understand and care for each other's feelings, we create a classroom where kindness and mutual respect thrive.",
        points: [
            {
                name: "Building Emotional Intelligence",
                description:
                    "Teaching compassion and empathy helps students develop emotional intelligence, allowing them to navigate social relationships and conflicts with care and understanding.",
                citation: {
                    name: "The Importance of Teaching Empathy",
                    url: "https://www.edutopia.org/empathy-emotional-intelligence-classroom",
                },
            },
            {
                name: "Fostering a Safe Environment",
                description:
                    "A classroom grounded in empathy is one where students feel safe to express themselves. This creates a positive learning environment where all students can thrive.",
                citation: {
                    name: "Creating Safe Spaces Through Empathy",
                    url: "https://childmind.org/article/how-to-teach-kids-empathy/",
                },
            },
            {
                name: "Encouraging Collaboration",
                description:
                    "When students practice empathy, they are better collaborators. They are more willing to work together and support one another’s learning journeys.",
                citation: {
                    name: "Collaboration Through Empathy",
                    url: "https://www.edutopia.org/empathy-teamwork-collaboration",
                },
            },
        ],
    },
    {
        name: "Skills for Success",
        image: "/hakxue/skills-for-success.png",
        description:
            "Skills such as critical thinking, resilience, and communication are essential for students to succeed academically and beyond. These life skills help them navigate challenges both inside and outside the classroom.",
        points: [
            {
                name: "Critical Thinking",
                description:
                    "Teaching students to think critically empowers them to analyze and solve problems effectively, preparing them for success in real-world scenarios.",
                citation: {
                    name: "Critical Thinking in Education",
                    url: "https://www.edutopia.org/critical-thinking-skills-success",
                },
            },
            {
                name: "Resilience",
                description:
                    "Resilience is key to helping students overcome setbacks. By building resilience, we encourage a growth mindset and perseverance in the face of challenges.",
                citation: {
                    name: "Building Resilience in Students",
                    url: "https://www.psychologytoday.com/us/blog/school-thought/201911/how-build-resilience-in-your-students",
                },
            },
            {
                name: "Effective Communication",
                description:
                    "Effective communication skills are vital for student success. By teaching them how to express their ideas clearly, we prepare them for academic and social success.",
                citation: {
                    name: "Teaching Communication Skills",
                    url: "https://www.understood.org/en/articles/how-to-teach-communication-skills-in-the-classroom",
                },
            },
        ],
    },
    {
        name: "The ZPD & Comprehensible Input",
        image: "/hakxue/zpd-comprehensible-input.png",
        description:
            "The Zone of Proximal Development (ZPD) and comprehensible input focus on providing students with tasks that are just beyond their current abilities, enabling growth with the right guidance. These approaches are essential for scaffolding learning effectively.",
        points: [
            {
                name: "Challenging Yet Attainable Goals",
                description:
                    "Working within a student’s ZPD ensures they are challenged enough to grow without being overwhelmed. It promotes confidence as students achieve tasks they once thought were beyond their reach.",
                citation: {
                    name: "Understanding the ZPD in Education",
                    url: "https://www.simplypsychology.org/Zone-of-Proximal-Development.html",
                },
            },
            {
                name: "Scaffolding Learning",
                description:
                    "Using scaffolding techniques, teachers can support students as they work on more complex tasks, gradually removing support as their competence increases.",
                citation: {
                    name: "How Scaffolding Promotes Learning",
                    url: "https://www.edutopia.org/scaffolding-instruction-strategies",
                },
            },
            {
                name: "Comprehensible Input for Language Learners",
                description:
                    "For ESL students, comprehensible input is key to language acquisition. By providing language that is understandable yet slightly challenging, students build their linguistic competence.",
                citation: {
                    name: "Comprehensible Input in ESL",
                    url: "https://www.colorincolorado.org/article/comprehensible-input-what-why-and-how",
                },
            },
        ],
    },
    {
        name: "Inclusivity & Community",
        image: "/hakxue/inclusivity-community.png",
        description:
            "An inclusive classroom is one where every student feels welcomed and valued. Building a strong classroom community ensures that all students, regardless of background or ability, can succeed together.",
        points: [
            {
                name: "Celebrating Diversity",
                description:
                    "Incorporating diverse perspectives in the classroom promotes inclusivity, allowing students to appreciate different cultures and backgrounds while learning from one another.",
                citation: {
                    name: "Diversity in the Classroom",
                    url: "https://www.edutopia.org/culturally-responsive-classrooms",
                },
            },
            {
                name: "Creating a Sense of Belonging",
                description:
                    "When students feel they belong, they are more likely to participate and engage in their learning. Building this sense of community fosters collaboration and mutual respect.",
                citation: {
                    name: "Building Community in the Classroom",
                    url: "https://www.edutopia.org/blog/building-community-classroom-elena-aguilar",
                },
            },
            {
                name: "Inclusive Teaching Practices",
                description:
                    "Using inclusive teaching strategies ensures that all students have equal access to the curriculum, regardless of learning styles or abilities.",
                citation: {
                    name: "Inclusive Practices in the Classroom",
                    url: "https://www.teachhub.com/classroom-management/2020/09/10-inclusive-teaching-practices/",
                },
            },
        ],
    },
    {
        name: "Patience & Kindness",
        image: "/hakxue/patience-kindness.png",
        description:
            "Patience and kindness are the cornerstones of an effective and supportive classroom. These traits allow students to learn at their own pace without fear of judgment, promoting a positive and nurturing environment.",
        points: [
            {
                name: "Creating a Positive Learning Environment",
                description:
                    "Patience allows students to feel comfortable taking risks in their learning, knowing they will not be rushed or judged for their mistakes.",
                citation: {
                    name: "The Role of Patience in Learning",
                    url: "https://www.positivepsychology.com/patience-importance-in-teaching/",
                },
            },
            {
                name: "Fostering Kindness Among Peers",
                description:
                    "Teaching kindness helps to reduce bullying and promote a more positive classroom environment where students feel safe and supported by their peers.",
                citation: {
                    name: "Promoting Kindness in the Classroom",
                    url: "https://www.edutopia.org/blog/kindness-in-classroom-lisa-currie",
                },
            },
            {
                name: "Encouraging a Growth Mindset",
                description:
                    "Patience and kindness foster a growth mindset, allowing students to understand that learning is a process and that improvement takes time and effort.",
                citation: {
                    name: "How Kindness Supports Growth Mindset",
                    url: "https://www.mindsetworks.com/science/impact",
                },
            },
        ],
    },
];

export const metadata = {
    title: "Teaching Philosophy",
    description: "Understand my approach.",
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
                Philosophy
            </h2>
            {/* karate_kid_quote */}
            <div className="text-sm uppercase">{`"No such thing as bad student, only bad teacher." —Mr. Miyagi, The Karate Kid`}</div>
            {/* philosophy_subtitle */}
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Mr. Miyagi said it best! This captures my philosophy perfectly.
                Dive in to discover why I wholeheartedly believe in this
                approach and how it shapes everything I do.
            </h4>
            <p>
                I like to treat my classroom as a community. As such, each
                student will have their own responsibilities in the form of a
                job. Students will rotate through these jobs every so often to
                ensure they get a chance to perform the duties of each. These
                jobs will hold each student accountable to every other student
                in class. Each student will also be sent home with a welcome
                packet that we will read in class. You can find the job
                descriptions in this welcome packet should you be curious.
            </p>
            <p>
                My teaching philosophy starts with forming a community of
                learners by creating a safe environment where the students feel
                comfortable, both physically and mentally. I like to do this by
                making the students laugh and smile and have fun as much as
                possible every day. My philosophy on teaching also utilizes
                questions to answer the questions of my students so they can
                feel empowered by answering their own questions. It also
                revolves around teaching the students the strategies and giving
                them the tools they need to be the best English learner and
                individual that they can be. These strategies and tools are part
                of each student’s repertoire that they will access on their own
                more and more as the year progresses in order to complete the
                assignments in their own creative way.
            </p>
            <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
                Core Teaching Philosophy Tenets
            </h2>
            <div className="grid grid-cols-1 gap-8">
                {philosophy
                    .filter((item) => item.name) // Ensures only valid items with names are shown
                    .map((item, index) => (
                        <div
                            key={index}
                            className="border border-gray-400 dark:border-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative w-full h-[300px] sm:h-[300px] md:h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-contain" // or "object-cover" depending on your preference
                                    sizes="(max-width: 640px) 100vw, 
                                        (max-width: 768px) 100vw, 
                                        (max-width: 1024px) 50vw, 
                                        500px"
                                />
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">
                                {item.name}
                            </h3>
                            <p className="mb-5">{item.description}</p>
                            <ul className="space-y-3">
                                {item.points.map((point, idx) => (
                                    <li key={idx}>
                                        <strong>{point.name}:</strong>{" "}
                                        {point.description}{" "}
                                        {/* <a
                                            href={point.citation.url}
                                            target="_blank"
                                            className="text-blue-600 hover:text-blue-800 transition-colors flex items-center space-x-1"
                                        >
                                            <ExternalLink size={16} />
                                            <span className="italic hover:underline">
                                                {point.citation.name}
                                            </span>
                                        </a> */}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </section>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
