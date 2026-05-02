'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 transition-all duration-500 ${
                scrolled ? 'py-4' : 'py-8'
            }`}
        >
            <div className={`flex items-center justify-between w-full max-w-5xl px-8 py-3 mx-auto rounded-full transition-all duration-500 ${
                scrolled 
                    ? 'bg-slate-950/60 backdrop-blur-xl border border-white/10 shadow-2xl' 
                    : 'bg-transparent border-transparent'
            }`}>
                <div onClick={() => scrollTo('about')} className="text-2xl font-black text-white cursor-pointer select-none group flex items-center gap-1">
                    T<span className="text-indigo-500 group-hover:rotate-12 transition-transform">B</span>
                </div>

                <div className="flex items-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                    <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">
                        About
                    </button>
                    <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">
                        Projects
                    </button>
                    <button onClick={() => scrollTo('contact')} className="px-6 py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-full transition-all shadow-lg shadow-indigo-500/20 active:scale-95">
                        Contact
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
