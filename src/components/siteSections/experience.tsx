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
    <div>
      <div className="font-bold text-3xl text-yellow-500 mb-8 mt-8">
        Work Experience
      </div>
      <div className="container mx-auto">
        <div className="relative brightness-80">
          {/* The vertical line */}
          <div className="absolute left-5 top-0 w-1 h-full ml-1 bg-yellow-400"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Dot on the timeline */}
                <div className="relative z-10 w-5 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-semibold">
                    {exp.company}, {exp.location}
                  </h3>
                  <p className="text-yellow-400 font-medium">
                    {exp.role} • {exp.duration}
                  </p>
                  <div className="mt-4 space-y-2">
                    {exp.experience.map((experienceItem, experienceIndex) => (
                      <div key={experienceIndex} className="flex items-start">
                        <span className="text-yellow-400 mr-2 mt-1 text-sm">
                          ➢
                        </span>
                        <p className="text-gray-300 leading-relaxed">
                          {experienceItem}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-medium text-yellow-400 mb-2">
                      Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-500/20"
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
