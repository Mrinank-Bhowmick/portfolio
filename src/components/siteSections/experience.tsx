import React from "react";

const Experience = () => {
  const experienceData = [
    {
      company: "TEXMiN IIT(ISM) Dhanbad",
      location: "IN",
      role: "AI Intern",
      duration: "June - July 2025",
      experience: [
        "Engineered a self-hosted Agentic AI system with tool calling, human-in-the-loop workflows, and multimodal RAG; optimized for ~100 concurrent users with ~3s average response time.",
        "Co-developed a real-time interactive AI avatar with autonomous reasoning, voice-based interaction, and dynamic human-in-loop feedback for natural, expressive conversations.",
      ],
      skills: [
        "AI Agents",
        "LLMs",
        "RAG",
        "Open Source",
        "Self Host",
        "Full Stack Web Dev",
      ],
    },
  ];

  return (
    <div className="py-8">
      <h2 className="font-bold text-3xl sm:text-4xl text-white mb-12 tracking-tight">
        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Experience</span>
      </h2>
      <div className="container mx-auto">
        <div className="relative pl-8 sm:pl-0">
          {/* The vertical line */}
          <div className="hidden sm:block absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-gold-500 via-gold-500/20 to-transparent"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row gap-8 sm:gap-12">
                {/* Dot on the timeline */}
                <div className="hidden sm:flex absolute left-0 top-2 z-10 w-4 h-4 rounded-full bg-black border-2 border-gold-500 shadow-[0_0_15px_rgba(245,142,11,0.6)]"></div>
                
                <div className="flex-1 bg-zinc-900/30 border border-white/5 rounded-2xl p-6 sm:p-10 hover:bg-zinc-900/50 hover:border-gold-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.2)]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full border border-white/5">
                      {exp.location}
                    </span>
                  </div>
                  
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 font-semibold text-base sm:text-lg mb-6 flex items-center gap-2">
                    {exp.role} 
                    <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                    <span className="text-zinc-400 text-sm">{exp.duration}</span>
                  </p>

                  <div className="space-y-4 mb-8">
                    {exp.experience.map((experienceItem, experienceIndex) => (
                      <div key={experienceIndex} className="flex items-start gap-3">
                        <span className="text-yellow-500/50 mt-1.5 text-[10px]">
                          ●
                        </span>
                        <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                          {experienceItem}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/50 text-zinc-300 border border-white/5 hover:border-gold-500/30 hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-gold-600/10 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)] cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
