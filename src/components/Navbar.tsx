"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  FileDown,
  Sun,
  Moon,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({
  onOpenResume,
  isDark,
  toggleTheme,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple scroll spy
      const sections = NAV_LINKS.map((item) =>
        document.querySelector(item.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && (el as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(NAV_LINKS[i].href);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#F7F8F4]/90 dark:bg-[#0B1410]/90 backdrop-blur-md border-b border-[#DFE5DA] dark:border-[#223B2F] shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Monogram */}
            <Link
              href="#"
              className="group flex items-center gap-2.5 text-stone-900 dark:text-stone-100 font-medium tracking-tight"
            >
              <span className="w-9 h-9 rounded-full bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 flex items-center justify-center font-serif text-lg font-bold transition-transform duration-300 group-hover:scale-105">
                M
              </span>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight leading-none text-stone-900 dark:text-stone-100 font-semibold">
                  Madhan Kumar<span className="text-[#1B4D36] dark:text-[#34D399]">.</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 dark:text-stone-400 font-mono mt-0.5">
                  Portfolio · 2026
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#EFF2EB]/70 dark:bg-[#15241D]/70 px-4 py-1.5 rounded-full border border-[#DFE5DA]/80 dark:border-[#223B2F] shadow-inner">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-1 text-xs tracking-wide rounded-full transition-all duration-200 font-medium ${
                      isActive
                        ? "bg-white dark:bg-stone-800 text-[#1B4D36] dark:text-[#34D399] shadow-xs font-semibold"
                        : "text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-white/40 dark:hover:bg-stone-800/40"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle visual theme"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#DFE5DA] dark:border-[#223B2F] bg-white/70 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:text-[#1B4D36] dark:hover:text-[#34D399] transition-colors"
                title={isDark ? "Switch to warm light theme" : "Switch to warm dark theme"}
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white/80 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 hover:border-[#1B4D36] dark:hover:border-[#34D399] hover:text-[#1B4D36] dark:hover:text-[#34D399] transition-all"
              >
                <FileDown className="w-3.5 h-3.5 text-[#1B4D36] dark:text-[#34D399]" />
                <span>Resume</span>
              </button>

              {/* Connect CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#1B4D36] hover:bg-[#133A28] text-white shadow-xs transition-all duration-200 hover:shadow-md"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-[#DFE5DA] dark:border-[#223B2F] bg-white/70 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-full border border-[#DFE5DA] dark:border-[#223B2F] bg-white/80 dark:bg-stone-800/80 text-stone-900 dark:text-stone-100 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-stone-900 dark:text-stone-100" />
                ) : (
                  <Menu className="w-5 h-5 text-stone-900 dark:text-stone-100" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-20 right-4 left-4 max-w-sm ml-auto bg-[#F7F8F4] dark:bg-[#101B15] border border-[#DFE5DA] dark:border-[#223B2F] rounded-2xl p-6 shadow-2xl z-50">
            <div className="flex flex-col gap-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                Navigation
              </div>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-stone-700 dark:text-stone-200 hover:bg-[#EFF2EB] dark:hover:bg-stone-800 hover:text-[#1B4D36] dark:hover:text-[#34D399] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-[#DFE5DA] dark:border-[#223B2F] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl border border-[#DFE5DA] dark:border-[#223B2F] bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                >
                  <FileDown className="w-4 h-4 text-[#1B4D36] dark:text-[#34D399]" />
                  <span>View / Download Resume (PDF)</span>
                </button>

                <a
                  href="#contact"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-[#1B4D36] text-white"
                >
                  <span>Let&apos;s Connect</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
