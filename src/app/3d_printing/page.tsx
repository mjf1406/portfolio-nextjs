/** @format */

export const metadata = {
    title: "3D Printing",
    description: "My 3D printing designs.",
};

const models = [
    {
        name: "Board Marker Caddy",
        blurb: "A magnetic holder for 4 dry-erase markers and an eraser.",
        date: "",
        description:
            "Last year, whenever I needed to give a lesson using the whiteboard, I had to pick up my markers one at a time along with the eraser and carry it over to the whiteboard.",
        image: "",
    },
    {
        name: "Chromebook Charging Station",
        blurb: "A station to hold 16 Chromebook with integrated cable holders and labels.",
        date: "",
        description: "",
        image: "",
    },
    {
        name: "Magnetic Speaker Mount",
        blurb: "A mount that is held on the wall with magnets.",
        date: "",
        description: "",
        image: "",
    },
    {
        name: "TTRPG Game Tokens",
        blurb: "Multi-colored and -shaped tokens for TTRPG games.",
        date: "",
        description: "",
        image: "",
    },
];

export default function Printing() {
    return (
        <section className="space-y-5">
            <div className="text-base">
                {/* about_title */}
                <h2 className="mb-8 text-3xl font-semibold tracking-tighter">
                    3D Printing
                </h2>
                {/* about_subtitle */}
                <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-12">
                    Learn about all the 3D models I&apos;ve designed and printed
                    for use in my life.
                </h4>
                {/* about_content */}
            </div>
        </section>
    );
}
