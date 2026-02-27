import React from 'react';
import { MapPin, Mail, Instagram, Phone, Globe, Linkedin, Users, Layout, Award, Megaphone, Store, Compass, MonitorPlay, Eye, Share2, Lightbulb, History } from 'lucide-react';

const MoreSection = () => {
    return (
        <section id="more" className="bg-white pt-32 lg:pt-40 pb-20">
            {/* Contact Area with separate background */}
            <div className="mx-4 md:mx-12 bg-gradient-to-t from-[#7CA8E8]/40 to-white pt-24 pb-20 mb-16 flex flex-col items-center rounded-b-[3rem] md:rounded-b-[5rem] shadow-sm">
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="flex items-center gap-1 mb-5">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                    <div className="bg-[#1e48cb] text-white px-12 py-3 w-fit text-center shadow-lg">
                        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">CONTACT</h2>
                    </div>
                    <div className="flex items-center gap-1 mt-5">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                        <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full flex flex-col items-center">
                {/* Background Pattern / Watermark could go here */}

                {/* Top Gradient Box that hosts everything */}
                <div className="w-full relative px-4 md:px-8 flex flex-col items-center bg-gradient-to-b from-[#7CA8E8]/70 via-[#e2ebf7]/40 to-white pt-16 pb-24 border-t-4 border-[#7CA8E8]/50 shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.1)]">

                    {/* Motif Ornaments */}
                    <div className="absolute top-10 left-4 md:left-20 opacity-10 pointer-events-none hidden md:block">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-64 h-64 object-contain mix-blend-multiply" />
                    </div>
                    <div className="absolute bottom-10 right-4 md:right-20 opacity-10 pointer-events-none hidden md:block">
                        <img src="/img/acc-blue.jpg" alt="ornament" className="w-80 h-80 object-contain mix-blend-multiply" />
                    </div>

                    {/* Flex Container for Hosted & Organized */}
                    <div className="flex flex-col gap-28 z-10 w-full max-w-lg items-center text-center">

                        {/* HOSTED BY */}
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-[#F27D26] text-white px-8 py-2 inline-block mb-10">
                                <h3 className="font-extrabold text-base tracking-widest uppercase">HOSTED BY</h3>
                            </div>

                            <img src="/img/logo-pnj.png" alt="Politeknik Negeri Jakarta" className="w-72 mb-12 drop-shadow-2xl" />

                            {/* Social Grid PNJ */}
                            <div className="grid grid-cols-3 gap-x-8 gap-y-8 md:gap-x-16 md:gap-y-10">
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
                            <div className="bg-[#F27D26] text-white px-8 py-2 inline-block mb-10">
                                <h3 className="font-extrabold text-base tracking-widest uppercase">ORGANIZED BY</h3>
                            </div>

                            <img src="/img/logo-mice.png" alt="MICE" className="w-72 mb-12 rounded-md" />

                            {/* Social Grid MICE */}
                            <div className="grid grid-cols-3 gap-x-8 gap-y-8 md:gap-x-16 md:gap-y-10">
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

            {/* Why You Should Sponsor Section */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-24 flex flex-col items-center">
                {/* Ornament */}
                <div className="flex items-center gap-1 mb-6">
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                </div>

                <div className="bg-[#F27D26] text-white px-8 md:px-12 py-3 mb-12 w-fit text-center">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">WHY YOU SHOULD SPONSOR INAMICE 2026</h2>
                </div>

                <div className="max-w-5xl text-justify space-y-6 mb-16 px-4">
                    <p className="text-[#164CDE] leading-relaxed text-lg font-medium">
                        INAMICE 2026 (Indonesia MICE Conference and Exhibition) is a national platform designed to strengthen Indonesia's MICE ecosystem through innovation, collaboration, and smart industry practices. Bringing together policymakers, industry leaders, associations, and business stakeholders, INAMICE 2026 serves as a strategic meeting point to discuss the future of MICE within the Smart Economy framework.
                    </p>
                    <p className="text-[#164CDE] leading-relaxed text-lg font-medium">
                        By becoming a sponsor, brands gain a valuable opportunity to enhance visibility, build strategic partnerships, and position themselves at the forefront of Indonesia's evolving MICE industry.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 gap-8 px-4">
                    {[
                        {
                            title: "Strategic Industry Exposure",
                            desc: "Engage directly with key decision-makers, regulators, industry leaders, and professionals from across the MICE, economic, and financial sectors in a highly targeted environment.",
                            icon: <Users className="text-white w-8 h-8" />
                        },
                        {
                            title: "Integrated Brand Visibility",
                            desc: "Gain strong brand exposure through logo placement across official event materials, website, social media content, on-site visuals, and post-event publications.",
                            icon: <Layout className="text-white w-8 h-8" />
                        },
                        {
                            title: "Thought Leadership & Brand Positioning",
                            desc: "Position your brand as an industry leader through speaking opportunities, panel discussions, workshops, and participation in Smart MICE and Smart Economy conversations.",
                            icon: <Award className="text-white w-8 h-8" />
                        },
                        {
                            title: "Digital & Media Amplification",
                            desc: "Maximize reach through INAMICE's digital marketing campaigns, social media promotions, podcast features, and extensive media partner coverage.",
                            icon: <Megaphone className="text-white w-8 h-8" />
                        },
                        {
                            title: "On-Site Brand Activation",
                            desc: "Enhance audience engagement through interactive booths, brand activations, games, and experiential marketing activities during the event.",
                            icon: <Store className="text-white w-8 h-8" />
                        },
                        {
                            title: "Alignment with Smart MICE Vision",
                            desc: "Strengthen brand credibility by aligning with INAMICE 2026's Smart MICE positioning, focusing on innovation, sustainability, digitalization, and inclusive economic growth.",
                            icon: <Compass className="text-white w-8 h-8" />
                        }
                    ].map((benefit, idx) => (
                        <div key={idx} className="group relative p-[3px] bg-gradient-to-b from-inamice-blue to-inamice-orange rounded-tr-[3.5rem] rounded-bl-[3.5rem] shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="bg-white rounded-tr-[calc(3.5rem-3px)] rounded-bl-[calc(3.5rem-3px)] p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 h-full text-center md:text-left">
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-[#164CDE] rounded-xl flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[#164CDE] text-xl md:text-2xl font-black mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-[#164CDE] leading-relaxed font-medium text-[14px] md:text-[15px] lg:text-lg">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-24 px-4 flex flex-col items-center group cursor-pointer w-full text-center">
                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white px-6 md:px-8 py-4 md:py-5 rounded-3xl md:rounded-full shadow-[0_10px_40px_-10px_rgba(2,5,72,0.15)] group-hover:shadow-[0_15px_50px_-10px_rgba(2,5,72,0.25)] transition-all duration-300 group-hover:-translate-y-1 w-full max-w-sm sm:max-w-max justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1e48cb] rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <Phone size={24} fill="currentColor" />
                        </div>
                        <span className="text-[#1e48cb] text-base sm:text-lg md:text-xl font-bold tracking-wide leading-tight">Contact Our Sponsorship Team</span>
                    </div>
                </div>
            </div>

            {/* Why Become a Media Partner Section */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-24 flex flex-col items-center">
                {/* Ornament */}
                <div className="flex items-center gap-1 mb-6">
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                </div>

                <div className="bg-[#F27D26] text-white px-8 md:px-12 py-3 mb-12 w-fit text-center">
                    <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">WHY BECOME A MEDIA PARTNER</h2>
                </div>

                <div className="max-w-5xl text-justify space-y-6 mb-16 px-4">
                    <p className="text-[#164CDE] leading-relaxed text-lg font-medium">
                        INAMICE 2026 offers media partners a strategic opportunity to collaborate in delivering credible, impactful, and industry-relevant information to a wide professional audience. Through integrated media exposure, partners play a key role in strengthening INAMICE's position as Indonesia's national MICE platform.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 gap-8 px-4">
                    {[
                        {
                            title: "Exclusive Content Collaboration",
                            desc: "Access exclusive event content including conferences, panel discussions, interviews, and industry insights for publication across media channels.",
                            icon: <MonitorPlay className="text-white w-8 h-8" />
                        },
                        {
                            title: "Brand Visibility Across Platforms",
                            desc: "Receive logo placement on INAMICE's official website, social media channels, digital publications, and on-site promotional materials.",
                            icon: <Eye className="text-white w-8 h-8" />
                        },
                        {
                            title: "Public Relations & Press Exposure",
                            desc: "Participate in press conferences, media briefings, and official press releases to enhance media credibility and audience reach.",
                            icon: <Share2 className="text-white w-8 h-8" />
                        },
                        {
                            title: "Thought Leadership & Knowledge Sharing",
                            desc: "Collaborate in distributing educational and thought leadership content related to Smart MICE, Smart Economy, and the MICE industry.",
                            icon: <Lightbulb className="text-white w-8 h-8" />
                        },
                        {
                            title: "Long-Term Industry Positioning",
                            desc: "Strengthen your media brand's positioning as a trusted partner in Indonesia's MICE, tourism, and economic development ecosystem.",
                            icon: <History className="text-white w-8 h-8" />
                        }
                    ].map((benefit, idx) => (
                        <div key={idx} className="group relative p-[3px] bg-gradient-to-b from-inamice-blue to-inamice-orange rounded-tr-[3.5rem] rounded-bl-[3.5rem] shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="bg-white rounded-tr-[calc(3.5rem-3px)] rounded-bl-[calc(3.5rem-3px)] p-8 flex items-start md:items-center gap-8 h-full">
                                <div className="flex-shrink-0 w-20 h-20 bg-[#164CDE] rounded-xl flex items-center justify-center">
                                    {benefit.icon}
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[#164CDE] text-2xl font-black mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-[#164CDE] leading-relaxed font-medium text-[15px] md:text-lg">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-24 px-4 flex flex-col items-center group cursor-pointer w-full text-center">
                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white px-6 md:px-8 py-4 md:py-5 rounded-3xl md:rounded-full shadow-[0_10px_40px_-10px_rgba(2,5,72,0.15)] group-hover:shadow-[0_15px_50px_-10px_rgba(2,5,72,0.25)] transition-all duration-300 group-hover:-translate-y-1 w-full max-w-sm sm:max-w-max justify-center">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1e48cb] rounded-full flex items-center justify-center text-white shadow-lg flex-shrink-0">
                            <Phone size={24} fill="currentColor" />
                        </div>
                        <span className="text-[#1e48cb] text-base sm:text-lg md:text-xl font-bold tracking-wide leading-tight">Contact Our Media Partner Team</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MoreSection;