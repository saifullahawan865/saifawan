"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FiCode, FiDatabase, FiCpu, FiTrendingUp } from "react-icons/fi";

const highlights = [
    { icon: FiCode, label: "Backend Eng.", desc: "Django, FastAPI, Flask", color: "cyan" },
    { icon: FiDatabase, label: "Data & Analytics", desc: "SQL, Pandas, Spark", color: "violet" },
    { icon: FiCpu, label: "AI/ML", desc: "TensorFlow, Scikit-learn", color: "emerald" },
    { icon: FiTrendingUp, label: "API Optimization", desc: "30% perf boost", color: "orange" },
];

const colorMap: Record<string, string> = {
    cyan: "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400",
    violet: "from-violet-500/20 to-violet-500/5 border-violet-500/30 text-violet-400",
    emerald: "from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400",
    orange: "from-orange-500/20 to-orange-500/5 border-orange-500/30 text-orange-400",
};

export default function AboutSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Who I Am</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        About{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Me
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Image + Floating Shapes */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-80 md:h-80">
                            {/* Gradient ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-violet-500 to-emerald-500 p-1">
                                <div className="w-full h-full rounded-full bg-navy-950 overflow-hidden">
                                    <Image
                                        src="/profile.jpeg"
                                        alt="Saif Ullah Awan"
                                        fill
                                        className="object-cover rounded-full"
                                        priority
                                    />
                                </div>
                            </div>
                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 glass border border-cyan-400/30 rounded-xl px-3 py-2 text-xs font-mono text-cyan-400"
                            >
                                Python 🐍
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-4 -left-4 glass border border-violet-400/30 rounded-xl px-3 py-2 text-xs font-mono text-violet-400"
                            >
                                ML Engineer 🤖
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I&apos;m <span className="text-white font-semibold">Saif Ullah Awan</span>, a dedicated Data Analyst, Backend Engineer, and the CEO of <span className="text-orange-400 font-medium">BritCraft Solutions</span>. Based in Pakistan, I specialize in designing and engineering scalable data infrastructures, intelligent machine learning algorithms, and high-performance backend architectures.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            My professional journey encompasses leading comprehensive enterprise digital transformation at BritCraft Solutions, alongside delivering impactful engineering solutions during my engagements at <span className="text-cyan-400 font-medium">SPS (Software Productivity Strategists)</span> and <span className="text-violet-400 font-medium">Technik Nest</span>. I hold a proven track record of optimizing system APIs by <span className="text-emerald-400 font-semibold">30%</span>, engineering automated workflows to reduce processing times by <span className="text-emerald-400 font-semibold">40%</span>, and deploying robust data models that provide pivotal business insights.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            With an unwavering commitment to technical excellence and strategic problem-solving, I continuously bridge the gap between raw data, advanced backend systems, and tangible business value.
                        </p>

                        {/* Stat Pills */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                { val: "2+", label: "Years Experience" },
                                { val: "15+", label: "Projects Built" },
                                { val: "30%", label: "API Optimization" },
                                { val: "85%+", label: "ML Accuracy" },
                            ].map((stat) => (
                                <div key={stat.label} className="glass border border-white/10 rounded-xl px-4 py-3 text-center">
                                    <div className="text-xl font-bold text-cyan-400">{stat.val}</div>
                                    <div className="text-xs text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                            className={`glass glass-hover border rounded-2xl p-5 bg-gradient-to-br transition-all duration-300 cursor-default ${colorMap[item.color]}`}
                        >
                            <item.icon size={24} className="mb-3" />
                            <div className="font-semibold text-sm text-white">{item.label}</div>
                            <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
