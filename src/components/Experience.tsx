"use client";

import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  const categoryPillColors: Record<string, string> = {
    "Academic Internship": "bg-[#FAF7F2] dark:bg-stone-800 text-[#C86343] dark:text-[#DF7A5A] border-[#E7E0D2] dark:border-[#2E2B28]",
    "Industry Internship": "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40",
    "Virtual Internship": "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40",
  };

  return (
    <section
      id="experience"
      className="py-24 md:py-32 border-b border-[#E7E0D2] dark:border-[#2E2B28] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A]" />
              04 // Professional Journey
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Experience<span className="text-[#C86343] dark:text-[#DF7A5A]">.</span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 max-w-xs">
            Verified academic, industry, and virtual internships from resume
          </p>
        </div>

        {/* Refined Vertical Timeline */}
        <div className="relative border-l border-[#E7E0D2] dark:border-[#2E2B28] ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            return (
              <div key={exp.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline node dot */}
                <div className="absolute -left-[9px] top-1.5 w-[17px] h-[17px] rounded-full bg-[#FAF7F2] dark:bg-[#141312] border-2 border-[#C86343] dark:border-[#DF7A5A] group-hover:scale-125 transition-transform duration-300" />

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-900/60 backdrop-blur-xs shadow-editorial hover:shadow-editorial-lg transition-all duration-300 space-y-5">
                  {/* Top metadata row */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${
                        categoryPillColors[exp.category] || "border-stone-200"
                      }`}
                    >
                      {exp.category}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 dark:text-stone-400">
                      <Calendar className="w-3.5 h-3.5 text-[#C86343] dark:text-[#DF7A5A]" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 font-normal leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600 dark:text-stone-400">
                      <span className="font-medium text-stone-900 dark:text-stone-200">
                        {exp.organization}
                      </span>
                      {exp.location && (
                        <>
                          <span>•</span>
                          <span className="flex items-center gap-1 text-xs font-mono">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </>
                      )}
                    </div>
                    {exp.affiliations && (
                      <p className="text-xs font-mono text-[#C86343] dark:text-[#DF7A5A] pt-0.5">
                        {exp.affiliations}
                      </p>
                    )}
                  </div>

                  {/* Description Points */}
                  <div className="space-y-2 pt-1">
                    {exp.description.map((bullet, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-600 dark:text-stone-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A] mt-2 shrink-0" />
                        <span className="leading-relaxed font-light">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[#E7E0D2]/70 dark:border-[#2E2B28]/70">
                    {exp.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-[#FAF7F2] dark:bg-stone-800 text-stone-700 dark:text-stone-300 border border-[#E7E0D2] dark:border-[#2E2B28]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Note */}
        <div className="mt-12 p-4 rounded-2xl border border-dashed border-[#D5CAB7] dark:border-[#3F3B37] bg-[#FAF7F2]/50 dark:bg-stone-900/30 text-xs text-stone-500 dark:text-stone-400">
          <p className="font-light">
            <strong className="font-medium text-stone-700 dark:text-stone-300">
              Integrity Statement:
            </strong>{" "}
            All internship details strictly reflect active participation,
            academic supervision (NIT Tiruchirappalli), direct client SEO
            work (VR Della), or certified partner curricula (Edunet/AICTE/Microsoft
            and ServiceNow/SmartBridge). No entries have been conflated with full-time
            employment.
          </p>
        </div>
      </div>
    </section>
  );
}
