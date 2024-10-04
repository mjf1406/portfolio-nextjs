import { Download, FileText, CheckCircle, ClipboardList } from "lucide-react";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";

const resumes = [
    {
        name: "Elementary School Teacher",
        position: "Resume",
        url: "https://utfs.io/f/KHaPoY9HTZx9GH4QxEwws7Mxpc9i0F8jJNrVTgAKdCHnqeW4",
    },
    {
        name: "Data Analyst",
        position: "Resume",
        url: "https://utfs.io/f/KHaPoY9HTZx9SFFMmmUa23esvRQPxfb7EYMUkGLwrWT1Fan0",
    },
];

const recommendation_letters = [
    {
        name: "Yeongji Kim",
        workplace: "Avalon English",
        url: "https://utfs.io/f/KHaPoY9HTZx9RqKDx12Fs3LbIrUHN8Z0tvPMSodupCxicBek",
    },
    {
        name: "Shan Liu",
        workplace: "Better English",
        url: "https://utfs.io/f/KHaPoY9HTZx9Kres6H9HTZx9zho3WOfJpagueBDtPlw6LqyK",
    },
    {
        name: "Heather Kang",
        workplace: "Maple Bear",
        url: "https://utfs.io/f/KHaPoY9HTZx92K1ssYXblsmhD79JxRViBpQIqFz4fnPgYab6",
    },
];

const evaluations = [
    {
        workplace: "Avalon English",
        evaluator: "Yeongji Kim",
        url: "https://utfs.io/f/KHaPoY9HTZx9Cky9tTvH6VPIMd39gZT2qnytzAiR8pGEJULQ",
    },
    {
        workplace: "Younghoon Elementary",
        evaluator: "Richard Druery",
        url: "https://utfs.io/f/KHaPoY9HTZx9QEiMMEKmTa0ocDM7bRn9hI8d21FOetCN5rAx",
    },
];

export default function Resume() {
    return (
        <section className="space-y-5">
            <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                Resume
            </h2>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Explore my professional journey, highlighting the skills,
                experiences, and accomplishments that define my career path.
            </h4>
            <div className="flex flex-col gap-5 text-sm">
                {/* Resume Downloads */}
                <div>
                    <h3 className="text-xl mb-4">Resumes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {resumes.map((resume) => (
                            <a
                                key={resume.name}
                                href={resume.url}
                                className="flex flex-1 items-center justify-between border hover:opacity-50 p-4 text-white rounded-lg shadow-lg transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center gap-3">
                                    <FileText className="w-6 h-6" />
                                    <div className="flex flex-col">
                                        <div>{resume.name}</div>
                                        <div className="text-gray-500">
                                            {resume.position}
                                        </div>
                                    </div>
                                </div>
                                <Download className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Recommendation Letters */}
                <div>
                    <h3 className="text-xl mb-4">Recommendation Letters</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {recommendation_letters.map((letter) => (
                            <a
                                key={letter.name}
                                href={letter.url}
                                className="flex flex-1 items-center justify-between p-4 border hover:opacity-50 text-white rounded-lg shadow-lg transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-6 h-6" />
                                    <div className="flex flex-col">
                                        <div>{letter.name}</div>
                                        <div className="text-gray-500">
                                            {letter.workplace}
                                        </div>
                                    </div>
                                </div>
                                <Download className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Evaluations */}
                <div>
                    <h3 className="text-xl mb-4">Evaluations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {evaluations.map((evaluation) => (
                            <a
                                key={evaluation.evaluator}
                                href={evaluation.url}
                                className="flex flex-1 items-center justify-between p-4 border hover:opacity-50 text-white rounded-lg shadow-lg transition"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="flex items-center gap-3">
                                    <ClipboardList className="w-6 h-6" />
                                    <div className="flex flex-col">
                                        <div>{evaluation.evaluator}</div>
                                        <div className="text-gray-500">
                                            {evaluation.workplace}
                                        </div>
                                    </div>
                                </div>
                                <Download className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <WorkExperience />
            <Education />
            <Skills />
        </section>
    );
}
