"use client";
import React, { useRef, useEffect, useState } from "react";

export const Footer = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <div className="border-t border-custom-border-gray mt-16 pt-8 pb-8 text-center text-zinc-400 text-base flex flex-col items-center justify-center gap-4">
      <div className="h-[30rem] flex items-center justify-center w-full">
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
          className="select-none"
        >
          <defs>
            <linearGradient
              id="textGradient"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              {hovered && (
                <>
                  <stop offset="0%" stopColor="#ca8a04" />
                  <stop offset="25%" stopColor="#facc15" />
                  <stop offset="50%" stopColor="#fef08a" />
                  <stop offset="75%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#ca8a04" />
                </>
              )}
            </linearGradient>

            <radialGradient
              id="revealMask"
              gradientUnits="userSpaceOnUse"
              r="20%"
              cx={maskPosition.cx}
              cy={maskPosition.cy}
            >
              <stop offset="0%" stopColor="white" />
              <stop offset="100%" stopColor="black" />
            </radialGradient>
            <mask id="textMask">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#revealMask)"
              />
            </mask>
          </defs>
          
          {/* Base text outline with initial dash animation */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            strokeWidth="0.3"
            className="fill-transparent stroke-neutral-200 font-[helvetica] text-6xl font-bold dark:stroke-neutral-800 animate-[dash_4s_ease-in-out_forwards]"
            style={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          >
            MRINANK
          </text>

          {/* Gradient overlay text with Spotlight Mask */}
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#textGradient)"
            strokeWidth="0.3"
            mask="url(#textMask)"
            className="fill-transparent font-[helvetica] text-6xl font-bold"
          >
            MRINANK
          </text>
          
          <style>{`
            @keyframes dash {
              to {
                stroke-dashoffset: 0;
              }
            }
          `}</style>
        </svg>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Mrinank Bhowmick. All rights reserved.
      </p>
    </div>
  );
};
