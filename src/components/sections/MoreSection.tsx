import React from 'react';
import { MapPin, Mail, Instagram, Phone, Globe, Linkedin, Users, Layout, Award, Megaphone, Store, Compass, MonitorPlay, Eye, Share2, Lightbulb, History } from 'lucide-react';

const MoreSection = () => {
    return (
        <section id="more" className="bg-white pt-4 pb-12 md:pb-20">
            {/* Contact Area with separate background */}
            <div className="mx-2 sm:mx-4 md:mx-12 bg-gradient-to-t from-[#7CA8E8]/40 to-white pt-10 md:pt-16 pb-8 md:pb-12 mb-10 md:mb-16 flex flex-col items-center rounded-b-[2rem] md:rounded-b-[5rem] shadow-sm">
                <div className="flex flex-col items-center justify-center px-4">
                    <div className="flex items-center mb-5">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-28 h-auto object-contain" />
                    </div>
                    <div className="bg-[#1e48cb] text-white px-12 py-3 w-fit text-center shadow-lg">
                        <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">CONTACT</h2>
                    </div>
                    <div className="flex items-center mt-5">
                        <img src="/img/acc-fusion.png" alt="ornament" className="w-20 md:w-28 h-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="relative w-full flex flex-col items-center">
                {/* Background Pattern / Watermark could go here */}

                {/* Top Gradient Box that hosts everything */}
                <div className="w-full relative px-4 md:px-8 flex flex-col items-center bg-gradient-to-b from-[#7CA8E8]/70 via-[#e2ebf7]/40 to-white pt-16 pb-24 border-t-4 border-[#7CA8E8]/50 overflow-hidden">

                    {/* Motif Ornaments - Top Left & Bottom Right, No Opacity, No Margin */}
                    <div className="absolute top-0 left-0 pointer-events-none">
                        <img src="/img/acc_contact.png" alt="ornament" className="w-52 h-52 md:w-96 md:h-96 object-contain" />
                    </div>
                    <div className="absolute bottom-0 right-0 pointer-events-none">
                        <img src="/img/acc_contact.png" alt="ornament" className="w-52 h-52 md:w-96 md:h-96 object-contain -scale-100" />
                    </div>

                    {/* Flex Container for Hosted & Organized */}
                    <div className="flex flex-col gap-16 md:gap-28 z-10 w-full max-w-lg items-center text-center">

                        {/* HOSTED BY */}
                        <div className="flex flex-col items-center w-full">
                            <div className="bg-[#F27D26] text-white px-6 md:px-8 py-2 inline-block mb-6 md:mb-10">
                                <h3 className="font-extrabold text-sm md:text-base tracking-widest uppercase">HOSTED BY</h3>
                            </div>

                            <img src="/img/logo-pnj.png" alt="Politeknik Negeri Jakarta" className="w-48 sm:w-60 md:w-72 mb-8 md:mb-12 drop-shadow-2xl" />

                            {/* Social Grid PNJ */}
                            <div className="grid grid-cols-3 gap-x-6 gap-y-5 sm:gap-x-8 sm:gap-y-8 md:gap-x-16 md:gap-y-10">
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
                            <div className="bg-[#F27D26] text-white px-6 md:px-8 py-2 inline-block mb-6 md:mb-10">
                                <h3 className="font-extrabold text-sm md:text-base tracking-widest uppercase">ORGANIZED BY</h3>
                            </div>

                            <img src="/logo/logo-mice-new.jpg" alt="MICE" className="w-48 sm:w-60 md:w-72 mb-8 md:mb-12 rounded-md" />

                            {/* Social Grid MICE */}
                            <div className="grid grid-cols-3 gap-x-6 gap-y-5 sm:gap-x-8 sm:gap-y-8 md:gap-x-16 md:gap-y-10">
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
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-24 flex flex-col items-center">
                {/* Ornament */}
                <div className="flex items-center gap-1 mb-6">
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                </div>

                <div className="bg-[#F27D26] text-white px-6 sm:px-8 md:px-12 py-2 md:py-3 mb-8 md:mb-12 w-fit text-center">
                    <h2 className="text-base sm:text-lg md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">WHY YOU SHOULD SPONSOR INAMICE 2026</h2>
                </div>

                <div className="max-w-5xl text-justify space-y-4 md:space-y-6 mb-10 md:mb-16 px-2 sm:px-4">
                    <p className="text-[#164CDE] leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                        INAMICE 2026 (Indonesia MICE Conference and Exhibition) is a national platform designed to strengthen Indonesia's MICE ecosystem through innovation, collaboration, and smart industry practices. Bringing together policymakers, industry leaders, associations, and business stakeholders, INAMICE 2026 serves as a strategic meeting point to discuss the future of MICE within the Smart Economy framework.
                    </p>
                    <p className="text-[#164CDE] leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                        By becoming a sponsor, brands gain a valuable opportunity to enhance visibility, build strategic partnerships, and position themselves at the forefront of Indonesia's evolving MICE industry.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 gap-5 md:gap-8 px-2 sm:px-4">
                    {[
                        {
                            title: "Strategic Industry Exposure",
                            desc: "Engage directly with key decision-makers, regulators, industry leaders, and professionals from across the MICE, economic, and financial sectors in a highly targeted environment.",
                            icon: "/icon-materi/strategic_industry_exposure.png"
                        },
                        {
                            title: "Integrated Brand Visibility",
                            desc: "Gain strong brand exposure through logo placement across official event materials, website, social media content, on-site visuals, and post-event publications.",
                            icon: "/icon-materi/integrated_brand_visibility.png"
                        },
                        {
                            title: "Thought Leadership & Brand Positioning",
                            desc: "Position your brand as an industry leader through speaking opportunities, panel discussions, workshops, and participation in Smart MICE and Smart Economy conversations.",
                            icon: "/icon-materi/thought_leadership_brand_positioning.png"
                        },
                        {
                            title: "Digital & Media Amplification",
                            desc: "Maximize reach through INAMICE's digital marketing campaigns, social media promotions, podcast features, and extensive media partner coverage.",
                            icon: "/icon-materi/digital_media_amplification.png"
                        },
                        {
                            title: "On-Site Brand Activation",
                            desc: "Enhance audience engagement through interactive booths, brand activations, games, and experiential marketing activities during the event.",
                            icon: "/icon-materi/on_site_brand_activation.png"
                        },
                        {
                            title: "Alignment with Smart MICE Vision",
                            desc: "Strengthen brand credibility by aligning with INAMICE 2026's Smart MICE positioning, focusing on innovation, sustainability, digitalization, and inclusive economic growth.",
                            icon: "/icon-materi/alignment_with_smart_mice_vision.png"
                        }
                    ].map((benefit, idx) => (
                        <div key={idx} className="group relative p-[3px] bg-gradient-to-b from-inamice-blue to-inamice-orange rounded-tr-[2rem] rounded-bl-[2rem] md:rounded-tr-[3.5rem] md:rounded-bl-[3.5rem] shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="bg-white rounded-tr-[calc(2rem-3px)] rounded-bl-[calc(2rem-3px)] md:rounded-tr-[calc(3.5rem-3px)] md:rounded-bl-[calc(3.5rem-3px)] p-4 sm:p-5 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-8 h-full text-center md:text-left">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#164CDE] rounded-xl flex items-center justify-center p-2 md:p-3">
                                    <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[#164CDE] text-base sm:text-lg md:text-2xl font-black mb-1 md:mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-[#164CDE] leading-relaxed font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-lg">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-14 md:mt-24 px-4 flex flex-col items-center group cursor-pointer w-full text-center">
                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white px-6 md:px-8 py-4 md:py-5 rounded-3xl md:rounded-full transition-all duration-300 group-hover:-translate-y-1 w-full max-w-sm sm:max-w-max justify-center border border-inamice-blue/10">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1e48cb] rounded-full flex items-center justify-center text-white flex-shrink-0">
                            <Phone size={24} fill="currentColor" />
                        </div>
                        <span className="text-[#1e48cb] text-base sm:text-lg md:text-xl font-bold tracking-wide leading-tight">Contact Our Sponsorship Team</span>
                    </div>
                </div>
            </div>

            {/* Why Become a Media Partner Section */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-24 flex flex-col items-center">
                {/* Ornament */}
                <div className="flex items-center gap-1 mb-6">
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                    <img src="/img/acc-orange.jpg" alt="ornament" className="w-4 h-4 object-contain mix-blend-multiply" />
                    <img src="/img/acc-blue.jpg" alt="ornament" className="w-6 h-6 object-contain mix-blend-multiply" />
                </div>

                <div className="bg-[#F27D26] text-white px-6 sm:px-8 md:px-12 py-2 md:py-3 mb-8 md:mb-12 w-fit text-center">
                    <h2 className="text-base sm:text-lg md:text-2xl font-black uppercase tracking-widest drop-shadow-sm">WHY BECOME A MEDIA PARTNER</h2>
                </div>

                <div className="max-w-5xl text-justify space-y-4 md:space-y-6 mb-10 md:mb-16 px-2 sm:px-4">
                    <p className="text-[#164CDE] leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                        INAMICE 2026 offers media partners a strategic opportunity to collaborate in delivering credible, impactful, and industry-relevant information to a wide professional audience. Through integrated media exposure, partners play a key role in strengthening INAMICE's position as Indonesia's national MICE platform.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="w-full max-w-5xl grid grid-cols-1 gap-5 md:gap-8 px-2 sm:px-4">
                    {[
                        {
                            title: "Exclusive Content Collaboration",
                            desc: "Access exclusive event content including conferences, panel discussions, interviews, and industry insights for publication across media channels.",
                            icon: "/icon-materi/exclusive_content_collaboration.png"
                        },
                        {
                            title: "Brand Visibility Across Platforms",
                            desc: "Receive logo placement on INAMICE's official website, social media channels, digital publications, and on-site promotional materials.",
                            icon: "/icon-materi/brand_visibility_across_platforms.png"
                        },
                        {
                            title: "Public Relations & Press Exposure",
                            desc: "Participate in press conferences, media briefings, and official press releases to enhance media credibility and audience reach.",
                            icon: "/icon-materi/public_relations_press_exposure.png"
                        },
                        {
                            title: "Thought Leadership & Knowledge Sharing",
                            desc: "Collaborate in distributing educational and thought leadership content related to Smart MICE, Smart Economy, and the MICE industry.",
                            icon: "/icon-materi/thought_leadership_knowledge_sharing.png"
                        },
                        {
                            title: "Long-Term Industry Positioning",
                            desc: "Strengthen your media brand's positioning as a trusted partner in Indonesia's MICE, tourism, and economic development ecosystem.",
                            icon: "/icon-materi/long_term_industry_positioning.png"
                        }
                    ].map((benefit, idx) => (
                        <div key={idx} className="group relative p-[3px] bg-gradient-to-b from-inamice-blue to-inamice-orange rounded-tr-[2rem] rounded-bl-[2rem] md:rounded-tr-[3.5rem] md:rounded-bl-[3.5rem] shadow-md hover:shadow-xl transition-all duration-300">
                            <div className="bg-white rounded-tr-[calc(2rem-3px)] rounded-bl-[calc(2rem-3px)] md:rounded-tr-[calc(3.5rem-3px)] md:rounded-bl-[calc(3.5rem-3px)] p-4 sm:p-5 md:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-3 md:gap-8 h-full text-center sm:text-left">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-[#164CDE] rounded-xl flex items-center justify-center p-2 md:p-3">
                                    <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="text-[#164CDE] text-base sm:text-lg md:text-2xl font-black mb-1 md:mb-2 leading-tight uppercase tracking-tight">{benefit.title}</h3>
                                    <p className="text-[#164CDE] leading-relaxed font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-lg">
                                        {benefit.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA */}
                <div className="mt-14 md:mt-24 px-4 flex flex-col items-center group cursor-pointer w-full text-center">
                    <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 bg-white px-6 md:px-8 py-4 md:py-5 rounded-3xl md:rounded-full transition-all duration-300 group-hover:-translate-y-1 w-full max-w-sm sm:max-w-max justify-center border border-inamice-blue/10">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1e48cb] rounded-full flex items-center justify-center text-white flex-shrink-0">
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