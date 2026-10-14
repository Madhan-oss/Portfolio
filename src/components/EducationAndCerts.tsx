"use client";

import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { EDUCATION_LIST, CERTIFICATIONS } from "@/data/portfolioData";

export default function EducationAndCerts() {
  return (
    <section
      id="education"
      className="py-24 md:py-32 border-b border-[#E7E0D2] dark:border-[#2E2B28] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A]" />
              05 // Academic & Credentials
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Education &amp; Certifications<span className="text-[#C86343] dark:text-[#DF7A5A]">.</span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 max-w-xs">
            Academic degrees and industry certifications from AWS, IBM, and Cisco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Education (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#C86343] dark:text-[#DF7A5A]" />
              <span>Academic Pathway</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_LIST.map((edu, idx) => (
                <div
                  key={edu.id}
                  className="p-6 sm:p-7 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 shadow-editorial space-y-3 group hover:border-[#C86343]/60 transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-stone-500 dark:text-stone-400">
                    <span className="text-[#C86343] dark:text-[#DF7A5A] font-semibold">
                      {idx === 0 ? "Undergraduate Degree" : "Schooling"}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-editorial text-xl sm:text-2xl text-stone-900 dark:text-stone-100 font-normal leading-snug">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-stone-700 dark:text-stone-300 pt-0.5">
                      {edu.institution}
                    </p>
                    <p className="text-xs font-mono text-stone-500 dark:text-stone-400 flex items-center gap-1 pt-1">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </p>
                  </div>

                  {edu.highlights && (
                    <div className="pt-2 border-t border-[#E7E0D2]/70 dark:border-[#2E2B28]/70 space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <p
                          key={i}
                          className="text-xs text-stone-600 dark:text-stone-400 font-light flex items-start gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C86343] dark:bg-[#DF7A5A] mt-2 shrink-0" />
                          <span>{h}</span>
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-editorial text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 flex items-center gap-3">
              <Award className="w-6 h-6 text-[#C86343] dark:text-[#DF7A5A]" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 shadow-editorial space-y-3 group hover:border-[#C86343]/60 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                    <span className="flex items-center gap-1.5 text-[#C86343] dark:text-[#DF7A5A] font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Issuer
                    </span>
                    <span className="text-[10px] uppercase tracking-wider">
                      {cert.badgeCode}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-editorial text-xl text-stone-900 dark:text-stone-100 font-normal leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-medium text-stone-600 dark:text-stone-400 mt-1">
                      Issued by{" "}
                      <span className="text-stone-900 dark:text-stone-200">
                        {cert.issuer}
                      </span>
                    </p>
                  </div>
                </div>
              ))}

              <div className="p-6 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6]/60 dark:bg-stone-900/40 text-xs text-stone-600 dark:text-stone-400 space-y-2">
                <p className="font-semibold text-stone-900 dark:text-stone-200 font-editorial text-base">
                  Rigorous Foundational Knowledge
                </p>
                <p className="font-light leading-relaxed">
                  Certifications from AWS, IBM, and Cisco complement active academic
                  coursework at SRM IST, reinforcing generative model architectures,
                  neural network theory, and modern enterprise AI systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
