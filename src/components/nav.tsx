"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = {
    "/": {
        name: "home",
    },
    "/about": {
        name: "about",
    },
    "/blog": {
        name: "blog",
    },
    "/philosophy": {
        name: "philosophy",
    },
    "/projects": {
        name: "projects",
    },
    "/resume": {
        name: "resume",
    },
    "/stories": {
        name: "stories",
    },
    "/testimonials": {
        name: "testimonials",
    },
    "/webapps": {
        name: "webapps",
    },
};

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        // Reset overflow and close menu when pathname changes
        setIsOpen(false);
        document.body.style.overflow = "unset";
    }, [pathname]);

    useEffect(() => {
        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? "hidden" : "unset";
    };

    return (
        <>
            <aside className="z-30 sticky top-0 bg-white dark:bg-black mb-16 tracking-tight border-b-4 border-black/15 dark:border-white/15">
                <div className="lg:sticky lg:top-20">
                    <nav className="flex flex-row items-center justify-between md:justify-center relative px-4 py-4 md:py-1">
                        {/* Hamburger Button for Mobile */}
                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-black dark:text-white focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence
                                    mode="wait"
                                    initial={false}
                                >
                                    <motion.div
                                        key={isOpen ? "open" : "closed"}
                                        initial={{ opacity: 0, rotate: -180 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 180 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isOpen ? (
                                            <X size={24} />
                                        ) : (
                                            <Menu size={24} />
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <AnimatePresence>
                            {(isOpen || !isMobile) && (
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 absolute md:relative top-full left-0 md:top-auto md:left-auto w-full md:w-auto bg-white dark:bg-black md:bg-transparent p-4 md:p-0"
                                >
                                    {Object.entries(navItems).map(
                                        ([path, { name }]) => (
                                            <Link
                                                key={path}
                                                href={path}
                                                className="transition-all hover:text-neutral-400 flex align-middle relative py-1 px-2"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {name}
                                            </Link>
                                        )
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </nav>
                </div>
            </aside>

            {/* Blurred Backdrop */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20"
                        onClick={toggleMenu}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
