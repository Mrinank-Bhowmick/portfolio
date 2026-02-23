"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    onClick: () => void;
  }[];
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={cn(
        "sticky mt-4 top-6 z-50 w-full flex flex-col items-center mb-9",
        className,
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-1 bg-zinc-900/40 backdrop-blur-xl p-1.5 rounded-full border border-white/5 shadow-[0_0_30px_-10px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={item.onClick}
            className="px-6 py-2.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-gold-600/10 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(245,142,11,0.3)]"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Bar */}
      <div className="sm:hidden flex items-center justify-between w-full bg-black/50 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/10 shadow-xl">
        <span className="text-sm font-bold text-white tracking-widest uppercase">
          Menu
        </span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-zinc-400 hover:text-white transition-colors"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-3 w-full bg-[#121212] border border-white/10 rounded-2xl shadow-2xl overflow-hidden sm:hidden flex flex-col animate-in fade-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="px-6 py-4 text-left text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 last:border-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
