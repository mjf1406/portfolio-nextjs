import { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";
import { routing } from "src/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
    title: "Testimonials",
    description:
        "Discover what my colleagues and students have to say about me.",
};

export default function TestimonialsPage({
    params: { locale },
}: {
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    return <TestimonialsClient />;
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
