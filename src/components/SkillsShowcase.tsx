"use client";

import { useState } from "react";
import ProgressCircular from "./ProgressCircular";

function SkillsShowcase() {
    const [showAll, setShowAll] = useState(false);

    const skills = [
        { name: "HTML", value: 90 },
        { name: "CSS", value: 80 },
        { name: "Tailwind", value: 70 },
        { name: "Typescript", value: 90 },
        { name: "React", value: 60 },
        { name: "Next.js", value: 65 },
        { name: "SEO", value: 60 },
        { name: "Figma", value: 50 },
    ];

    const toggleSkillsDisplay = () => {
        setShowAll(!showAll);
    };

    const displayedSkills = showAll ? skills : skills.slice(0, 4);

    return (
        <section
            id="skills"
            className="container px-4 mx-auto my-4 md:my-16 md:px-[3rem] lg:px-[12rem] min-h-screen"
        >
            <h1 className="my-10 text-3xl font-semibold md:my-20 transition duration-300 hover:text-cyan-400">
                My Skills
            </h1>

            {/* Skills grid for large screens */}
            <div className="hidden grid-cols-2 gap-4 mb-6 lg:grid justify-items-center lg:grid-cols-4 lg:gap-8">
                {skills.map((skill, index) => (
                    <ProgressCircular key={index} name={skill.name} value={skill.value} />
                ))}
            </div>

            {/* Skills grid for smaller screens */}
            <div className="grid grid-cols-2 gap-4 mb-6 lg:hidden justify-items-center">
                {displayedSkills.map((skill, index) => (
                    <ProgressCircular key={index} name={skill.name} value={skill.value} />
                ))}
            </div>

            {/* Button to toggle display */}
            <div className="flex justify-center mt-4 lg:hidden">
                <button
                    className="btn-grad px-4 py-2 rounded text-white bg-gradient-to-r from-purple-500 to-red-500 transition duration-300 hover:bg-gradient-to-l"
                    onClick={toggleSkillsDisplay}
                >
                    {showAll ? "Show Less" : "Show All"}
                </button>
            </div>
        </section>
    );
}

export default SkillsShowcase;
