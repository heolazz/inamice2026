"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import { NAVIGATION } from '../../constants';
import InamiceLogo from '../ui/InamiceLogo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState('About');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Existing navbar hide/show logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);

            // Active section tracking
            const sections = NAVIGATION.map(item => {
                const id = item.href.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    return { name: item.name, offset: element.offsetTop - 150 };
                }
                return null;
            }).filter(Boolean);

            const scrollPosition = window.scrollY;
            const currentSection = sections!.reduce((acc, section) => {
                if (scrollPosition >= section!.offset) {
                    return section!.name;
                }
                return acc;
            }, 'About');

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-6'} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="max-w-10xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <InamiceLogo theme="light" size="sm" />

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {NAVIGATION.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <a
                                href={item.href}
                                className={`text-[15px] font-bold transition-all whitespace-nowrap ${activeSection === item.name
                                    ? 'bg-[#FFE4D6] text-brand-blue px-6 py-2 rounded-full'
                                    : 'text-brand-blue hover:text-brand-orange'
                                    }`}
                            >
                                {item.name}
                            </a>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.subItems && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 p-2"
                                    >
                                        <div className="flex flex-col">
                                            {item.subItems.map((sub, idx) => (
                                                <a
                                                    key={idx}
                                                    href={sub.href}
                                                    className="px-6 py-3 text-brand-blue hover:text-brand-orange font-bold text-sm transition-colors rounded-lg hover:bg-slate-50"
                                                >
                                                    {sub.name}
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-5 text-brand-blue ml-12">
                    <a href="#" className="hover:text-brand-orange transition-colors">
                        <Instagram size={24} strokeWidth={2} />
                    </a>
                    <a href="#" className="hover:text-brand-orange transition-colors">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0-1 13.6 6.84 6.84 0 0 0 6.82-6.82V9.6a9.1 9.1 0 0 0 4.91 2.65v-3.48a5.7 5.7 0 0 1-1.5-.08z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-brand-orange transition-colors">
                        <Linkedin size={24} strokeWidth={0} fill="currentColor" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-brand-blue"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-5 md:hidden border-t border-slate-100"
                    >
                        {NAVIGATION.map((item) => (
                            <div key={item.name} className="flex flex-col gap-2">
                                <a
                                    href={item.href}
                                    onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                                    className={`text-base font-bold p-2 ${item.name === 'About' ? 'text-brand-orange px-6 py-2 bg-[#FFE4D6] rounded-full w-fit' : 'text-brand-blue'}`}
                                >
                                    {item.name}
                                </a>
                                {item.subItems && (
                                    <div className="flex flex-col gap-3 pl-6 mt-1">
                                        {item.subItems.map((sub, idx) => (
                                            <a
                                                key={idx}
                                                href={sub.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-brand-blue/80 font-bold text-sm"
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
