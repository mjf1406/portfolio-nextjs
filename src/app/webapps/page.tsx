import React from "react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "WebApps",
    description: "Learn about my WebApps.",
};

const webapps = [
    {
        name: "Class Daily",
        one_sentence: "Quick access to your classes' daily schedules.",
        url: "https://mjf1406.github.io/class-daily/index.html",
        description:
            "A simple website that displays in large text the schedule for any given class for a specific day.",
        how_i_use:
            "I display this on a computer monitor that is visible to all students so they know what we're doing for the day. One student is assigned to be the Schedule Manager. Whenever we finish an item, they go over and check it off. They are also in charge of switching the class via the blue dropdown.",
        image: "/tujin/class-daily.png",
        created: "2022",
        status: "abandoned",
    },
    {
        name: "Class Timers",
        one_sentence:
            "Quickly access simple and complex pre-made and user-made timers.",
        url: "https://mjf1406.github.io/class-timers/index.html",
        description:
            "A simple website that displays a large clock for viewing along with buttons to quickly start timers of various lengths. Custom timers may also be created and saved. Centers rotations are supported.",
        how_i_use:
            "I use this to quickly set timers for various activities in class. This helps diverse learners immensely by 'externalizing their frontal lobe'. I also use it for centers whenever we do those. The app is great because the students quickly learn to recognize the different sounds, colors, and shapes. For example, they all know that transition time is yellow with circles. Not only this, but each timer has its own color, so students can quickly know what they should be doing just based on the background color at a quick glance.",
        image: "/tujin/custom-timer.png",
        created: "2023/12",
        status: "feature complete",
    },
    {
        name: "MagniText",
        one_sentence:
            "Easily enlarge a message on your phone for viewing from far away.",
        url: "https://mjf1406.github.io/magni-text/index.html",
        description:
            "A streamlined website designed to responsively maximize the font size of any input message, ensuring optimal utilization of the entire viewport. This tool is especially useful for displaying messages on a phone, enabling easy readability.",
        how_i_use:
            "I use this to show students a quick message that does not require a reply during silent work. The messages are easy to read because they are blown up to take up my phone's entire screen.",
        image: "/tujin/magnitext.jpg",
        created: "2023/12",
        status: "abandoned - will incorporate into ClassQuest",
    },
    {
        name: "Random Classroom Tools",
        one_sentence: "Various random-adjacent classroom tools.",
        url: "https://mjf1406.github.io/various-classroom-tools/index.html",
        description:
            "A mobile-first webapp with a suite tools related to randomly picking students in various ways. This is meant for the teacher only and is not intended to be shared with parents or students.",
        how_i_use:
            "I use this to randomly determine the line order for dismissal. The app is great for this because it ensures that every student goes first and last at least once before anyone goes first or last again. I also let the student who was last for the previous dismissal push the Sort button. Many students enthusiastically look forward to this.",
        image: "/tujin/Random Classroom Tools.png",
        created: "2022",
        status: "abandoned - incorporated into ClassQuest",
    },
    {
        name: "Worksheet Generators",
        one_sentence:
            "Quickly generate various worksheets for your classes with some features you didn't know you needed",
        url: "https://mjf1406.github.io/worksheet-generators/index.html",
        description:
            "The webapp that holds the collection of all the printable worksheets I have needed in my classrooms. It uses modern web design principals and has features that other generators do not, such as displaying a word's direction or section on a word search, or printing a crossword with specified letters visible.",
        how_i_use:
            "I use this to generate word searches, crossword puzzles, and mazes for Ozobot that students can solve.",
        image: "/tujin/word-search-gen.png",
        created: "2023",
        status: "abandoned - will incorporate into ClassQuest",
    },
    {
        name: "ClassQuest",
        one_sentence:
            "Earn rewards, unlock achievements, and transform everyday learning into an epic quest.",
        url: "https://www.classquest.src/app/",
        description:
            "It's a site that provides various tools, generators, and classroom management tools for teachers.",
        how_i_use:
            "I use it to generate seating charts, randomly assign jobs equitably, and randomly assign Chromebooks. I also use it to randomly pick students during class for things.",
        image: "/tujin/classquest.png",
        created: "2024/9",
        status: "closed alpha",
    },
    {
        name: "Slotted",
        one_sentence:
            "Quickly manage and display classroom schedules and weekly timetables.",
        url: "https://slotted.vercel.app",
        description:
            "This website allows you to create timetables and within those timetables, to create time slots wherein you place classes.",
        how_i_use:
            "I used it to manage my class schedule every week. Within each class I get set our schedule for the day however I like, then display it nicely during class for all to see.",
        image: "/tujin/slotted.png",
        created: "2024/9",
        status: "closed alpha",
    },
    {
        name: "The Sun to Scale",
        one_sentence:
            "Quickly select a real-world object to set the Sun to and see other celestial bodies, too!",
        url: "https://mjf1406.github.io/the-sun-to-scale/index.html",
        description:
            "This website allows the user to specify an everyday spherical object to represent the Sun, then outputs other every day items for other celestial bodies.",
        how_i_use:
            "I built this for a specific lesson about the Solar System and its massive scale. The students completed an activity using data from the site and a measuring wheel.",
        image: "/tujin/the-sun-to-scale.png",
        created: "2024/5",
        status: "feature complete",
    },
    {
        name: "Report Card Helper",
        one_sentence:
            "A mobile-friendly way to fill out Younghoon report cards.",
        url: "https://report-card-helper.vercel.src/app/",
        description:
            "This site allows Younghoon organization members to complete their report cards without tedious PDF forms.",
        how_i_use:
            "I built this after frustration and tedium filling out the semester 1 report cards to make it easier on me and other teachers to fulfill their report card requirements.",
        image: "/tujin/report-card-helper.png",
        created: "2024/7",
        status: "beta",
    },
    {
        name: "Ozobot Maze Generator",
        one_sentence:
            "A website used to create mazes for students to solve using Ozobot.",
        url: "https://ozobot-maze.vercel.app/",
        description:
            "This site can be used by teachers to create mazes for students to solve using their Ozobot from easy to hard and custom difficulties using varying paper sizes.",
        how_i_use:
            "At Younghoon, I used it for a math activity about transforming shapes. Students got to practice reading the Color Codes in different orientations, thereby practicing their transformation skills.",
        image: "/tujin/ozobot-maze.png",
        created: "2024/10",
        status: "WIP",
    },
    {
        name: "Site Sprout",
        one_sentence:
            "The place for teaching upper elementary students the parts of websites.",
        url: "https://site-sprout-lac.vercel.app/",
        description:
            "Site Sprout is an interactive educational platform designed to teach upper elementary students the fundamental components of websites. Through engaging lessons and hands-on activities, students learn about various web elements such as headers, footers, navigation menus, and content sections, fostering a foundational understanding of web design and development.",
        how_i_use:
            "I used it as part of our Text Features module to help kids learn the different parts of websites at Younghoon.",
        image: "/tujin/site-sprout.png",
        created: "2025/01",
        status: "WIP",
    },
    {
        name: "ASL For Silent Time",
        one_sentence: "Your place for free ASL resources for teachers.",
        url: "https://asl-rho.vercel.app/",
        description:
            "ASL For Silent Time is a dedicated platform offering free American Sign Language resources tailored for educators. The website provides an extensive library of ASL signs, instructional guides, and interactive tools to help teachers integrate sign language into their classrooms, facilitating effective communication during silent time and promoting an inclusive learning environment.",
        how_i_use:
            "I use it to generate all the ASL signs I need for my classroom during silent time.",
        image: "/tujin/asl.png",
        created: "2024/11",
        status: "WIP",
    },
    {
        name: "Reparper",
        one_sentence:
            "A basic site I built to streamline creating report cards at Younghoon.",
        url: "https://reparper.vercel.app/",
        description:
            "Using a Google Sheets templates, teachers can save time on the  mundane task of manually copying data into PDF report cards.",
        how_i_use:
            "I use it at the end of each semester to fill out my Younghoon report cards. What once used to take about an hour, more if I was really procrastinating because it was so mind-numbing, now only takes 1 minute on the site!",
        image: "/tujin/reparper.png",
        created: "2025/01",
        status: "Beta",
    },
    // {
    //     name: "",
    //     one_sentence:
    //         "",
    //     url: "",
    //     description:
    //         "",
    //     how_i_use:
    //         "",
    //     image: "/tujin/",
    //     created: "",
    //     status: "",
    // },
];

