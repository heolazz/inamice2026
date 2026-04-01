import React from 'react';

const EventProfile = () => {
    return (
        <section className="bg-white pt-4 md:pt-8 pb-14 md:pb-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Top Part: Title and Info Cards */}
                <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-12 mb-16 md:mb-36">
                    {/* Left Title */}
                    <div className="md:w-1/4 flex flex-col justify-center items-center md:items-start whitespace-nowrap">
                        <h2 className="text-4xl md:text-[3.5rem] font-extrabold text-inamice-blue-3 uppercase leading-[1.1] tracking-tighter text-center md:text-left drop-shadow-sm">
                            Event
                            <br />
                            Profile
                        </h2>
                    </div>

                    {/* Right Cards */}
                    <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4 sm:gap-4 md:gap-6">
                        {/* Card 1: Title */}
                        <div className="p-[4px] md:p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-[1.25rem] md:rounded-[1.5rem] shadow-sm">
                            <div className="bg-white rounded-[calc(1.25rem-4px)] md:rounded-[calc(1.5rem-5px)] p-5 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center h-full min-h-[100px] md:min-h-[160px]">
                                <h3 className="text-lg sm:text-base md:text-xl lg:text-2xl font-extrabold text-inamice-blue-3 mb-2 uppercase tracking-wider">TITLE</h3>
                                <div className="flex-1 flex items-center justify-center w-full">
                                    <p className="text-lg sm:text-base md:text-lg lg:text-[1.3rem] font-extrabold text-inamice-blue-3 leading-tight">INAMICE 2026</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Themes */}
                        <div className="p-[4px] md:p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-[1.25rem] md:rounded-[1.5rem] shadow-sm">
                            <div className="bg-white rounded-[calc(1.25rem-4px)] md:rounded-[calc(1.5rem-5px)] p-5 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center h-full min-h-[100px] md:min-h-[160px]">
                                <h3 className="text-lg sm:text-base md:text-xl lg:text-2xl font-extrabold text-inamice-blue-3 mb-2 uppercase tracking-wider">THEMES</h3>
                                <div className="flex-1 flex items-center justify-center w-full">
                                    <p className="text-sm sm:text-xs md:text-[14px] lg:text-[15px] font-extrabold text-inamice-blue-3 leading-snug px-1 md:px-1">
                                        &ldquo;Empowering Jakarta&rsquo;s Smart Economy through Digital Transformation in the MICE Industry&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3: Date */}
                        <div className="p-[4px] md:p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-[1.25rem] md:rounded-[1.5rem] shadow-sm">
                            <div className="bg-white rounded-[calc(1.25rem-4px)] md:rounded-[calc(1.5rem-5px)] p-5 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center h-full min-h-[100px] md:min-h-[160px]">
                                <h3 className="text-lg sm:text-base md:text-xl lg:text-2xl font-extrabold text-inamice-blue-3 mb-2 uppercase tracking-wider">DATE</h3>
                                <div className="flex-1 flex items-center justify-center w-full">
                                    <p className="text-lg sm:text-base md:text-lg lg:text-[1.3rem] font-extrabold text-inamice-blue-3 leading-tight">June 17<sup className="text-xs lg:text-sm -top-2">th</sup> 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Part: Partners */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-14">
                    {/* Supported By */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-sm md:text-base lg:text-2xl font-extrabold text-inamice-blue-3 mb-3 md:mb-4 uppercase tracking-wider text-center">SUPPORTED BY</h3>
                        <div className="w-full h-48 md:h-80 border-[3px] border-inamice-orange rounded-tl-sm rounded-br-sm rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[2.5rem] md:rounded-bl-[2.5rem] bg-white flex items-center justify-center p-5 md:p-8">
                            {/* Logo placeholders would go here */}
                        </div>
                    </div>

                    {/* Sponsored By */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-sm md:text-base lg:text-2xl font-extrabold text-inamice-blue-3 mb-3 md:mb-4 uppercase tracking-wider text-center">SPONSORED BY</h3>
                        <div className="w-full h-48 md:h-80 border-[3px] border-inamice-orange rounded-tl-sm rounded-br-sm rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[2.5rem] md:rounded-bl-[2.5rem] bg-white flex items-center justify-center p-5 md:p-8">
                            {/* Logo placeholders would go here */}
                        </div>
                    </div>

                    {/* Media Partner */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-sm md:text-base lg:text-2xl font-extrabold text-inamice-blue-3 mb-3 md:mb-4 uppercase tracking-wider text-center">MEDIA PARTNER</h3>
                        <div className="w-full h-48 md:h-80 border-[3px] border-inamice-orange rounded-tl-sm rounded-br-sm rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[2.5rem] md:rounded-bl-[2.5rem] bg-white flex items-center justify-center p-5 md:p-8">
                            {/* Logo placeholders would go here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventProfile;
