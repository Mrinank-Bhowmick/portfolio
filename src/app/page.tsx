"use client";
import About from "@/components/siteSections/about";
import Contact from "@/components/siteSections/contact";
import Education from "@/components/siteSections/education";
import Experience from "@/components/siteSections/experience";
import Projects from "@/components/siteSections/projects";
import Achievements from "@/components/siteSections/achievements";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import React, { useRef } from "react";

const Page = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "About", onClick: () => scrollToSection(aboutRef) },
    { name: "Experience", onClick: () => scrollToSection(experienceRef) },
    { name: "Projects", onClick: () => scrollToSection(projectsRef) },
    { name: "Education", onClick: () => scrollToSection(educationRef) },
    { name: "Achievements", onClick: () => scrollToSection(achievementsRef) },
    { name: "Contact", onClick: () => scrollToSection(contactRef) },
  ];

  return (
    <div className="h-screen w-full p-2 sm:p-4 md:p-6 overflow-hidden text-zinc-100 selection:bg-gold-500/30">
      <div className="h-full w-full overflow-y-auto rounded-[2rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 hover:border-gold-500/20 transition-colors duration-500 shadow-[0_0_50px_-10px_rgba(0,0,0,0.6)] relative scrollbar-hide">
        <div className="p-4 sm:p-8 md:p-12 max-w-6xl mx-auto">
          <Navbar navItems={navItems} />

          <div className="space-y-32 sm:space-y-40 pb-20">
            <div ref={aboutRef} className="scroll-mt-32">
              <About />
            </div>
            <div ref={experienceRef} className="scroll-mt-32">
              <Experience />
            </div>
            <div ref={projectsRef} className="scroll-mt-32">
              <Projects />
            </div>
            <div ref={educationRef} className="scroll-mt-32">
              <Education />
            </div>
            <div ref={achievementsRef} className="scroll-mt-32">
              <Achievements />
            </div>
            <div ref={contactRef} className="scroll-mt-32">
              <Contact />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Page;
