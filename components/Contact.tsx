'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Construct the mailto link dynamically
        const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
        
        window.location.href = `mailto:t.benchagra@usms.ac.ma?subject=${subject}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-24 min-h-screen bg-slate-950 flex flex-col justify-center overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
            
            <div className="max-w-5xl mx-auto px-6 md:px-12 w-full">
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Let's Connect</h2>
                    <div className="h-1 w-24 bg-indigo-500 rounded-full mx-auto mb-6" />
                    <p className="text-slate-400 text-lg max-w-xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    
                    {/* Contact Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="glassmorphism bg-slate-900/50 border border-slate-800 p-8 rounded-3xl h-full flex flex-col justify-center">
                            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
                            
                            <div className="space-y-6">
                                <a href="mailto:t.benchagra@usms.ac.ma" className="flex items-start gap-4 group">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl group-hover:bg-indigo-500/20 transition-colors border border-indigo-500/20">
                                        <Mail className="text-indigo-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Email</p>
                                        <p className="text-lg text-slate-200 group-hover:text-indigo-400 transition-colors">t.benchagra@usms.ac.ma</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                                        <MapPin className="text-indigo-400 w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
                                        <p className="text-lg text-slate-200">Morocco</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="glassmorphism bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -z-10" />
                            
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Full Name</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        name="name" 
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600"
                                        placeholder="John Doe"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email Address</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                    <textarea 
                                        id="message" 
                                        name="message" 
                                        required
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-950/50 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600 resize-none"
                                        placeholder="Hello Tawfik, I'd like to talk about..."
                                    />
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit" 
                                    className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all"
                                >
                                    <Send size={18} />
                                    Send Message
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
