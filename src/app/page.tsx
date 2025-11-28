"use client";
import About from "@/components/siteSections/about";
import Contact from "@/components/siteSections/contact";
import Education from "@/components/siteSections/education";
import Experience from "@/components/siteSections/experience";
import Projects from "@/components/siteSections/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import React, { useRef } from "react";

const Page = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "About", onClick: () => scrollToSection(aboutRef) },
    { name: "Experience", onClick: () => scrollToSection(experienceRef) },
    { name: "Projects", onClick: () => scrollToSection(projectsRef) },
    { name: "Education", onClick: () => scrollToSection(educationRef) },
    { name: "Contact", onClick: () => scrollToSection(contactRef) },
  ];

  return (
    <div className="h-screen w-full p-2 sm:p-4 md:p-8 overflow-hidden bg-[#101010]">
      <div className="h-full w-full overflow-y-auto rounded-3xl bg-custom-dark-gray border border-custom-border-gray shadow-2xl relative">
        <div className="p-4 sm:p-8 md:p-12 max-w-6xl mx-auto">
          <Navbar navItems={navItems} />

          <div className="space-y-24 sm:space-y-32 mt-8 sm:mt-12">
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
