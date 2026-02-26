"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

type Category = "All" | "Backend" | "Data" | "Automation" | "ML";

const projects = [
    {
        title: "GreenKeyper Backend",
        desc: "Built and optimized RESTful APIs with Node.js and Express for a scalable environmental tracking platform. Integrated MongoDB and improved response times by 30%.",
        tags: ["Node.js", "Express", "MongoDB", "REST API"],
        category: "Backend" as Category,
        metrics: "30% faster API",
        color: "cyan",
        github: "https://github.com/saifullahawan",
        live: "https://github.com/saifullahawan/GreenKeyper",
    },
    {
        title: "Intern Management System (IMS)",
        desc: "Built robust Python modules for managing tasks, tracking timelines, and conducting internal evaluations for management.",
        tags: ["Python", "Automation", "Workflow"],
        category: "Automation" as Category,
        metrics: "Efficient tracking",
        color: "violet",
        github: "https://github.com/saifullahawan",
        live: "https://github.com/saifullahawan/Intern-Management-System",
    },
    {
        title: "Data Cleaning Tool",
        desc: "Developed a robust scripting tool for cleaning and validating large volumes of CSV data using Pandas and Regex, reducing manual execution time by 40%.",
        tags: ["Python", "Pandas", "Regex", "Data Cleaning"],
        category: "Data" as Category,
        metrics: "40% time saved",
        color: "emerald",
        github: "https://github.com/saifullahawan",
        live: "https://github.com/saifullahawan/Data-Cleaning-Tool",
    },
    {
        title: "API Integration Engine",
        desc: "Implemented, tested, and integrated seamless RESTful API calls and services using Python requests and modern FastAPI infrastructure.",
        tags: ["Python", "FastAPI", "JSON", "REST API"],
        category: "Backend" as Category,
        metrics: "Seamless sync",
        color: "orange",
        github: "https://github.com/saifullahawan",
        live: "https://github.com/saifullahawan/API-Integration-Engine",
    },
    {
        title: "Milo Chat Bot",
        desc: "An intelligent, responsive AI-powered chat bot providing interactive responses and automated support.",
        tags: ["React", "AI", "Chatbot", "Vercel"],
        category: "Automation" as Category,
        metrics: "Interactive AI",
        color: "cyan",
        github: "https://github.com/saifullahawan",
        live: "https://milo-chat-bot.vercel.app/",
    },
    {
        title: "AI Object Scanner App",
        desc: "A desktop-based AI object detection app using YOLOv8 and CustomTkinter for real-time bounding box annotations and PDF reporting.",
        tags: ["Python", "YOLOv8", "OpenCV", "AI"],
        category: "ML" as Category,
        metrics: "Real-time vision",
        color: "orange",
        github: "https://github.com/saifxawan/AI-Object-Scanner-App-using-YOLOv8-and-Python-GUI",
        live: "https://github.com/saifxawan/AI-Object-Scanner-App-using-YOLOv8-and-Python-GUI",
    },
    {
        title: "Milo - Data Insight Pro",
        desc: "A modern Python-based Data Analysis & Visualization Tool built with CustomTkinter, Pandas, and Matplotlib. Offers one-click tabular data loading and interactive charts.",
        tags: ["Python", "Pandas", "Matplotlib", "GUI"],
        category: "Data" as Category,
        metrics: "1-Click Insights",
        color: "violet",
        github: "https://github.com/saifxawan/-Milo-Data-Insight-Pro",
        live: "https://github.com/saifxawan/-Milo-Data-Insight-Pro",
    },
    {
        title: "Pneumonia Detection CNN",
        desc: "A deep learning computer vision model utilizing Convolutional Neural Networks (CNNs) to accurately classify X-ray images, assisting medical professionals with rapid diagnosis.",
        tags: ["TensorFlow", "Keras", "Deep Learning", "CV"],
        category: "ML" as Category,
        metrics: "94% Accuracy",
        color: "emerald",
        github: "https://github.com/saifullahawan",
        live: "https://github.com/saifullahawan/Pneumonia-Detection-CNN",
    },
    {
        title: "Smart Traffic Flow Analyzer",
        desc: "A computer vision pipeline leveraging OpenCV and PyTorch to track vehicle movements, calculate traffic density, and detect anomalies in real-time surveillance footage.",
        tags: ["PyTorch", "OpenCV", "CV", "Python"],
        category: "ML" as Category,
        metrics: "Real-time tracking",
        color: "cyan",
        github: "https://github.com/saifullahawan",
        live: "https://github.com/saifullahawan/Smart-Traffic-Flow-Analyzer",
    }
];

const colorMap: Record<string, { badge: string; metric: string; glow: string }> = {
    cyan: {
        badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
        metric: "text-cyan-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]",
    },
    violet: {
        badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
        metric: "text-violet-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    },
    emerald: {
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        metric: "text-emerald-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    },
    orange: {
        badge: "border-orange-500/30 bg-orange-500/10 text-orange-400",
        metric: "text-orange-400",
        glow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    },
};

const FILTERS: Category[] = ["All", "Backend", "Data", "Automation", "ML"];

export default function ProjectsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [activeFilter, setActiveFilter] = useState<Category>("All");

    const filtered = projects.filter(
        (p) => activeFilter === "All" || p.category === activeFilter
    );

    return (
        <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">What I&apos;ve Built</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 ${activeFilter === f
                                ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
                                : "border-white/10 text-gray-400 glass hover:border-white/30 hover:text-white"
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => {
                            const c = colorMap[project.color];
                            return (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className={`group glass glass-hover border border-white/10 rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${c.glow}`}
                                >
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="font-bold text-lg text-white leading-tight pr-2">{project.title}</h3>
                                        <div className="flex gap-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                                <FiGithub size={16} />
                                            </a>
                                            <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                                                <FiExternalLink size={16} />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.desc}</p>

                                    {/* Metric */}
                                    <div className={`text-sm font-semibold font-mono mb-4 ${c.metric}`}>
                                        📈 {project.metrics}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-xs px-2 py-1 rounded-lg border font-mono ${c.badge}`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
