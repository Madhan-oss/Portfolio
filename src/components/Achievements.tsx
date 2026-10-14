"use client";

import {
  Trophy,
  Award,
  Users,
  CheckCircle2,
  Dumbbell,
  Crown,
  Globe,
  Cpu,
} from "lucide-react";
import { ACHIEVEMENTS, HOBBIES_INTERESTS } from "@/data/portfolioData";

export default function Achievements() {
  const categoryIcons: Record<string, React.ElementType> = {
    Competition: Trophy,
    Hackathon: Award,
    Leadership: Users,
  };

  const hobbyIcons: Record<string, React.ElementType> = {
    "Fitness & Gym": Dumbbell,
    "Strategic Chess": Crown,
    "Browser Extensions": Globe,
    "AI Tools & Automation": Cpu,
  };

  const hobbyGradients: Record<string, string> = {
    "Fitness & Gym":
      "from-emerald-500/20 via-emerald-400/10 to-transparent dark:from-emerald-500/15 dark:via-emerald-400/5",
    "Strategic Chess":
      "from-amber-500/20 via-amber-400/10 to-transparent dark:from-amber-500/15 dark:via-amber-400/5",
    "Browser Extensions":
      "from-blue-500/20 via-blue-400/10 to-transparent dark:from-blue-500/15 dark:via-blue-400/5",
    "AI Tools & Automation":
      "from-purple-500/20 via-purple-400/10 to-transparent dark:from-purple-500/15 dark:via-purple-400/5",
  };

  const hobbyIconColors: Record<string, string> = {
    "Fitness & Gym":
      "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400",
    "Strategic Chess":
      "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400",
    "Browser Extensions":
      "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
    "AI Tools & Automation":
      "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400",
  };

  return (
    <section
      id="achievements"
      className="py-24 md:py-32 border-b border-[#E7E0D2] dark:border-[#2E2B28] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A]" />
              06 // Honors & Discipline
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Achievements &amp; Interests<span className="text-[#C86343] dark:text-[#DF7A5A]">.</span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 max-w-xs">
            Hackathons, technical competitions, event leadership, and personal discipline
          </p>
        </div>

        {/* Verified Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {ACHIEVEMENTS.map((ach) => {
            const Icon = categoryIcons[ach.category] || Award;
            return (
              <div
                key={ach.id}
                className="p-8 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] dark:bg-stone-800 text-[#C86343] dark:text-[#DF7A5A] flex items-center justify-center transition-colors group-hover:bg-[#C86343] group-hover:text-white dark:group-hover:bg-[#DF7A5A] dark:group-hover:text-stone-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#FAF7F2] dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-[#E7E0D2] dark:border-[#2E2B28]">
                      {ach.category}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono font-semibold text-[#C86343] dark:text-[#DF7A5A]">
                      {ach.place}
                    </span>
                    <h3 className="font-editorial text-2xl text-stone-900 dark:text-stone-100 font-normal leading-snug">
                      {ach.title}
                    </h3>
                    <p className="text-xs font-mono text-stone-500 dark:text-stone-400">
                      {ach.organization}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-light leading-relaxed pt-1">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E7E0D2]/70 dark:border-[#2E2B28]/70 flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span>Resume Certified</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C86343] dark:text-[#DF7A5A]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interests & Beyond The Code — Enhanced with Icons & Visuals */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#E7E0D2] dark:border-[#2E2B28] pb-4">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100">
              Interests &amp; Personal Focus
            </h3>
            <span className="text-xs font-mono text-stone-400">
              Outside the Terminal
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {HOBBIES_INTERESTS.map((item) => {
              const HobbyIcon = hobbyIcons[item.title] || Cpu;
              const gradient = hobbyGradients[item.title] || "from-stone-500/20 via-stone-400/10 to-transparent";
              const iconColor = hobbyIconColors[item.title] || "bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400";

              return (
                <div
                  key={item.title}
                  className="relative p-6 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 hover:bg-white dark:hover:bg-stone-900 transition-all duration-300 space-y-3 group overflow-hidden hover:shadow-editorial hover:-translate-y-1"
                >
                  {/* Subtle gradient accent at top */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-t-2xl`}
                  />

                  {/* Icon with colored background */}
                  <div className="relative flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-2xl ${iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <HobbyIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C86343] dark:text-[#DF7A5A] font-semibold px-2.5 py-1 rounded-full bg-[#FAF7F2] dark:bg-stone-800 border border-[#E7E0D2] dark:border-[#2E2B28]">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title & subtitle */}
                  <div className="relative space-y-0.5">
                    <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="relative text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bottom accent line on hover */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#C86343]/50 dark:via-[#DF7A5A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
