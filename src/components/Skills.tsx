"use client";

import { useState } from "react";
import {
  Code,
  Layers,
  Wrench,
  Users,
  Check,
  Terminal,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    "Programming & Web": Code,
    "Core Concepts": Layers,
    "Tools & Technologies": Wrench,
    "Soft Skills": Users,
  };

  const filteredCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.name === activeTab);

  return (
    <section
      id="skills"
      className="py-24 md:py-32 border-b border-[#DFE5DA] dark:border-[#223B2F] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D36] dark:text-[#34D399]" />
              02 // Technical Capabilities
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Verified Skills<span className="text-[#1B4D36] dark:text-[#34D399]">.</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-[#EFF2EB]/70 dark:bg-[#15241D]/70">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                activeTab === "all"
                  ? "bg-white dark:bg-stone-800 text-[#1B4D36] dark:text-[#34D399] shadow-xs font-semibold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                  activeTab === cat.name
                    ? "bg-white dark:bg-stone-800 text-[#1B4D36] dark:text-[#34D399] shadow-xs font-semibold"
                    : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
                }`}
              >
                {cat.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className="p-8 rounded-3xl border border-[#DFE5DA] dark:border-[#223B2F] bg-white/70 dark:bg-stone-900/60 backdrop-blur-xs shadow-editorial hover:shadow-editorial-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#EFF2EB] dark:bg-stone-800 text-[#1B4D36] dark:text-[#34D399] flex items-center justify-center transition-colors group-hover:bg-[#1B4D36] group-hover:text-white dark:group-hover:bg-[#34D399] dark:group-hover:text-stone-900">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-2xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
                          {category.name}
                        </h3>
                        <p className="text-xs text-stone-500 dark:text-stone-400 font-light">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-stone-400 dark:text-stone-500">
                      {category.skills.length} Items
                    </span>
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2.5 pt-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#DFE5DA] dark:border-[#223B2F] bg-[#F7F8F4] dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-800 hover:border-[#1B4D36] dark:hover:border-[#34D399] transition-all duration-200 group/pill cursor-default"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D36] dark:bg-[#34D399] opacity-70 group-hover/pill:opacity-100 transition-opacity" />
                        <span className="text-xs font-medium text-stone-800 dark:text-stone-200 group-hover/pill:text-[#1B4D36] dark:group-hover/pill:text-[#34D399] transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-[#DFE5DA]/70 dark:border-[#223B2F]/70 flex items-center justify-between text-[11px] font-mono text-stone-400 dark:text-stone-500">
                  <span>Authoritative Resume Data</span>
                  <span className="text-[#1B4D36] dark:text-[#34D399] font-semibold">
                    100% Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-12 p-4 rounded-2xl border border-dashed border-[#C8D2C2] dark:border-[#2F503F] bg-[#F7F8F4]/50 dark:bg-stone-900/30 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
          <p className="font-light">
            <strong className="font-medium text-stone-700 dark:text-stone-300">
              Notice:
            </strong>{" "}
            Skills presented above represent actual verified technical tools
            and academic coursework from B Madhan Kumar&apos;s curriculum and
            internships. Arbitrary proficiency percentages have been omitted in
            favor of demonstrable project applications.
          </p>
        </div>
      </div>
    </section>
  );
}
