import React from "react";

const Education = () => {
  const educationData = [
    {
      school: "Kalinga Institute of Industrial Technology (KIIT)",
      location: "Bhubaneshwar/India",
      duration: "2022 — 2026",
      description:
        "Bachelor of Technology, Major in Computer Science and Engineering.",
    },
  ];

  return (
    <div className="py-8">
      <h2 className="font-bold text-3xl sm:text-4xl text-white mb-12 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
          Education
        </span>
      </h2>
      <div className="container mx-auto">
        <div className="relative pl-8 sm:pl-0">
          {/* The vertical line */}
          <div className="hidden sm:block absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-gold-500 via-gold-500/20 to-transparent"></div>

          <div className="space-y-12">
            {educationData.map((edu) => (
              <div
                key={edu.school}
                className="relative flex flex-col sm:flex-row gap-8 sm:gap-12"
              >
                {/* Dot on the timeline */}
                <div className="hidden sm:flex absolute left-0 top-2 z-10 w-4 h-4 rounded-full bg-black border-2 border-gold-500 shadow-[0_0_15px_rgba(245,142,11,0.6)]"></div>

                <div className="group relative flex-1 bg-zinc-900/30 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-zinc-900/50 hover:border-gold-500/30 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.2)] overflow-hidden">
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {edu.school}
                    </h3>
                    <span className="text-sm font-medium text-zinc-500 bg-zinc-800/50 px-3 py-1 rounded-full border border-white/5">
                      {edu.location}
                    </span>
                  </div>

                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 font-semibold text-base sm:text-lg mb-4">
                    {edu.duration}
                  </p>

                  <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                    {edu.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
