import React from 'react';
import { AWARDS } from '../../constants';

const Awards = () => {
    return (
        <section className="bg-white pb-24">
            <div className="section-container">

                {/* Top Hero Banner */}
                <div className="relative w-full max-w-10xl mx-auto mb-20 md:mb-48">
                    {/* Background Image Container */}
                    <div className="relative w-full h-[800px] md:h-[450px] rounded-t-3xl overflow-hidden">
                        <img
                            src="/img/section-awarding.jpg"
                            alt="Awarding Session"
                            className="w-full h-full object-cover object-top"
                        />
                        {/* White Fade Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-[150px] md:h-[250px] bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                    </div>

                    {/* Floating Card with Gradient Stroke */}
                    <div className="absolute -bottom-10 md:-bottom-16 left-1/2 -translate-x-1/2 w-[90%] md:w-[70%] p-[4px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-none rounded-br-none shadow-lg z-10">
                        <div className="bg-white rounded-tr-[calc(3rem-4px)] rounded-bl-[calc(3rem-4px)] rounded-tl-none rounded-br-none p-8 md:p-12 text-center h-full">
                            <h3 className="text-2xl md:text-3xl font-extrabold text-[#164CDE] mb-4">Awarding Session</h3>
                            <p className="text-[#164CDE] text-xs md:text-[15px] font-bold leading-relaxed max-w-3xl mx-auto px-2">
                                The awarding session aims to recognize outstanding achievements and innovations within Jakarta's MICE industry that align with the theme "Empowering Jakarta's Smart Economy through Digital Transformation in the MICE Industry".
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-1 mb-2">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-10 py-2 w-full max-w-sm text-center">
                        <h2 className="text-xl font-bold uppercase tracking-widest">AWARDING CATEGORY</h2>
                    </div>
                </div>

                {/* Awards Vertical List */}
                <div className="flex flex-col gap-10 md:gap-14 max-w-5xl mx-auto px-4 md:px-8">
                    {AWARDS.map((award, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-12">
                            {/* Piagam / Medal Image */}
                            <div className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 relative py-2 mb-4 md:mb-0">
                                <img
                                    src="/img/piagam.jpg"
                                    alt="Piagam Award"
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>

                            {/* Text Card with Gradient Stroke */}
                            <div className="flex-1 w-full p-[4px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-tl-none rounded-br-none shadow-sm flex flex-col justify-center">
                                <div className="bg-white rounded-tr-[calc(2.5rem-4px)] rounded-bl-[calc(2.5rem-4px)] rounded-tl-none rounded-br-none p-8 md:p-10 h-full flex flex-col justify-center">
                                    <h3 className="text-2xl md:text-[1.8rem] font-black text-[#164CDE] mb-4 leading-snug">{award.title}</h3>
                                    <p className="text-[#164CDE] text-base md:text-[17px] font-bold leading-relaxed text-justify md:text-left">
                                        {award.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Awards;
