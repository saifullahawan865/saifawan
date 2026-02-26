"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiExternalLink, FiSearch } from "react-icons/fi";

const certificates = [
    {
        title: "Data Science Job Simulation",
        issuer: "Forage / British Airways",
        file: "Saif Ullah Awan Data Science Job Simulation Certificate of Completion August 11th, 2025.pdf",
        tags: ["Data Science", "Simulation"],
    },
    {
        title: "Diploma in Databases and T-SQL",
        issuer: "Alison",
        file: "Alison_Diploma_in_Databases_and_TSQL_Certificate.png",
        tags: ["Databases", "SQL"],
    },
    {
        title: "Generative AI for Leaders",
        issuer: "LinkedIn Learning",
        file: "CERTIFICATE OF COMPLETION Generative Al and Artificial Intelligence (Al) for Leaders.pdf",
        tags: ["AI", "GenAI"],
    },
    {
        title: "Python for Data Science",
        issuer: "Saylor Academy",
        file: "CS250 Python for Data Science.pdf",
        tags: ["Python", "Data Science"],
    },
    {
        title: "Modern Database Systems",
        issuer: "Saylor Academy",
        file: "CS403 Introduction to Modern Database Systems.pdf",
        tags: ["Databases", "SQL"],
    },
    {
        title: "Computer Communications & Networks",
        issuer: "Saylor Academy",
        file: "CS402 Computer Communications and Networks.pdf",
        tags: ["Networking"],
    },
    {
        title: "IBM Data Fundamentals",
        issuer: "IBM",
        file: "IBM Data fundamentals.pdf",
        tags: ["Data Engineering"],
    },
    {
        title: "Machine Learning In Python",
        issuer: "Alison",
        file: "Machine Learning  In Python Environment _ ALISON.png",
        tags: ["ML", "Python"],
    },
    {
        title: "Basics of Python",
        issuer: "UniAthena",
        file: "Basics Of Python Unianthena.png",
        tags: ["Python"],
    },
    {
        title: "Machine Learning Algorithms",
        issuer: "Great Learning",
        file: "Basics of Machine Learning algorithms .png",
        tags: ["ML"],
    },
    {
        title: "Computer Vision with Azure",
        issuer: "Microsoft",
        file: "Build a computer vision app with Azure Cognitive Services.pdf",
        tags: ["Azure", "Computer Vision"],
    },
];

export default function CertificatesSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certificates" className="section-padding relative" ref={ref}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">Verified Skills</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-3">
                        Professional{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                            Certifications
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                        A collection of my academic and professional achievements in Data Engineering, AI, and Software Development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="group glass glass-hover border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                                        <FiAward size={20} />
                                    </div>
                                    <a
                                        href={`/certificates/${cert.file}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-500 hover:text-cyan-400 transition-colors"
                                        title="View Certificate"
                                    >
                                        <FiExternalLink size={18} />
                                    </a>
                                </div>
                                <h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 font-mono">{cert.issuer}</p>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {cert.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] px-2 py-0.5 rounded-full border border-white/5 bg-white/5 text-gray-400 font-mono"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View more hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 1 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 text-sm italic flex items-center justify-center gap-2">
                        <FiSearch size={14} /> More certificates available upon request
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
