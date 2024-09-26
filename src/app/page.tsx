"use client";
import { Project } from "@/components/projectSection";
import React, { useRef } from "react";
import { FaNodeJs } from "react-icons/fa";
import streaklensImg from "../../public/streaklens.png";
import garudaImg from "../../public/Garuda.jpg";
import Image from "next/image";

const Page = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="h-[100vh] w-full p-8 overflow-auto">
        <div className="bg-custom-dark-gray w-full p-8 rounded-3xl border border-custom-border-gray">
          <div className="flex justify-end">
            <div className="bg-custom-light-gray p-4 rounded-3xl flex gap-8">
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection(aboutRef)}
              >
                About
              </div>
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection(projectsRef)}
              >
                Projects
              </div>
              <div
                className="cursor-pointer"
                onClick={() => scrollToSection(educationRef)}
              >
                Education
              </div>
            </div>
          </div>
          <div>
            <div ref={aboutRef}>
              {" "}
              {/*This is one section*/}
              <div className="font-bold text-3xl text-yellow-500">About Me</div>
              <div className="flex">
                <div className="font-thin brightness-75 p-2">
                  I specialize in creating efficient, scalable web applications
                  using modern technologies like Next.js, Node.js, and SQL. My
                  work revolves around developing solutions that optimize
                  business processes, automate workflows, and enhance user
                  experiences. From building Generative AI-powered tools to
                  contributing to open-source projects, I focus on leveraging
                  technology to solve real-world problems.{" "}
                  <span className="bg-yellow-500 text-black font-serif rounded-md">
                    &nbsp;I am seeking internship opportunities&nbsp;
                  </span>{" "}
                  where I can apply my skills to help businesses streamline
                  operations, improve customer engagement, and drive growth
                  through innovative tech solutions.
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-3xl font-bold text-yellow-500">
                    Skills
                  </div>
                  <div className="brightness-100">
                    <div className="text-xl font-bold brightness-75">
                      Techstacks
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>Node</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>NextJS</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>SQL</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>Cloudflare</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>AWS</div>
                      </div>
                    </div>
                  </div>
                  <div className="brightness-100">
                    <div className="text-xl font-bold brightness-75">
                      Programming Languages
                    </div>
                    <div className="flex gap-1">
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>Javascript</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>Typescript</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>C/C++</div>
                      </div>
                      <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                        <FaNodeJs /> <div>Python</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={projectsRef}>
              <div className="text-2xl text-yellow-500 font-bold mt-4 mb-10">
                Projects
              </div>
              <div className="flex gap-4">
                <Project
                  title="Streaklens"
                  description="Generative AI web app designed to assist content creators in generating innovative ideas for their next piece of content."
                  projectImg={streaklensImg}
                  liveLink="https://streaklens.mrinank.me"
                  codeLink="https://github.com/Mrinank-Bhowmick/streaklens"
                />
                <Project
                  title="Garuda"
                  description="It is a combination of Network Port Scanner and Honeypot."
                  projectImg={garudaImg}
                  liveLink={null}
                  codeLink="https://github.com/Mrinank-Bhowmick/garuda"
                />
              </div>
              <div className="text-3xl text-yellow-500 font-bold mt-12 mb-10">
                Open Source Contributions
              </div>
              <div>
                <div className="text-2xl font-semibold ml-4 mb-4">
                  OWASP Foundation - Nettacker
                </div>
                <div className="flex ml-8 justify-between">
                  <div>
                    <ul className="list-disc">
                      <li>
                        Added POP3 brute force modules and expanded the
                        tool&apos;s capabilities and potential impact in
                        identifying security vulnerabilities.
                      </li>
                      <li>
                        Fixed language library issues which improved the
                        tool&apos;s user experience, potentially leading to
                        increased adoption and usage.
                      </li>
                      <li>
                        Translated the tool into Bengali language which
                        increased accessibility and potential user base in
                        Bengali-speaking regions.
                      </li>
                    </ul>
                  </div>
                  <div className="h-[30vh] w-[60vw] relative">
                    <Image
                      className="rounded-xl object-cover border border-yellow-400"
                      src="/nettacker.png"
                      alt=""
                      fill
                    />
                  </div>
                </div>
                <div className="text-2xl font-semibold mt-8 ml-4 mb-4">
                  Python Beginner Projects
                </div>
                <div>
                  <div className="flex ml-8 justify-between">
                    <div>
                      <ul className="list-disc">
                        <li>
                          Created and maintained a popular GitHub repository,
                          Python Beginner Projects, designed as an accessible
                          resource for Python learners.
                        </li>
                        <li>
                          Achieved over 1000 stars on the repository, reflecting
                          its popularity and value within the developer
                          community.
                        </li>
                      </ul>
                    </div>
                    <div className="h-[30vh] w-[60vw] relative">
                      <Image
                        className="rounded-xl object-cover border border-white"
                        src="/Banner.png"
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
