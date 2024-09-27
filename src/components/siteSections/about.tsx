import React from "react";

const About = () => {
  return (
    <div>
      <div className="font-bold text-3xl text-yellow-500">About Me</div>
      <div className="flex flex-col md:flex-row">
        <div className="font-thin brightness-75 p-2 w-3/4">
          I specialize in creating efficient, scalable web applications using
          modern technologies like Next.js, Node.js, and SQL. My work revolves
          around developing solutions that optimize business processes, automate
          workflows, and enhance user experiences. From building Generative
          AI-powered tools to contributing to open-source projects, I focus on
          leveraging technology to solve real-world problems.{" "}
          <span className="bg-yellow-500 text-black font-serif rounded-md">
            &nbsp;I am seeking internship opportunities&nbsp;
          </span>{" "}
          where I can apply my skills to help businesses streamline operations,
          improve customer engagement, and drive growth through innovative tech
          solutions.
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-3xl font-bold text-yellow-500">Skills</div>
          <div className="brightness-100">
            <div className="text-xl font-bold brightness-75 mb-2">
              Techstacks
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>Node</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>NextJS</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>SQL</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>Cloudflare</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>AWS</div>
              </div>
            </div>
          </div>
          <div className="brightness-100">
            <div className="text-xl font-bold brightness-75 mb-2">
              Programming Languages
            </div>
            <div className="grid grid-cols-3 gap-1">
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>Javascript</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>Typescript</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>C/C++</div>
              </div>
              <div className="flex gap-1 p-2 bg-custom-light-gray rounded-3xl items-center justify-center">
                <div>Python</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
