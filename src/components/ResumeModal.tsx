"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import { X, FileDown, ExternalLink, Printer, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.6 },
      colors: ["#1B4D36", "#34D399", "#BDE4CE"],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-4xl h-[92vh] bg-[#F7F8F4] dark:bg-[#101B15] border border-[#DFE5DA] dark:border-[#223B2F] rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden">
        {/* Modal Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#F7F8F4]/95 dark:bg-[#101B15]/95 backdrop-blur-md border-b border-[#DFE5DA] dark:border-[#223B2F]">
          <div className="flex items-center gap-3">
            <span className="font-editorial text-lg text-stone-900 dark:text-stone-100 font-semibold">
              B Madhan Kumar — Resume
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              Verified PDF
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Button */}
            <a
              href="/resume.pdf"
              download="B_Madhan_Kumar_Resume.pdf"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1B4D36] hover:bg-[#133A28] text-white text-xs font-semibold shadow-xs transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Open in new tab */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium hover:border-[#1B4D36] transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>New Tab</span>
            </a>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#1B4D36] dark:hover:text-[#34D399] transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 bg-stone-100 dark:bg-stone-900 p-2 sm:p-4">
          <iframe
            src="/resume.pdf#view=FitH"
            title="B Madhan Kumar Official Resume"
            className="w-full h-full rounded-2xl border border-[#DFE5DA] dark:border-[#223B2F] shadow-inner bg-white"
          />
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-2.5 bg-[#F7F8F4] dark:bg-[#101B15] border-t border-[#DFE5DA] dark:border-[#223B2F] flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-stone-400">
          <span>Authoritative Source: SRM IST &middot; Class of 2027</span>
          <span className="hidden sm:inline-block">
            madhankumar1824@gmail.com &middot; +91 6369373742
          </span>
        </div>
      </div>
    </div>
  );
}
