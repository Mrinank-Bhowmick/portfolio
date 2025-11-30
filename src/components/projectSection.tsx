"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

interface props {
  title: string;
  description: string;
  projectImg: StaticImageData;
  liveLink: string | null;
  codeLink: string;
  techStack?: string[];
  features?: string[];
}

export function Project({
  title,
  description,
  projectImg,
  liveLink,
  codeLink,
  techStack = [],
  features = [],
}: props) {
  return (
    <div className="group relative h-full w-full rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900 to-black border border-white/10 hover:border-yellow-500/50 transition-all duration-500 flex flex-col overflow-hidden hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.15)]">
      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden border-b border-white/5">
        <Image
          src={projectImg}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 sm:p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-yellow-400 transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-white/10 group-hover:border-yellow-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8">
          {description}
        </p>

        {/* Features List */}
        {features.length > 0 && (
          <div className="mb-8 bg-zinc-900/30 rounded-2xl p-5 border border-white/5">
            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-base text-zinc-300"
                >
                  <FaCheckCircle className="mt-1.5 text-yellow-500 flex-shrink-0 text-xs" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex gap-4 pt-6 border-t border-white/5">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 group/btn relative overflow-hidden rounded-xl bg-yellow-500 px-4 py-3.5 text-black font-bold text-sm transition-all hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/20 flex items-center justify-center gap-2"
            >
              <span>Live Demo</span>
              <FaExternalLinkAlt className="text-xs transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
            </Link>
          )}
          <Link
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 group/btn rounded-xl px-4 py-3.5 border border-white/10 bg-white/5 text-white font-medium text-sm transition-all hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2 ${
              !liveLink ? "w-full" : ""
            }`}
          >
            <FaGithub className="text-lg" />
            <span>Source Code</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
