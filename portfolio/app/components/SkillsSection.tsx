"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
    {
        title: "Backend Engineering",
        color: "cyan",
        skills: [
            { name: "Python", level: 92 },
            { name: "Django / DRF", level: 88 },
            { name: "FastAPI", level: 84 },
            { name: "Flask", level: 80 },
            { name: "Node.js", level: 65 },
        ],
    },
    {
        title: "Data & Machine Learning",
        color: "violet",
        skills: [
            { name: "Pandas / NumPy", level: 90 },
            { name: "Scikit-learn", level: 85 },
            { name: "TensorFlow", level: 75 },
            { name: "SQL / PostgreSQL", level: 88 },
            { name: "Apache Spark", level: 65 },
        ],
    },
    {
        title: "Frontend & APIs",
        color: "emerald",
        skills: [
            { name: "REST API Design", level: 90 },
            { name: "React / Next.js", level: 72 },
            { name: "TypeScript", level: 70 },
            { name: "GraphQL", level: 60 },
            { name: "HTML / CSS", level: 80 },
        ],
    },
    {
        title: "DevOps & Tools",
        color: "orange",
        skills: [
            { name: "Docker", level: 78 },
            { name: "Git / GitHub", level: 92 },
            { name: "Linux", level: 82 },
            { name: "AWS (Basics)", level: 60 },
            { name: "CI/CD", level: 65 },
        ],
    },
];

const colorMap: Record<string, { bar: string; glow: string; badge: string; heading: string }> = {
    cyan: {
        bar: "bg-gradient-to-r from-cyan-500 to-cyan-400",
        glow: "shadow-[0_0_12px_rgba(0,212,255,0.6)]",
        badge: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
        heading: "text-cyan-400",
    },
    violet: {
        bar: "bg-gradient-to-r from-violet-500 to-violet-400",
        glow: "shadow-[0_0_12px_rgba(139,92,246,0.6)]",
        badge: "border-violet-500/30 bg-violet-500/10 text-violet-400",
        heading: "text-violet-400",
    },
    emerald: {
        bar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
        glow: "shadow-[0_0_12px_rgba(16,185,129,0.6)]",
        badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        heading: "text-emerald-400",
    },
    orange: {
        bar: "bg-gradient-to-r from-orange-500 to-orange-400",
        glow: "shadow-[0_0_12px_rgba(249,115,22,0.6)]",
        badge: "border-orange-500/30 bg-orange-500/10 text-orange-400",
        heading: "text-orange-400",
    },
};

function SkillBar({
    name,
    level,
    color,
    delay,
}: {
    name: string;
    level: number;
    color: string;
    delay: number;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const c = colorMap[color];

    return (
        <div ref={ref} className="space-y-1">
            <div className="flex justify-between text-sm">
                <span className="text-gray-300 font-medium">{name}</span>
                <span className={`font-mono text-xs ${c.heading}`}>{level}%</span>
            </div>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay, ease: "easeOut" }}
                    className={`h-full rounded-full ${c.bar} ${c.glow}`}
                />
            </div>
        </div>
    );
}

const techStack = [
    "Python", "Django", "FastAPI", "TensorFlow", "Scikit-learn", "PostgreSQL",
    "Redis", "Docker", "Git", "React", "Next.js", "Pandas", "NumPy", "Spark",
    "AWS", "Linux", "REST API", "GraphQL", "CI/CD", "Celery",
];

export default function SkillsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-padding relative" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">Technical Arsenal</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Skills &{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Expertise
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {skillCategories.map((cat, catIdx) => {
                        const c = colorMap[cat.color];
                        return (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: catIdx * 0.15 }}
                                className="glass glass-hover border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
                            >
                                <h3 className={`font-bold text-lg mb-5 ${c.heading}`}>{cat.title}</h3>
                                <div className="space-y-4">
                                    {cat.skills.map((skill, sIdx) => (
                                        <SkillBar
                                            key={skill.name}
                                            name={skill.name}
                                            level={skill.level}
                                            color={cat.color}
                                            delay={catIdx * 0.15 + sIdx * 0.1}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Stack Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="text-center"
                >
                    <p className="text-gray-500 text-sm font-mono mb-6 tracking-widest uppercase">Full Tech Stack</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {techStack.map((tech, i) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1.5 text-xs font-mono border rounded-lg glass cursor-default transition-all text-gray-400 border-white/10 hover:border-cyan-400/40 hover:text-cyan-400"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
