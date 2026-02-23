import React from 'react';
import { ARTICLES } from '../../constants';

const Articles = () => {
    return (
        <section id="articles" className="bg-white pb-32">
            <div className="section-container">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-1 mb-2">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-10 py-2 w-full max-w-sm text-center">
                        <h2 className="text-xl font-bold uppercase tracking-widest">ARTICLES</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {ARTICLES.map((article, idx) => (
                        <div key={idx} className="group cursor-pointer flex flex-col h-full">
                            {/* Card Wrapper with Gradient Stroke */}
                            <div className="p-[4px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-none rounded-br-none overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-all duration-300 h-full">

                                <div className="bg-white rounded-tr-[calc(2.5rem-4px)] rounded-bl-[calc(2.5rem-4px)] rounded-tl-none rounded-br-none overflow-hidden flex flex-col h-full">
                                    {/* Image Area */}
                                    <div className="relative h-48 md:h-56 w-full overflow-hidden">
                                        <img
                                            src={article.image}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            alt={article.title}
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-grow relative bg-white">
                                        {/* Date Badge */}
                                        <div className="bg-inamice-orange text-white text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-sm w-fit mb-4">
                                            {article.date}
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-[1rem] md:text-[1.1rem] font-bold text-inamice-blue leading-snug mb-6 group-hover:text-inamice-orange transition-colors">
                                            {article.title}
                                        </h3>

                                        {/* Source */}
                                        <span className="text-inamice-blue font-bold text-[11px] md:text-xs mt-auto text-right w-full block">
                                            {article.source}
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Articles;
