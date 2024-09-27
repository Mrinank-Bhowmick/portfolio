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
    {
      school: "Hariyana Vidya Mandir",
      location: "Kolkata/India",
      duration: "2020 — 2022",
      description:
        "All India Senior School Certificate Examination, Major in Science",
    },
  ];
  return (
    <div>
      <div className="font-bold text-3xl text-yellow-500 mb-8 mt-8">
        Education
      </div>
      <div className="container mx-auto">
        <div className="relative brightness-75">
          {/* The vertical line */}
          <div className="absolute left-5 top-0 w-1 h-full ml-1 bg-yellow-400"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                {/* Dot on the timeline */}
                <div className="relative z-10 w-5 h-4 rounded-full bg-yellow-400 flex items-center justify-center">
                  <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                </div>
                <div className="ml-12">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="text-yellow-400 font-medium">{edu.duration}</p>
                  <p className="text-gray-300 mt-2">{edu.description}</p>
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
