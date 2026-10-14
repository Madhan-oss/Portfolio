"use client";

import Image from "next/image";
import {
  GraduationCap,
  Code2,
  BrainCircuit,
  Compass,
  CheckCircle2,
  Terminal,
  Cpu,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Academic Background",
      detail:
        "B.Tech in Artificial Intelligence & Machine Learning at SRM Institute of Science and Technology, Tiruchirappalli (2023–2027). Strong foundation in core computer science, OOP, algorithms, and networks.",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      detail:
        "Building end-to-end applications using Python, React, FastAPI, SQL, HTML/CSS, and REST APIs. Committed to writing maintainable, clean code with responsive and accessible user interfaces.",
    },
    {
      icon: BrainCircuit,
      title: "Applied AI & Intelligence",
      detail:
        "Hands-on implementation of Natural Language Processing (NLP with spaCy), Whisper speech-to-text models, deep learning vision classifiers, and DEAP evolutionary genetic algorithms.",
    },
    {
      icon: Compass,
      title: "Workflow & Browser Automation",
      detail:
        "Curiosity for productivity tools and developer workflows, resulting in published browser extensions like Promptly on Microsoft Edge and real-time event extraction pipelines.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 border-b border-[#E7E0D2] dark:border-[#2E2B28] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A]" />
              01 // Background & Philosophy
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              About Me<span className="text-[#C86343] dark:text-[#DF7A5A]">.</span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 max-w-xs">
            SRM IST Tiruchirappalli · AI/ML Engineering · Full Stack Systems
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic B&W Portrait in Moxa Editorial Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px]">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#E7E0D2] dark:border-[#2E2B28] bg-stone-100 dark:bg-stone-900 shadow-editorial relative group">
                <Image
                  src={PERSONAL_INFO.photos.aboutPortrait}
                  alt="Madhan Kumar — Portrait at SRM IST"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover object-center grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-stone-900/10 pointer-events-none" />

                {/* Editorial Caption Tag */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md rounded-xl p-3 border border-[#E7E0D2]/80 dark:border-stone-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-stone-900 dark:text-stone-100">
                        B Madhan Kumar
                      </p>
                      <p className="text-[10px] font-mono text-stone-500 dark:text-stone-400">
                        SRM IST, Tiruchirappalli (2023–2027)
                      </p>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F9E5DC] dark:bg-[#39241B] text-[#C86343] dark:text-[#DF7A5A] font-medium">
                      AI &amp; ML
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Outline Corner */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#D5CAB7] dark:border-[#3F3B37] rounded-bl-3xl pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Narrative Story & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 leading-snug">
                Bridging rigorous computer science foundations with applied
                artificial intelligence to build useful software.
              </h3>
              <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed text-base">
                I am an undergraduate in Artificial Intelligence and Machine
                Learning at SRM Institute of Science and Technology,
                Tiruchirappalli. From my early programming journey, I have been
                drawn to the synergy between deterministic software engineering
                and intelligent probabilistic systems.
              </p>
              <p className="text-stone-600 dark:text-stone-300 font-light leading-relaxed text-base">
                My work spans designing reactive web interfaces, implementing
                robust backends with FastAPI and Python, and integrating
                cutting-edge AI techniques such as natural language processing,
                speech synthesis, and evolutionary search algorithms. Outside
                the code editor, I maintain a disciplined regimen through
                fitness and chess—cultivating strategic focus, patience, and
                continuous self-improvement.
              </p>
            </div>

            {/* Core Competencies / Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 transition-all duration-300 shadow-xs hover:shadow-editorial"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] dark:bg-stone-800 text-[#C86343] dark:text-[#DF7A5A] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Status Bar */}
            <div className="p-4 rounded-xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6]/60 dark:bg-stone-800/40 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-stone-700 dark:text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-[#C86343] dark:text-[#DF7A5A]" />
                <span>B.Tech AI &amp; ML · Aug 2023 – May 2027</span>
              </div>
              <a
                href="#experience"
                className="text-[#C86343] dark:text-[#DF7A5A] hover:underline font-semibold"
              >
                View Experience &amp; Internships →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
