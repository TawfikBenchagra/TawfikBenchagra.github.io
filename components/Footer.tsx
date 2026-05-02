'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#020617] border-t border-white/5 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    
                    <div className="flex flex-col items-center md:items-start space-y-4">
                        <div className="text-3xl font-black text-white tracking-tighter">
                            Tawfik <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">BENCHAGRA</span>
                        </div>
                        <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">PhD Researcher • Software Architect</p>
                    </div>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/TawfikBenchagra", label: "GitHub" },
                            { icon: Linkedin, href: "https://linkedin.com/in/tawfikbenchagra", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:t.benchagra@usms.ac.ma", label: "Email" }
                        ].map((social, i) => (
                            <a 
                                key={i} 
                                href={social.href} 
                                target="_blank" 
                                rel="noreferrer"
                                className="p-4 rounded-2xl bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all group"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
                        © {currentYear} Tawfik Benchagra. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#about" className="text-xs font-bold text-slate-600 hover:text-white transition-colors uppercase tracking-widest">About</a>
                        <a href="#projects" className="text-xs font-bold text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Projects</a>
                        <a href="#contact" className="text-xs font-bold text-slate-600 hover:text-white transition-colors uppercase tracking-widest">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
