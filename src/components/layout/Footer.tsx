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
                                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Rundown</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Speakers & Topic</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Register</h4>
                            <ul className="space-y-3 font-medium text-[15px] text-white/90">
                                <li><a href="#" className="hover:text-white transition-colors">How to Register</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cancellation</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">Contact</h4>
                            <div className="flex items-center gap-3">
                                {/* Whatsapp SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12 2a10 10 0 0 1 10 10c0 1.8-.5 3.5-1.4 5L22 22l-4.9-1.4A9.9 9.9 0 0 1 12 22a10 10 0 0 1-10-10A10 10 0 0 1 12 2z"></path><path d="M16 14.5a1.6 1.6 0 0 1-1.6 1.5c-1.3 0-3-.7-5.5-3.2S5.7 8.6 5.7 7.3A1.6 1.6 0 0 1 7.2 5.7c.3 0 .6.1.7.4l1 2.5c.1.2 0 .5-.2.7l-.6.6c.5 1 1.4 2 2.4 2.5l.6-.6c.2-.2.5-.2.7-.1l2.5 1c.3.2.4.5.4.8z"></path></svg>
                                </a>
                                {/* Mail SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                </a>
                                {/* Instagram SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                                </a>
                                {/* TikTok SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                                </a>
                                {/* LinkedIn SVG */}
                                <a href="#" className="hover:text-white/80 transition-colors">
                                    <svg className="w-[1.4rem] h-[1.4rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
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
