import React from 'react';
import { FileText, Globe, Users, Award, MapPin, Calendar } from 'lucide-react';

const Inamice2026Section = () => {
    return (
        <section id="inamice-2026" className="bg-white">
            {/* 1. Intro Section with Blue Background */}
            <div className="relative py-20">
                {/* Background Image & Overlay */}
                <div className="absolute inset-4 md:inset-x-8 z-0 rounded-t-[3rem] overflow-hidden">
                    <img
                        src="/img/img207.jpg"
                        className="w-full h-full object-cover"
                        alt="Jakarta Background"
                    />
                    {/* Subtle Blue Nuance Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-inamice-blue/60 to-transparent" />
                    {/* Gradient overlay that fades away towards the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-md max-w-4xl mx-auto leading-tight">
                            “Empowering Jakarta’s Smart Economy through<br />
                            Digital Transformation in the MICE Industry”
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-stretch justify-center">
                        {/* Left: Image Card */}
                        <div className="md:w-5/12">
                            <div className="rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-sm rounded-br-sm overflow-hidden border-[6px] border-inamice-blue shadow-xl h-full min-h-[300px]">
                                <img
                                    src="/img/section-inamice.jpg"
                                    className="w-full h-full object-cover"
                                    alt="Conference"
                                />
                            </div>
                        </div>

                        {/* Right: Text Card */}
                        <div className="md:w-7/12">
                            <div className="bg-white rounded-[2rem] border-[4px] border-inamice-blue p-8 md:p-10 h-full flex items-center shadow-xl">
                                <p className="text-inamice-blue text-xl leading-relaxed font-semibold text-justify">
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
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-8 py-2 w-full max-w-md text-center">
                        <h3 className="text-xl font-bold uppercase tracking-widest">WHY THIS THEME MATTERS</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {/* Left Image (Statue) */}
                    <div className="h-[400px] rounded-t-full overflow-hidden border-[5px] border-inamice-blue relative shadow-md">
                        <img
                            src="/img/img671.jpg"
                            className="w-full h-full object-cover"
                            alt="Statue"
                        />
                    </div>

                    {/* Center Text */}
                    <div className="text-inamice-blue space-y-6 text-justify leading-relaxed font-semibold text-[15px]">
                        <p>
                            As Jakarta advances toward its vision as a Global City under the RPJPD 2025–2045, digital transformation becomes a key driver of economic competitiveness through the Smart Economy pillar. Within this context, the MICE industry plays a strategic role as an economic catalyst connecting business activities, investment, tourism, and knowledge exchange.
                        </p>
                        <p>
                            Global cities such as Incheon and Singapore demonstrate how digital transformation can strengthen the MICE industry through integrated platforms, data utilization, and smart event management. Inspired by these global practices, INAMICE 2026 explores how Jakarta can leverage digital transformation to build a resilient, competitive, and future-ready MICE ecosystem aligned with the city’s Smart Economy agenda.
                        </p>
                    </div>

                    {/* Right Image (Monas) */}
                    <div className="h-[400px] rounded-t-full overflow-hidden border-[5px] border-inamice-blue relative shadow-md">
                        <img
                            src="/img/img677.jpg"
                            className="w-full h-full object-cover"
                            alt="Monas"
                        />
                    </div>
                </div>
            </div>

            {/* 3. Collaboration */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Decorative Header */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
                    <div className="flex items-center gap-1 hidden md:flex">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-inamice-orange text-white px-8 py-2 text-center w-full md:w-auto">
                        <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest whitespace-nowrap">COLLABORATION WITH JAKARTA SMART CITY</h3>
                    </div>
                    <div className="flex items-center gap-1 hidden md:flex">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Logo Placeholder */}
                    <div className="md:w-1/3 flex justify-center">
                        <div className="flex flex-col items-center">
                            <img
                                src="/img/jakarta-smart-city.jpg"
                                alt="Jakarta Smart City Logo"
                                className="w-full max-w-[250px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Text */}
                    <div className="md:w-2/3 text-inamice-blue space-y-6 text-justify leading-relaxed font-semibold text-[15px]">
                        <p>
                            Global cities such as Incheon and Singapore demonstrate how digital transformation can strengthen the MICE industry through integrated platforms, data utilization, and smart event management. These practices highlight the importance of aligning policy direction, industry readiness, and technology adoption.
                        </p>
                        <p>
                            INAMICE 2026 draws inspiration from these global benchmarks to explore how Jakarta can develop a resilient, competitive, and future-ready MICE ecosystem within its Smart Economy framework.
                        </p>
                    </div>
                </div>
            </div>

            {/* 4. Expected Outcomes */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
                <h2 className="text-3xl font-extrabold text-inamice-blue mb-10">EXPECTED OUTCOMES</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: <FileText size={28} />, text: "A shared understanding of the strategic role of MICE in Jakarta’s Smart Economy" },
                        { icon: <Globe size={28} />, text: "Insights into digital transformation as an enabler for smarter MICE practices" },
                        { icon: <Users size={28} />, text: "Cross-sector perspectives connecting policy direction, industry needs, and academic insight" },
                        { icon: <Award size={28} />, text: "Strategic learning to support the future development of Jakarta’s MICE ecosystem" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white border-[3px] border-inamice-blue rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-none rounded-br-none p-8 pt-16 flex flex-col items-center text-center h-full hover:shadow-xl transition-all relative overflow-hidden group">
                            {/* Orange Icon Box at Top Left */}
                            <div className="absolute top-0 left-0 bg-inamice-orange text-white p-4 rounded-br-2xl shadow-sm">
                                {item.icon}
                            </div>

                            <p className="text-inamice-blue font-extrabold text-[15px] leading-relaxed flex-grow flex items-center">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. Location & Date */}
            <div className="max-w-4xl mx-auto px-4 pb-24">
                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-20">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-inamice-blue rounded-full flex items-center justify-center text-white shadow-lg">
                            <MapPin size={24} />
                        </div>
                        <div className="text-inamice-blue font-bold text-xl">
                            Andalucia Hall<br />Menara 165
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-inamice-blue rounded-full flex items-center justify-center text-white shadow-lg">
                            <Calendar size={24} />
                        </div>
                        <div className="text-inamice-blue font-bold text-xl">
                            June 17<sup className="text-xs">th</sup> 2026
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Inamice2026Section;
