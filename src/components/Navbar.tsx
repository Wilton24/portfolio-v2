// src/components/Navbar.tsx
import React from 'react';
import logo from "../assets/wiltonLogo.jpg"

export const Navbar: React.FC = () => {
    // Smooth scroll handler for single-page navigation
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Left Side: Logo/Initials */}
                <div
                    className="text-xl font-black tracking-tighter text-white cursor-pointer select-none"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    {/* `12 */}
                    {/* W. */}
                    <img src={logo} alt="WGB Logo" className="hover:scale-150 transition-transform duration-200 w-16 h-16 rounded-full object-cover" />
                </div>

                {/* Right Side: Navigation Links & Resume Button */}
                <div className="flex items-center gap-6 md:gap-8">
                    <ul className="hidden sm:flex items-center gap-6 md:gap-8 text-sm font-medium text-zinc-400">
                        <li>
                            <button
                                onClick={() => handleScroll('projects')}
                                className="hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                PROJECTS
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll('skills')}
                                className="hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                SKILLS
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleScroll('contact')}
                                className="hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                CONTACT
                            </button>
                        </li>
                    </ul>

                    {/* Action Button */}
                    <a
                        href="/resume.pdf" // Drop your resume.pdf into your public folder
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black text-xs font-bold tracking-wider uppercase px-4 py-2 rounded hover:bg-zinc-200 transition-colors duration-200"
                    >
                        RESUME
                    </a>
                </div>

            </div>
        </nav>
    );
};