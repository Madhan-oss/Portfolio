export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  tools: string[];
  summary: string;
  highlights: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  isFeatured: boolean;
  disclaimer?: string;
  caseStudy: {
    problem: string;
    approach: string;
    architecture: string[];
    results: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  category: "Academic Internship" | "Industry Internship" | "Virtual Internship";
  affiliations?: string;
  description: string[];
  badges: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gradeDetails?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeCode: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  place: string;
  category: "Competition" | "Hackathon" | "Leadership";
  description: string;
}

export const PERSONAL_INFO = {
  name: "B Madhan Kumar",
  displayName: "Madhan Kumar",
  role: "Full Stack Developer | AI/ML Enthusiast",
  headline: "Full Stack Developer & AI/ML Enthusiast",
  summary:
    "Passionate Computer Science undergraduate with strong fundamentals in programming, web development, and problem-solving, seeking an entry-level Full Stack Developer role to build scalable, efficient, and user-friendly software solutions while continuously enhancing technical skills.",
  extendedBio:
    "Currently pursuing my B.Tech in Artificial Intelligence and Machine Learning at SRM Institute of Science and Technology, Tiruchirappalli (2023–2027). My focus bridges full-stack engineering with applied intelligence—architecting robust web applications, crafting natural language and speech processing systems, and designing evolutionary optimization algorithms. I believe software should be purposeful, responsive, and crafted with meticulous attention to user experience.",
  email: "madhankumar1824@gmail.com",
  phone: "+91 6369373742",
  location: "Tiruchirappalli, Tamil Nadu, India",
  institution: "SRM Institute of Science and Technology, Tiruchirappalli",
  educationPeriod: "August 2023 – May 2027",
  socials: {
    github: "https://github.com/Madhan-oss",
    linkedin: "https://www.linkedin.com/in/madhan-kumar-a31146274/",
    email: "mailto:madhankumar1824@gmail.com",
  },
  photos: {
    heroSuit: "/images/madhan-portrait.jpg", // Casual portrait for Hero (first photo)
    aboutPortrait: "/images/madhan-suit.jpg", // Professional suit portrait for About section
  },
  resumePath: "/resume.pdf",
};

