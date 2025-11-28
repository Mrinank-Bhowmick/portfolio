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
        "sticky top-0 z-50 w-full flex flex-col items-center mb-8",
        className
      )}
    >
      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-1 sm:gap-2 bg-custom-light-gray/80 backdrop-blur-md p-1.5 sm:p-2 rounded-full border border-white/10 shadow-xl">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={item.onClick}
            className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all"
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Bar */}
      <div className="sm:hidden flex items-center justify-between w-full bg-custom-light-gray/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/10 shadow-xl">
        <span className="text-sm font-bold text-white">Menu</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-gray-300 hover:text-white transition-colors"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-2 w-full bg-[#1E1E1F] border border-custom-border-gray rounded-xl shadow-2xl overflow-hidden sm:hidden flex flex-col animate-in fade-in slide-in-from-top-5 duration-200">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className="px-4 py-3 text-left text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 last:border-none"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
