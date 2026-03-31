"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAVIGATION } from '../../constants';
import InamiceLogo from '../ui/InamiceLogo';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const lastScrollY = useRef(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname() || '/';

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const currentScrollY = window.scrollY;

                    if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                        setIsHidden(prev => prev !== true ? true : prev);
                    } else {
                        setIsHidden(prev => prev !== false ? false : prev);
                    }

                    setIsScrolled(prev => {
                        const nextScrolled = currentScrollY > 50;
                        return prev !== nextScrolled ? nextScrolled : prev;
                    });

                    lastScrollY.current = currentScrollY;
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (href: string) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-3' : 'bg-transparent py-6'} ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="max-w-10xl mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <InamiceLogo theme="light" size="sm" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {NAVIGATION.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.subItems && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className={`text-[15px] font-bold transition-all whitespace-nowrap ${isActive(item.href)
                                    ? 'bg-brand-active-bg text-brand-blue px-6 py-2 rounded-full'
                                    : 'text-brand-blue hover:text-brand-orange'
                                    }`}
                            >
                                {item.name}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.subItems && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 p-2"
                                    >
                                        <div className="flex flex-col">
                                            {item.subItems.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    className="px-6 py-3 text-brand-blue hover:text-brand-orange font-bold text-sm transition-colors rounded-lg hover:bg-brand-blue/5"
                                                >
                                                    {sub.name}
                                                </Link>
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
                    className="md:hidden p-2 text-brand-blue hover:text-inamice-orange transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] flex flex-col md:hidden border-t border-slate-100 origin-top"
                    >
                        <div className="p-6 md:p-8 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
                            {NAVIGATION.map((item) => (
                                <div key={item.name} className="flex flex-col gap-1">
                                    <Link
                                        href={item.href}
                                        onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                                        className={`text-lg font-extrabold px-4 py-3 rounded-xl transition-colors ${isActive(item.href)
                                            ? 'text-inamice-orange bg-brand-active-bg'
                                            : 'text-brand-blue hover:bg-slate-50'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                    {item.subItems && (
                                        <div className="flex flex-col gap-1 mt-1 pl-4 border-l-2 border-slate-100 ml-6">
                                            {item.subItems.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`font-semibold text-[15px] py-2 px-4 rounded-lg transition-colors ${isActive(sub.href)
                                                        ? 'text-inamice-orange bg-brand-active-bg'
                                                        : 'text-brand-blue/70 hover:bg-slate-50 hover:text-brand-blue'
                                                        }`}
                                                >
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
