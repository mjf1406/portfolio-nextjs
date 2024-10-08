import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { baseUrl } from "./sitemap";
import { APP_NAME } from "utils/constants";
import { Navbar } from "src/components/nav";
import Footer from "src/components/footer";

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
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={cx(
                "text-black bg-white dark:text-white dark:bg-black",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="antialiased">
                <main className="flex-auto min-w-0 mt-3 flex flex-col w-full m-auto">
                    <Navbar />
                    <div className="max-w-xl m-auto flex-auto justify-center items-center w-full">
                        <div className="m-5">{children}</div>
                    </div>
                    <Footer />
                    <Analytics />
                    <SpeedInsights />
                </main>
            </body>
        </html>
    );
}
