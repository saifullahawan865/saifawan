"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBookOpen, FiCalendar, FiMapPin } from "react-icons/fi";

const education = [
    {
        degree: "Bachelor of Science, Information Technology",
        institution: "Air University",
        period: "2023 – 2027",
        location: "Islamabad",
        type: "Degree",
        color: "cyan",
        highlights: [
            "Focus on backend engineering, data structures, and algorithms",
            "Engaged in academic projects involving full-stack web development and databases",
        ],
    },
    {
        degree: "Intermediate in Computer Science (ICS)",
        institution: "Air Base Inter College Mushaf Sargodha",
        period: "August 2021 – July 2023",
        location: "Sargodha",
        type: "College",
        color: "violet",
        highlights: [
            "Studied core computer science concepts, physics, and mathematics",
            "Graduated with honors",
        ],
    },
    {
        degree: "Matriculation (Computer Science)",
        institution: "Fazaia Inter College (FIC)",
        period: "January 2019 – January 2021",
        location: "Pakistan",
        type: "School",
        color: "emerald",
        highlights: [
            "Introduced to fundamental programming concepts and IT fundamentals",
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
};

export default function EducationSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="education" className="section-padding relative" ref={ref}>
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Academic Background</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        My{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line opacity-30" />

                    <div className="space-y-12">
                        {education.map((edu, i) => {
                            const c = colorMap[edu.color];
                            const isLeft = i % 2 === 0;
                            return (
                                <motion.div
                                    key={edu.institution}
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
                                                <h3 className={`font-bold text-lg ${c.heading}`}>{edu.degree}</h3>
                                                <div className="flex items-center gap-1 text-white font-semibold mt-0.5">
                                                    <FiBookOpen size={14} className="text-gray-400" />
                                                    <span>{edu.institution}</span>
                                                </div>
                                            </div>
                                            <span className={`text-xs px-2 py-1 rounded-lg border font-mono ${c.type}`}>
                                                {edu.type}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <FiCalendar size={12} /> {edu.period}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <FiMapPin size={12} /> {edu.location}
                                            </span>
                                        </div>

                                        <ul className="space-y-2">
                                            {edu.highlights.map((h, j) => (
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
