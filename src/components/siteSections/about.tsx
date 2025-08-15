import React from "react";

const About = () => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-2xl sm:text-3xl text-yellow-500 mb-6 sm:mb-8">
        About Me
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="font-light text-sm sm:text-base leading-relaxed brightness-75 lg:w-3/5">
          I specialize in creating efficient, scalable web applications using
          modern technologies like Next.js, Node.js, and SQL. My work revolves
          around developing solutions that optimize business processes, automate
          workflows, and enhance user experiences. From building Generative
          AI-powered tools to contributing to open-source projects, I focus on
          leveraging technology to solve real-world problems.{" "}
          <span className="bg-yellow-500 text-black font-medium px-2 py-1 rounded-md inline-block my-2">
            I am seeking internship opportunities
          </span>{" "}
          where I can apply my skills to help businesses streamline operations,
          improve customer engagement, and drive growth through innovative tech
          solutions.
        </div>

        <div className="flex flex-col gap-6 lg:w-2/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500">
            Skills
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold brightness-75 mb-2">
                Techstacks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Node", "NextJS", "SQL", "Cloudflare", "AWS"].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center justify-center p-1.5 sm:p-2 bg-custom-light-gray rounded-2xl text-xs sm:text-sm hover:bg-opacity-80 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold brightness-75 mb-2">
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Javascript", "Typescript", "C/C++", "Python"].map((lang) => (
                  <div
                    key={lang}
                    className="flex items-center justify-center p-1.5 sm:p-2 bg-custom-light-gray rounded-2xl text-xs sm:text-sm hover:bg-opacity-80 transition-colors"
                  >
                    {lang}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold brightness-75 mb-2">
                Database
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["SQL DB", "Vector DB"].map((db) => (
                  <div
                    key={db}
                    className="flex items-center justify-center p-1.5 sm:p-2 bg-custom-light-gray rounded-2xl text-xs sm:text-sm hover:bg-opacity-80 transition-colors"
                  >
                    {db}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
