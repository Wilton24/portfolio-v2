// src/components/ProjectsGrid.tsx
import React from 'react';

interface Project {
    title: string;
    description: string;
    tags: string[];
    liveLink?: string;
    githubLink?: string;
}

export const ProjectsGrid: React.FC = () => {
    // Array holding your project data for easy updates later
    const projects: Project[] = [
        {
            title: "Portfolio V2",
            description: "A high-performance, minimalist developer portfolio built using React 19, Vite, TypeScript, and Tailwind CSS v4. Features smooth single-page navigation and optimized dark theme rendering.",
            tags: ["React", "TypeScript", "Tailwind v4", "Vite"],
            githubLink: "https://github.com",
        },
        {
            title: "Full-Stack Enterprise System",
            description: "Engineered a scalable web application featuring a robust Node.js/Express backend API and an interactive React/Vue frontend interface. Optimized database queries and containerized via Docker.",
            tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
            liveLink: "https://example.com",
            githubLink: "https://github.com",
        },
        {
            title: "Automated Data Processing Pipeline",
            description: "Developed a secure internal systems analyst utility to clean, parse, and structure massive local datasets. Improved execution speed and reporting precision.",
            tags: ["TypeScript", "MariaDB", "Git", "REST API"],
            githubLink: "https://github.com",
        }
    ];

    return (
        <section id="projects" className="w-full bg-black text-white py-20 px-6 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col mb-12">
                    <h2 className="text-3xl font-black tracking-tight uppercase text-white">
                        Selected Work
                    </h2>
                    <div className="h-1 w-12 bg-white mt-3"></div>
                </div>

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-zinc-950 border border-zinc-900 rounded p-6 transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 group"
                        >
                            {/* Card Title */}
                            <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-zinc-300 transition-colors duration-200">
                                {project.title}
                            </h3>

                            {/* Card Description */}
                            <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag, tagIdx) => (
                                    <span
                                        key={tagIdx}
                                        className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Links */}
                            <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center gap-4 text-xs font-bold tracking-wider uppercase">
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white hover:underline flex items-center gap-1"
                                    >
                                        Live Demo ↗
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white hover:underline flex items-center gap-1"
                                    >
                                        Source Code
                                    </a>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};