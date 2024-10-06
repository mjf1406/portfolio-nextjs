import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { APP_NAME } from "utils/constants";
import { Navbar } from "src/components/nav";
import Footer from "src/components/footer";
import { baseUrl } from "./sitemap";
import { routing } from "src/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`,
    },
    description: "This is my portfolio.",
    openGraph: {
        title: "My Portfolio",
        description: "This is my portfolio.",
        url: baseUrl,
        siteName: "My Portfolio",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    return (
        <html
            lang={locale}
            className={cx(
                "text-black bg-white dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Color+Emoji"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased">
                <main className="flex-auto min-w-0 mt-3 flex flex-col w-full m-auto">
                    {children}
                    <Footer params={{ locale }} />
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
