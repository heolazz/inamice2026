import React from 'react';
import { MapPin, Mail, Instagram, Phone, Globe, Linkedin } from 'lucide-react';

const MoreSection = () => {
    return (
        <section id="more" className="bg-white pt-32 lg:pt-40 pb-20">
            {/* Header CONTACT */}
            <div className="flex flex-col items-center justify-center mb-16 px-4">
                <div className="flex items-center gap-1 mb-2">
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                </div>
                <div className="bg-[#1e48cb] text-white px-10 py-2 w-full max-w-sm text-center shadow-md">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">CONTACT</h2>
                </div>
                <div className="flex items-center gap-1 mt-2">
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center overflow-hidden">
                {/* Background Pattern / Watermark could go here */}

                {/* Top Gradient Box that hosts everything */}
                <div className="w-full relative px-4 md:px-8 flex flex-col items-center bg-gradient-to-b from-[#7CA8E8]/70 via-[#e2ebf7]/40 to-white rounded-t-[3rem] pt-16 pb-24 border-t-4 border-[#7CA8E8]/50 shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.1)]">

                    {/* Motif Ornaments */}
                    <div className="absolute top-10 left-4 md:left-20 opacity-20 pointer-events-none hidden md:block">
                        {/* Dummy SVG ornament representing the floral pattern on left */}
                        <svg width="200" height="200" viewBox="0 0 100 100" className="text-[#1a4dc3] fill-current">
                            <path d="M50 0 C60 20, 80 40, 100 50 C80 60, 60 80, 50 100 C40 80, 20 60, 0 50 C20 40, 40 20, 50 0 Z" />
                            <path d="M50 20 C55 35, 65 45, 80 50 C65 55, 55 65, 50 80 C45 65, 35 55, 20 50 C35 45, 45 35, 50 20 Z" fill="#fff" />
                        </svg>
                    </div>
                    <div className="absolute bottom-10 right-4 md:right-20 opacity-20 pointer-events-none hidden md:block">
                        {/* Dummy SVG ornament representing the floral pattern on right bottom */}
                        <svg width="250" height="250" viewBox="0 0 100 100" className="text-[#1a4dc3] fill-current">
                            <path d="M50 0 C60 20, 80 40, 100 50 C80 60, 60 80, 50 100 C40 80, 20 60, 0 50 C20 40, 40 20, 50 0 Z" />
                            <path d="M50 20 C55 35, 65 45, 80 50 C65 55, 55 65, 50 80 C45 65, 35 55, 20 50 C35 45, 45 35, 50 20 Z" fill="#fff" />
                        </svg>
                    </div>

                    {/* Flex Container for Hosted & Organized */}
                    <div className="flex flex-col gap-28 z-10 w-full max-w-lg items-center text-center">

                        {/* HOSTED BY */}
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-[#F27D26] text-white px-8 py-2 inline-block mb-10 rounded shadow-md">
                                <h3 className="font-extrabold text-base tracking-widest uppercase">HOSTED BY</h3>
                            </div>

                            <img src="/img/logo-pnj.jpg" alt="Politeknik Negeri Jakarta" className="w-56 mb-12 drop-shadow-xl" />

                            {/* Social Grid PNJ */}
                            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <MapPin size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Mail size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Phone size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Globe size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.6a9.1 9.1 0 0 0 4.91 2.65v-3.48a5.7 5.7 0 0 1-1.5-.08z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* ORGANIZED BY */}
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-[#F27D26] text-white px-8 py-2 inline-block mb-10 rounded shadow-md">
                                <h3 className="font-extrabold text-base tracking-widest uppercase">ORGANIZED BY</h3>
                            </div>

                            <img src="/img/logo-mice.jpg" alt="MICE" className="w-72 mb-12 shadow-[0_4px_25px_rgba(0,0,0,0.15)] rounded-md" />

                            {/* Social Grid MICE */}
                            <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <MapPin size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Mail size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Phone size={24} />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <Linkedin size={24} fill="currentColor" />
                                </a>
                                <a href="#" className="w-14 h-14 rounded-full bg-[#1e48cb] flex items-center justify-center text-white cursor-pointer hover:bg-inamice-orange transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.6a9.1 9.1 0 0 0 4.91 2.65v-3.48a5.7 5.7 0 0 1-1.5-.08z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreSection;
