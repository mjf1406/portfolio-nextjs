import Timeline from "src/components/ui/timeline";
import { GraduationCap } from "lucide-react";
import { EducationItem } from "utils/types";

const education: EducationItem[] = [
    {
        degree: "Master of Arts in Elementary Teaching",
        gpa: "4.0 GPA",
        school: "American College of Education",
        years: "2022 - 2024",
        icon: GraduationCap,
    },
    {
        degree: "Bachelor of Arts in Economics",
        school: "Carthage College",
        years: "2008 - 2012",
        icon: GraduationCap,
    },
];

const Education = () => {
    return (
        <section className="max-w-3xl mt-10 mx-auto">
            <h2 className="text-2xl mb-6">Education</h2>
            <Timeline items={education} />
        </section>
    );
};

export default Education;
