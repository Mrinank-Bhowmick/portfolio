import React from "react";
import { FaTrophy, FaAward } from "react-icons/fa";

const Achievements = () => {
  const achievementsData = [
    {
      title: "Google Gen-AI Exchange Hackathon",
      achievement: "Finalist",
      description:
        "Finalist in the Google Gen-AI Exchange Hackathon as part of the team.",
      icon: FaTrophy,
    },
    {
      title: "ICDCIT Hackathon",
      achievement: "Finalist",
      description: "Finalist in the ICDCIT Hackathon as part of the team.",
      icon: FaAward,
    },
  ];

  return (
    <div className="py-8">
      <h2 className="font-bold text-3xl sm:text-4xl text-white mb-12 tracking-tight">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
          Achievements
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.map((achievement) => {
          const IconComponent = achievement.icon;
          return (
            <div
              key={achievement.title}
              className="group relative bg-zinc-900/30 border border-white/5 hover:border-gold-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,142,11,0.2)]"
            >
              {/* Icon */}
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/30 group-hover:shadow-[0_0_20px_-5px_rgba(245,142,11,0.3)] transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-gold-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    {achievement.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-gold-500/10 to-gold-600/10 text-gold-400 border border-gold-500/30">
                    {achievement.achievement}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                {achievement.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gold-500/5 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
