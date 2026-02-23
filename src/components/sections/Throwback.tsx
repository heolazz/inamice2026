"use client";

import React from 'react';
import { motion } from 'motion/react';
import { THROWBACK_EVENTS } from '../../constants';
import { Settings, Globe, Leaf } from 'lucide-react';

const Throwback = () => {
    const icons = [<Settings size={48} />, <Globe size={48} />, <Leaf size={48} />];

    return (
        <section id="about" className="relative pt-24 text-white bg-gradient-to-b from-inamice-blue to-white">
            <div className="relative z-10 section-container">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                            Throwback<br />INAMICE
                        </h2>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-lg md:text-xl leading-relaxed opacity-95 text-justify font-medium">
                            As an annual platform, INAMICE fosters collaboration between government, industry,
                            associations, and academic institutions to strengthen Indonesia’s MICE ecosystem.
                            Each year, INAMICE adopts themes and discussions that reflect the most relevant and
                            emerging issues in the MICE industry, ensuring that the forum delivers meaningful
                            insights, practical dialogue, and real impact for the development of Indonesia’s MICE
                            ecosystem.                        </p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {THROWBACK_EVENTS.map((event, idx) => (
                        <motion.div
                            key={event.year}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden border-[6px] border-inamice-orange bg-black aspect-[3/4] shadow-xl"
                        >
                            <img
                                src={event.image}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                alt={event.title}
                                referrerPolicy="no-referrer"
                            />
                            {/* Blue Gradient Overlay from Left */}
                            <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue/90 via-inamice-blue/60 to-transparent p-8 flex flex-col justify-center items-start">
                                {/* Icon at Top Left of Text Area */}
                                <div className="text-white mb-6 opacity-90">
                                    {icons[idx]}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight text-left">
                                    {event.title}
                                </h3>
                                <p className="text-white text-sm md:text-base font-medium leading-relaxed text-left max-w-[90%]">
                                    "{event.theme}"
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Throwback;
