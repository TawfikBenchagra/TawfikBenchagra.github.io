'use client';

import { useEffect, useMemo, useCallback } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { Briefcase, GraduationCap, ChevronRight, Download, ArrowRight } from 'lucide-react';

export default function About() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

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
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="about" className="relative py-24 min-h-screen overflow-hidden bg-slate-950 flex flex-col justify-center items-center">

            <motion.div
                className="pointer-events-none fixed inset-0 z-30 transition duration-300"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(99, 102, 241, 0.08), transparent 80%)`
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
                        color: { value: ["#4f46e5", "#a855f7", "#ec4899"] },
                        links: {
                            color: "#818cf8",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            random: true,
                            speed: 0.8,
                            straight: false,
                        },
                        number: { density: { enable: true, area: 800 }, value: 60 },
                        opacity: { value: 0.3 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
                className="absolute inset-0 z-0 pointer-events-none"
            />

            {/* Background Decorators */}
            <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <motion.div
                className="max-w-5xl w-full mx-auto px-6 md:px-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* Intro Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div variants={itemVariants} className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-4 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                            </span>
                            Available for new opportunities
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 leading-tight drop-shadow-2xl">
                            Hi, I'm <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">Tawfik BENCHAGRA.</span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-slate-200 drop-shadow-lg">
                            PhD Student.
                        </h2>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-light max-w-2xl">
                            Passionate about innovation with strong expertise in multiple languages and technologies including <span className="text-indigo-300 font-medium">C, C++, PHP, SQL, HTML, CSS, Linux</span>, and <span className="text-indigo-300 font-medium">Python</span>. Demonstrating a solid technical and academic background.
                        </p>
                        <div className="pt-4 flex flex-wrap gap-4">
                            <a href="#projects" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]">
                                View Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="mailto:tawfikbenchagra1@gmail.com" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-slate-200 font-medium transition-all">
                                Contact Me
                                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={itemVariants} 
                        whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto perspective-1000 z-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl rotate-3 opacity-30 blur-xl animate-pulse" />
                        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.2)] z-10 p-8 flex flex-col justify-center gap-6 transform transition-all duration-300 hover:border-indigo-500/50">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                                    <span className="font-mono text-sm">IT Administrator</span>
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wide">Core Expertise</h3>
                                <div className="flex flex-wrap gap-2">
                                    {['C/C++', 'Python', 'PHP / Laravel', 'SQL / Oracle', 'Linux / Shell', 'Networking', 'Algorithms'].map((skill) => (
                                        <span key={skill} className="px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-slate-800 to-slate-900 text-indigo-300 border border-indigo-500/30 shadow-inner hover:bg-slate-800 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Journey Section */}
                <motion.div variants={itemVariants} className="mb-16">
                    <div className="flex items-center gap-4 mb-10 w-full">
                        <h2 className="text-3xl font-bold text-white whitespace-nowrap">My Journey</h2>
                        <div className="h-[1px] w-full bg-gradient-to-r from-slate-800 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                        {/* Experience Column */}
                        <div className="space-y-8 relative">
                            <div className="absolute left-[21px] top-10 bottom-0 w-px bg-slate-800 -z-10" />

                            <div className="flex items-center gap-3 text-indigo-400 mb-6">
                                <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                                    <Briefcase size={20} />
                                </div>
                                <h3 className="text-2xl font-semibold">Experience</h3>
                            </div>

                            {[
                                { title: 'Vice Secretary General', company: 'IBN AL-BANNA ORGANIZATION FOR SCIENTIFIC RESEARCH, INNOVATION, AND CHARITY | Present', desc: 'Engaging in scientific research, innovation initiatives, and charitable organizational efforts.' },
                                { title: 'IT Administrator', company: 'ENSA Beni Mellal | Dec 2024 - Present', desc: 'Managing IT infrastructure, network systems, and providing technical support and administration within the university.' },
                                { title: 'IT & Telecom Intern', company: 'ENSA Beni Mellal | Jan 2025 - May 2025', desc: 'Internship focusing on practical applications of telecommunications and IT networks.' },
                                { title: 'General Census Participant', company: 'Morocco | Sep 2024', desc: 'Participated in the General Census of Population and Housing (RGPH 2024).' }
                            ].map((exp, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="relative pl-12 group cursor-default mb-8"
                                >
                                    <div className="absolute left-[13px] top-2 w-4 h-4 rounded-full bg-slate-950 border-4 border-indigo-500 group-hover:bg-indigo-400 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />
                                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/60 p-7 rounded-2xl group-hover:border-indigo-500/50 group-hover:bg-slate-800/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                                        <h4 className="text-xl font-bold text-slate-100 mb-1">{exp.title}</h4>
                                        <span className="text-sm text-indigo-400 font-semibold mb-3 block tracking-wide uppercase">{exp.company}</span>
                                        <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{exp.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education Column */}
                        <div className="space-y-8 relative">
                            <div className="absolute left-[21px] top-10 bottom-0 w-px bg-slate-800 -z-10" />

                            <div className="flex items-center gap-3 text-purple-400 mb-6">
                                <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20">
                                    <GraduationCap size={20} />
                                </div>
                                <h3 className="text-2xl font-semibold">Education</h3>
                            </div>

                            {[
                                { degree: "PhD Researcher in Opinion Mining & Social Media Analytics", school: "Polydisciplinary Faculty, Beni Mellal | Dec 2025 - Present", desc: "Conducting advanced academic research on opinion mining and analyzing social media data to improve urban decision-making processes." },
                                { degree: "Master's in Telecommunication Systems and Computer Networks", school: "2025", desc: "Advanced studies in telecommunications and computer networking infrastructure." },
                                { degree: "Bachelor's in Mathematical and Computer Sciences", school: "2023", desc: "Comprehensive foundational degree in mathematics, algorithms, and computer science." },
                                { degree: "High School Diploma (Experimental Sciences)", school: "2019", desc: "Specialization in Physical Sciences." }
                            ].map((edu, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 10, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    className="relative pl-12 group cursor-default mb-8"
                                >
                                    <div className="absolute left-[13px] top-2 w-4 h-4 rounded-full bg-slate-950 border-4 border-purple-500 group-hover:bg-purple-400 group-hover:scale-125 transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10" />
                                    <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/60 p-7 rounded-2xl group-hover:border-purple-500/50 group-hover:bg-slate-800/80 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                                        <h4 className="text-xl font-bold text-slate-100 mb-1">{edu.degree}</h4>
                                        <span className="text-sm text-purple-400 font-semibold mb-3 block tracking-wide uppercase">{edu.school}</span>
                                        <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{edu.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </motion.div>

            </motion.div>
        </section>
    );
}
