'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Database, Briefcase, CalendarCheck, Network, Users } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "API_Manager",
        description: "A robust Laravel API application designed to optimize and manage university platforms. Features administrative control, data pipelines for large datasets, and comprehensive system user management.",
        tech: ["PHP", "Laravel", "MySQL", "REST API"],
        icon: Network,
        link: "https://github.com/TawfikBenchagra/API_Manager",
        image: "/images/projects/api_manager.png",
        span: "md:col-span-2 md:row-span-2",
        gradient: "from-blue-500/10 via-slate-900 to-slate-900 border-blue-500/20"
    },
    {
        id: 2,
        title: "Club Management System",
        description: "An advanced PHP-based platform to manage university clubs, associations, and competitions. Includes administrative interfaces, dynamic filtering, and visual badges for entity categorization.",
        tech: ["PHP", "JavaScript", "MySQL", "CSS"],
        icon: Users,
        link: "https://github.com/TawfikBenchagra/Clubs",
        image: "/images/projects/club_system.png",
        span: "md:col-span-1 md:row-span-2",
        gradient: "from-orange-500/10 via-slate-900 to-slate-900 border-orange-500/20"
    },
    {
        id: 3,
        title: "Gestion De Conge",
        description: "A comprehensive leave management system built with PHP & Laravel. Streamlines employee time-off requests, approvals, and absence tracking in a centralized dashboard.",
        tech: ["PHP", "Laravel", "MySQL", "JavaScript"],
        icon: CalendarCheck,
        link: "https://github.com/TawfikBenchagra/Gestion-De-Conge",
        image: "/images/projects/gestion_conge.png",
        span: "md:col-span-1 md:row-span-1",
        gradient: "from-indigo-500/10 via-slate-900 to-slate-900 border-indigo-500/20"
    },
    {
        id: 4,
        title: "PFE MANAGER",
        description: "End-of-studies project management platform. Built to help students and faculty organize, submit, and evaluate graduation projects.",
        tech: ["PHP", "Laravel", "Blade"],
        icon: Briefcase,
        link: "https://github.com/TawfikBenchagra/PFE-MANAGER",
        image: "/images/projects/pfe_manager.png",
        span: "md:col-span-1 md:row-span-1",
        gradient: "from-emerald-500/10 via-slate-900 to-slate-900 border-emerald-500/20"
    },
    {
        id: 5,
        title: "PR-SENCE",
        description: "A dedicated repository for presence and attendance tracking. Provides essential logging and monitoring capabilities for administrative records.",
        tech: ["Software Engineering", "Tracking"],
        icon: Database,
        link: "https://github.com/TawfikBenchagra/pr-sence",
        image: "/images/projects/prsence.png",
        span: "md:col-span-1 md:row-span-1",
        gradient: "from-purple-500/10 via-slate-900 to-slate-900 border-purple-500/20"
    }
];

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

export default function Projects() {
    return (
        <section id="projects" className="relative py-24 bg-slate-950 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 w-full">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
                        <div className="h-1 w-24 bg-indigo-500 rounded-full" />
                    </div>
                    <p className="text-slate-400 text-lg max-w-lg">
                        A selection of my recent software development work, highlighting expertise in back-end engineering, database management, and architecture.
                    </p>
                </div>

                {/* Bento Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]"
                >
                    {projects.map((project) => {
                        const Icon = project.icon;
                        
                        return (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className={`group relative rounded-3xl overflow-hidden glassmorphism border bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 ${project.span}`}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 z-0"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent z-0`} />
                                <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] z-0" />
                                
                                <div className="relative z-10 p-8 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-slate-800/50 rounded-2xl border border-slate-700/50 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="text-slate-300 w-6 h-6" />
                                        </div>
                                        <a 
                                            href={project.link} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="p-3 bg-slate-800/50 hover:bg-indigo-500 hover:text-white text-slate-400 rounded-full border border-slate-700/50 transition-all duration-300"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                    
                                    <div className="mt-auto">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 text-xs font-semibold tracking-wider uppercase text-slate-300 bg-slate-800/80 rounded-full border border-slate-700">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Subtle Hover Glow Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/0 via-transparent to-indigo-500/0 group-hover:from-indigo-500/10 transition-colors duration-500 pointer-events-none z-0" />
                            </motion.div>
                        );
                    })}
                </motion.div>
                
                {/* Call to action */}
                <div className="mt-16 flex justify-center">
                    <a 
                        href="https://github.com/TawfikBenchagra" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800 hover:border-slate-700 transition-all group shadow-lg"
                    >
                        <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                        View Full GitHub Profile
                    </a>
                </div>

            </div>
        </section>
    );
}
