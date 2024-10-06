import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "src/app/blog/utils";

function Table({ data }) {
    let headers = data.headers.map((header, index) => (
        <th key={index}>{header}</th>
    ));
    let rows = data.rows.map((row, index) => (
        <tr key={index}>
            {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
            ))}
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>{headers}</tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function CustomLink(props) {
    let href = props.href;

    if (href.startsWith("/")) {
        return (
            <Link
                href={href}
                {...props}
            >
                {props.children}
            </Link>
        );
    }

    if (href.startsWith("#")) {
        return <a {...props} />;
    }

    return (
        <a
            target="_blank"
            className="hover:opacity-50"
            rel="noopener noreferrer"
            {...props}
        />
    );
}

function RoundedImage(props) {
    return (
        <Image
            alt={props.alt}
            className="rounded-lg"
            {...props}
        />
    );
}

function Code({ children, ...props }) {
    let codeHTML = highlight(children);
    return (
        <code
            dangerouslySetInnerHTML={{ __html: codeHTML }}
            {...props}
        />
    );
}

function slugify(str) {
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/&/g, "-and-")
        .replace(/[^\w\-]+/g, "")
        .replace(/\-\-+/g, "-");
}

function createHeading(level) {
    const Heading = ({ children }) => {
        let slug = slugify(children);
        return React.createElement(
            `h${level}`,
            { id: slug },
            [
                React.createElement("a", {
                    href: `#${slug}`,
                    key: `link-${slug}`,
                    className: "anchor",
                }),
            ],
            children
        );
    };

    Heading.displayName = `Heading${level}`;

    return Heading;
}

let components = {
    h1: createHeading(1),
    h2: createHeading(2),
    h3: createHeading(3),
    h4: createHeading(4),
    h5: createHeading(5),
    h6: createHeading(6),
    Image: RoundedImage,
    a: CustomLink,
    code: Code,
    Table,
};

export function CustomMDX({ source, publishedAt, readingTime, ...props }) {
    return (
        <>
            <div className="flex flex-col items-start text-sm">
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDate(publishedAt)}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {readingTime}
                </div>
            </div>
            <MDXRemote
                {...props}
                source={source}
                components={{ ...components, ...(props.components || {}) }}
            />
        </>
    );
}
