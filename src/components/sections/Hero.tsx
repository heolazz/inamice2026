import React from 'react';
import InamiceLogo from '../ui/InamiceLogo';

const Hero = () => {
    return (
        <section className="relative pt-24 lg:pt-24 px-4 md:px-8 bg-gradient-to-b from-white via-inamice-blue/20 to-inamice-blue">
            <div className="max-w-10xl mx-auto flex flex-col items-center text-center relative">
                {/* The top rounded container for the hero image and gradient background */}
                <div className="w-full relative rounded-tl-[2rem] rounded-tr-[2rem] sm:rounded-tl-[2.5rem] sm:rounded-tr-[2.5rem] md:rounded-tl-[3.5rem] md:rounded-tr-[3.5rem] overflow-hidden min-h-[450px] sm:min-h-[550px] md:min-h-[650px] flex flex-col items-center justify-center bg-gradient-to-b from-[#4065e0] to-inamice-blue">
                    {/* Foreground Image blended with blur, fade, and slight darkness */}
                    <div
                        className="absolute inset-0 z-0 bg-black/20"
                        style={{
                            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)',
                            maskImage: 'linear-gradient(to bottom, black 0%, transparent 85%)'
                        }}
                    >
                        <img
                            src="/img/section-about.jpg"
                            className="w-full h-full object-cover blur-[2px] opacity-70 mix-blend-luminosity"
                            alt="INAMICE 2026 Event"
                        />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center justify-center pt-24 pb-32">

                        <div className="flex justify-center w-full mb-8 sm:mb-10 mt-8 sm:mt-12 md:mt-0 relative overflow-visible">
                            <div className="p-2 sm:p-4 md:p-8 w-full max-w-full flex justify-center">
                                <InamiceLogo theme="white" size="xl" />
                            </div>
                        </div>

                        <div className="text-lg md:text-2xl font-bold mb-4 sm:mb-8 text-white tracking-wide px-6 py-2">
                            June 17<sup className="text-xs sm:text-sm md:text-xl">th</sup> 2026
                        </div>
                    </div>
                </div>

                {/* Floating Card */}
                <div className="absolute -bottom-36 sm:-bottom-24 md:bottom-2 left-1/2 -translate-x-1/2 w-[90%] md:w-full max-w-4xl bg-white text-inamice-blue py-6 px-6 sm:px-8 md:py-7 md:px-12 rounded-tl-md rounded-br-md rounded-tr-[2rem] rounded-bl-[2rem] sm:rounded-tr-[3rem] sm:rounded-bl-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] text-center border-[3px] border-t-inamice-blue border-inamice-blue z-20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-shadow">
                    <p className="text-[13px] sm:text-sm md:text-lg font-bold leading-relaxed px-1 sm:px-2 md:px-8 text-justify">
                        Established in 2014 by the MICE Study Program of Politeknik Negeri Jakarta with continuous support from the Ministry of Tourism and MICE industry associations, INAMICE has grown into a strategic forum for key stakeholders in the Meetings, Incentives, Conventions, and Exhibitions (MICE) industry.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
