"use client";

import React, { useState, useEffect } from "react";

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    content: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
    const [headings, setHeadings] = useState<Heading[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const extractHeadings = () => {
            const headingRegex = /^(#{1,6})\s+(.+)$/gm;
            const extractedHeadings: Heading[] = [];
            let match;

            while ((match = headingRegex.exec(content)) !== null) {
                const level = match[1].length;
                const text = match[2];
                const id = text
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens

                extractedHeadings.push({
                    id,
                    text,
                    level,
                });
            }

            console.log("Extracted headings:", extractedHeadings); // Debug log
            setHeadings(extractedHeadings);
        };

        extractHeadings();
    }, [content]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const newActiveId = headings.find((heading) => {
                const element = document.getElementById(heading.id);
                if (element) {
                    return element.offsetTop > scrollPosition;
                }
                return false;
            })?.id;

            if (newActiveId) {
                setActiveId(newActiveId);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [headings]);

    return (
        <nav className="hidden md:block md:fixed md:top-[3.8125rem] md:w-64 md:self-start p-4">
            <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
            {headings.length === 0 && <p>No headings found</p>}
            <ul className="space-y-2">
                {headings.map((heading) => (
                    <li
                        key={heading.id}
                        className={`${
                            heading.level === 1
                                ? "ml-0"
                                : `ml-${(heading.level - 1) * 4}`
                        }`}
                    >
                        <a
                            href={`#${heading.id}`}
                            className={`block text-sm hover:text-blue-500 transition-colors ${
                                activeId === heading.id
                                    ? "text-blue-500 font-medium"
                                    : "text-gray-600 dark:text-gray-400"
                            }`}
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById(heading.id)
                                    ?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                            }}
                        >
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
