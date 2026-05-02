'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Database, Briefcase, CalendarCheck, Network, Users, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "API_Manager",
        description: "A robust Laravel API application designed to optimize university platforms. Features administrative control and high-performance data pipelines.",
        tech: ["Laravel", "PHP", "MySQL"],
        icon: Network,
        link: "https://github.com/TawfikBenchagra/API_Manager",
        image: "/images/projects/api_manager.png",
        span: "lg:col-span-2 lg:row-span-2",
        color: "indigo"
    },
    {
        id: 2,
        title: "Club System",
        description: "Advanced platform for university club coordination, association management, and competition tracking.",
        tech: ["PHP", "JavaScript"],
        icon: Users,
        link: "https://github.com/TawfikBenchagra/Clubs",
        image: "/images/projects/club_system.png",
        span: "lg:col-span-1 lg:row-span-2",
        color: "purple"
    },
    {
        id: 3,
        title: "Gestion De Conge",
        description: "Comprehensive leave management and employee tracking dashboard for streamlined administration.",
        tech: ["Laravel", "Blade"],
        icon: CalendarCheck,
        link: "https://github.com/TawfikBenchagra/Gestion-De-Conge",
        image: "/images/projects/gestion_conge.png",
        span: "lg:col-span-1 lg:row-span-1",
        color: "blue"
    },
    {
        id: 4,
        title: "PFE MANAGER",
        description: "Graduation project management platform helping faculty and students organize academic submissions.",
        tech: ["PHP", "Laravel"],
        icon: Briefcase,
        link: "https://github.com/TawfikBenchagra/PFE-MANAGER",
        image: "/images/projects/pfe_manager.png",
        span: "lg:col-span-1 lg:row-span-1",
        color: "emerald"
    },
    {
        id: 5,
        title: "PR-SENCE",
        description: "Dedicated attendance monitoring and administrative logging system for institutional records.",
        tech: ["Software Eng", "DB"],
        icon: Database,
        link: "https://github.com/TawfikBenchagra/pr-sence",
        image: "/images/projects/prsence.png",
        span: "lg:col-span-1 lg:row-span-1",
        color: "pink"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
};

export default function Projects() {
    return (
        <section id="projects" className="relative py-32 bg-[#020617] overflow-hidden">
            
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-baseline justify-between mb-20 gap-8"
                >
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                            Selected <span className="text-indigo-400 italic">Work.</span>
                        </h2>
                        <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    </div>
                    <p className="text-slate-400 text-lg max-w-lg font-light leading-relaxed">
                        A curation of systems designed with focus on performance, scalability, and seamless user interaction.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => {
                        const Icon = project.icon;
                        
                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className={`group relative rounded-[2.5rem] overflow-hidden bg-slate-900/40 border border-white/5 transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 ${project.span}`}
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-transparent" />
                                </div>
                                
                                <div className="relative z-10 p-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md group-hover:bg-indigo-500 group-hover:border-indigo-400 transition-all duration-500">
                                            <Icon className="text-white w-6 h-6" />
                                        </div>
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white text-white hover:text-slate-950 rounded-full border border-white/10 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
                                        >
                                            GitHub <ArrowUpRight className="w-3 h-3" />
                                        </a>
                                    </div>
                                    
                                    <div className="mt-auto space-y-4">
                                        <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light line-clamp-2">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 text-[10px] font-bold tracking-tighter uppercase text-indigo-300 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Overlay glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-transparent to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-700 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </motion.div>
                
                {/* Profile Link */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <a 
                        href="https://github.com/TawfikBenchagra" 
                        target="_blank" 
                        rel="noreferrer"
                        className="group flex items-center gap-4 px-10 py-5 rounded-full bg-slate-900 border border-white/10 text-white font-bold hover:bg-white hover:text-slate-950 transition-all shadow-xl"
                    >
                        <Github className="w-6 h-6" />
                        Explore Complete Archive
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
