"use client";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10 bg-navy-950">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.jpeg"
                            alt="Saif.dev Logo"
                            width={32}
                            height={32}
                            className="rounded-lg object-contain opacity-80 hover:opacity-100 transition-opacity"
                        />
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Built with <FiHeart size={14} className="text-red-400" /> by Saif Ullah Awan &copy; {new Date().getFullYear()}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {[
                            { href: "https://github.com/saifullahawan", icon: FiGithub },
                            { href: "https://linkedin.com/in/saifullahawan", icon: FiLinkedin },
                            { href: "mailto:saifullahawan865@gmail.com", icon: FiMail },
                        ].map(({ href, icon: Icon }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 flex items-center justify-center rounded-lg glass border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-300 hover:scale-110"
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
