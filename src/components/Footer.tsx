"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#E7E0D2] dark:border-[#2E2B28] bg-[#F4EFE6]/60 dark:bg-[#141312] py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between pb-12 border-b border-[#E7E0D2] dark:border-[#2E2B28]">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 flex items-center justify-center font-serif text-base font-bold">
                M
              </span>
              <span className="font-editorial text-2xl text-stone-900 dark:text-stone-100 font-semibold tracking-tight">
                Madhan Kumar<span className="text-[#C86343] dark:text-[#DF7A5A]">.</span>
              </span>
            </div>
            <p className="text-sm text-stone-600 dark:text-stone-400 font-light max-w-md leading-relaxed">
              Full Stack Developer &amp; AI/ML Enthusiast. Building purposeful
              software systems, intelligent language models, and scalable digital
              products at SRM Institute of Science and Technology.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-medium text-stone-600 dark:text-stone-400">
              <li>
                <a href="#about" className="hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors">
                  Experience &amp; Internships
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors">
                  Education &amp; Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#C86343] dark:hover:text-[#DF7A5A] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Profiles & Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col items-start md:items-end">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 dark:text-stone-500">
              Profiles
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#C86343] dark:hover:text-[#DF7A5A] hover:border-[#C86343] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#C86343] dark:hover:text-[#DF7A5A] hover:border-[#C86343] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 flex items-center justify-center text-stone-700 dark:text-stone-300 hover:text-[#C86343] dark:hover:text-[#DF7A5A] hover:border-[#C86343] transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-[#C86343] dark:hover:text-[#DF7A5A] text-xs font-mono transition-colors mt-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
          <p>
            &copy; {currentYear} B Madhan Kumar. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-stone-400">
            Inspired by Moxa Portfolio &middot; Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
