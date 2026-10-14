"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ExternalLink,
  Calendar,
  Layers,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FAF7F2] dark:bg-[#1A1918] border border-[#E7E0D2] dark:border-[#2E2B28] rounded-3xl shadow-2xl z-10 flex flex-col">
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF7F2]/95 dark:bg-[#1A1918]/95 backdrop-blur-md border-b border-[#E7E0D2] dark:border-[#2E2B28]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-full bg-[#F4EFE6] dark:bg-stone-800 text-[#C86343] dark:text-[#DF7A5A] font-semibold">
              Project {project.number}
            </span>
            <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
              {project.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Visual */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-[#E7E0D2] dark:border-[#2E2B28] bg-stone-100 dark:bg-stone-900 shadow-sm">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Title & Timeline */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#C86343] dark:text-[#DF7A5A]" />
                {project.period}
              </span>
              <span>•</span>
              <span>{project.category}</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-normal leading-tight">
              {project.title}
            </h3>
            <p className="text-stone-600 dark:text-stone-300 font-light text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Medical / Prototype Disclaimer if applicable */}
          {project.disclaimer && (
            <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed font-light">
                {project.disclaimer}
              </p>
            </div>
          )}

          {/* Tools & Technologies */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-xl text-xs font-medium border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6] dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Case Study Details: Problem, Approach, Architecture */}
          <div className="space-y-6 pt-4 border-t border-[#E7E0D2] dark:border-[#2E2B28]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-5 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/60 dark:bg-stone-900/40">
                <h5 className="font-editorial text-xl text-stone-900 dark:text-stone-100 mb-2">
                  The Problem
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {project.caseStudy.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="p-5 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/60 dark:bg-stone-900/40">
                <h5 className="font-editorial text-xl text-stone-900 dark:text-stone-100 mb-2">
                  Engineering Approach
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                  {project.caseStudy.approach}
                </p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="p-6 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-900/50 space-y-3">
              <h5 className="font-editorial text-xl text-stone-900 dark:text-stone-100">
                Key Technical Architecture
              </h5>
              <div className="space-y-2.5">
                {project.caseStudy.architecture.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 dark:text-stone-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A] mt-1.5 shrink-0" />
                    <span className="leading-relaxed font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Implementation Results */}
            <div className="p-5 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6]/50 dark:bg-stone-900/30">
              <h5 className="font-editorial text-xl text-stone-900 dark:text-stone-100 mb-2">
                Implementation Outcomes
              </h5>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-light">
                {project.caseStudy.results}
              </p>
            </div>
          </div>

          {/* Links & Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7E0D2] dark:border-[#2E2B28]">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:border-[#C86343] dark:hover:border-[#DF7A5A] hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#C86343] hover:bg-[#B25234] text-white text-xs font-semibold shadow-xs transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Deployment</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-stone-500 hover:text-stone-900 dark:hover:text-stone-200 transition-colors"
            >
              Close Case Study [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
