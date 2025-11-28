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
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Projects</span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
        <Project
          title="Verbalize"
          description="A Chatbot-as-a-Service platform that allows users to create, deploy, and embed AI-powered chatbots on any website."
          projectImg={verbalize}
          liveLink={"https://verbalize.mrinank-ai.tech/"}
          codeLink="https://github.com/Mrinank-Bhowmick/verbalize"
          techStack={["Next.js", "Hono", "Cloudflare Workers", "SQL Database", "TypeScript"]}
          features={[
            "Create and customize AI chatbots with custom system instructions",
            "Embed chatbots on any website using a simple iframe code",
            "Real-time AI streaming responses with sub-1 second latency",
            "Manage multiple chatbots from a centralized dashboard",
            "Deployed on edge network with serverless architecture"
          ]}
        />
        <Project
          title="Toxicity API"
          description="API developed to analyze text and detect harmful or abusive language with precision using semantic search on vector databases."
          projectImg={toxicityapi}
          liveLink={"https://toxicity.mrinank-ai.tech/"}
          codeLink="https://github.com/Mrinank-Bhowmick/toxicity-API"
          techStack={["Next.js", "Hono", "Cloudflare Workers", "Vector Database", "TypeScript"]}
          features={[
            "Semantic search on vector database for each chunk of sentences ensures accurate detection",
            "Analyzes text to detect harmful or abusive language with high precision",
            "Built on Cloudflare Workers for edge computing and low latency",
            "Vector database integration for efficient similarity search"
          ]}
        />
        <Project
          title="Res-Q Health"
          description="An AI-driven healthcare agent for day-to-day conversations, integrating various tools and external services to enhance public health resilience. ICDCIT Hackathon finalist project."
          projectImg={resqhealthImg}
          liveLink={"https://resq-health.vercel.app"}
          codeLink="https://github.com/Mrinank-Bhowmick/Res-Q-Health"
          techStack={["AI Agents", "LangChain", "Vector Database", "Serverless", "Python"]}
          features={[
            "Bridges healthcare accessibility gaps in rural areas",
            "Reduces carbon footprint by caching LLM responses",
            "Promotes 'Label Padega India' campaign for dietary awareness",
            "Combats pandemic misinformation with evidence-based AI solutions"
          ]}
        />
        <Project
          title="Streaklens"
          description="A Generative AI web application designed to assist content creators in generating innovative ideas and scripts for their next piece of content."
          projectImg={streaklensImg}
          liveLink={null}
          codeLink="https://github.com/Mrinank-Bhowmick/streaklens"
          techStack={["React", "Node.js", "Express", "MongoDB", "Gemini API"]}
          features={[
            "AI-powered content idea generation based on trends",
            "Script writing assistance and optimization",
            "CRON job to get latest news"
          ]}
        />
        <Project
          title="Garuda"
          description="A dual-purpose network security tool combining a Port Scanner and a Honeypot to detect vulnerabilities and monitor suspicious activities."
          projectImg={garudaImg}
          liveLink={null}
          codeLink="https://github.com/Mrinank-Bhowmick/garuda"
          techStack={["Python", "Scapy", "Socket Programming", "Linux"]}
          features={[
            "Multi-threaded port scanning for rapid discovery",
            "Interactive honeypot to trap and log attacker activity",
            "Detailed reporting of open ports and potential threats",
            "Customizable scan ranges and timeout settings"
          ]}
        />
      </div>

      <h2 className="text-3xl sm:text-4xl text-white font-bold mt-16 sm:mt-24 mb-12 tracking-tight">
        Open Source <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Contributions</span>
      </h2>

      <div className="space-y-8">
        <div className="group bg-zinc-900/30 border border-white/5 hover:border-gold-500/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(245,142,11,0.2)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full shadow-[0_0_10px_rgba(245,142,11,0.4)]"></div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 tracking-tight">
                Mem0 AI
              </h3>
              <p className="text-sm text-zinc-500 font-medium mt-0.5">Memory layer for AI Agents</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-gold-500/20 transition-all duration-300">
              <Image
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                src="/mem0.png"
                alt="mem0"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-4">
                {[
                  "Added support for Google as an LLM & embedder in their typescript package.",
                  "Added support for Cloudflare vectorize for vector storage.",
                  "Fix embedder config schema to support embeddingDims and url parameters correctly."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 hover:text-zinc-300 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 shadow-[0_0_6px_rgba(245,142,11,0.6)]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="group bg-zinc-900/30 border border-white/5 hover:border-gold-500/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(245,142,11,0.2)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full shadow-[0_0_10px_rgba(245,142,11,0.4)]"></div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 tracking-tight">
                Mastra AI
              </h3>
              <p className="text-sm text-zinc-500 font-medium mt-0.5">TypeScript AI Framework</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-gold-500/20 transition-all duration-300">
              <Image
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                src="/mastra.png"
                alt="Mastra AI framework"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-4">
                {[
                  "Added support for Sarvam AI voice (both TTS & STT) in Mastra Voice for Indian languages.",
                  "Added open source voice model support using Cloudflare Workers AI provider"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 hover:text-zinc-300 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 shadow-[0_0_6px_rgba(245,142,11,0.6)]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="group bg-zinc-900/30 border border-white/5 hover:border-gold-500/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(245,142,11,0.2)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full shadow-[0_0_10px_rgba(245,142,11,0.4)]"></div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 tracking-tight">
                OWASP Nettacker
              </h3>
              <p className="text-sm text-zinc-500 font-medium mt-0.5">Automated Penetration Testing Framework</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-gold-500/20 transition-all duration-300">
              <Image
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                src="/nettacker.png"
                alt="Nettacker Project"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-4">
                {[
                  "Added POP3 brute force modules and expanded the tool's capabilities and potential impact in identifying security vulnerabilities.",
                  "Fixed language library issues which improved the tool's user experience, potentially leading to increased adoption and usage.",
                  "Translated the tool into Bengali language which increased accessibility and potential user base in Bengali-speaking regions."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 hover:text-zinc-300 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 shadow-[0_0_6px_rgba(245,142,11,0.6)]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="group bg-zinc-900/30 border border-white/5 hover:border-gold-500/30 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(245,142,11,0.2)]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-1 h-12 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full shadow-[0_0_10px_rgba(245,142,11,0.4)]"></div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-300 tracking-tight">
                Python Beginner Projects
              </h3>
              <p className="text-sm text-zinc-500 font-medium mt-0.5">2k+ ⭐ • Educational Resource</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2 aspect-video relative rounded-2xl overflow-hidden border border-white/5 group-hover:border-gold-500/20 transition-all duration-300">
              <Image
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                src="/Banner.png"
                alt="Python Beginner Projects Banner"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div className="w-full md:w-1/2">
              <ul className="space-y-4">
                {[
                  "Created and maintained a popular GitHub repository, Python Beginner Projects, designed as an accessible resource for Python learners.",
                  "Achieved 2k+ stars on the repository, reflecting its popularity and value within the developer community."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400 hover:text-zinc-300 transition-colors">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 shadow-[0_0_6px_rgba(245,142,11,0.6)]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
