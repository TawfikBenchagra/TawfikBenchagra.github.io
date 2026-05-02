'use client';

import { useState, useEffect } from 'react';
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
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-4 transition-all duration-300 ${
                scrolled ? 'py-4' : 'py-6'
            }`}
        >
            <div className={`flex items-center justify-between w-full max-w-4xl px-6 py-3 mx-auto rounded-full transition-all duration-500 ${
                scrolled 
                    ? 'bg-slate-900/70 backdrop-blur-md border border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)] shadow-indigo-500/10' 
                    : 'bg-transparent border-transparent'
            }`}>
                <div onClick={() => scrollTo('about')} className="text-xl font-bold text-white cursor-pointer select-none">
                    T<span className="text-indigo-400">B</span>
                </div>

                <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-slate-300">
                    <button onClick={() => scrollTo('about')} className="hover:text-indigo-400 transition-colors">
                        About
                    </button>
                    <button onClick={() => scrollTo('projects')} className="hover:text-indigo-400 transition-colors">
                        Projects
                    </button>
                    <button onClick={() => scrollTo('contact')} className="px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-full transition-colors shadow-lg shadow-indigo-500/20">
                        Contact
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}