const WebAppCard = ({ app }) => (
    <div className="border border-gray-400 dark:border-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative w-full h-[200px] sm:h-[200px] md:h-[300px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                {app.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {app.one_sentence}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
                {app.description}
            </p>
            <div className="mb-4">
                <h4 className="text-md font-semibold mb-1 text-gray-700 dark:text-gray-100">
                    How I Use It:
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {app.how_i_use}
                </p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    Created: {app.created}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                    Status: {app.status}
                </span>
            </div>
            <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md hover:opacity-50 border border-gray-400 dark:border-gray-800 transition-colors duration-300"
            >
                Visit App
                <ExternalLink className="ml-2 h-4 w-4" />
            </a>
        </div>
    </div>
);

const WebApps = () => {
    const sortedWebapps = [...webapps].sort((a, b) => {
        const dateA = new Date(`${a.created}/01`); // Adding a day to ensure valid date
        const dateB = new Date(`${b.created}/01`); // Adding a day to ensure valid date
        return dateB.getTime() - dateA.getTime(); // Compare by time in milliseconds
    });

    return (
        <section className="">
            <div className="container mx-auto px-4">
                {/* webapps_title */}
                <h1 className="font-semibold text-3xl mb-8 tracking-tighter">
                    WebApps
                </h1>
                {/* webapps_subtitle */}
                <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Explore the Web Apps I have built, why I built them, and how
                    I use them in class.
                </h4>
                <div className="grid grid-cols-1 gap-8">
                    {sortedWebapps.map((app, index) => (
                        <WebAppCard
                            key={index}
                            app={app}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebApps;
