import { LocaleSwitcher } from "./LocaleSwitcher";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Props } from "utils/types";

function ArrowIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
            />
        </svg>
    );
}

export default function Footer({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    const t = useTranslations("footer");

    return (
        <footer className="mb-16 w-full m-auto text-center">
            <ul className="font-sm mt-8 flex items-center justify-center flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="/rss"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">{t("rss")}</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/mjf1406"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">{t("github")}</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/mfitz06/"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">{t("linkedin")}</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://vercel.com/templates/next.js/portfolio-starter-kit"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">{t("template")}</p>
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/mjf1406/portfolio-nextjs"
                    >
                        <ArrowIcon />
                        <p className="ml-2 h-7">{t("source")}</p>
                    </a>
                </li>
            </ul>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                <LocaleSwitcher />
            </p>
            <p className="text-xs mt-2 max-w-sm m-auto text-neutral-600 dark:text-neutral-300">
                {t("translation_note")}
            </p>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                © {new Date().getFullYear()} {t("license")}
            </p>
        </footer>
    );
}
