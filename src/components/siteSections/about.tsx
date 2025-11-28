import React from "react";

const About = () => {
  return (
    <div className="py-8">
      <h2 className="font-bold text-3xl sm:text-4xl text-white mb-8 sm:mb-12 tracking-tight">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Me</span>
      </h2>
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="font-light text-base sm:text-lg leading-relaxed text-zinc-400 lg:w-3/5">
          I specialize in creating efficient, scalable web applications using
          modern technologies like Next.js, Node.js, and SQL. My work revolves
          around developing solutions that optimize business processes, automate
          workflows, and enhance user experiences. From building Generative
          AI-powered tools to contributing to open-source projects, I focus on
          leveraging technology to solve real-world problems.{" "}
          <span className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 text-gold-400 border border-gold-500/30 font-semibold px-3 py-1 rounded-lg inline-block my-1 shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)]">
            I am seeking internship/FT opportunities
          </span>{" "}
          where I can apply my skills to help businesses streamline operations,
          improve customer engagement, and drive growth through innovative tech
          solutions.
          <div className="mt-4 italic text-xs text-zinc-600">~ chatgpt</div>
        </div>

        <div className="flex flex-col gap-8 lg:w-2/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Skills
          </h2>

          <div className="space-y-8">
            {[
              { title: "Tech Stack", items: ["Node", "NextJS", "SQL", "Cloudflare", "AWS"] },
              { title: "Languages", items: ["Javascript", "Typescript", "C/C++", "Python"] },
              { title: "Database", items: ["SQL DB", "Vector DB"] }
            ].map((category) => (
              <div key={category.title}>
                <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center justify-center px-3 py-1.5 bg-zinc-800/40 border border-white/5 rounded-full text-xs sm:text-sm text-zinc-300 hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-gold-600/10 hover:border-gold-500/30 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)] cursor-default"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
