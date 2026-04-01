import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-sans',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    display: 'swap',
    variable: '--font-display',
});

export const metadata: Metadata = {
    title: 'INAMICE 2026 — Indonesia MICE Conference and Exhibition',
    description: 'Empowering Jakarta\'s Smart Economy through Digital Transformation in the MICE Industry. Join us June 17th 2026 for the premier Meetings, Incentives, Conventions, and Exhibitions event.',
    openGraph: {
        title: 'INAMICE 2026 — Indonesia MICE Conference and Exhibition',
        description: 'Empowering Jakarta\'s Smart Economy through Digital Transformation in the MICE Industry.',
        type: 'website',
    },
};

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
            <body className="antialiased font-sans text-slate-900 bg-inamice-bg">
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
