// src/components/TechnicalSkills.tsx
import React from 'react';

interface SkillGroup {
    category: string;
    items: string[];
}

export const TechnicalSkills: React.FC = () => {
    // Ordered array mirroring your professional core competencies
    const skillGroups: SkillGroup[] = [
        {
            category: "Frontend",
            items: ["React", "Vue", "TypeScript", "Next.js", "Angular"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express", "MySQL", "PostgreSQL", "MariaDB"]
        },
        {
            category: "DevOps",
            items: ["Docker", "AWS", "CI/CD"]
        },
        {
            category: "Tools",
            items: ["Git", "VS Code", "Vercel"]
        }
    ];

    return (
        <section id="skills" className="w-full bg-black text-white py-20 px-6 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col mb-12">
                    <h2 className="text-3xl font-black tracking-tight uppercase text-white">
                        Technical Skills
                    </h2>
                    <div className="h-1 w-12 bg-white mt-3"></div>
                </div>

                {/* Responsive Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="bg-zinc-950 border border-zinc-900 rounded p-6 flex flex-col justify-between transition-colors duration-300 hover:border-zinc-800"
                        >
                            {/* Category Subheading */}
                            <div>
                                <h3 className="text-lg font-bold tracking-tight text-zinc-300 mb-4">
                                    {group.category}
                                </h3>

                                {/* Tech Badges Container */}
                                <div className="flex flex-wrap gap-2.5">
                                    {group.items.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="text-xs font-mono font-medium px-3 py-1.5 bg-zinc-900 text-white border border-zinc-800 rounded transition-colors duration-200 hover:border-zinc-600 hover:bg-zinc-900/80 cursor-default select-none"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};