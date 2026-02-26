"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
    { label: "API Response Time Reduced", before: 100, after: 70, unit: "%", metric: "30% faster", color: "cyan" },
    { label: "Workflow Processing Time", before: 100, after: 50, unit: "%", metric: "50% reduction", color: "violet" },
    { label: "ML Model Accuracy", before: 0, after: 87, unit: "%", metric: "87% accuracy", color: "emerald" },
    { label: "Automation Test Coverage", before: 0, after: 80, unit: "%", metric: "80% coverage", color: "orange" },
];

const colorMap: Record<string, { bar: string; glow: string; text: string }> = {
    cyan: { bar: "from-cyan-500 to-cyan-400", glow: "shadow-[0_0_8px_rgba(0,212,255,0.6)]", text: "text-cyan-400" },
    violet: { bar: "from-violet-500 to-violet-400", glow: "shadow-[0_0_8px_rgba(139,92,246,0.6)]", text: "text-violet-400" },
    emerald: { bar: "from-emerald-500 to-emerald-400", glow: "shadow-[0_0_8px_rgba(16,185,129,0.6)]", text: "text-emerald-400" },
    orange: { bar: "from-orange-500 to-orange-400", glow: "shadow-[0_0_8px_rgba(249,115,22,0.6)]", text: "text-orange-400" },
};

function MetricCard({ metric, inView, delay }: { metric: typeof metrics[0]; inView: boolean; delay: number }) {
    const c = colorMap[metric.color];
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay }}
            className="glass glass-hover border border-white/10 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
        >
            <div className="mb-4">
                <p className="text-gray-400 text-sm mb-1">{metric.label}</p>
                <p className={`text-2xl font-bold ${c.text}`}>{metric.metric}</p>
            </div>

            {metric.before > 0 && (
                <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>Before</span>
                        <span>{metric.before}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full bg-red-500/50"
                            style={{ width: `${metric.before}%` }}
                        />
                    </div>
                </div>
            )}

            <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>After</span>
                    <span>{metric.after}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${metric.after}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
                        className={`h-full rounded-full bg-gradient-to-r ${c.bar} ${c.glow}`}
                    />
                </div>
            </div>
        </motion.div>
    );
}

const impactStats = [
    { value: "30%", label: "API Performance Boost", icon: "⚡" },
    { value: "50%", label: "Automation Efficiency", icon: "🤖" },
    { value: "85%+", label: "ML Model Accuracy", icon: "🧠" },
    { value: "15+", label: "Projects Delivered", icon: "🚀" },
];

export default function DataVizSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="dataviz" className="section-padding relative" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">By The Numbers</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Impact &{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                            Metrics
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                        Measurable outcomes from real-world engineering and data projects.
                    </p>
                </motion.div>

                {/* Impact Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {impactStats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass border border-white/10 rounded-2xl p-6 text-center hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Metrics Detail */}
                <div className="grid md:grid-cols-2 gap-6">
                    {metrics.map((m, i) => (
                        <MetricCard key={m.label} metric={m} inView={inView} delay={0.3 + i * 0.15} />
                    ))}
                </div>
            </div>
        </section>
    );
}
