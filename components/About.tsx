'use client';

import { useEffect, useCallback } from 'react';
import { motion, useMotionValue, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { Briefcase, GraduationCap, ChevronRight, Mail, ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function About() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
    };

    return (
        <section id="about" className="relative min-h-screen overflow-hidden bg-[#020617] flex flex-col justify-center">
            
            {/* Background Aura Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div 
                    style={{ y: y1 }}
                    className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" 
                />
                <motion.div 
                    style={{ y: y2 }}
                    className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" 
                />
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-pink-600/10 rounded-full blur-[80px] animate-bounce-slow" />
            </div>

            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300"
                style={{
                    background: useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.05), transparent 80%)`
                }}
            />

            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false, zIndex: 0 },
                    background: { color: { value: "transparent" } },
                    fpsLimit: 120,
                    particles: {
                        color: { value: ["#4f46e5", "#a855f7"] },
                        links: {
                            color: "#818cf8",
                            distance: 150,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            random: true,
                            speed: 0.6,
                            straight: false,
                        },
                        number: { density: { enable: true, area: 800 }, value: 40 },
                        opacity: { value: 0.2 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 2 } },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 py-32">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                >
                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-8">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium backdrop-blur-md">
                            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                            PhD Candidate & Software Architect
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1 
                                variants={itemVariants}
                                className="text-6xl md:text-8xl font-black tracking-tight text-white leading-[0.9]"
                            >
                                Designing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                                    The Future.
                                </span>
                            </motion.h1>
                            
                            <motion.p 
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-2xl"
                            >
                                I am <span className="text-white font-medium">Tawfik Benchagra</span>, a researcher and developer dedicated to bridging the gap between advanced algorithms and intuitive user experiences.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
                            <a href="#projects" className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-white text-slate-950 font-bold overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                <span className="relative z-10">Explore Work</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                            <a href="#contact" className="group flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 border border-white/10 text-white font-bold transition-all hover:bg-white/5 hover:border-white/20">
                                Contact Me
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8">
                            {[
                                { icon: Github, href: "https://github.com/TawfikBenchagra", label: "GitHub" },
                                { icon: Linkedin, href: "https://linkedin.com/in/tawfikbenchagra", label: "LinkedIn" },
                                { icon: Mail, href: "mailto:tawfikbenchagra1@gmail.com", label: "Email" }
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="p-3 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Image/Visual Column */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <motion.div 
                            variants={itemVariants}
                            className="relative aspect-square w-full perspective-1000"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[4rem] rotate-6 scale-105 blur-2xl animate-pulse" />
                            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl border border-white/10 rounded-[4rem] overflow-hidden shadow-2xl flex items-center justify-center group">
                                <div className="p-12 text-center space-y-6">
                                    <div className="relative inline-block">
                                        <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                        <h2 className="text-8xl font-black text-white relative">TB</h2>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase">Expertise</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {['AI', 'Fullstack', 'Research', 'Systems'].map(skill => (
                                                <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-indigo-500/10 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div 
                style={{ opacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
                <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
            </motion.div>

        </section>
    );
}
