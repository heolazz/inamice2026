import React from 'react';
import { THROWBACK_EVENTS } from '../../constants';
import { Settings, Globe, Leaf, ChevronRight } from 'lucide-react';
import AnimatedCard from '../ui/AnimatedCard';

const icons = [<Settings key="settings" size={48} />, <Globe key="globe" size={48} />, <Leaf key="leaf" size={48} />];

const Throwback = () => {
    return (
        <section id="about" className="relative pt-44 sm:pt-32 md:pt-24 text-white bg-gradient-to-b from-inamice-blue to-white">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-12">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg text-left">
                            Throwback<br />INAMICE
                        </h2>
                    </div>
                    <div className="lg:w-2/3">
                        <p className="text-lg md:text-xl leading-relaxed opacity-95 text-justify font-medium">
                            As an annual platform, INAMICE fosters collaboration between government, industry,
                            associations, and academic institutions to strengthen Indonesia's MICE ecosystem.
                            Each year, INAMICE adopts themes and discussions that reflect the most relevant and
                            emerging issues in the MICE industry, ensuring that the forum delivers meaningful
                            insights, practical dialogue, and real impact for the development of Indonesia's MICE
                            ecosystem.
                        </p>
                    </div>
                </div>

                {/* Mobile: Horizontal Scroll | Desktop: Grid */}
                <div className="relative">
                    {/* Visual Hint for Scroll on Mobile */}
                    <div className="md:hidden flex items-center justify-end mb-4 text-white/70 animate-pulse text-xs font-bold uppercase tracking-wider">
                        Swipe <ChevronRight size={16} />
                    </div>

                    <div className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible pb-24 scrollbar-hide snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
                        {THROWBACK_EVENTS.map((event, idx) => (
                            <div key={event.year} className="min-w-[85vw] sm:min-w-[350px] md:min-w-full snap-center">
                                <AnimatedCard
                                    index={idx}
                                    className="group relative rounded-2xl overflow-hidden border-[6px] border-inamice-orange bg-black aspect-[3/4] shadow-xl"
                                >
                                    <img
                                        src={event.image}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        alt={event.title}
                                        referrerPolicy="no-referrer"
                                    />
                                    {/* Original Blue Gradient Overlay from Left */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-inamice-blue/90 via-inamice-blue/60 to-transparent p-8 flex flex-col justify-center items-start">
                                        {/* Icon at Top Left of Text Area */}
                                        <div className="text-white mb-6 opacity-90">
                                            {icons[idx]}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl drop-shadow-lg font-bold text-white mb-3 leading-tight text-left">
                                            {event.title}
                                        </h3>
                                        <p className="text-white text-sm md:text-base drop-shadow-lg font-medium leading-relaxed text-left max-w-[90%]">
                                            &quot;{event.theme}&quot;
                                        </p>
                                    </div>
                                </AnimatedCard>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Throwback;
