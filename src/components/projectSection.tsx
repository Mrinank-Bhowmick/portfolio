"use client";
import React from "react";
import { BackgroundGradient } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface props {
  title: string;
  description: string;
  projectImg: StaticImageData;
  liveLink: string | null;
  codeLink: string;
}
export function Project({
  title,
  description,
  projectImg,
  liveLink,
  codeLink,
}: props) {
  return (
    <div className="h-full w-full">
      <BackgroundGradient className="rounded-[22px] w-full h-full p-4 sm:p-6 bg-white dark:bg-zinc-900 flex flex-col">
        <div className="relative w-full aspect-video">
          <Image
            src={projectImg}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold line-clamp-1">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 flex-grow line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white dark:text-black bg-black dark:bg-white hover:opacity-90 transition-opacity flex items-center gap-2 text-sm font-medium"
            >
              <span>Visit</span>
              <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
            </Link>
          )}
          <Link
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2 text-sm font-medium"
          >
            <span>Source Code</span>
            <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
}
