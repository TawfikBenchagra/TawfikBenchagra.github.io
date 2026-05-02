'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, ArrowRight, MessageSquare } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="relative py-32 bg-[#020617] overflow-hidden">
            
            {/* Background Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-4">
                            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight">
                                Let's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Collaborate.</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                                Whether it's a research initiative, a software architecture challenge, or just a conversation about the future of tech—my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a 
                                href="mailto:tawfikbenchagra1@gmail.com" 
                                className="group flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white hover:border-white transition-all duration-500"
                            >
                                <div className="p-4 bg-indigo-500 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-indigo-500/20">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">Email Me</p>
                                    <p className="text-xl md:text-2xl font-bold text-white group-hover:text-slate-950 transition-colors">tawfikbenchagra1@gmail.com</p>
                                </div>
                                <ArrowRight className="w-6 h-6 ml-auto text-slate-600 group-hover:text-slate-950 group-hover:translate-x-2 transition-all" />
                            </a>

                            <div className="grid grid-cols-2 gap-4">
                                <a 
                                    href="https://linkedin.com/in/tawfikbenchagra" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="group flex flex-col gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-[#0A66C2] transition-all duration-500"
                                >
                                    <Linkedin className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
                                    <span className="text-lg font-bold text-white">LinkedIn</span>
                                </a>
                                <a 
                                    href="https://github.com/TawfikBenchagra" 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="group flex flex-col gap-4 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white transition-all duration-500"
                                >
                                    <Github className="w-8 h-8 text-slate-400 group-hover:text-slate-950 transition-colors" />
                                    <span className="text-lg font-bold text-white group-hover:text-slate-950">GitHub</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-indigo-500/20 rounded-[3rem] rotate-3 blur-3xl" />
                        <div className="relative p-12 rounded-[3rem] bg-slate-900/60 backdrop-blur-3xl border border-white/10 shadow-2xl space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                <p className="text-sm text-emerald-400 font-bold uppercase tracking-widest">Available for hire</p>
                            </div>
                            <h3 className="text-3xl font-bold text-white">Message Me Directly</h3>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                                    <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white h-32 resize-none focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell me about your project..." />
                                </div>
                                <button className="w-full py-5 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-3 active:scale-[0.98]">
                                    Send Message
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
