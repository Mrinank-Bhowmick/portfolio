import React from "react";
import streaklensImg from "../../../public/streaklens.png";
import garudaImg from "../../../public/Garuda.jpg";
import Image from "next/image";
import { Project } from "@/components/projectSection";

const Projects = () => {
  return (
    <div>
      <div className="text-3xl text-yellow-500 font-bold mt-4 mb-10">
        Projects
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Project
          title="Streaklens"
          description="Generative AI web app designed to assist content creators in generating innovative ideas for their next piece of content."
          projectImg={streaklensImg}
          liveLink="https://streaklens.mrinank.me"
          codeLink="https://github.com/Mrinank-Bhowmick/streaklens"
        />
        <Project
          title="Garuda"
          description="It is a combination of Network Port Scanner and Honeypot."
          projectImg={garudaImg}
          liveLink={null}
          codeLink="https://github.com/Mrinank-Bhowmick/garuda"
        />
      </div>
      <div className="text-3xl text-yellow-500 font-bold mt-12 mb-10">
        Open Source Contributions
      </div>
      <div className="">
        <div className="text-2xl font-semibold ml-4 mb-4">
          OWASP Foundation - Nettacker
        </div>
        <div className="flex flex-col-reverse md:flex-row md:ml-8 ml-4 justify-between">
          <div>
            <ul className="list-disc p-2 font-thin brightness-75">
              <li>
                Added POP3 brute force modules and expanded the tool&apos;s
                capabilities and potential impact in identifying security
                vulnerabilities.
              </li>
              <li>
                Fixed language library issues which improved the tool&apos;s
                user experience, potentially leading to increased adoption and
                usage.
              </li>
              <li>
                Translated the tool into Bengali language which increased
                accessibility and potential user base in Bengali-speaking
                regions.
              </li>
            </ul>
          </div>
          <div className="h-[30vh] w-[60vw] relative">
            <Image
              className="rounded-xl object-cover border border-white brightness-90"
              src="/nettacker.png"
              alt=""
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
            />
          </div>
        </div>
        <div className="text-2xl font-semibold mt-8 ml-4 mb-4">
          Python Beginner Projects
        </div>
        <div>
          <div className="flex flex-col-reverse md:flex-row md:ml-8 ml-4 justify-between">
            <div>
              <ul className="list-disc p-2 font-thin brightness-75">
                <li>
                  Created and maintained a popular GitHub repository, Python
                  Beginner Projects, designed as an accessible resource for
                  Python learners.
                </li>
                <li>
                  Achieved 1k+ stars on the repository, reflecting its
                  popularity and value within the developer community.
                </li>
              </ul>
            </div>
            <div className="h-[30vh] w-[60vw] relative">
              <Image
                className="rounded-xl object-cover border border-white"
                src="/Banner.png"
                alt=""
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
