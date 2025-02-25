/** @format */

"use client";

import Link from "next/link";
import { navItems } from "./nav";

export default function NavGrid() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Object.entries(navItems)
                .filter(([, { name }]) => name.toLowerCase() !== "home")
                .map(([path, { name, description }]) => (
                    <Link
                        key={path}
                        href={path}
                        className="block p-4 rounded-lg border border-gray-300 dark:border-gray-700 shadow-md transition-all hover:shadow-xl hover:bg-gray-800 hover:text-white"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xl font-semibold">
                                {name}
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {description}
                            </span>
                        </div>
                    </Link>
                ))}
        </div>
    );
}
