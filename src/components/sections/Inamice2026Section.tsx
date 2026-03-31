import React from 'react';
import Image from 'next/image';
import { FileText, Globe, Users, Award, MapPin, Calendar, ClipboardList, Lightbulb, Target, Network } from 'lucide-react';

const Inamice2026Section = () => {
    return (
        <section id="inamice-2026" className="bg-white">
            {/* 1. Intro Section with Blue Background */}
            <div className="relative py-20">
                {/* Background Image & Overlay */}
                <div className="absolute inset-4 md:inset-x-8 z-0 rounded-t-[3rem] overflow-hidden">
                    <Image
                        src="/img/img207.jpg"
                        alt="Jakarta Background"
                        fill
                        className="object-cover"
                        quality={80}
                    />
                    {/* Subtle Blue Nuance Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-inamice-blue/60 to-transparent" />
                    {/* Gradient overlay that fades away towards the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md max-w-4xl mx-auto leading-tight px-4 md:px-0">
                            “Empowering Jakarta’s Smart Economy through <br className="hidden md:block" />
                            Digital Transformation in the MICE Industry”
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
                        {/* Left: Image Card */}
                        <div className="md:w-5/12">
                            <div className="rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-sm rounded-br-sm p-[4px] bg-inamice-blue shadow-xl h-full min-h-[250px] md:min-h-[300px] flex">
                                <div className="w-full flex-1 rounded-tr-[calc(5rem-3px)] rounded-bl-[calc(5rem-3px)] rounded-tl-none rounded-br-none overflow-hidden relative">
                                    <Image
                                        src="/img/section-inamice.jpg"
                                        alt="Conference"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Text Card */}
                        <div className="md:w-7/12">
                            <div className="bg-white rounded-[2rem] border-[4px] border-inamice-blue p-8 md:p-10 h-full flex items-center shadow-xl">
                                <p className="text-inamice-blue-1 text-xl leading-relaxed font-semibold text-justify">
                                    INAMICE 2026 positions the MICE industry as a strategic entry point to support Jakarta’s Smart Economy agenda. Rather than focusing on technical or operational discussions, the forum serves as a strategic platform to align policy direction, ecosystem readiness, and implementation learning relevant to the future development of Jakarta’s MICE industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why This Theme Matters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Decorative Header */}
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center gap-1 mb-2">
                        <Image src="/img/acc-blue.jpg" alt="ornament" width={24} height={24} className="object-contain mix-blend-multiply" />
                        <Image src="/img/acc-orange.jpg" alt="ornament" width={16} height={16} className="object-contain mix-blend-multiply" />
                        <Image src="/img/acc-blue.jpg" alt="ornament" width={24} height={24} className="object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-8 py-2 w-full max-w-md text-center">
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest">WHY THIS THEME MATTERS</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
                    {/* Left Image (Statue) */}
                    <div className="h-[400px] rounded-t-full p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange shadow-md">
                        <div className="w-full h-full rounded-t-[calc(9999px-3px)] overflow-hidden relative">
                            <Image
                                src="/img/img671.jpg"
                                alt="Statue"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="text-inamice-blue-3 space-y-6 text-justify leading-relaxed font-semibold text-[15px]">
                        <p>
                            According to the RPJPD 2025–2045, Jakarta aims to become a Global City with Smart Economy as a key direction. As Indonesia’s largest economic contributor, its economy is driven by service sectors based on mobility, interaction, and business activity. The MICE industry connects these sectors and shows strong economic potential through its projected growth.
                        </p>
                        <p>
                            However, despite its relevance, MICE has not been clearly positioned within Jakarta’s Smart Economy framework. Digital transformation remains largely operational rather than integrated with measurable economic impact. Therefore, a clearer strategy is needed for Jakarta to systematically capture and optimize this growing market through a data-driven approach.
                        </p>
                    </div>

                    {/* Right Image (Monas) */}
                    <div className="h-[400px] rounded-t-full p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange shadow-md">
                        <div className="w-full h-full rounded-t-[calc(9999px-3px)] overflow-hidden relative">
                            <Image
                                src="/img/img677.jpg"
                                alt="Monas"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Objectives */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
                <h2 className="text-2xl md:text-3xl font-extrabold text-inamice-blue-3 mb-12 text-center uppercase tracking-wide">OBJECTIVES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <ClipboardList size={28} />, text: "To position the MICE industry as a strategic contributor to Jakarta's Smart Economy" },
                        { icon: <Lightbulb size={28} />, text: "To align perspectives between policy enablers and the MICE ecosystem" },
                        { icon: <Target size={28} />, text: "To explore practical directions for digital transformation in the MICE industry" },
                        { icon: <Network size={28} />, text: "To strengthen collaboration among government, industry, and academia" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border-[3px] border-inamice-blue rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-none rounded-br-none p-8 pt-16 flex flex-col items-center text-center h-full hover:shadow-xl transition-all relative overflow-hidden group">
                            {/* Orange Icon Box at Top Left */}
                            <div className="absolute top-0 left-0 bg-inamice-orange text-white p-4 rounded-br-2xl shadow-sm">
                                {item.icon}
                            </div>

                            <p className="text-inamice-blue-3 font-extrabold text-[15px] leading-relaxed flex-grow flex items-center">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Date & Venue Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-32">
                {/* Decorative Header */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex items-center gap-1 mb-2">
                        <Image src="/img/acc-blue.jpg" alt="ornament" width={24} height={24} className="object-contain mix-blend-multiply" />
                        <Image src="/img/acc-orange.jpg" alt="ornament" width={16} height={16} className="object-contain mix-blend-multiply" />
                        <Image src="/img/acc-blue.jpg" alt="ornament" width={24} height={24} className="object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-8 py-2 w-full max-w-lg text-center shadow-md">
                        <h3 className="text-lg md:text-2xl font-bold uppercase tracking-[0.2em]">DATE & VENUE</h3>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-16">
                        {/* Venue */}
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-inamice-blue-1 rounded-full flex items-center justify-center text-white shadow-xl flex-shrink-0">
                                <MapPin size={28} />
                            </div>
                            <div className="text-inamice-blue-3">
                                <p className="font-extrabold text-xl md:text-2xl leading-tight">Diamond Ballroom</p>
                                <p className="font-extrabold text-xl md:text-2xl leading-tight">Arion Suites Kemang</p>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-inamice-blue-1 rounded-full flex items-center justify-center text-white shadow-xl flex-shrink-0">
                                <Calendar size={28} />
                            </div>
                            <div className="text-inamice-blue-3">
                                <p className="font-extrabold text-xl md:text-2xl leading-tight">June 17<sup>th</sup></p>
                                <p className="font-extrabold text-xl md:text-2xl leading-tight">2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Images in Arches */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Arion Suites Kemang Image */}
                    <div className="h-[450px] rounded-t-full p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange shadow-lg">
                        <div className="w-full h-full rounded-t-[calc(9999px-3px)] overflow-hidden relative">
                            <Image
                                src="/img/section-inamice.jpg"
                                alt="Arion Suites Kemang"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Diamond Ballroom Image */}
                    <div className="h-[450px] rounded-t-full p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange shadow-lg">
                        <div className="w-full h-full rounded-t-[calc(9999px-3px)] overflow-hidden relative">
                            <Image
                                src="/img/section-awarding.jpg"
                                alt="Diamond Ballroom"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inamice2026Section;
