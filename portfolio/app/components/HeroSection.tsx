"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import dynamic from "next/dynamic";
import ScrollReveal from "./ui/ScrollReveal";

const TYPING_PHRASES = [
    "CEO & Managing Director at BritCraft Solutions.",
    "I Engineer Scalable Backend Architectures.",
    "I Architect Intelligent AI Solutions.",
    "I Drive Enterprise Data Transformation.",
];

function useTypingEffect(phrases: string[], speed = 80, pause = 2000) {
    const [text, setText] = useState("");
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = phrases[phraseIndex];
        let timeout: NodeJS.Timeout;

        if (!deleting && charIndex < current.length) {
            timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
        } else if (!deleting && charIndex === current.length) {
            timeout = setTimeout(() => setDeleting(true), pause);
        } else if (deleting && charIndex > 0) {
            timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setPhraseIndex((phraseIndex + 1) % phrases.length);
        }

        setText(current.substring(0, charIndex));
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, phraseIndex, phrases, speed, pause]);

    return text;
}

export default function HeroSection() {
    const typedText = useTypingEffect(TYPING_PHRASES);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >

            {/* Gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/3 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-2 text-xs font-mono font-semibold text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5 mb-6 tracking-widest uppercase">
                        Founder • Data Systems Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
                >
                    Hi, I&apos;m{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                        Saif Ullah
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="h-16 flex items-center justify-center mb-8"
                >
                    <h2 className="text-xl md:text-3xl font-mono font-semibold text-gray-300">
                        <span className="text-white">{typedText}</span>
                        <span className="inline-block w-0.5 h-6 md:h-8 bg-cyan-400 ml-1 animate-pulse" />
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    Founder and Backend Engineer dedicated to architecting high-performance data systems and intelligent AI solutions. Transforming complex enterprise challenges into scalable, data-driven software that drives technological innovation and strategic business growth.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                        View Projects
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </a>
                    <a
                        href="/SAIFULLAHAWAN_CV.pdf"
                        download
                        className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/20 text-white font-semibold hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
                    >
                        <FiDownload size={16} />
                        Download CV
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/20 text-gray-300 font-semibold hover:border-violet-400/50 hover:text-violet-400 transition-all duration-300 hover:scale-105"
                    >
                        <FiMail size={16} />
                        Contact Me
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
                >
                    <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <FiArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
