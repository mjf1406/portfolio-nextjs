const SkillItem = ({ title, description }) => (
    <div className="mb-4 border border-gray-800 rounded-lg p-2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const skillItems = [
    {
        title: "Differentiated instruction",
        description:
            "From extra support to enrichment, I create personalized learning plans and goals for each of my students.",
    },
    {
        title: "Multi-modal learning",
        description:
            "Every lesson that I create uses all modes of delivery and engagement.",
    },
    {
        title: "Classroom management",
        description: "From classroom jobs to consistent consequences.",
    },
];

const Skills = () => {
    return (
        <section className="max-w-3xl mt-10 mx-auto">
            <h2 className="text-2xl mb-6">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skillItems.map((item, index) => (
                    <SkillItem
                        key={index}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
