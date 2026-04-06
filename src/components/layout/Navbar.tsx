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
                                target={(item as any).isButton ? "_blank" : undefined}
                                rel={(item as any).isButton ? "noopener noreferrer" : undefined}
                                className={`text-[0.9375rem] font-bold transition-all whitespace-nowrap ${isActive(item.href)
                                    ? 'bg-brand-active-bg text-brand-blue px-6 py-2 rounded-full'
                                    : 'text-brand-blue hover:text-brand-orange'
                                    }`}
                            >
                                {item.name}
                                {(item as any).seoSuffix && <span className="sr-only">{(item as any).seoSuffix}</span>}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {item.subItems && activeDropdown === item.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 5, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50 p-2"
                                    >
                                        <div className="flex flex-col gap-1">
                                            {item.subItems.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    className={`px-4 py-2.5 text-brand-blue font-bold text-sm transition-colors rounded-lg flex items-center ${isActive(sub.href)
                                                        ? 'bg-[#FFBD91] text-brand-blue'
                                                        : 'hover:bg-brand-blue/5 hover:text-brand-orange'
                                                        }`}
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
                    <a href="#" className="hover:text-brand-orange transition-colors" aria-label="Follow us on Instagram">
                        <Instagram size={24} strokeWidth={2} />
                    </a>
                    <a href="#" className="hover:text-brand-orange transition-colors" aria-label="Follow us on TikTok">
                        <svg width="22" height="22" viewBox="0 0 48 48" fill="currentColor">
                            <path d="M38.39 13.47A8.28 8.28 0 0 1 33.22 8.3V7h-7.12v23.7a5.73 5.73 0 0 1-5.72 5.73 5.73 5.73 0 0 1-5.72-5.73 5.73 5.73 0 0 1 5.72-5.73c.63 0 1.23.1 1.8.29v-7.3a13.07 13.07 0 0 0-1.8-.13A12.89 12.89 0 0 0 7.5 30.7a12.89 12.89 0 0 0 12.88 12.88 12.89 12.89 0 0 0 12.88-12.88V17.58a15.24 15.24 0 0 0 8.74 2.75v-7.12a8.24 8.24 0 0 1-3.61.26z" />
                        </svg>
                    </a>
                    <a href="#" className="hover:text-brand-orange transition-colors" aria-label="Follow us on LinkedIn">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
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
                                        target={(item as any).isButton ? "_blank" : undefined}
                                        rel={(item as any).isButton ? "noopener noreferrer" : undefined}
                                        onClick={() => !item.subItems && setIsMobileMenuOpen(false)}
                                        className={`text-lg font-extrabold px-4 py-3 rounded-xl transition-colors ${isActive(item.href)
                                            ? 'text-inamice-blue-2 bg-brand-active-bg'
                                            : 'text-brand-blue hover:bg-slate-50'
                                            }`}
                                    >
                                        {item.name}
                                        {(item as any).seoSuffix && <span className="sr-only">{(item as any).seoSuffix}</span>}
                                    </Link>
                                    {item.subItems && (
                                        <div className="flex flex-col gap-1 mt-1 pl-4 border-l-2 border-slate-100 ml-6">
                                            {item.subItems.map((sub, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={sub.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`font-semibold text-[0.9375rem] py-2 px-4 rounded-lg transition-colors ${isActive(sub.href)
                                                        ? 'text-inamice-blue-2 bg-brand-active-bg'
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
