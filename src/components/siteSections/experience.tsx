const Experience = () => {
  const experienceData = [
    {
      company: "Datacurve AI (YC W24)",
      location: "Remote/US",
      role: "Code Eval Team",
      duration: "Dec 2025 - Present",
      experience: [
        "Review and evaluate developer-submitted code for correctness, originality, and adherence to platform guidelines.",
        "Provide detailed technical feedback, enforce submission standards, and maintain high-quality evaluation consistency across reviews.",
      ],
      skills: [
        "Code Review",
        "LLM Evaluation",
        "Technical Writing",
        "Remote Collaboration",
        "TypeScript",
        "Python",
      ],
    },
    {
      company: "TEXMiN IIT(ISM)",
      location: "Dhanbad/IN",
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
        Work{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
          Experience
        </span>
      </h2>
      <div className="container mx-auto">
        <div className="space-y-12">
          {experienceData.map((exp) => (
            <div
              key={exp.company}
              className="group relative bg-zinc-900/30 border border-white/5 rounded-2xl p-6 sm:p-10 pl-12 sm:pl-16 hover:bg-zinc-900/50 hover:border-gold-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.2)] overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Timeline inside the box */}
              <div className="absolute left-[23px] sm:left-[31px] top-[3.5rem] sm:top-[4rem] bottom-6 w-[2px] bg-gradient-to-b from-gold-500 via-gold-500/20 to-transparent"></div>
              {/* Dot on the timeline */}
              <div className="absolute left-[17px] sm:left-[25px] top-8 sm:top-12 z-10 w-4 h-4 rounded-full bg-black border-2 border-gold-500 shadow-[0_0_15px_rgba(245,142,11,0.6)]"></div>

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
                {exp.experience.map((experienceItem) => (
                  <div key={experienceItem} className="flex items-start gap-3">
                    <span className="text-yellow-500/50 mt-1.5 text-[10px]">
                      ●
                    </span>
                    <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                      {experienceItem}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-sm font-medium rounded-full bg-zinc-800/50 text-zinc-200 border border-white/5 hover:border-gold-500/30 hover:bg-gradient-to-r hover:from-gold-500/10 hover:to-gold-600/10 hover:text-white transition-all duration-300 hover:shadow-[0_0_15px_-5px_rgba(245,142,11,0.2)] cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