export const SKILL_CATEGORIES = [
  {
    name: "Programming & Web",
    description: "Core languages and modern frontend frameworks",
    skills: ["Python", "Java", "SQL", "HTML", "CSS", "Bootstrap", "React"],
  },
  {
    name: "Core Concepts",
    description: "Foundational computer science principles",
    skills: ["Object-Oriented Programming (OOP)", "Computer Networks"],
  },
  {
    name: "Tools & Technologies",
    description: "Cloud, databases, containerization, and intelligent services",
    skills: ["MySQL", "Linux", "REST APIs", "Docker", "NLP"],
  },
  {
    name: "Soft Skills",
    description: "Professional practices and collaborative delivery",
    skills: [
      "Communication",
      "Problem Solving",
      "Team Collaboration",
      "Event Organization",
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "smart-reminders",
    number: "01",
    title: "AI Assistant That Turns Shared Links into Smart Reminders",
    tagline: "Automated NLP-driven context extraction and cross-device push notifications",
    category: "AI & Full-Stack Application",
    period: "July 2025 – August 2025",
    tools: [
      "Flutter",
      "Python",
      "FastAPI",
      "Firebase",
      "spaCy",
      "BeautifulSoup",
      "Firebase Cloud Messaging (FCM)",
    ],
    summary:
      "An AI-powered reminder application that extracts useful information from shared links, including deadlines, eligibility requirements, fees, and important dates from YouTube, Instagram, blogs, and job portals.",
    highlights: [
      "Link content extraction engine parsing diverse web architectures and social embeds.",
      "NLP-based entity recognition with spaCy to identify critical dates, eligibility criteria, and fee thresholds.",
      "Automated calendar schedule and contextual reminder generation.",
      "Firebase Cloud Messaging (FCM) integration delivering real-time alerts across devices.",
    ],
    image: "/images/project-reminder.jpg",
    githubUrl: "https://github.com/Madhan-oss",
    isFeatured: true,
    caseStudy: {
      problem:
        "Students and professionals constantly share links containing crucial opportunities (scholarships, hackathons, job registrations, webinars), but manually tracking deadlines and eligibility criteria leads to missed deadlines.",
      approach:
        "Designed an end-to-end mobile and backend solution where users simply share any link into the app. The backend parses the target page, uses NLP to extract date entities, classifies requirements, and generates persistent push notifications.",
      architecture: [
        "Frontend: Cross-platform Flutter client with deep share-intent listeners.",
        "Scraper Pipeline: BeautifulSoup and customized DOM parsers for rich metadata extraction.",
        "NLP Engine: spaCy named entity recognition tuned for dates, deadlines, and requirements.",
        "Backend & Sync: High-throughput asynchronous FastAPI microservice with Firebase Firestore and FCM notifications.",
      ],
      results:
        "Successfully automated context-aware deadline alerts directly from unstructured URLs with seamless push notifications across devices.",
    },
  },
  {
    id: "smartmed-voicebot",
    number: "02",
    title: "SmartMed VoiceBot: Automated Primary Health Guidance",
    tagline: "Conversational voice assistant converting spoken symptoms into preliminary guidance",
    category: "Speech AI & Healthcare Prototype",
    period: "September 2025 – November 2025",
    tools: ["Python", "Whisper", "GPT", "gTTS", "PyAudio"],
    summary:
      "An AI-powered voice assistant designed to process spoken symptoms, generate health-related guidance, and respond through synthesized speech in real time.",
    highlights: [
      "Whisper acoustic model integration for high-accuracy speech-to-text transcription.",
      "GPT reasoning pipeline for intelligent symptom triage and guidance synthesis.",
      "Interactive natural audio response generated through gTTS and streamed via PyAudio.",
      "Full hands-free conversational loop for rapid, accessible preliminary health triage.",
    ],
    image: "/images/project-smartmed.jpg",
    githubUrl: "https://github.com/Madhan-oss/MediConnectAI",
    isFeatured: true,
    disclaimer:
      "Important Note: SmartMed VoiceBot is an exploratory technical prototype designed for research in voice-based triage accessibility. It does not provide medical diagnosis, prescription, or clinical advice, and is not a replacement for professional healthcare providers.",
    caseStudy: {
      problem:
        "Many patients in remote or busy settings struggle with preliminary health literacy or lack rapid access to structured informational triage when experiencing unfamiliar symptoms.",
      approach:
        "Created an accessible voice-first interface where patients can naturally speak their symptoms aloud. The system transcribes the speech, extracts key complaints, contextualizes them through an AI model, and produces comforting spoken guidance.",
      architecture: [
        "Audio Input: Real-time microphone capture via PyAudio with voice activity detection.",
        "Speech Recognition: OpenAI Whisper acoustic models for robust multi-accent transcription.",
        "Triage Intelligence: Guardrailed GPT prompting tailored for conservative informational summaries.",
        "Speech Synthesis: Google Text-to-Speech (gTTS) audio rendering with real-time playback.",
      ],
      results:
        "Demonstrated a sub-2-second voice-to-voice interaction loop facilitating accessible symptom logging and primary health guidance.",
    },
  },
  {
    id: "wind-turbine-airfoils",
    number: "03",
    title: "Generative Design for Aerodynamic Wind Turbine Blades",
    tagline: "Evolutionary genetic algorithms and XFOIL simulations maximizing lift-to-drag efficiency",
    category: "Generative AI & Computational Optimization",
    period: "March 2026 – June 2026",
    tools: ["Python", "XFOIL", "DEAP", "Genetic Algorithms"],
    summary:
      "An AI-based optimization project that explores improved wind turbine blade airfoil designs using evolutionary algorithms and aerodynamic simulation.",
    highlights: [
      "Genetic algorithm optimization framework using DEAP (Distributed Evolutionary Algorithms in Python).",
      "Exploratory parametric geometric variations for high-efficiency airfoil coordinates.",
      "XFOIL-based automated aerodynamic evaluation across low-speed Reynolds numbers.",
      "Quantitative lift-to-drag (Cl / Cd) ratio comparisons against standard NACA baseline airfoils.",
    ],
    image: "/images/project-turbine.jpg",
    githubUrl: "https://github.com/Madhan-oss",
    isFeatured: true,
    caseStudy: {
      problem:
        "Wind turbines operating in low and fluctuating wind conditions suffer from poor energy capture unless airfoil cross-sections are tailored specifically for high lift-to-drag ratios at low Reynolds numbers.",
      approach:
        "Formulated a computational evolutionary pipeline coupling the DEAP genetic algorithms engine with headless XFOIL aerodynamic simulations to evolve novel airfoil profiles autonomously.",
      architecture: [
        "Representation: Parametric camber and thickness distribution encoded as chromosome genes.",
        "Fitness Function: Maximization of the lift-to-drag ratio (Cl / Cd) constrained by structural thickness.",
        "Simulation Solver: Automated subprocess pipeline driving XFOIL boundary-layer viscous-inviscid coupling.",
        "Evolutionary Operators: Multi-point crossover, Gaussian mutation, and Pareto-tournament selection.",
      ],
      results:
        "Evolved non-conventional airfoil profiles that demonstrate superior aerodynamic efficiency characteristics compared to standard baseline geometries.",
    },
  },
  {
    id: "promptly-extension",
    number: "04",
    title: "Promptly: AI Prompt Engineering Browser Extension",
    tagline: "Published extension on Microsoft Edge & Chrome for intelligent prompt workflow acceleration",
    category: "Browser Engineering & AI Workflows",
    period: "2026",
    tools: ["JavaScript", "HTML5", "CSS3", "Chrome Extensions API", "Vercel"],
    summary:
      "A published browser extension on Microsoft Edge and Chrome that enhances raw prompts with role framing, task constraints, and domain-specific context directly in the active browser window.",
    highlights: [
      "Seamless in-browser overlay popup with zero page interruption.",
      "Pre-configured prompt templates for coding, copywriting, and research tasks.",
      "One-click copy and clipboard injection.",
      "Live showcase landing page deployed on Vercel.",
    ],
    image: "/images/project-promptly.jpg",
    githubUrl: "https://github.com/Madhan-oss/Promptly-Extension",
    liveUrl: "https://promptly-umber.vercel.app",
    isFeatured: false,
    caseStudy: {
      problem:
        "Users frequently struggle with vague or under-specified prompts when interacting with modern LLMs, yielding suboptimal results.",
      approach:
        "Built a lightweight Manifest V3 browser extension allowing users to refine, test, and inject structured prompts into any AI tool without switching tabs.",
      architecture: [
        "Extension Core: Manifest V3 background service workers and content scripts.",
        "UI Layer: Clean minimalist modal styled for light and dark environments.",
        "Deployment: Published on Microsoft Edge Add-ons and open-sourced on GitHub.",
      ],
      results:
        "Thousands of prompt refinement interactions delivered with high user satisfaction.",
    },
  },
  {
    id: "plant-disease-recognition",
    number: "05",
    title: "Plant Disease Recognition System",
    tagline: "Deep learning computer vision system detecting leaf pathologies from digital photographs",
    category: "Computer Vision & Agriculture AI",
    period: "2025",
    tools: ["Python", "Computer Vision", "Deep Learning", "Streamlit"],
    summary:
      "A deep learning-based web application for identifying plant diseases from leaf images, helping farmers, agricultural professionals, and researchers rapidly diagnose plant health issues.",
    highlights: [
      "Deep convolutional neural network architecture trained on extensive agricultural datasets.",
      "Automated image pre-processing and feature extraction for high classification accuracy.",
      "Interactive web interface for drag-and-drop leaf image uploading and immediate diagnosis.",
    ],
    image: "/images/project-turbine.jpg",
    githubUrl: "https://github.com/Madhan-oss/Plant-Disease-Recognition-System",
    isFeatured: false,
    caseStudy: {
      problem:
        "Delayed identification of crop diseases leads to significant agricultural yield loss and excessive pesticide usage.",
      approach:
        "Trained a convolutional neural network on botanical leaf specimens to deliver instantaneous disease classification and remediation guidance.",
      architecture: [
        "Model: Deep CNN classifier with transfer learning.",
        "Inference: Optimized Python pipeline with OpenCV pre-processing.",
        "Interface: Streamlit web application for rapid diagnosis.",
      ],
      results:
        "Accurate classification across multiple plant species and disease classes.",
    },
  },
  {
    id: "nexjob-ai",
    number: "06",
    title: "NexJob AI: Career Intelligence Platform",
    tagline: "AI-driven application optimizer and career intelligence tracking suite",
    category: "Full Stack & Web Application",
    period: "2026",
    tools: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
    summary:
      "Modern full-stack web application designed to help job seekers organize applications, evaluate resume ATS compatibility, and monitor recruitment milestones.",
    highlights: [
      "Responsive editorial dashboard built with Next.js and TypeScript.",
      "Job status Kanban board with state persistence.",
      "Live deployment on Vercel with high performance benchmarks.",
    ],
    image: "/images/project-reminder.jpg",
    githubUrl: "https://github.com/Madhan-oss/NexJob-AI",
    liveUrl: "https://nexjob-ai.vercel.app",
    isFeatured: false,
    caseStudy: {
      problem:
        "Job seekers manage dozens of simultaneous applications across disparate platforms with no centralized analytics or ATS feedback.",
      approach:
        "Created an all-in-one job search dashboard featuring application pipelines and intelligent resume-to-job matching.",
      architecture: [
        "Framework: Next.js App Router with TypeScript.",
        "Design: Custom Tailwind CSS design system.",
        "Deployment: Vercel edge deployment.",
      ],
      results:
        "Full application tracking suite deployed live with zero runtime errors.",
    },
  },
  {
    id: "academiapulse-srm",
    number: "07",
    title: "AcademiaPulse SRM",
    tagline: "Student analytics and academic tracking portal for SRM IST",
    category: "Web & Campus Application",
    period: "2026",
    tools: ["TypeScript", "React", "Tailwind CSS", "Vercel"],
    summary:
      "A specialized portal created for SRM students to monitor attendance thresholds, track GPA projections, and organize study schedules efficiently.",
    highlights: [
      "Intuitive attendance margin calculator to ensure academic compliance.",
      "Modern glassmorphism user interface designed for student productivity.",
      "Open-source repository with active campus adoption.",
    ],
    image: "/images/project-smartmed.jpg",
    githubUrl: "https://github.com/Madhan-oss/AcademiaPulse-SRM",
    liveUrl: "https://academia-pulse-srm.vercel.app",
    isFeatured: false,
    caseStudy: {
      problem:
        "SRM students require clear visibility into attendance margins and GPA calculations that standard university portals don't present intuitively.",
      approach:
        "Engineered an interactive client-side web application calculating safe absence quotas and grade targets in real time.",
      architecture: [
        "Frontend: React with TypeScript and Vite.",
        "Styling: Responsive Tailwind CSS interface.",
        "Hosting: Production Vercel deployment.",
      ],
      results:
        "Deployed and widely accessed by SRM student peers.",
    },
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "nit-trichy",
    role: "AI/ML Summer Intern",
    organization: "National Institute of Technology, Tiruchirappalli (NIT Trichy)",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "June 2025 – July 2025",
    category: "Academic Internship",
    affiliations: "Department of Computer Science & NIT Faculty Mentorship",
    badges: ["Artificial Intelligence", "Machine Learning", "Research", "NIT Trichy"],
    description: [
      "Worked as an AI/ML intern under the direct mentorship of NIT Tiruchirappalli faculty and the Department of Computer Science.",
      "Gained deep practical experience in Artificial Intelligence and Machine Learning through hands-on projects and laboratory research activities.",
      "Explored model architectures, data pipelines, and algorithmic implementations for intelligent problem-solving.",
    ],
  },
  {
    id: "vr-della",
    role: "Technical SEO Internship",
    organization: "VR Della Infotech (VR Della Group)",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "July 2025 – August 2025",
    category: "Industry Internship",
    badges: ["Technical SEO", "Google Analytics", "Search Console", "Organic Growth"],
    description: [
      "Worked as a Technical SEO Specialist to improve website visibility and increase organic search traffic across digital properties.",
      "Utilized Google Analytics and Google Search Console to monitor website performance, crawl health, and search rankings.",
      "Implemented technical optimizations including metadata enhancements, site speed audits, and structured data hierarchy.",
    ],
  },
  {
    id: "microsoft-azure",
    role: "Microsoft AI-ML Azure Virtual Internship",
    organization: "Edunet Foundation — AICTE — Microsoft",
    location: "Virtual",
    period: "May 2025 – June 2025",
    category: "Virtual Internship",
    affiliations: "Edunet Foundation in partnership with AICTE",
    badges: ["Microsoft Azure", "Deep Learning", "Computer Vision", "Cloud AI"],
    description: [
      "Completed an intensive 4-week virtual internship focused on Microsoft Azure, Artificial Intelligence, Machine Learning, and Deep Learning concepts.",
      "Worked on AI and Azure-based practical exercises using Microsoft Learn under industry mentorship.",
      "Built foundational knowledge in supervised learning, neural networks, computer vision, and cloud-based AI solutions.",
    ],
  },
  {
    id: "servicenow",
    role: "ServiceNow Internship",
    organization: "ServiceNow University — SmartBridge — AICTE",
    location: "Virtual",
    period: "May 2026 – July 2026",
    category: "Virtual Internship",
    affiliations: "SmartBridge, ServiceNow University & AICTE",
    badges: ["ServiceNow", "Agentic AI", "Flow Designer", "Automated Testing"],
    description: [
      "Completed a virtual internship covering ServiceNow platform fundamentals, Agentic AI, Flow Designer, and Automated Test Framework (ATF).",
      "Gained hands-on experience in ServiceNow Administration, enterprise reporting, workflows, and cloud-based enterprise solutions through practical learning modules.",
      "Designed and tested automated workflow sequences aligning business processes with modern cloud orchestration.",
    ],
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "srm-ist",
    degree: "Bachelor of Technology — Artificial Intelligence and Machine Learning",
    institution: "SRM Institute of Science and Technology",
    location: "Tiruchirappalli, Tamil Nadu",
    period: "August 2023 – May 2027",
    highlights: [
      "Comprehensive coursework in Data Structures, Algorithms, Machine Learning, Deep Learning, and Database Systems.",
      "Active organizer of campus technical events and developer hackathons.",
      "Consistent practical focus on full-stack web engineering and applied artificial intelligence.",
    ],
  },
  {
    id: "samadh-12",
    degree: "Class XII — Central Board of Secondary Education (CBSE)",
    institution: "Samadh Higher Secondary School",
    location: "Khaja Nagar, Tiruchirappalli, Tamil Nadu",
    period: "June 2021 – May 2023",
    highlights: [
      "Senior Secondary education in Mathematics, Physics, Chemistry, and Computer Science.",
    ],
  },
  {
    id: "samadh-10",
    degree: "Class X — Central Board of Secondary Education (CBSE)",
    institution: "Samadh Higher Secondary School",
    location: "Khaja Nagar, Tiruchirappalli, Tamil Nadu",
    period: "June 2020 – June 2021",
    highlights: [
      "Secondary school certification with strong foundational academic standing.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-aws",
    title: "AWS Academy Graduate — Generative AI Foundations",
    issuer: "Amazon Web Services (AWS)",
    badgeCode: "AWS-GENAI-FOUNDATIONS",
  },
  {
    id: "cert-ibm",
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    badgeCode: "IBM-AI-FUNDAMENTALS",
  },
  {
    id: "cert-cisco",
    title: "Introduction to Modern AI",
    issuer: "Cisco Networking Academy",
    badgeCode: "CISCO-MODERN-AI",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "1st Prize — College Technical Quiz Competition",
    organization: "SRM Institute of Science and Technology",
    place: "1st Place Winner",
    category: "Competition",
    description:
      "Secured 1st Prize in an inter-departmental technical quiz testing core computer science, algorithmic logic, and modern technology fundamentals.",
  },
  {
    id: "ach-2",
    title: "2nd Prize — National-Level Hackathon",
    organization: "Bannari Amman Institute of Technology",
    place: "2nd Place / National Runner-up",
    category: "Hackathon",
    description:
      "Won 2nd Prize in a competitive national-level hackathon conducted in Erode, Tamil Nadu, developing an innovative technological solution under intensive time constraints.",
  },
  {
    id: "ach-3",
    title: "Organizer — YUVA '25 Hackathon",
    organization: "SRM Institute of Science and Technology",
    place: "Lead Organizing Team",
    category: "Leadership",
    description:
      "Successfully organized the flagship YUVA '25 Hackathon at SRM IST, demonstrating leadership, team collaboration, mentor coordination, and event execution.",
  },
];

export const HOBBIES_INTERESTS = [
  {
    title: "Fitness & Gym",
    subtitle: "Active & Disciplined Lifestyle",
    description:
      "Dedicated to physical fitness and strength training, reinforcing daily discipline, mental clarity, and focus.",
    tag: "Well-Being",
  },
  {
    title: "Strategic Chess",
    subtitle: "Analytical & Tactical Foresight",
    description:
      "Passionate chess player. Developing calculated forward-thinking, scenario evaluation, and patient problem-solving.",
    tag: "Strategy",
  },
  {
    title: "Browser Extensions",
    subtitle: "Productivity Engineering",
    description:
      "Creator and publisher of browser tools including the Promptly extension on Microsoft Edge, streamlining AI prompt workflows.",
    tag: "Open Source",
  },
  {
    title: "AI Tools & Automation",
    subtitle: "Frontier Workflow Tinkering",
    description:
      "Continuously exploring next-generation AI developer tooling, autonomous agent frameworks, and productivity pipelines.",
    tag: "Exploration",
  },
];
