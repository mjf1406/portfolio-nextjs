import Timeline from "components/ui/timeline";
import { School, ChartLine, Languages } from "lucide-react";
import React from "react";
import { ExperienceItem } from "utils/types";

const experience: ExperienceItem[] = [
    {
        title: "5th Grade Homeroom Teacher",
        workplace: "Young Hoon Elementary School, Seoul, South Korea",
        dates: "March 2024 - present",
        icon: School,
        responsibilities: [
            "Promoted to science lead for 5th grade after 1 month on the job",
            "Taught writing, literacy, presentations, math, and science to 5th grade Korean students",
            "Integrated bespoke webapps into the classroom",
            "Tracked student progress in gradebook",
            "Identified students with difficulties using statistical analysis of summative and formative assessments",
        ],
    },
    {
        title: "4th Grade Lead Teacher",
        workplace: "Maple Bear, Seoul, South Korea",
        dates: "March 2023 - February 2024",
        icon: School,
        responsibilities: [
            "Created a robust thematic curriculum that integrated STEAM elements in every 8-week module",
            "Promoted to team lead to better integrate their curriculum across modes",
            "Promoted to team lead to revamp their science education",
            "Integrated bespoke webapps into the classroom for the 4th grade team",
        ],
    },
    {
        title: "ELA Teacher",
        workplace: "Maple Bear, Seoul, South Korea",
        dates: "March 2022 - February 2023",
        icon: School,
        responsibilities: [
            "Taught writing, literacy, and presentations to elementary school students",
            "Integrated Google Suite into the curriculum",
            "Identified students in need of extra support using statistics",
            "Keep a gradebook of students with automated reports for above analysis and parent-teacher conferences",
        ],
    },
    {
        title: "Acquisition Analyst",
        workplace: "Dovenmuehle Mortgage, Inc., Lake Zurich, IL, USA",
        dates: "March 2021 - December 2021",
        icon: ChartLine,
        responsibilities: [
            "Analyzed incoming client data for accuracy in accordance with banking regulations",
            "Utilized Python to increase efficiency by over 300%",
            "Singled-out for outstanding performance, was given choice of what to pursue next",
            "Trained colleagues on how to use Excel to increase productivity",
            "Assisted in fixing Excel workbooks that other colleagues could not repair",
        ],
    },
    {
        title: "Chinese-to-English Translator",
        workplace: "Yeehe, Remote",
        dates: "April 2018 - June 2021",
        icon: Languages,
        responsibilities: [
            "Translate Chinese video games, documents, and presentation decks into English",
            "Used Google Sheets and Python to improve productivity of translation process",
        ],
    },
    {
        title: "English Teacher",
        workplace: "Avalon English, Seoul, South Korea",
        dates: "December 2015 - June 2020",
        icon: School,
        responsibilities: [
            "Taught ELA, math, and science to elementary school students",
            "Improved classroom engagement by turning in-class activities into games",
            "Improved student performance through analysis of attendance, homework, test, and participation data",
            "Identified students in need of extra support using statistics",
            "Translated raw data into visualizations for monthly reporting and quarterly reporting",
        ],
    },
    {
        title: "Lead ESL Teacher",
        workplace: "Better English, Beijing, China",
        dates: "July 2014 - August 2015",
        icon: School,
        responsibilities: [
            "Improved productivity by at least 30% via implementing campus-wide shared material storage",
            "Improved new teacher training by creating orientation and training materials",
        ],
    },
    {
        title: "ESL Teacher",
        workplace: "Better English, Beijing, China",
        dates: "March 2015 - June 2014",
        icon: School,
        responsibilities: [
            "Improved student performance through analysis of attendance, homework, test, and participation data",
            "Motivated students by offering fun games to play after work was completed",
        ],
    },
];

const WorkExperience = () => {
    return (
        <section className="max-w-3xl mt-10 mx-auto">
            <h2 className="text-2xl mb-6">Work Experience</h2>
            <Timeline items={experience} />
        </section>
    );
};

export default WorkExperience;
