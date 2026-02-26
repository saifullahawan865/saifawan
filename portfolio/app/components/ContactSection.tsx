"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const socials = [
    { icon: FiGithub, label: "GitHub", value: "github.com/saifullahawan", href: "https://github.com/saifullahawan" },
    { icon: FiLinkedin, label: "LinkedIn", value: "linkedin.com/in/saifullahawan", href: "https://linkedin.com/in/saifullahawan" },
    { icon: FiMail, label: "Email", value: "saifullahawan865@gmail.com", href: "mailto:saifullahawan865@gmail.com" },
    { icon: FiMapPin, label: "Location", value: "Pakistan 🇵🇰", href: "#" },
];

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true);

        try {
            const response = await fetch("https://formspree.io/f/mnjblerl", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                body: new FormData(e.currentTarget)
            });

            if (response.ok) {
                setSent(true);
                setForm({ name: "", email: "", subject: "", message: "" });
            }
        } catch (error) {
            console.error("Form submission error", error);
        }

        setSending(false);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <section id="contact" className="section-padding relative" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-violet-400 tracking-widest uppercase">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Let&apos;s{" "}
                        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                            Connect
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
                        I&apos;m open to new opportunities, collaborations, and interesting conversations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Available for opportunities</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you have a project in mind, need consultation on data systems,
                                or simply want to connect — my inbox is always open.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target={s.href.startsWith("http") ? "_blank" : undefined}
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 glass glass-hover border border-white/10 rounded-xl p-4 hover:border-cyan-400/30 transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                                        <s.icon size={18} className="text-cyan-400" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500">{s.label}</div>
                                        <div className="text-sm text-white font-medium">{s.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <form
                            action="https://formspree.io/f/mnjblerl"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                            {[
                                { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
                                { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                                { name: "subject", label: "Subject", type: "text", placeholder: "Project inquiry..." },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label className="block text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={form[field.name as keyof typeof form]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        required
                                        className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300 text-[16px] md:text-sm"
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-xs text-gray-500 mb-1 font-mono uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    required
                                    className="w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300 text-[16px] md:text-sm resize-none"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={sending || sent}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${sent
                                    ? "bg-emerald-500 text-white"
                                    : "bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90"
                                    }`}
                            >
                                {sent ? (
                                    <>✅ Message Sent!</>
                                ) : sending ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend size={16} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
