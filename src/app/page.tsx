"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import EducationAndCerts from "@/components/EducationAndCerts";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ResumeModal from "@/components/ResumeModal";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference, default to light
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F4] dark:bg-[#0B1410] text-[#121A15] dark:text-[#F4F8F5] transition-colors duration-300">
      {/* Top Floating Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationAndCerts />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
