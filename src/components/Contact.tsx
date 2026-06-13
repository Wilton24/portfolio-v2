// src/components/Contact.tsx
import React, { useState } from 'react';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your production form processing backend handler logic here
        console.log("Form Submitted:", formData);
        alert("Message sent! (Check your browser console to see the data data structure)");
    };

    return (
        <section id="contact" className="w-full bg-black text-white py-20 px-6 border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col mb-12">
                    <h2 className="text-3xl font-black tracking-tight uppercase text-white">
                        Get In Touch
                    </h2>
                    <div className="h-1 w-12 bg-white mt-3"></div>
                </div>

                {/* Two-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

                    {/* Left Column: Info & Context */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-xl font-bold tracking-tight text-white mb-4">
                                Let's collaborate on your next system engine.
                            </h3>
                            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                                I am currently open to full-time engineering appointments, consulting contracts,
                                and collaborative full-stack operations. Drop me a line if you have an application
                                architecture that needs building.
                            </p>
                        </div>

                        {/* Direct Info Blocks */}
                        <div className="mt-8 space-y-4 text-xs font-mono tracking-wider text-zinc-500">
                            <div>
                                <span className="block text-white font-sans font-bold text-sm tracking-normal mb-1">LOCATION</span>
                                Naval, Biliran, Philippines
                            </div>
                            <div>
                                <span className="block text-white font-sans font-bold text-sm tracking-normal mb-1">EMAIL</span>
                                cbasher24@gmail.com
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Clean Form Layout */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-zinc-950 p-6 rounded border border-zinc-900">

                        {/* Name Input */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                                placeholder="John Doe"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-colors duration-200"
                                placeholder="john@example.com"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                rows={4}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-zinc-900 text-white text-sm px-4 py-2.5 rounded border border-zinc-800 focus:outline-none focus:border-zinc-500 transition-colors duration-200 resize-none"
                                placeholder="Tell me about your project specs..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="mt-2 w-full bg-white text-black text-xs font-bold tracking-widest uppercase py-3 rounded hover:bg-zinc-200 transition-colors duration-200 cursor-pointer shadow-md"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
};