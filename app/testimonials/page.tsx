import { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
    title: "Testimonials",
    description:
        "Discover what my colleagues and students have to say about me.",
};

export default function TestimonialsPage() {
    return <TestimonialsClient />;
}