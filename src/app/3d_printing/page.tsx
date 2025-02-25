/** @format */
import React from "react";

export const metadata = {
    title: "3D Printing",
    description: "My 3D printing designs.",
};

const models = [
    {
        name: "Board Marker Caddy",
        blurb: "A magnetic holder for 4 dry-erase markers and an eraser.",
        date: "2025/02/10",
        tldr: "This 3D printed board marker caddy holds four dry-erase markers and an eraser. It is designed to magnetically attach behind a desk for quick access during lessons.",
        description:
            "Last year, whenever I needed to give a lesson using the whiteboard, I had to pick up my markers one at a time along with the eraser and carry it over to the whiteboard. Now, I could have put them all into a basket or something, which I did, but I still had to keep the markers on top of a bookcase next to the whiteboard, which was in an awkward spot. The walls are magnetic, though! Gosh, how convenient would it be for it to be magnetic so I could store it behind my desk when not needed, then quickly grab it to move to the whiteboard and stick it right next to the board in the perfect place? \n\nSo, I looked for a product to buy that was magnetic, but there were none that met my requirements. If only I had a 3D printer! Then, I could design it to my exact requirements! And this is the story of how I got into 3D printing. Now, I store my markers on the wall behind my desk, and when I need them, grab 'em and stick 'em next to the whiteboard in the exact right place.",
        images: [
            "/tujin/3d-printing/marker caddy, close up.jpg",
            "/tujin/3d-printing/marker caddy, in hand.jpg",
            "/tujin/3d-printing/marker caddy, whiteboard.jpg",
            "/tujin/3d-printing/marker caddy, behind desk.jpg",
        ],
        url: "",
    },
    {
        name: "Chromebook Charging Station",
        blurb: "A station to hold 16 Chromebooks with integrated cable holders and labels.",
        date: "2025/02/23",
        tldr: "This 3D printed charging station organizes 16 Chromebooks with built-in cable management and labeling. It streamlines device storage and charging in a school setting.",
        description:
            "The school provided metal plate drying racks to be used as Chromebook storage. There was no convenient way to organize the cables and the Chromebooks together, nor to label each Chromebook clearly. So, I designed this. \n\nIt holds a cable for each Chromebook, has an integrated label that can be seen when there is no Chromebook inside, and organizes them into two different colors so each of my two Chromebook Captains know which ones they're responsible for. The label only being visible when there is no Chromebook stowed is not a problem because the Chromebooks themselves have labels on them that are visible when they are stowed.",
        images: [],
        url: "",
    },
    {
        name: "Magnetic Speaker Mount",
        blurb: "A mount that is held on the wall with magnets.",
        date: "2025/02/19",
        tldr: "This 3D printed speaker mount uses strong neodymium magnets to secure speakers on the wall. It provides a modern and non-permanent solution for mounting speakers.",
        description:
            "When I first moved into my new place, I hung my speakers up on the walls using two 3M Command Hooks and some rope. One of my D&D players correctly predicted that they would fall at some point 😂 I then had to accept defeat and install them back onto the speaker stands and place them on the floor behind my couch -- until I got a 3D printer! \n\nI designed these to use four N52 32 x 3 mm neodymium magnets to hold up the speakers and they work splendidly! That is, until I made some level adjustments to the speakers as they were farther away now.",
        images: [
            "/tujin/3d-printing/speaker frame 1.jpg",
            "/tujin/3d-printing/speaker frame 2.jpg",
            "/tujin/3d-printing/speaker frame 3.jpg",
            "/tujin/3d-printing/speaker frame 4.jpg",
        ],
        url: "",
    },
    {
        name: "TTRPG Game Tokens",
        blurb: "Multi-colored and -shaped tokens for TTRPG games.",
        date: "2025/02/24",
        tldr: "These 3D printed tokens are designed for tabletop RPG games. They use distinct colors and shapes to help players quickly identify game pieces.",
        description:
            "In 2020, I moved back to my hometown and started playing D&D with my friends there and we needed a way to identify different tokens. Oh, Tymora! Blessed as I was by Tymora's luck-filled touch, I found 1 cm circular tokens in 6 colors in my childhood bedroom from my time in China when I wanted to create my own TTRPG system with a friend there. So, I wrote numbers on all of the tokens and that was pretty good, but I'm color deficient, so I had a really hard time distinguishing those tokens -- until I got a 3D printer! \n\nWhen designing these, I struggled with how to mesh colors and shapes until I settled on using one color per creature size and different shapes to distinguish enemy types within those sizes, but also ensure that no shape was repeated across colors (creature size). This means that, if anyone needed, they could identify each type by shape alone, the color would merely provide extra, although unnecessary, information about them because the tokens physical size is representative of its size in the game world.",
        images: [],
        url: "",
    },
];

export default function Printing() {
    return (
        <section className="space-y-5">
            <div className="text-base mb-12">
                <h2 className="mb-4 text-3xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100">
                    3D Printing
                </h2>
                <h4 className="text-xl text-gray-600 dark:text-gray-400">
                    Learn about all the 3D models I&apos;ve designed and printed
                    for use in my life.
                </h4>
            </div>
            <div className="grid gap-8 grid-cols-1">
                {models.map((model, index) => (
                    <div
                        key={index}
                        className="relative border-1 border-gray-700 shadow rounded-lg p-6"
                    >
                        {/* Date in the upper-right corner */}
                        <div className="absolute top-2 right-2 text-sm text-gray-500 dark:text-gray-400">
                            {model.date}
                        </div>
                        <h3 className="text-2xl font-semibold mb-1 text-gray-900 dark:text-gray-100">
                            {model.name}
                        </h3>
                        {/* Display the blurb */}
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            {model.blurb}
                        </p>
                        <h2 className="text-lg font-semibold">TL;DR</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-3">
                            {model.tldr}
                        </p>
                        <h2 className="text-lg font-semibold">Description</h2>
                        <div className="text-gray-700 dark:text-gray-200 mb-4">
                            {model.description.split("\n\n").map((para, i) => (
                                <p
                                    key={i}
                                    className="mb-2"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                        {model.url && (
                            <a
                                href={model.url}
                                className="mb-4 inline-block text-blue-500 hover:underline"
                            >
                                Download the model(s) here!
                            </a>
                        )}
                        {model.images.length > 0 && (
                            <div className="grid grid-cols-2 gap-2">
                                {model.images.map((src, i) => (
                                    <img
                                        key={i}
                                        src={src}
                                        alt={`${model.name} image ${i + 1}`}
                                        className="object-cover rounded"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
