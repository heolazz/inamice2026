import React from 'react';
import InamiceLogo from '../ui/InamiceLogo';

const Footer = () => {
    return (
        <footer className="bg-inamice-blue text-white pt-16 pb-4">
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 mb-16">

                    {/* Left Side Links */}
                    <div className="flex flex-col sm:flex-row gap-16 lg:gap-24 w-full lg:w-auto">
                        {/* Column 1 */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">INAMICE 2026</h4>
                            <ul className="space-y-3 font-medium text-[15px] text-white/90">
                                <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="/inamice-2026/main-event#rundown" className="hover:text-white transition-colors">Rundown</a></li>
                                <li><a href="/inamice-2026/main-event#main-event" className="hover:text-white transition-colors">Speakers & Topic</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Register</h4>
                            <ul className="space-y-3 font-medium text-[15px] text-white/90">
                                <li><a href="https://www.ticket2u.id/event/42792_1c88e9f1bb2d476b82163efbc0b837fb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">How to Register</a></li>
                                <li><a href="https://www.ticket2u.id/event/42792_1c88e9f1bb2d476b82163efbc0b837fb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Cancellation</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Contact</h4>
                            <div className="flex items-center gap-3">
                                {/* Whatsapp SVG */}
                                <a href="https://www.ticket2u.id/event/42792_1c88e9f1bb2d476b82163efbc0b837fb" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-colors" aria-label="Contact us on WhatsApp">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.604 6.04L0 24l6.117-1.605a11.812 11.812 0 005.925 1.587h.005c6.635 0 12.03-5.396 12.033-12.03a11.823 11.823 0 00-3.48-8.512z" />
                                    </svg>
                                </a>
                                {/* Mail SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Send us an email">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                </a>
                                {/* Instagram SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Follow us on Instagram">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                </a>
                                {/* TikTok SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Follow us on TikTok">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="currentColor" viewBox="0 0 48 48">
                                        <path d="M38.39 13.47A8.28 8.28 0 0 1 33.22 8.3V7h-7.12v23.7a5.73 5.73 0 0 1-5.72 5.73 5.73 5.73 0 0 1-5.72-5.73 5.73 5.73 0 0 1 5.72-5.73c.63 0 1.23.1 1.8.29v-7.3a13.07 13.07 0 0 0-1.8-.13A12.89 12.89 0 0 0 7.5 30.7a12.89 12.89 0 0 0 12.88 12.88 12.89 12.89 0 0 0 12.88-12.88V17.58a15.24 15.24 0 0 0 8.74 2.75v-7.12a8.24 8.24 0 0 1-3.61.26z" />
                                    </svg>
                                </a>
                                {/* LinkedIn SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors" aria-label="Connect with us on LinkedIn">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Logo Block */}
                    <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
                        <InamiceLogo theme="white" size="lg" />
                    </div>

                </div>

                {/* Bottom Bar */}
                <div style={{ borderTop: "2px dashed #FA8E41" }} className="pt-4 pb-2 text-center text-white/90 text-sm">
                    <p>©Indonesia Mice Conference And Exhibition 2026</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
