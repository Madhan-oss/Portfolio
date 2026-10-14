"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Calendar,
  Sparkles,
  BookOpen,
  Layers,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { FEATURED_PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"featured" | "all">("featured");

  const displayProjects =
    viewMode === "featured"
      ? FEATURED_PROJECTS.filter((p) => p.isFeatured)
      : FEATURED_PROJECTS;

  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-b border-[#E7E0D2] dark:border-[#2E2B28] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A]" />
              03 // Selected Portfolio
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Featured Work<span className="text-[#C86343] dark:text-[#DF7A5A]">.</span>
            </h2>
          </div>

          {/* Toggle between Core Featured and All GitHub Repos */}
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6]/70 dark:bg-[#1F1D1C]/70">
            <button
              onClick={() => setViewMode("featured")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                viewMode === "featured"
                  ? "bg-white dark:bg-stone-800 text-[#C86343] dark:text-[#DF7A5A] shadow-xs font-semibold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              }`}
            >
              Primary Featured (3)
            </button>
            <button
              onClick={() => setViewMode("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 ${
                viewMode === "all"
                  ? "bg-white dark:bg-stone-800 text-[#C86343] dark:text-[#DF7A5A] shadow-xs font-semibold"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              }`}
            >
              All Open Source ({FEATURED_PROJECTS.length})
            </button>
          </div>
        </div>

        {/* Project Cards - Moxa Editorial Showcase */}
        <div className="space-y-16 lg:space-y-24">
          {displayProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 backdrop-blur-xs shadow-editorial hover:shadow-editorial-lg transition-all duration-500"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Visual Image Showcase */}
                  <div
                    className={`lg:col-span-6 relative order-1 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#E7E0D2] dark:border-[#2E2B28] bg-stone-100 dark:bg-stone-950 group-hover:border-[#C86343]/50 transition-colors">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Number Tag in Top Corner */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md border border-[#E7E0D2] dark:border-stone-700 text-stone-900 dark:text-stone-100 font-mono text-xs font-semibold">
                        PROJECT {project.number}
                      </div>

                      {/* Hover Overlay Button */}
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                        aria-label={`View case study for ${project.title}`}
                      >
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-stone-900 font-mono text-xs font-semibold shadow-lg hover:scale-105 transition-transform">
                          <BookOpen className="w-3.5 h-3.5 text-[#C86343]" />
                          Read Case Study
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Project Info & Description */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-between space-y-6 order-2 ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                        <span className="text-[#C86343] dark:text-[#DF7A5A] font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.period}
                        </span>
                      </div>

                      <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-stone-600 dark:text-stone-300 font-light text-sm sm:text-base leading-relaxed">
                        {project.summary}
                      </p>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="space-y-2">
                      {project.highlights.slice(0, 3).map((item, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-stone-600 dark:text-stone-400"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A] mt-1.5 shrink-0" />
                          <span className="font-light leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tools Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800 text-stone-700 dark:text-stone-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-[#E7E0D2]/70 dark:border-[#2E2B28]/70">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-900 dark:bg-stone-100 hover:bg-[#C86343] dark:hover:bg-[#DF7A5A] text-white dark:text-stone-900 dark:hover:text-white text-xs font-semibold transition-colors duration-200"
                      >
                        <span>View Project Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:border-[#C86343] dark:hover:border-[#DF7A5A] hover:text-[#C86343] dark:hover:text-[#DF7A5A] text-xs font-medium text-stone-700 dark:text-stone-300 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-stone-300 dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:border-[#C86343] dark:hover:border-[#DF7A5A] hover:text-[#C86343] dark:hover:text-[#DF7A5A] text-xs font-medium text-stone-700 dark:text-stone-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Open Source Banner */}
        <div className="mt-16 p-8 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6]/70 dark:bg-stone-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-editorial text-2xl text-stone-900 dark:text-stone-100">
              Explore More Repositories on GitHub
            </h4>
            <p className="text-xs text-stone-600 dark:text-stone-400 font-light">
              Including browser extensions, machine learning models, and university utilities.
            </p>
          </div>
          <a
            href="https://github.com/Madhan-oss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:bg-[#C86343] dark:hover:bg-[#DF7A5A] dark:hover:text-white text-xs font-semibold transition-colors duration-200 shadow-xs shrink-0"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Visit @Madhan-oss</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
