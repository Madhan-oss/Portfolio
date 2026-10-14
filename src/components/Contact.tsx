"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  MapPin,
  Sparkles,
  ArrowUpRight,
  AlertCircle,
  Clock,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject line.";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Please write a message with at least 10 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch & compose fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#C86343", "#DF7A5A", "#F3C9B8", "#191716"],
      });

      // Construct mailto link
      const mailtoUrl = `mailto:${encodeURIComponent(
        PERSONAL_INFO.email
      )}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi Madhan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Open mail client fallback
      window.open(mailtoUrl, "_blank");
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/70 dark:bg-stone-800/70 text-[11px] font-mono uppercase tracking-widest text-stone-500 dark:text-stone-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C86343] dark:bg-[#DF7A5A]" />
              07 // Let&apos;s Build
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-stone-900 dark:text-stone-50 tracking-tight leading-tight">
              Have an idea?<br />
              <span className="italic text-[#C86343] dark:text-[#DF7A5A]">
                Let&apos;s build something useful.
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 max-w-xs">
            Open for software developer roles, AI/ML engineering, and collaborative projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Direct Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 shadow-editorial space-y-6">
              <div className="space-y-2">
                <h3 className="font-editorial text-2xl text-stone-900 dark:text-stone-100">
                  Direct Channels
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                  Feel free to send an email or reach out on LinkedIn. I
                  typically respond within 24 hours.
                </p>
              </div>

              {/* Email channel */}
              <div className="p-4 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800/60 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C86343] dark:text-[#DF7A5A]" />
                    Email
                  </span>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, "email")}
                    className="flex items-center gap-1 text-[#C86343] dark:text-[#DF7A5A] hover:underline"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="w-3 h-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-sm font-medium text-stone-900 dark:text-stone-100 hover:text-[#C86343] dark:hover:text-[#DF7A5A] break-all block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              {/* Phone channel */}
              <div className="p-4 rounded-2xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800/60 space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C86343] dark:text-[#DF7A5A]" />
                    Phone / WhatsApp
                  </span>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, "phone")}
                    className="flex items-center gap-1 text-[#C86343] dark:text-[#DF7A5A] hover:underline"
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check className="w-3 h-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-medium text-stone-900 dark:text-stone-100 hover:text-[#C86343] dark:hover:text-[#DF7A5A] block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Social networks */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400">
                  Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 hover:border-[#C86343] dark:hover:border-[#DF7A5A] flex items-center justify-between text-xs font-medium text-stone-800 dark:text-stone-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white dark:bg-stone-800 hover:border-[#C86343] dark:hover:border-[#DF7A5A] flex items-center justify-between text-xs font-medium text-stone-800 dark:text-stone-200 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-stone-800 dark:text-stone-200" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
                  </a>
                </div>
              </div>

              {/* Location info */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-stone-500 dark:text-stone-400 border-t border-[#E7E0D2]/70 dark:border-[#2E2B28]/70">
                <MapPin className="w-4 h-4 text-[#C86343] dark:text-[#DF7A5A]" />
                <span>Tiruchirappalli, Tamil Nadu, India · UTC+05:30</span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl border border-[#E7E0D2] dark:border-[#2E2B28] bg-white/80 dark:bg-stone-900/60 shadow-editorial relative">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F9E5DC] dark:bg-[#3B251D] text-[#C86343] dark:text-[#DF7A5A] flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="font-editorial text-3xl text-stone-900 dark:text-stone-100 font-normal">
                    Message Prepared!
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                    Your inquiry has been formulated and your default email
                    client was opened. You can also send directly to{" "}
                    <span className="font-mono text-stone-900 dark:text-stone-200 font-medium">
                      madhankumar1824@gmail.com
                    </span>
                    .
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-full border border-stone-300 dark:border-stone-700 text-xs font-semibold text-stone-800 dark:text-stone-200 hover:bg-[#FAF7F2] dark:hover:bg-stone-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="px-5 py-2.5 rounded-full bg-[#C86343] hover:bg-[#B25234] text-white text-xs font-semibold shadow-xs transition-colors"
                    >
                      Open Email App
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Maya Chen"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.name
                            ? "border-rose-400 bg-rose-50/30"
                            : "border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800"
                        } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-[#C86343] dark:focus:border-[#DF7A5A] transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-xl border ${
                          errors.email
                            ? "border-rose-400 bg-rose-50/30"
                            : "border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800"
                        } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-[#C86343] dark:focus:border-[#DF7A5A] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400"
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="e.g. Full Stack Developer Opportunity / Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.subject
                          ? "border-rose-400 bg-rose-50/30"
                          : "border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800"
                      } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-[#C86343] dark:focus:border-[#DF7A5A] transition-colors`}
                    />
                    {errors.subject && (
                      <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about the role, technical problem, or project idea..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message
                          ? "border-rose-400 bg-rose-50/30"
                          : "border-[#E7E0D2] dark:border-[#2E2B28] bg-[#FAF7F2] dark:bg-stone-800"
                      } text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:border-[#C86343] dark:focus:border-[#DF7A5A] transition-colors resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#C86343] hover:bg-[#B25234] disabled:bg-stone-400 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Composing Inquiry...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-stone-400 text-center">
                    Submitting automatically prepares your message and launches
                    your mail client.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
