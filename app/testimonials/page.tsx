"use client";

import { User, X } from "lucide-react";
import React, { useState, useEffect } from "react";

const testimonials = [
    {
        name: "",
        job_title: "2nd Grade Student",
        workplace: "Avalon English",
        quote: "I want my name to be Michael because your name is Michael.",
    },
    {
        name: "",
        job_title: "Lead Native-Korean English Teacher",
        workplace: "Avalon English",
        quote: "You're FINALLY getting your teaching license and a master's degree? You're finally doing what you were born to do. ",
    },
    {
        name: "",
        job_title: "English Teacher",
        workplace: "Avalon English",
        quote: "You are a born teacher.",
    },
    {
        name: "",
        job_title: "6th grade TOEFL student",
        workplace: "Avalon English",
        quote: "Teacher! Teacher! I'm so glad you're back! I've had so many different teachers here, but you! You are the best teacher I've ever had! ",
    },
    {
        name: "",
        job_title: "Head Kindergarten Teacher",
        workplace: "Maple Bear",
        quote: "Be like Mike.",
    },
    {
        name: "",
        job_title: "Head Kindergarten Teacher",
        workplace: "Maple Bear",
        quote: "Michael's patience is... it's f****** angelic",
    },
    {
        name: "",
        job_title: "4th Grade Teaching Partner",
        workplace: "Maple Bear",
        quote: "The parents trust you 100%.",
    },
    {
        name: "",
        job_title: "4th Grade Teaching Partner",
        workplace: "Maple Bear",
        quote: "I wish that my kids had a teacher like you.",
    },
    {
        name: "",
        job_title: "2nd Grade Lead Teacher",
        workplace: "Maple Bear",
        quote: " I think you handle it really well because you see it happen, you deal with it, then you let it go. It doesn’t affect you, the boy, or the class ever again.",
    },
    {
        name: "",
        job_title: "Head English Teacher",
        workplace: "Avalon English",
        quote: "I have to say that what you did with the TOEFL curriculum is really impressive. It's fantastic. ",
    },
    {
        name: "",
        job_title:
            "5th Grade English Homeroom Teacher, de facto Assistant Team Leader",
        workplace: "Younghoon Elementary School",
        quote: "I'm impressed that you saw a problem and took a risk and initiative to fix it.",
    },
    {
        name: "",
        job_title: "4th Grade Student",
        workplace: "Avalon English",
        quote: "I will miss you, Mr. Monkey. Don't forget me.",
    },
];

const studentLetters = [
    "/xuesangpyeonxin/letter-1.webp",
    "/xuesangpyeonxin/letter-2.webp",
    "/xuesangpyeonxin/letter-3.webp",
    "/xuesangpyeonxin/letter-4.webp",
];

export default function Testimonials() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Handle Escape key to close the modal
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            document.addEventListener("keydown", handleKeyDown);
        }

        // Cleanup function to remove event listener
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <section>
            {/* Existing Testimonials Section */}
            <h1 className="font-semibold text-3xl mb-8 tracking-tighter">
                Testimonials
            </h1>
            <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                Discover what my colleagues and students have to say about me
                and the meaningful impact I have had on them. Ask me about the
                story of any!
            </h4>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="border-gray-200 dark:border-gray-600 border rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white">
                                            <User size={20} />
                                        </span>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium">
                                            {testimonial.job_title}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            {testimonial.workplace}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-300 text-base italic">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* New Student Letters Section */}
            <section className="mt-12">
                <h2 className="font-semibold text-2xl mb-8 tracking-tighter">
                    Student Letters
                </h2>
                <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    See the personal touch I have had with some of my students.
                    I regrettably have not taken a picture of all the letters I
                    have received over my teaching career 😭. Click to enlarge
                    and{" "}
                    <span className="inline-block bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md px-2 py-1 text-sm font-mono shadow-md border border-gray-300 dark:border-gray-600">
                        ESC
                    </span>{" "}
                    to close.
                </h4>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {studentLetters.map((letter, index) => (
                        <div
                            key={index}
                            className="cursor-pointer"
                        >
                            <img
                                src={letter}
                                alt={`Student letter ${index + 1}`}
                                className="w-full h-auto object-cover rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                                onClick={() => setSelectedImage(letter)}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Modal for Zoom */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={30} />
                        </button>
                        <img
                            src={selectedImage}
                            alt="Enlarged student letter"
                            className="max-w-full max-h-full"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
