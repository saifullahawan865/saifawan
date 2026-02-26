"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
    {
        role: "CEO & Managing Director",
        company: "BritCraft Solutions",
        period: "Feb 2026 – Present",
        location: "Global",
        type: "Self-Employed",
        color: "orange",
        highlights: [
            "Founded a full-service digital agency delivering Web & Mobile Applications, Cloud Management, and Custom Software Development.",
            "Leading AI & Machine Learning integrations helping worldwide businesses build smart, future-ready digital solutions.",
            "Overseeing end-to-end modern tech enterprise development, ensuring precision and digital innovation.",
            "Architecting scalable backend infrastructures and data visualization strategies for enterprise clients."
        ],
    },
    {
        role: "Backend Engineer Intern",
        company: "SPS – Software Productivity Strategists ",
        period: "2024 – 2025",
        location: "Pakistan (Remote)",
        type: "Internship",
        color: "cyan",
        highlights: [
            "Engineered REST APIs for IoT water management systems using Django REST Framework",
            "Optimized database queries with Redis caching — achieved 30% API performance boost",
            "Integrated real-time WebSocket data streams for live sensor monitoring",
            "Collaborated with a cross-functional team to deploy on AWS EC2",
        ],
    },
    {
        role: "Python Developer Intern",
        company: "Technik Nest",
        period: "2023 – 2024",
        location: "Lahore, Pakistan",
        type: "Internship",
        color: "violet",
        highlights: [
            "Built multi-threaded automation scripts for business process optimization",
            "Reduced manual data processing time by 50% through Celery task queues",
            "Developed and integrated third-party API connectors (Slack, Google Sheets)",
            "Collaborated on ML prototype for smart inventory management",
        ],
    },
    {
        role: "Freelance Data & ML Engineer",
        company: "Independent Clients",
        period: "2023 – Present",
        location: "Remote",
        type: "Freelance",
        color: "emerald",
        highlights: [
            "Delivered custom Python automation workflows for data extraction and reporting",
            "Trained regression/classification ML models achieving 85%+ accuracy",
            "Built FastAPI microservices with Docker containerization",
            "Provided data-driven insights via interactive dashboards",
        ],
    },
];

const colorMap: Record<string, { dot: string; border: string; type: string; heading: string }> = {
    cyan: {
        dot: "bg-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.8)]",
        border: "border-cyan-500/30",
        type: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
        heading: "text-cyan-400",
    },
    violet: {
        dot: "bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]",
        border: "border-violet-500/30",
        type: "border-violet-500/30 bg-violet-500/10 text-violet-400",
        heading: "text-violet-400",
    },
    emerald: {
        dot: "bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]",
        border: "border-emerald-500/30",
        type: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        heading: "text-emerald-400",
    },
    orange: {
        dot: "bg-orange-400 shadow-[0_0_10px_rgba(249,115,22,0.8)]",
        border: "border-orange-500/30",
        type: "border-orange-500/30 bg-orange-500/10 text-orange-400",
        heading: "text-orange-400",
    },
};

export default function ExperienceSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section-padding relative" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-orange-400 tracking-widest uppercase">My Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Work{" "}
                        <span className="bg-gradient-to-r from-orange-400 to-violet-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line opacity-30" />

                    <div className="space-y-12">
                        {experiences.map((exp, i) => {
                            const c = colorMap[exp.color];
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                                    animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                                    transition={{ duration: 0.7, delay: i * 0.2 }}
                                    className={`relative md:w-1/2 pl-16 md:pl-0 ${isLeft ? "md:pr-12 md:ml-0" : "md:ml-auto md:pl-12"
                                        }`}
                                >
                                    {/* Dot */}
                                    <div
                                        className={`absolute left-6 md:left-auto ${isLeft ? "md:-right-3" : "md:-left-3"
                                            } top-6 w-3 h-3 rounded-full ${c.dot} -translate-x-1/2`}
                                    />

                                    {/* Card */}
                                    <div className={`glass glass-hover border rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 ${c.border}`}>
                                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                                            <div>
                                                <h3 className={`font-bold text-lg ${c.heading}`}>{exp.role}</h3>
                                                <div className="flex items-center gap-1 text-white font-semibold mt-0.5">
                                                    <FiBriefcase size={14} className="text-gray-400" />
                                                    <span>{exp.company}</span>
                                                </div>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-lg border font-mono ${c.type}`}>
                                                {exp.type}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <FiCalendar size={12} /> {exp.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiMapPin size={12} /> {exp.location}
                                            </span>
                                        </div>

                                        <ul className="space-y-2">
                                            {exp.highlights.map((h, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                                                    <span className="text-gray-600 mt-0.5">▹</span>
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
