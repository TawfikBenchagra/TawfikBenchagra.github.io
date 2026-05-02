import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-950 border-t border-slate-800/50 py-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                
                {/* Logo / Name */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="text-2xl font-bold text-white tracking-tight mb-2">
                        Tawfik <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">BENCHAGRA</span>
                    </div>
                    <p className="text-slate-400 text-sm">PhD Student & IT Administrator</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                    <a 
                        href="https://github.com/TawfikBenchagra" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all group"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/tawfikbenchagra/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-[#0A66C2] hover:bg-slate-800 hover:border-[#0A66C2]/50 transition-all group"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                        href="mailto:t.benchagra@usms.ac.ma" 
                        className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 hover:border-indigo-500/50 transition-all group"
                        aria-label="Email Me"
                    >
                        <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                </div>

            </div>
            
            {/* Copyright & Source */}
            <div className="mt-12 text-center relative z-10 space-y-2">
                <p className="text-slate-500 text-sm">
                    © {currentYear} Tawfik Benchagra. All rights reserved.
                </p>
                <a 
                    href="https://github.com/TawfikBenchagra/TawfikBenchagra.github.io" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block text-xs text-slate-600 hover:text-indigo-400 transition-colors"
                >
                    Built with Next.js & Framer Motion • View Source Code
                </a>
            </div>
        </footer>
    );
}
