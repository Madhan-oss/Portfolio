"use client";

import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Mail,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Layers,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden border-b border-[#DFE5DA] dark:border-[#223B2F]"
    >
      {/* Subtle background ambient grain & light warm gradient */}
      <div className="absolute inset-0 bg-grain opacity-60 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#BDE4CE]/20 via-[#F7F8F4]/0 to-transparent dark:from-[#1B4D36]/10 dark:via-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Top Tag & Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white/80 dark:bg-stone-800/80 shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-600 dark:text-stone-300 font-semibold">
                HELLO, I&apos;M
              </span>
              <span className="text-stone-300 dark:text-stone-600">|</span>
              <span className="text-[11px] font-mono tracking-wider text-stone-500 dark:text-stone-400">
                Available for 2026/2027 Roles
              </span>
            </div>

            {/* Main Editorial Heading */}
            <div className="space-y-2">
              <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal tracking-tight text-stone-900 dark:text-stone-50 leading-[0.95]">
                Madhan Kumar<span className="text-[#1B4D36] dark:text-[#34D399]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-[#1B4D36] dark:text-[#34D399] font-medium tracking-normal pt-1">
                Full Stack Developer & AI/ML Enthusiast
              </p>
            </div>

            {/* Authentic Introduction */}
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed font-sans font-light">
              Undergraduate in Artificial Intelligence and Machine Learning at{" "}
              <span className="font-medium text-stone-900 dark:text-stone-100">
                SRM Institute of Science and Technology
              </span>
              . I architect purposeful software systems—from intelligent NLP
              extractors and voice assistants to high-throughput web platforms
              and evolutionary optimization algorithms.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-full bg-stone-900 dark:bg-stone-100 hover:bg-[#1B4D36] dark:hover:bg-[#34D399] text-white dark:text-stone-900 dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:border-[#1B4D36] dark:hover:border-[#34D399] text-stone-800 dark:text-stone-200 hover:text-[#1B4D36] dark:hover:text-[#34D399] transition-all duration-300"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-[#EFF2EB] dark:bg-stone-900 hover:bg-[#F7F8F4] dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#1B4D36] dark:hover:text-[#34D399] transition-all duration-300"
              >
                <FileDown className="w-3.5 h-3.5 text-[#1B4D36] dark:text-[#34D399]" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Social Links & Meta Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-[#DFE5DA] dark:border-[#223B2F] w-full">
              <span className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500">
                Connect Directly:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#1B4D36] dark:hover:text-[#34D399] hover:border-[#1B4D36] dark:hover:border-[#34D399] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#1B4D36] dark:hover:text-[#34D399] hover:border-[#1B4D36] dark:hover:border-[#34D399] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-9 h-9 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#1B4D36] dark:hover:text-[#34D399] hover:border-[#1B4D36] dark:hover:border-[#34D399] transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 ml-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D36] dark:bg-[#34D399]" />
                <span>Tiruchirappalli, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Right Column: Moxa-Style Editorial Portrait Presentation */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative border & offset frame */}
              <div className="absolute -inset-3 rounded-3xl border border-[#C8D2C2] dark:border-[#2F503F] -rotate-1 pointer-events-none" />
              <div className="absolute -inset-1 rounded-3xl bg-[#EFF2EB] dark:bg-stone-800 rotate-1 -z-10" />

              {/* Image Container with Editorial Mask */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 dark:bg-stone-900 border border-[#DFE5DA] dark:border-[#223B2F] shadow-editorial-lg group">
                <Image
                  src={PERSONAL_INFO.photos.heroSuit}
                  alt="B Madhan Kumar — Full Stack Developer & AI/ML Enthusiast"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent pointer-events-none" />

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-lg tracking-wide font-medium leading-tight">
                      B Madhan Kumar
                    </p>
                    <p className="text-[11px] font-mono text-stone-300">
                      AI &amp; ML · SRM IST (2023–2027)
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase border border-white/30 text-white font-medium">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: Academic Institution */}
              <div className="absolute -top-5 -left-5 bg-white dark:bg-stone-800 border border-[#DFE5DA] dark:border-[#223B2F] rounded-2xl p-3 shadow-editorial flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#E8F3EC] dark:bg-[#142920] text-[#1B4D36] dark:text-[#34D399] flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                    Education
                  </p>
                  <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                    B.Tech AI &amp; ML @ SRM IST
                  </p>
                </div>
              </div>

              {/* Floating Badge 2: Browser Extension / Builder */}
              <div className="absolute -bottom-5 -right-5 bg-white dark:bg-stone-800 border border-[#DFE5DA] dark:border-[#223B2F] rounded-2xl p-3 shadow-editorial flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-stone-400">
                    Open Source
                  </p>
                  <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                    Promptly Extension Creator
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
