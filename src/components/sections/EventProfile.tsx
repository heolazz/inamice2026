import React from 'react';

const EventProfile = () => {
    return (
        <section className="bg-white py-24 relative">
            <div className="section-container">
                {/* Top Part: Title and Info Cards */}
                <div className="flex flex-col md:flex-row items-stretch gap-12 mb-24">
                    {/* Left Title */}
                    <div className="md:w-1/4 flex flex-col justify-center items-center md:items-start whitespace-nowrap">
                        <h2 className="text-5xl md:text-[3.5rem] font-extrabold text-inamice-blue uppercase leading-[1.1] tracking-tighter text-center md:text-left drop-shadow-sm">
                            Event
                            <br />
                            Profile
                        </h2>
                    </div>

                    {/* Right Cards */}
                    <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Title */}
                        <div className="p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-[1.5rem] shadow-sm min-h-[160px]">
                            <div className="bg-white rounded-[calc(1.5rem-5px)] p-6 lg:p-8 flex flex-col justify-start items-center text-center h-full">
                                <h3 className="text-xl lg:text-2xl font-extrabold text-inamice-blue mb-4 lg:mb-6 uppercase tracking-wider">TITLE</h3>
                                <p className="text-lg lg:text-[1.3rem] font-extrabold text-inamice-blue mt-auto leading-tight">INAMICE 2026</p>
                            </div>
                        </div>

                        {/* Card 2: Themes */}
                        <div className="p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-[1.5rem] shadow-sm min-h-[160px]">
                            <div className="bg-white rounded-[calc(1.5rem-5px)] p-6 lg:p-8 flex flex-col justify-start items-center text-center h-full">
                                <h3 className="text-xl lg:text-2xl font-extrabold text-inamice-blue mb-4 lg:mb-6 uppercase tracking-wider">THEMES</h3>
                                <p className="text-xs md:text-[14px] lg:text-[15px] font-extrabold text-inamice-blue leading-snug mt-auto px-1">
                                    “Empowering Jakarta’s Smart Economy through Digital Transformation in the MICE Industry”
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Date */}
                        <div className="p-[5px] bg-gradient-to-r from-inamice-blue to-inamice-orange rounded-[1.5rem] shadow-sm min-h-[160px]">
                            <div className="bg-white rounded-[calc(1.5rem-5px)] p-6 lg:p-8 flex flex-col justify-start items-center text-center h-full">
                                <h3 className="text-xl lg:text-2xl font-extrabold text-inamice-blue mb-4 lg:mb-6 uppercase tracking-wider">DATE</h3>
                                <p className="text-lg lg:text-[1.3rem] font-extrabold text-inamice-blue mt-auto leading-tight">June 17<sup className="text-xs lg:text-sm -top-2">th</sup> 2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Part: Partners */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
                    {/* Supported By */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-base lg:text-lg font-extrabold text-inamice-blue mb-4 uppercase tracking-wider text-center">SUPPORTED BY</h3>
                        <div className="w-full h-80 border-[2px] border-inamice-orange rounded-tl-sm rounded-br-sm rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-white flex items-center justify-center p-8">
                            {/* Logo placeholders would go here */}
                        </div>
                    </div>

                    {/* Sponsored By */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-base lg:text-lg font-extrabold text-inamice-blue mb-4 uppercase tracking-wider text-center">SPONSORED BY</h3>
                        <div className="w-full h-80 border-[2px] border-inamice-orange rounded-tl-sm rounded-br-sm rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-white flex items-center justify-center p-8">
                            {/* Logo placeholders would go here */}
                        </div>
                    </div>

                    {/* Media Partner */}
                    <div className="flex flex-col items-center">
                        <h3 className="text-base lg:text-lg font-extrabold text-inamice-blue mb-4 uppercase tracking-wider text-center">MEDIA PARTNER</h3>
                        <div className="w-full h-80 border-[2px] border-inamice-orange rounded-tl-sm rounded-br-sm rounded-tr-[2.5rem] rounded-bl-[2.5rem] bg-white flex items-center justify-center p-8">
                            {/* Logo placeholders would go here */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventProfile;
