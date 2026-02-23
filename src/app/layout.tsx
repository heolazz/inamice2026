import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'INAMICE 2026',
    description: 'Empowering Jakarta’s Smart Economy through Digital Transformation in the MICE Industry',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased font-sans text-slate-900 bg-inamice-bg">
                {children}
            </body>
        </html>
    );
}
