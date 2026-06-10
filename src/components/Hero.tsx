// src/components/Hero.tsx
import React from 'react';
import profile_img from "../../public/profile_img.png";

export const Hero: React.FC = () => {
    return (
        <section className="w-full bg-black text-white py-20 md:py-32 px-6">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">

                {/* Left Side: Professional Profile Picture Wrap */}
                <div className="relative group shrink-0">
                    {/* Subtle background glow effect on hover */}
                    <div className="absolute -inset-1 bg-linear-to-r from-zinc-700 to-zinc-800 rounded-full blur opacity-30 group-hover:opacity-75 transition duration-500"></div>

                    <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-zinc-800 bg-zinc-900">
                        <img
                            src={profile_img}
                            alt="Wilton Gary B. Batiquin"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Right Side: Clean Typography & Intro */}
                <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">

                    {/* Status Badge */}
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-900 text-zinc-400 border border-zinc-800 mb-6 select-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Available for Opportunities
                    </span>

                    {/* Main Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white max-w-3xl">
                        Building robust, high-performance web applications.
                    </h1>

                    {/* Subheading / Description */}
                    <p className="mt-6 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl">
                        I am a Full-Stack Software Developer specialized in engineering scalable backend architectures,
                        clean system APIs, and smooth, responsive user interfaces. I bridge the gap between heavy,
                        optimized server execution and interactive frontend experiences.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-black text-sm font-bold tracking-wide px-6 py-3 rounded hover:bg-zinc-200 transition-all duration-200 cursor-pointer shadow-lg"
                        >
                            VIEW MY WORK
                        </button>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-transparent text-white text-sm font-bold tracking-wide px-6 py-3 rounded border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/50 transition-all duration-200 cursor-pointer"
                        >
                            LET'S TALK
                        </button>
                    </div>

                </div>

            </div>
        </section>
    );
};