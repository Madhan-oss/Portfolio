# B Madhan Kumar — Personal Portfolio

> **Editorial, minimalist, and authentic portfolio website inspired by the Moxa design language.**  
> Crafted with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS.

---

## ✦ Overview & Identity

- **Full Name:** B Madhan Kumar
- **Role:** Full Stack Developer | AI/ML Enthusiast
- **Institution:** SRM Institute of Science and Technology, Tiruchirappalli
- **Degree:** B.Tech in Artificial Intelligence & Machine Learning (August 2023 – May 2027)
- **Email:** [madhankumar1824@gmail.com](mailto:madhankumar1824@gmail.com)
- **Phone:** +91 6369373742
- **GitHub:** [https://github.com/Madhan-oss](https://github.com/Madhan-oss)
- **LinkedIn:** [https://www.linkedin.com/in/madhan-kumar-a31146274/](https://www.linkedin.com/in/madhan-kumar-a31146274/)
- **Location:** Tiruchirappalli, Tamil Nadu, India

---

## 🎨 Design Reference — The Moxa Aesthetic

Inspired by the **Moxa Portfolio Template** (by Erşad Başbağ / Flowbase), this application departs from generic dark neon developer templates in favor of a warm, timeless editorial feel:

- **Color Palette:** Warm off-white / light cream canvas (`#FAF7F2`, `#F4EFE6`), dark espresso/charcoal typography (`#191716`, `#292624`), muted terracotta accents (`#C86343`, `#DF7A5A`), and refined borders (`#E7E0D2`).
- **Typography:** Editorial serif headings (*Cormorant Garamond* / *Newsreader*), clean modern grotesque body text (*Plus Jakarta Sans*), and technical metadata tags (*JetBrains Mono*).
- **Art Direction:** Authentic photographs of Madhan Kumar (hero suit portrait and black-and-white editorial portrait) framed with generous whitespace, delicate borders, and status pills.
- **Micro-Interactions:** Smooth scrolling, active scroll-spy navigation, case study modals, inline PDF resume viewing, instant contact form validation with confetti celebration, and an optional warm obsidian dark mode.

---

## 🚀 Key Sections & Verified Resume Content

1. **Hero Section:**
   - Top status pill: *"Available for 2026/2027 Roles"*
   - Large serif headline and authentic introduction
   - Primary & secondary CTAs (*"Explore My Work"*, *"Let's Connect"*, *"Resume PDF"*)
   - Direct social links (GitHub, LinkedIn, Email)
   - Authentic studio portrait of Madhan Kumar in suit

2. **About Me:**
   - Authentic story bridging computer science rigor with applied AI
   - Black-and-white portrait from SRM IST
   - Four core pillars: Academic Background, Full-Stack Development, Applied AI & Intelligence, and Browser Automation

3. **Technical Skills:**
   - Verified skills grouped by resume categories:
     - **Programming & Web:** Python, Java, SQL, HTML, CSS, Bootstrap, React
     - **Core Concepts:** Object-Oriented Programming (OOP), Computer Networks
     - **Tools & Technologies:** MySQL, Linux, REST APIs, Docker, NLP
     - **Soft Skills:** Communication, Problem Solving, Team Collaboration, Event Organization
   - Interactive category filter tabs

4. **Featured Projects & Case Studies:**
   - **Project 01:** *AI Assistant That Turns Shared Links into Smart Reminders* (Flutter, Python, FastAPI, Firebase, spaCy, BeautifulSoup, FCM)
   - **Project 02:** *SmartMed VoiceBot: Automated Primary Health Guidance* (Python, Whisper, GPT, gTTS, PyAudio) — *Prototype disclaimer clearly marked*
   - **Project 03:** *Generative Design for Aerodynamic Wind Turbine Blades* (Python, XFOIL, DEAP, Genetic Algorithms)
   - **Open Source Showcase:** Verified repositories from Madhan's GitHub (`Promptly-Extension`, `Plant-Disease-Recognition-System`, `NexJob-AI`, `AcademiaPulse-SRM`)
   - Interactive modal drawer featuring deep case study details: Problem, Engineering Approach, Architecture, and Outcomes

5. **Experience & Internships:**
   - *National Institute of Technology, Trichy (NIT Trichy):* AI/ML Summer Internship (Jun 2025 – Jul 2025)
   - *VR Della Infotech:* Technical SEO Internship (Jul 2025 – Aug 2025)
   - *Microsoft AI-ML Azure Virtual Internship:* Edunet Foundation — AICTE — Microsoft (May 2025 – Jun 2025)
   - *ServiceNow Virtual Internship:* ServiceNow University — SmartBridge — AICTE (May 2026 – Jul 2026)
   - Preserved distinctions between academic programs, industry internships, and certified virtual training

6. **Education & Certifications:**
   - *SRM Institute of Science and Technology, Tiruchirappalli* (B.Tech AI & ML, 2023–2027)
   - *Samadh Higher Secondary School* (CBSE Class XII & X)
   - *AWS Academy:* Generative AI Foundations
   - *IBM:* Artificial Intelligence Fundamentals
   - *Cisco Networking Academy:* Introduction to Modern AI

7. **Achievements & Beyond the Code:**
   - 1st Prize in College Technical Quiz Competition
   - 2nd Prize in National-Level Hackathon (Bannari Amman Institute of Technology)
   - Organizer of YUVA '25 Hackathon at SRM IST
   - Disciplines & Interests: Fitness & Gym, Strategic Chess, Promtply browser extension

8. **Contact Section:**
   - Headline: *"Have an idea? Let's build something useful."*
   - One-click copy for email and phone
   - Form validation for Name, Email, Subject, Message
   - Confetti celebration and automatic `mailto:` client preparation

9. **Resume Viewer Modal:**
   - In-app PDF viewer of the verified `public/resume.pdf`
   - One-click download and new-tab view actions

---

## 🛠️ Tech Stack & Directory Structure

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with Google Fonts (*Cormorant Garamond*, *Plus Jakarta Sans*, *JetBrains Mono*)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Brand SVGs
- **Delight:** [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

```
madhan-portfolio/
├── public/
│   ├── images/
│   │   ├── madhan-suit.jpg          # Authentic portrait 1 (Hero)
│   │   ├── madhan-portrait.jpg      # Authentic portrait 2 (About)
│   │   ├── project-reminder.jpg     # Project 01 visual
│   │   ├── project-smartmed.jpg     # Project 02 visual
│   │   ├── project-turbine.jpg      # Project 03 visual
│   │   └── project-promptly.jpg     # Project 04 visual
│   ├── resume.pdf                   # Official verified PDF resume
│   ├── Madhan_Kumar_Resume.pdf      # Named fallback download
│   └── favicon.svg                  # MK monogram icon
├── src/
│   ├── app/
│   │   ├── globals.css              # Moxa warm editorial design system
│   │   ├── layout.tsx               # SEO metadata, OpenGraph, viewport
│   │   ├── page.tsx                 # Main application page
│   │   └── icon.svg                 # App Router site icon
│   ├── components/
│   │   ├── Navbar.tsx               # Sticky header, scroll spy, theme toggle
│   │   ├── Hero.tsx                 # Moxa editorial hero section
│   │   ├── About.tsx                # Bio, SRM IST story, pillars
│   │   ├── Skills.tsx               # Filterable skill cards
│   │   ├── Projects.tsx             # Featured projects showcase
│   │   ├── ProjectModal.tsx         # Deep case study dialog
│   │   ├── Experience.tsx           # Vertical internship timeline
│   │   ├── EducationAndCerts.tsx    # Degrees & AWS/IBM/Cisco certifications
│   │   ├── Achievements.tsx         # Awards, leadership, hobbies
│   │   ├── Contact.tsx              # Validated contact form & channels
│   │   ├── ResumeModal.tsx          # PDF viewer & download modal
│   │   ├── SocialIcons.tsx          # Pixel-perfect SVG brand icons
│   │   └── Footer.tsx               # Dynamic year, back-to-top, links
│   └── data/
│       └── portfolioData.ts         # Centralized, type-safe resume data
└── package.json
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node.js v24.15.0)
- npm 9+

### Installation
```bash
# Clone or navigate to the directory
cd C:\Users\madha\.gemini\antigravity-ide\scratch\madhan-portfolio

# Install dependencies (already completed)
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Validate types and generate static production bundle
npm run build

# Start production server
npm run start
```

---

## 🚢 Deployment to Vercel

The website is 100% static-ready and optimized for zero-configuration deployment to [Vercel](https://vercel.com/):

```bash
npx vercel
```

Or connect the repository on GitHub (`https://github.com/Madhan-oss/madhan-portfolio`) directly to Vercel.
