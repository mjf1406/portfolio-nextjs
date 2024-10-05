"use client";

import { useState, useEffect } from "react";
import twemoji from "twemoji";

export function LocaleSwitcher() {
    const [locale, setLocale] = useState("en"); // Default locale

    useEffect(() => {
        // Get the current locale from the URL (if available)
        const currentLocale = window.location.pathname.split("/")[1];
        setLocale(currentLocale || "en"); // Fallback to "en" if no locale is set

        twemoji.parse(document.body);
    }, []);

    const changeLocale = (newLocale: string) => {
        // Change the URL to reflect the new locale
        const newPath = window.location.pathname.replace(
            `/${locale}`,
            `/${newLocale}`
        );
        window.location.href = newPath; // Redirect the user to the new locale page
    };

    return (
        <select
            value={locale}
            onChange={(e) => changeLocale(e.target.value)}
            className="p-1 px-3"
        >
            <option
                className="bg-white dark:bg-black"
                value="en"
            >
                &#x1F1FA;&#x1F1F8; English
            </option>
            <option
                className="bg-white dark:bg-black"
                value="ko"
            >
                &#x1F1F0;&#x1F1F7; 한국어
            </option>
            <option
                className="bg-white dark:bg-black"
                value="zh"
            >
                &#x1F1E8;&#x1F1F3; 简体中文
            </option>
        </select>
    );
}
