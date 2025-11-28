import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-3xl sm:text-4xl text-white mb-12 tracking-tight">
        Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Touch</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Link
          href="https://www.linkedin.com/in/mrinank-bhowmick/"
          target="_blank"
          className="group flex items-center gap-4 bg-zinc-900/30 border border-white/5 hover:border-gold-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.3)]"
        >
          <div className="p-3 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300">
            <FaLinkedin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">LinkedIn</h3>
            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Connect professionally</p>
          </div>
        </Link>

        <Link
          href="https://x.com/mrinank110"
          target="_blank"
          className="group flex items-center gap-4 bg-zinc-900/30 border border-white/5 hover:border-gold-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.3)]"
        >
          <div className="p-3 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:bg-black transition-all duration-300">
            <FaXTwitter className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">Twitter/X</h3>
            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Follow for updates</p>
          </div>
        </Link>

        <Link
          href="https://github.com/Mrinank-Bhowmick/"
          target="_blank"
          className="group flex items-center gap-4 bg-zinc-900/30 border border-white/5 hover:border-gold-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.3)]"
        >
          <div className="p-3 rounded-full bg-zinc-800/50 text-zinc-400 group-hover:text-white group-hover:bg-zinc-700 transition-all duration-300">
            <FaGithub className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-medium mb-1">GitHub</h3>
            <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Check my code</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
