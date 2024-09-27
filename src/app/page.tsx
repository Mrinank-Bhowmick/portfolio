"use client";
import About from "@/components/siteSections/about";
import Contact from "@/components/siteSections/contact";
import Education from "@/components/siteSections/education";
import Projects from "@/components/siteSections/projects";
import React, { useRef } from "react";

const Page = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-[100vh] w-full p-8 overflow-auto">
        <div className="bg-custom-dark-gray w-full p-8 rounded-3xl border border-custom-border-gray">
          <div className="flex md:justify-end justify-center">
            <div className="flex gap-1 md:gap-4 mb-2">
              <div
                className="cursor-pointer bg-custom-light-gray p-2 rounded-xl"
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </div>
              <div
                className="cursor-pointer bg-custom-light-gray p-2 rounded-xl"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </div>
              <div
                className="cursor-pointer bg-custom-light-gray p-2 rounded-xl"
                onClick={() => scrollToSection(educationRef)}
              >
                Education
              </div>
              <div
                className="cursor-pointer bg-custom-light-gray p-2 rounded-xl"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </div>
            </div>
          </div>
          <div>
            <div ref={aboutRef}>
              <About />
            </div>
            <div ref={projectsRef}>
              <Projects />
            </div>
            <div ref={educationRef}>
              <Education />
            </div>
            <div ref={contactRef}>
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
