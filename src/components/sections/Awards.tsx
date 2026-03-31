import React from 'react';
import { AWARDS } from '../../constants';

const Awards = () => {
    return (
        <section id="awarding" className="bg-white pb-16 md:pb-24">
            {/* Top Hero Banner */}
            <div className="relative w-full max-w-10xl mx-auto px-4 md:px-8 h-[420px] sm:h-[500px] md:h-[600px] mb-8 md:mb-16">
                {/* Background Image Container */}
                <div className="absolute inset-2 sm:inset-4 md:inset-x-8 rounded-2xl md:rounded-3xl overflow-hidden z-0">
                    <img
                        src="/img/section-awarding.jpg"
                        alt="Awarding Session"
                        className="w-full h-full object-cover opacity-90"
                    />
                    {/* Fading gradient at the bottom so it blends into white */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                </div>

                {/* Floating Card with Gradient Stroke */}
                <div className="relative z-10 w-full h-full flex items-center justify-center px-2 sm:px-4 translate-y-6 md:translate-y-12">
                    <div className="p-[4px] md:p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[3rem] rounded-bl-[3rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] rounded-tl-sm rounded-br-sm shadow-2xl w-full max-w-4xl">
                        <div className="bg-white w-full rounded-tr-[calc(3rem-4px)] rounded-bl-[calc(3rem-4px)] md:rounded-tr-[calc(5rem-5px)] md:rounded-bl-[calc(5rem-5px)] rounded-tl-sm rounded-br-sm p-5 sm:p-6 md:p-10 text-center">
                            <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-inamice-blue-1 mb-3 md:mb-6 leading-tight max-w-2xl mx-auto uppercase">
                                Awarding Session
                            </h3>
                            <p className="text-inamice-blue-1 font-semibold text-[14px] sm:text-base md:text-[20px] leading-relaxed max-w-3xl mx-auto text-justify">
                                The awarding session aims to recognize outstanding achievements and innovations within Jakarta&rsquo;s MICE industry that align with the theme &ldquo;Empowering Jakarta&rsquo;s Smart Economy through Digital Transformation in the MICE Industry&rdquo;.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-container">

                {/* Section Header */}
                <div className="flex flex-col items-center mb-10 md:mb-16 -mt-8 md:-mt-0">
                    <div className="flex items-center gap-1 mb-2">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-10 py-2 w-full max-w-sm text-center">
                        <h2 className="text-lg md:text-xl font-bold uppercase tracking-widest">AWARDING CATEGORY</h2>
                    </div>
                </div>

                {/* Awards Vertical List */}
                <div className="flex flex-col gap-8 md:gap-14 max-w-5xl mx-auto px-2 sm:px-4 md:px-8">
                    {AWARDS.map((award, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-12">
                            {/* Piagam / Medal Image */}
                            <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-56 md:h-56 flex-shrink-0 relative py-1 md:py-2 mb-2 md:mb-0">
                                <img
                                    src="/img/piagam.jpg"
                                    alt="Piagam Award"
                                    className="w-full h-full object-contain mix-blend-multiply"
                                />
                            </div>

                            {/* Text Card with Gradient Stroke */}
                            <div className="flex-1 w-full p-[3px] md:p-[4px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-tr-[2rem] rounded-bl-[2rem] md:rounded-tr-[2.5rem] md:rounded-bl-[2.5rem] rounded-tl-none rounded-br-none shadow-sm flex flex-col justify-center">
                                <div className="bg-white rounded-tr-[calc(2rem-3px)] rounded-bl-[calc(2rem-3px)] md:rounded-tr-[calc(2.5rem-4px)] md:rounded-bl-[calc(2.5rem-4px)] rounded-tl-none rounded-br-none p-5 sm:p-6 md:p-10 h-full flex flex-col justify-center">
                                    <h3 className="text-lg sm:text-xl md:text-[1.8rem] font-black text-inamice-blue-1 mb-2 md:mb-4 leading-snug">{award.title}</h3>
                                    <p className="text-inamice-blue-1 text-[13px] sm:text-sm md:text-[17px] font-bold leading-relaxed text-justify md:text-left">
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
