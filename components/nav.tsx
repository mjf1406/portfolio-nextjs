import Link from "next/link";

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
    "/testimonials": {
        name: "testimonials",
    },
    "/webapps": {
        name: "webapps",
    },
};

export function Navbar() {
    return (
        <aside className="z-20 sticky top-0 bg-white/40 dark:bg-black mb-16 tracking-tight border-b-4 border-white/25 dark:border-white/15">
            <div className="lg:sticky lg:top-20">
                <nav
                    className="flex flex-row items-center justify-center relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                >
                    <div className="flex flex-row space-x-0 pr-10">
                        {Object.entries(navItems).map(([path, { name }]) => {
                            return (
                                <Link
                                    key={path}
                                    href={path}
                                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-400 flex align-middle relative py-1 px-2 m-1"
                                >
                                    {name}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </aside>
    );
}
