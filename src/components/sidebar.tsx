import React from "react";
import avatar from "../../public/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="h-screen w-[25vw] hidden lg:flex flex-col items-center p-6 sticky top-0">
      <div className="bg-zinc-900/40 backdrop-blur-xl h-full w-full border border-white/5 hover:border-gold-500/20 transition-colors duration-500 rounded-[2rem] flex flex-col items-center p-8 xl:p-10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.6)]">
        <div className="flex flex-col gap-6 w-full items-center">
          {/* Avatar */}
          <div className="relative w-40 h-40 xl:w-48 xl:h-48">
            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-gold-500 via-gold-600 to-zinc-900 shadow-[0_0_30px_-10px_rgba(245,142,11,0.4)]">
              <div className="w-full h-full rounded-full overflow-hidden bg-black relative ring-2 ring-black group">
                <img 
                  src={avatar.src} 
                  alt="Profile" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 contrast-110"
                  style={{ filter: 'sepia(0.3) saturate(1.2) hue-rotate(25deg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 via-transparent to-gold-600/10 mix-blend-overlay pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="text-center space-y-3">
            <h1 className="font-bold text-2xl xl:text-3xl text-white tracking-tight">
              Mrinank Bhowmick
            </h1>
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 text-sm font-medium text-gold-400 shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)]">
              Software Developer & Engineer
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent my-2" />

          {/* Social Links */}
          <div className="flex flex-col gap-3 w-full">
            <Link
              href="https://www.linkedin.com/in/mrinank-bhowmick/"
              target="_blank"
              className="group flex items-center justify-center gap-3 bg-zinc-800/30 hover:bg-[#0A66C2]/20 border border-white/5 hover:border-[#0A66C2]/50 px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(10,102,194,0.4)]"
            >
              <FaLinkedin className="w-5 h-5 text-zinc-400 group-hover:text-[#0A66C2] transition-colors" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">LinkedIn</span>
            </Link>
            
            <Link
              href="https://www.github.com/mrinank-bhowmick/"
              target="_blank"
              className="group flex items-center justify-center gap-3 bg-zinc-800/30 hover:bg-white/10 border border-white/5 hover:border-white/30 px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]"
            >
              <FaGithub className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">GitHub</span>
            </Link>

            <Link
              href="https://x.com/mrinank110"
              target="_blank"
              className="group flex items-center justify-center gap-3 bg-zinc-800/30 hover:bg-black/40 border border-white/5 hover:border-zinc-700 px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,0,0,0.6)]"
            >
              <FaXTwitter className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">Twitter/X</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
