import React from "react";
import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";
import { Item } from "utils/types";

interface TimelineProps {
    items: Item[];
    classes?: {
        container?: string;
        panel?: string;
        title?: string;
        description?: string;
        icon?: string;
    };
}

const Timeline: React.FC<TimelineProps> = ({ items = [], classes = {} }) => {
    const {
        container: containerClass = "",
        panel: panelClass = "",
        title: titleClass = "",
        description: descriptionClass = "",
        icon: iconClass = "text-primary dark:text-slate-200 border-primary dark:border-blue-700",
    } = classes;

    const renderTitle = (item: Item) => {
        if ("degree" in item) {
            return (
                <>
                    {item.degree}
                    {item.gpa ? ` – ${item.gpa}` : ""} <br />
                    <span className="font-normal">{item.school}</span> <br />
                    <span className="text-sm font-normal">{item.years}</span>
                </>
            );
        } else {
            return (
                <>
                    {item.title} <br />
                    <span className="font-normal">{item.workplace}</span> <br />
                    <span className="text-sm font-normal">{item.dates}</span>
                </>
            );
        }
    };

    const renderDescription = (item: Item) => {
        if ("responsibilities" in item && item.responsibilities.length > 0) {
            return (
                <ul className="list-disc list-inside mt-2">
                    {item.responsibilities.map((resp, index) => (
                        <li
                            key={index}
                            className="text-sm"
                        >
                            {resp}
                        </li>
                    ))}
                </ul>
            );
        }
        return null;
    };

    return (
        <div className={containerClass}>
            {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className={twMerge("flex", panelClass)}
                    >
                        <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                            <div>
                                <div className="flex items-center justify-center">
                                    <Icon
                                        className={twMerge(
                                            "w-10 h-10 p-2 rounded-full border-2",
                                            iconClass
                                        )}
                                    />
                                </div>
                            </div>
                            {index !== items.length - 1 && (
                                <div className="w-px h-full bg-black/10 dark:bg-slate-400/50" />
                            )}
                        </div>
                        <div
                            className={`pt-1 ${
                                index !== items.length - 1 ? "pb-8" : ""
                            }`}
                        >
                            <div
                                className={twMerge(
                                    "text-xl font-bold",
                                    titleClass
                                )}
                            >
                                {renderTitle(item)}
                            </div>
                            <div
                                className={twMerge(
                                    "text-muted",
                                    descriptionClass
                                )}
                            >
                                {renderDescription(item)}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Timeline;
