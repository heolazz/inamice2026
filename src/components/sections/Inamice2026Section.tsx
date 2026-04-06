import React from 'react';
import Image from 'next/image';
import { FileText, Globe, Users, Award, MapPin, Calendar, ClipboardList, Lightbulb, Target, Network } from 'lucide-react';

const Inamice2026Section = () => {
    return (
        <section id="inamice-2026" className="bg-white">
            {/* 1. Intro Section with Blue Background */}
            <div className="relative py-12 md:py-20">
                {/* Background Image & Overlay */}
                <div className="absolute inset-2 md:inset-x-8 md:inset-y-4 z-0 rounded-t-[2rem] md:rounded-t-[3rem] overflow-hidden bg-inamice-blue/10">
                    <Image
                        src="/img/img207.jpg"
                        alt="Jakarta Background"
                        fill
                        className="object-cover"
                        quality={80}
                        priority
                    />
                    {/* Subtle Blue Nuance Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-inamice-blue/60 to-transparent" />
                    {/* Gradient overlay that fades away towards the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-6 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-white drop-shadow-md max-w-4xl mx-auto leading-tight px-4 md:px-0">
                            &ldquo;Empowering Jakarta&rsquo;s Smart Economy through <br className="hidden md:block" />
                            Digital Transformation in the MICE Industry&rdquo;
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-5 md:gap-4 items-stretch justify-center">
                        {/* Left: Image Card */}
                        <div className="w-full md:w-5/12">
                            <div className="rounded-tr-[3rem] rounded-bl-[3rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] rounded-tl-sm rounded-br-sm p-[4px] bg-inamice-blue shadow-xl h-full min-h-[200px] md:min-h-[300px] flex">
                                <div className="w-full flex-1 rounded-tr-[calc(3rem-3px)] rounded-bl-[calc(3rem-3px)] md:rounded-tr-[calc(5rem-3px)] md:rounded-bl-[calc(5rem-3px)] rounded-tl-none rounded-br-none overflow-hidden relative">
                                    <Image
                                        src="/img/section-inamice.jpg"
                                        alt="Conference"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Text Card */}
                        <div className="w-full md:w-7/12">
                            <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] border-[4px] border-inamice-blue p-5 sm:p-6 md:p-10 h-full flex items-center shadow-xl">
                                <p className="text-inamice-blue-1 text-[15px] sm:text-base md:text-xl leading-relaxed font-semibold text-justify">
                                    INAMICE 2026 positions the MICE industry as a strategic entry point to support Jakarta&rsquo;s Smart Economy agenda. Rather than focusing on technical or operational discussions, the forum serves as a strategic platform to align policy direction, ecosystem readiness, and implementation learning relevant to the future development of Jakarta&rsquo;s MICE industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Why This Theme Matters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                {/* Decorative Header */}
                <div className="flex flex-col items-center mb-8 md:mb-12">
                    <div className="flex items-center mb-2">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-28 h-auto object-contain" />
                    </div>
                    <div className="bg-inamice-orange text-white px-8 py-2 w-full max-w-md text-center">
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest">WHY THIS THEME MATTERS</h3>
                    </div>
                </div>

                <div className="flex flex-col md:grid md:gap-8 md:items-stretch" style={{ gridTemplateColumns: '3fr 4fr 3fr' }}>
                    {/* Left Image (Statue) */}
                    <div className="order-1 h-[280px] md:h-auto md:min-h-[300px] rounded-t-full p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange shadow-md max-w-[280px] md:max-w-none mx-auto w-full flex">
                        <div className="w-full flex-1 rounded-t-[calc(9999px-3px)] overflow-hidden relative">
                            <Image
                                src="/img/img671.jpg"
                                alt="Statue"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                        </div>
                    </div>

                    {/* Center Text */}
                    <div className="order-2 text-inamice-blue-3 space-y-4 md:space-y-5 text-justify leading-relaxed font-semibold text-[15px] md:text-base flex flex-col justify-center py-2">
                        <p>
                            According to the RPJPD 2025&ndash;2045, Jakarta aims to become a Global City with Smart Economy as a key direction. As Indonesia&rsquo;s largest economic contributor, its economy is driven by service sectors based on mobility, interaction, and business activity. The MICE industry connects these sectors and shows strong economic potential through its projected growth.
                        </p>
                        <p>
                            However, despite its relevance, MICE has not been clearly positioned within Jakarta&rsquo;s Smart Economy framework. Digital transformation remains largely operational rather than integrated with measurable economic impact. Therefore, a clearer strategy is needed for Jakarta to systematically capture and optimize this growing market through a data-driven approach.
                        </p>
                    </div>

                    {/* Right Image (Monas) */}
                    <div className="order-3 h-[280px] md:h-auto md:min-h-[300px] rounded-t-full p-[3px] bg-gradient-to-r from-inamice-blue to-inamice-orange shadow-md max-w-[280px] md:max-w-none mx-auto w-full flex">
                        <div className="w-full flex-1 rounded-t-[calc(9999px-3px)] overflow-hidden relative">
                            <Image
                                src="/img/img677.jpg"
                                alt="Monas"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 30vw"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Objectives */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
                <h2 className="text-2xl md:text-3xl font-extrabold text-inamice-blue-3 mb-8 md:mb-12 text-center uppercase tracking-wide">OBJECTIVES</h2>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {[
                        { icon: "/icon-materi/objective_1.png", text: "To position the MICE industry as a strategic contributor to Jakarta\u2019s Smart Economy" },
                        { icon: "/icon-materi/objective_2.png", text: "To align perspectives between policy enablers and the MICE ecosystem" },
                        { icon: "/icon-materi/objective_3.png", text: "To explore practical directions for digital transformation in the MICE industry" },
                        { icon: "/icon-materi/objective_4.png", text: "To strengthen collaboration among government, industry, and academia" }
                    ].map((item, idx) => (
                        <div key={idx} className="aspect-square md:aspect-auto bg-white border-[3px] border-inamice-blue rounded-tr-[1.5rem] rounded-bl-[1.5rem] md:rounded-tr-[3.5rem] md:rounded-bl-[3.5rem] rounded-tl-none rounded-br-none px-3 pt-10 pb-4 md:px-6 md:pt-20 md:pb-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-all relative overflow-hidden group">
                            {/* Orange Icon Box at Top Left */}
                            <div className="absolute top-0 left-0 bg-inamice-orange text-white p-1.5 md:p-2.5 rounded-br-xl shadow-sm">
                                <img
                                    src={item.icon}
                                    alt={`Objective ${idx + 1}`}
                                    className="w-7 h-7 md:w-10 md:h-10 object-contain"
                                />
                            </div>

                            <p className="text-inamice-blue-3 font-bold text-[13px] md:text-[15px] leading-relaxed flex-grow flex items-center justify-center">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. Date & Venue Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pb-32">
                {/* Decorative Header (Side-by-side Ornaments) */}
                <div className="flex items-center justify-center gap-2 md:gap-6 mb-10 md:mb-16">
                    {/* Left Ornaments */}
                    <div className="flex items-center flex-shrink-0">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-32 h-auto object-contain" />
                    </div>

                    {/* Orange Bar (Lengthened) */}
                    <div className="bg-inamice-orange text-white px-8 sm:px-12 md:px-24 py-2 md:py-2.5 w-full max-w-lg sm:max-w-xl md:max-w-2xl text-center shadow-md">
                        <h3 className="text-sm sm:text-lg md:text-2xl font-bold uppercase tracking-[0.2em] whitespace-nowrap">DATE & VENUE</h3>
                    </div>

                    {/* Right Ornaments */}
                    <div className="flex items-center flex-shrink-0">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-32 h-auto object-contain" />
                    </div>
                </div>

                <div className="max-w-4xl mx-auto mb-12 md:mb-16">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16">
                        {/* Venue */}
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 bg-gray-50/80 md:bg-transparent rounded-2xl md:rounded-none p-5 md:p-0 w-full md:w-auto">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-inamice-blue-1 rounded-full flex items-center justify-center text-white shadow-xl flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div className="text-inamice-blue-3 text-center md:text-left">
                                <p className="font-extrabold text-base md:text-2xl leading-tight">Diamond Ballroom</p>
                                <p className="font-extrabold text-base md:text-2xl leading-tight">Arion Suites Kemang</p>
                            </div>
                        </div>

                        {/* Date */}
                        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 bg-gray-50/80 md:bg-transparent rounded-2xl md:rounded-none p-5 md:p-0 w-full md:w-auto">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-inamice-blue-1 rounded-full flex items-center justify-center text-white shadow-xl flex-shrink-0">
                                <Calendar size={24} />
                            </div>
                            <div className="text-inamice-blue-3 text-center md:text-left">
                                <p className="font-extrabold text-base md:text-2xl leading-tight">June 17<sup>th</sup></p>
                                <p className="font-extrabold text-base md:text-2xl leading-tight">2026</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Images in Arches */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-8 max-w-3xl mx-auto">
                    {/* Arion Suites Kemang Image */}
                    <div className="aspect-[3/4] w-full overflow-hidden relative">
                        <Image
                            src="/img/venue.webp"
                            alt="Arion Suites Kemang"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 50vw, 50vw"
                        />
                    </div>

                    {/* Diamond Ballroom Image */}
                    <div className="aspect-[3/4] w-full overflow-hidden relative">
                        <Image
                            src="/img/venue2.webp"
                            alt="Diamond Ballroom"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 50vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inamice2026Section;
