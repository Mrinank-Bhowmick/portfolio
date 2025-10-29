import React from "react";
import streaklensImg from "../../../public/streaklens.png";
import garudaImg from "../../../public/Garuda.jpg";
import resqhealthImg from "../../../public/resqhealth.png";
import toxicityapi from "../../../public/toxicity-api.jpg";
import verbalize from "../../../public/verbalize.png";
import Image from "next/image";
import { Project } from "@/components/projectSection";

const Projects = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl sm:text-4xl text-yellow-500 font-bold mb-8 sm:mb-12">
        Projects
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        <Project
          title="Verbalize"
          description="AI Chatbot as a Service"
          projectImg={verbalize}
          liveLink={"https://verbalize.mrinank-ai.tech/"}
          codeLink="https://github.com/Mrinank-Bhowmick/verbalize"
        />
        <Project
          title="Toxicity API"
          description="Designed to analyze text and detect harmful or abusive language with precision."
          projectImg={toxicityapi}
          liveLink={"https://toxicity.mrinank-ai.tech/"}
          codeLink="https://github.com/Mrinank-Bhowmick/toxicity-API"
        />
        <Project
          title="Res-Q Health"
          description="Built an AI-driven healthcare agent leveraging LLMs, vector databases, and sustainable serverless architecture for personalized public health support."
          projectImg={resqhealthImg}
          liveLink={"https://resq-health.vercel.app"}
          codeLink="https://github.com/Mrinank-Bhowmick/Res-Q-Health"
        />
        <Project
          title="Streaklens"
          description="Generative AI web app designed to assist content creators in generating innovative ideas for their next piece of content."
          projectImg={streaklensImg}
          liveLink={null}
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

      <h2 className="text-3xl sm:text-4xl text-yellow-500 font-bold mt-12 sm:mt-16 mb-8 sm:mb-12">
        Open Source Contributions
      </h2>

      <div className="space-y-8 sm:space-y-12">
        <div className="contribution-section">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-200">
            Mem0 AI - Mem0
          </h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-neutral-300 text-sm sm:text-base">
                <li>
                  Added support for Google as an LLM & embedder in their
                  typescript package.
                </li>
                <li>
                  Added support for Cloudflare vectorize for vector storage.
                </li>
                <li>
                  Fix embedder config schema to support embeddingDims and url
                  parameters correctly.
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-video relative order-1 md:order-2">
              <Image
                className="rounded-xl object-cover border border-neutral-700 hover:brightness-100 transition-all"
                src="/mem0.png"
                alt="mem0"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="contribution-section">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-200">
            Mastra AI - Mastra
          </h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-neutral-300 text-sm sm:text-base">
                <li>
                  Added support for Sarvam AI voice (both TTS & STT) in Mastra
                  Voice for Indian languages.
                </li>
                <li>
                  Added open source voice model support using Cloudflare Workers
                  AI provider
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-video relative order-1 md:order-2">
              <Image
                className="rounded-xl object-cover border border-neutral-700 hover:brightness-100 transition-all"
                src="/mastra.png"
                alt="Mastra AI framework"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="contribution-section">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-200">
            OWASP Foundation - Nettacker
          </h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-neutral-300 text-sm sm:text-base">
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
            <div className="w-full md:w-1/2 aspect-video relative order-1 md:order-2">
              <Image
                className="rounded-xl object-cover border border-neutral-700 hover:brightness-100 transition-all"
                src="/nettacker.png"
                alt="Nettacker Project"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        <div className="contribution-section">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-yellow-200">
            Python Beginner Projects
          </h3>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <ul className="list-disc pl-4 sm:pl-5 space-y-2 sm:space-y-3 text-neutral-300 text-sm sm:text-base">
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
            <div className="w-full md:w-1/2 aspect-video relative order-1 md:order-2">
              <Image
                className="rounded-xl object-cover border border-neutral-700 hover:brightness-100 transition-all"
                src="/Banner.png"
                alt="Python Beginner Projects Banner"
                priority
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
