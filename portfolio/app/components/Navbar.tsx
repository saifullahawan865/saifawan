"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Metrics", href: "#dataviz" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 250) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        // Trigger once to set the initial active section
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        if (targetId === "" || targetId === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
            return;
        }
        const elem = document.getElementById(targetId);
        if (elem) {
            const offset = 100;
            const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMenuOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${scrolled ? "pt-4 px-4 md:px-6" : "pt-0"
                }`}
        >
            <div className={`flex items-center justify-between w-full transition-all duration-500 ${scrolled
                ? "max-w-5xl bg-[#0B1121]/80 backdrop-blur-xl border border-white/10 rounded-2xl py-3 px-6 shadow-2xl shadow-cyan-500/5"
                : "max-w-7xl bg-transparent py-6 px-6 md:px-8 border-transparent"
                }`}>
                {/* Logo */}
                <motion.a
                    href="#"
                    onClick={(e) => scrollToSection(e, "#")}
                    className="flex items-center"
                    whileHover={{ scale: 1.05 }}
                >
                    <Image
                        src="/logo.jpeg"
                        alt="Saif.dev Logo"
                        width={40}
                        height={40}
                        className="rounded-lg object-contain"
                    />
                </motion.a>

                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className={`relative text-[13px] font-medium transition-colors duration-300 group ${activeSection === link.href.replace("#", "")
                                ? "text-cyan-400"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {link.label}
                            <span
                                className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-cyan-400 to-violet-400 transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                    }`}
                            />
                        </a>
                    ))}
                </nav>

                {/* Social Icons + CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="https://github.com/saifullahawan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FiGithub size={18} />
                    </a>
                    <a
                        href="https://linkedin.com/in/saifullahawan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <FiLinkedin size={18} />
                    </a>
                    <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")} className="text-gray-400 hover:text-white transition-colors">
                        <FiMail size={18} />
                    </a>
                    <a
                        href="/SAIFULLAHAWAN_CV.pdf"
                        download
                        className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 transition-opacity"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-white/10 mt-3"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-gray-300 hover:text-cyan-400 transition-colors font-medium text-lg text-center"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="/SAIFULLAHAWAN_CV.pdf"
                                download
                                className="inline-block px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white text-center"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
