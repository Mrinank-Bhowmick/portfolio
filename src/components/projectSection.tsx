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
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={projectImg}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="flex gap-2">
          {liveLink ? (
            <Link
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-4 py-2 text-black flex items-center space-x-1 bg-white mt-4 text-sm font-bold"
            >
              <span>Visit </span>
              <FaExternalLinkAlt />
            </Link>
          ) : null}
          <Link
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-4 py-2 border border-white text-white flex items-center space-x-1 mt-4 text-sm font-bold"
          >
            <span>Source Code </span>
            <FaExternalLinkAlt />
          </Link>
        </div>
      </BackgroundGradient>
    </div>
  );
}
