import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
    title: 'Tawfik Benchagra | PhD Researcher & Software Engineer',
    description: 'Portfolio of Tawfik Benchagra. PhD Researcher, IT Administrator, and Full Stack Developer specializing in Laravel, React, and Python.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
            <body className="antialiased bg-slate-950 text-slate-50 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
                {children}
            </body>
        </html>
    );
}
