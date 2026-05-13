import React from "react";

const About = () => {
  return (
    <div className="py-8">
      <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
        <div className="lg:w-3/5">
          <h2 className="font-bold text-3xl sm:text-4xl text-white mb-8 sm:mb-12 tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              Me
            </span>
          </h2>
          <div className=" text-base italic leading-relaxed text-zinc-300">
            My name is Mrinank Bhowmick, and I am currently pursuing Bachelors
            of Technology in Computer Science and Engineering from KIIT
            University in Bhubaneswar.
            <br />
            <br />
            Throughout my academic journey, I have explored various areas of
            computer science, working with multiple programming languages and
            tech stacks to build impactful projects.
            <br />
            <br />
            In addition to my projects, I love contributing to open-source
            projects.
            <br />
            <br />
            {/* <span className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 text-gold-400 border border-gold-500/30 font-semibold px-3 py-1.5 rounded-lg inline-block my-1 shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)]">
              I am seeking opportunities
            </span>{" "} */}
            I wish to use my technical skills to contribute to a team that works
            at scale and creates a positive impact on society.
            <div className="mt-3 italic text-sm text-zinc-500">~ chatgpt</div>
          </div>
        </div>

        <div className="lg:w-2/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 tracking-tight">
            Skills
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Languages",
                items: ["Javascript", "Typescript", "C/C++", "Python"],
              },
              {
                title: "Frameworks",
                items: [
                  "NextJS",
                  "Hono",
                  "LangChain",
                  "Vercel AI SDK",
                  "Mastra",
                  "Gemini SDK",
                ],
              },
              {
                title: "Infrastructure",
                items: ["AWS", "Cloudflare", "Vercel"],
              },
              { title: "Database", items: ["SQL DB", "Vector DB"] },
            ].map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.items.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center justify-center px-4 py-2 bg-zinc-800/40 border border-white/5 rounded-full text-sm text-zinc-200 hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-gold-600/10 hover:border-gold-500/30 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)] cursor-default"
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
