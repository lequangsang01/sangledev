/**
 * Resume Data Store - English
 * Candidate: Le Quang Sang - Software Engineer (Full Stack, Systems & Applied AI)
 */
var cvData = window.cvData = window.cvData || {};

cvData.en = {
  meta: {
    langName: "English",
    badge: "Available for Software Engineering opportunities",
    updatedDate: "Updated Sep 2026",
    printBtn: "Download PDF / Print",
    themeBtnLight: "Light Mode",
    themeBtnDark: "Dark Mode",
    copiedToast: "Copied to clipboard!",
    viewDocBtn: "View verified credential",
    docModalTitle: "Engineer's Degree & Academic Records",
    closeModal: "Close",
    openOriginal: "Open Original",
    verifiedBadge: "Verified Credential",
    contribLabel: "Key Responsibilities & Contributions"
  },
  personal: {
    name: "LE QUANG SANG",
    subName: "Software Engineer",
    title: "Software Engineer (Full Stack, Systems & Applied AI)",
    tagline: "Architecting resilient distributed systems, modern web platforms, mobile solutions & production-grade Applied AI",
    avatar: "eaa169ef5155dd0b8444.jpg",
    dob: "March 10, 2001",
    phone: "+84 329 004 844",
    phoneDisplay: "(+84) 329 004 844",
    email: "quangsangle.hn@gmail.com",
    website: "https://sangle.online",
    websiteDisplay: "sangle.online",
    location: "Kim Bang, Ninh Binh, Vietnam",
    github: "https://github.com/lequangsang01",
    linkedin: "https://linkedin.com"
  },
  metrics: [
    { value: "4+", label: "Years of Experience", desc: "Software Engineering, Web & AI" },
    { value: "10+", label: "Production Systems", desc: "ERP, 3D Vision, CRM, FinTech" },
    { value: "3.61", label: "Graduation GPA", desc: "Summa Cum Laude / High Distinction" },
    { value: "100%", label: "Engineering Standard", desc: "Clean Code, Security & Performance" }
  ],
  summary: {
    title: "Software Engineering Profile & Summary",
    content: "Versatile Software Engineer graduated with Highest Distinction (Summa Cum Laude, GPA 3.61/4.0) from Electric Power University, combining strong theoretical computer science fundamentals with broad, real-world engineering execution. Experienced in architecting scalable, resilient systems: from complex distributed enterprise ERP platforms and open-source financial SaaS to cross-platform mobile apps and production-grade Computer Vision systems (3D pallet volume prediction with YOLOv11 & Open3D, biometric facial recognition). Pragmatic software engineer driven by high performance, application security (AppSec), clean maintainable code, and high-impact business outcomes."
  },
  navTabs: {
    all: "All Projects",
    fullstack: "Systems & Full Stack",
    ai: "AI & Computer Vision",
    mobile: "Mobile App"
  },
  experience: {
    title: "Engineering Experience & Systems",
    items: [
      {
        company: "Zotek8",
        period: "08/2023 - Present",
        role: "Software Engineer (Full Stack & AI)",
        location: "Hanoi, Vietnam",
        overview: "Lead software engineer responsible for system architecture, database design, and end-to-end delivery of complex enterprise applications, mobile clients, and applied AI systems.",
        projects: [
          {
            name: "Meeting Transcription Nagase (AI Speech-to-Text & Transcription)",
            category: "mobile",
            tag: "Mobile, Cloud & AI Systems",
            desc: "Enterprise mobile audio recording and AI Speech-to-Text transcription suite with automated meeting summary generation and bidirectional sync with Salesforce CRM.",
            tech: ["Flutter (Dart)", "AWS Lambda", "AWS EC2", "AWS Cognito", "OpenAI Whisper", "AWS Amplify", "Salesforce API", "SQLite"],
            contributions: [
              "Built Flutter app: developed recording UI, audio streaming, and Offline-First SQLite caching.",
              "Engineered Serverless backend with AWS Lambda for audio processing and Salesforce CRM API integration.",
              "Configured user authentication, security, and access control policies via AWS Cognito.",
              "Deployed and optimized OpenAI Whisper on AWS EC2 for low-latency automated speech transcription."
            ],
            highlights: [
              "Automated end-to-end meeting minutes generation with secure bidirectional synchronization to Salesforce CRM REST APIs.",
              "Implemented an Offline-First architectural pattern with SQLite local queuing and automatic reconciliation."
            ]
          },
          {
            name: "Camera-count (3D Multi-Camera Pallet AI)",
            category: "ai",
            tag: "AI & Computer Vision",
            desc: "Multi-angle 3D computer vision inspection system combining 3 synchronized cameras with geometric reconstruction to estimate volume and count occluded pallets in warehouses.",
            tech: ["Python", "YOLOv11", "OpenCV", "Open3D", "PyTorch", "Streamlit", "Plotly"],
            contributions: [
              "Researched, trained, and benchmarked YOLOv11 models combined with computer vision algorithms for precise pallet/package counting.",
              "Engineered multi-angle 3D geometric point cloud reconstruction with Open3D & OpenCV to resolve optical blind spots and stacking occlusions.",
              "Built an interactive 3D Base Demo (PoC) application using Streamlit & Plotly for real-time visualization and customer validation."
            ],
            highlights: [
              "Successfully eliminated optical blind spots and heavy stacking occlusions in live warehouse logistics.",
              "Delivered a production-ready PoC pipeline proving high feasibility before warehouse integration."
            ]
          },
          {
            name: "ERP Procurement System (Manufacturing Sector)",
            category: "fullstack",
            tag: "Enterprise Architecture",
            desc: "Enterprise procurement digitalization platform covering Purchase Requests (PR), Request for Quotation (RFQ), Purchase Orders (PO), inventory inspection, and financial settlements.",
            tech: ["Vue 3 (Vite)", "Django DRF", "MSSQL", "Redis", "Celery", "Docker", "Tailwind CSS"],
            contributions: [
              "Collaborated with the Technical Leader to analyze client procurement business workflows and design the normalized MSSQL database schema.",
              "Scaffolded and developed the entire Frontend architecture from base using Vue 3, Vite & Tailwind CSS, implementing modular state management and multi-tier approval flows.",
              "Integrated RESTful APIs with Django DRF backend, optimizing high-volume data grid rendering and complex order form interactions."
            ],
            highlights: [
              "Successfully digitized the end-to-end manufacturing procurement lifecycle from PR, RFQ, PO to quality inspection and accounts payable.",
              "Leveraged Celery & Redis asynchronous task workers for heavy document batch exports, ensuring sub-second UI responsiveness."
            ]
          },
          {
            name: "InvoiceShelf (Open-Source FinTech SaaS)",
            category: "fullstack",
            tag: "FinTech & Open Source",
            desc: "Open-source invoice and cash flow management platform: automated billing, overdue tracking, high-speed PDF generation, EMVCo dynamic QR payments, and automated database backups.",
            tech: ["Laravel (PHP)", "Vite", "Tailwind CSS", "MySQL", "REST API", "DomPDF", "Laravel Queue", "Docker"],
            contributions: [
              "Maintained system reliability, refactored core codebase, and resolved production bugs to ensure continuous uptime.",
              "Delivered end-to-end full-stack features: designed MySQL relational schemas, implemented Laravel REST APIs, and crafted frontend UI components.",
              "Optimized batch PDF invoice generation with DomPDF and automated recurring billing notifications via Laravel Queues & Scheduler."
            ],
            highlights: [
              "Automated recurring billing cycles and overdue alerts via queued background jobs.",
              "Integrated high-speed PDF rendering and dynamic banking QR codes complying with the EMVCo standard."
            ]
          },
          {
            name: "Adstart (Cross-Channel Ad Operations Hub)",
            category: "fullstack",
            tag: "Marketing Tech",
            desc: "Centralized ad campaign operations hub integrating Meta & Google Ads APIs: URL ROI attribution, real-time blacklisted keyword filtering, and automated financial reconciliations.",
            tech: ["Laravel", "Facebook Marketing API", "Google Ads API", "MySQL", "Redis", "Docker", "Bootstrap"],
            contributions: [
              "Maintained and monitored ad management infrastructure, ensuring stable 24/7 continuous campaign telemetry synchronization.",
              "Engineered end-to-end full-stack capabilities: designed MySQL schemas, built Laravel REST endpoints, and developed interactive reporting dashboards.",
              "Enhanced bidirectional Meta Marketing & Google Ads API integrations, upgrading policy-violating keyword filters and financial reconciliation queries."
            ],
            highlights: [
              "Deep bidirectional integration with Facebook Marketing API & Google Ads API for synchronized campaign metrics.",
              "Automated policy-violating keyword filtering engine protecting customer accounts from suspensions."
            ]
          },
          {
            name: "Kurua (Orthopedic Rehabilitation Healthcare Platform)",
            category: "fullstack",
            tag: "Healthcare & Mobile App",
            desc: "Digital healthcare platform tracking orthopedic rehabilitation regimens for specialty clinics, connecting physicians and patients seamlessly via Web and Mobile Apps.",
            tech: ["Vue.js", "React Native", "Laravel", "MySQL", "Firebase", "REST API", "Docker"],
            contributions: [
              "Maintained system reliability, resolved production issues, and ensured continuous electronic health record data integrity.",
              "Spearheaded end-to-end full-stack feature development: modeled MySQL relational databases and built Laravel REST APIs.",
              "Implemented synchronized feature rollouts across the clinician web portal (Vue.js) and patient mobile application (React Native)."
            ],
            highlights: [
              "Real-time rehabilitation progress and exercise synchronization between Doctor Web App and Patient Mobile App via Firebase.",
              "Strict healthcare privacy access controls and data security compliance for sensitive medical records."
            ]
          },
          {
            name: "Will Watch (Wildlife Geospatial Mapping & AI Platform)",
            category: "fullstack",
            tag: "GIS, Geo-AI & Community",
            desc: "Crowdsourced wildlife geospatial mapping platform combining real-time community location telemetry with AI species classification models.",
            tech: ["Next.js", "Flutter", "Firebase"],
            contributions: [
              "Analyzed system requirements and designed real-time digital mapping system architecture.",
              "Architected database schemas optimized for geospatial coordinates, location telemetry, and wildlife metadata.",
              "Delivered full-stack implementation: developed backend business logic, the web portal (Next.js), and cross-platform mobile app (Flutter)."
            ],
            highlights: [
              "Engineered real-time digital mapping workflows processing crowdsourced geospatial telemetry data.",
              "Ensured seamless cross-platform synchronization between the Flutter mobile app and Next.js web portal."
            ]
          }
        ]
      },
      {
        company: "Torus Engineering",
        period: "05/2022 - 05/2022",
        role: "Front End & Tooling Engineer",
        location: "Hanoi, Vietnam",
        overview: "Developed high-precision interactive data labeling tools for computer vision research and packaged modular embeddable AI widgets for enterprise B2B clients.",
        projects: [
          {
            name: "Skin Annotation Tool",
            category: "ai",
            tag: "AI Data Tooling",
            desc: "Interactive polygonal annotation and scoring web application for dermatological analysis, producing standardized ground truth datasets for ML training pipelines.",
            tech: ["Python Flask", "JavaScript (ES6+)", "Bootstrap", "Canvas API"],
            highlights: [
              "Built high-performance, low-latency Canvas manipulation and geometric measurement tools.",
              "Engineered standardized JSON dataset serialization for seamless machine learning pipelines."
            ]
          },
          {
            name: "Belle Widget (Modular AI Component)",
            category: "fullstack",
            tag: "B2B Embeddable SDK",
            desc: "Packaged proprietary AI models into standalone embeddable Web/Mobile UI widgets for plug-and-play B2B client website integration.",
            tech: ["React", "React Native", "JavaScript", "Python", ".NET API"],
            highlights: [
              "Architected isolated component sandboxing preventing CSS/JS namespace collisions when injected into third-party sites."
            ]
          }
        ]
      },
      {
        company: "R&D Lab - Electric Power University",
        period: "2020 - 2024",
        role: "Software R&D Engineer",
        location: "Hanoi, Vietnam",
        overview: "Key contributor to foundational computer science research initiatives, building applied deep learning and real-time computer vision systems.",
        projects: [
          {
            name: "Biometric Face Recognition Attendance & HR System",
            category: "ai",
            tag: "AI & Award Winning",
            desc: "Comprehensive enterprise attendance and identity verification platform powered by deep learning facial feature extraction and real-time biometric matching.",
            tech: ["Angular", ".NET Core", "Python", "C++", "SQL Server", "Face Recognition"],
            highlights: [
              "Awarded 3RD PRIZE in the prestigious Innovation Challenge 2022 by EPU Faculty of IT.",
              "Achieved sub-500ms facial verification latency with enterprise-grade accuracy."
            ]
          },
          {
            name: "Document OCR & Intelligent Image Retrieval",
            category: "ai",
            tag: "OCR & Document Processing",
            desc: "Optical Character Recognition web app converting scanned documents and PDFs into searchable, indexable full text.",
            tech: ["Python Flask", "Tesseract OCR 5", "OpenCV", "JavaScript"],
            highlights: [
              "Developed adaptive image pre-processing (binarization, skew correction) drastically boosting recognition accuracy."
            ]
          }
        ]
      },
      {
        company: "Independent Products & Open Source (Personal Projects)",
        period: "2024 - Present",
        role: "Creator & Lead Software Engineer",
        location: "Hanoi, Vietnam / Remote",
        overview: "Architecting, developing, and operating independent production-grade software applications, demonstrating deep engineering capabilities across full-stack architecture, privacy-first client-side systems, cutting-edge AI SEO, and edge AI.",
        projects: [
          {
            name: "OmniKit Web Tool (54+ Client-Side Online Utility Suite)",
            category: "fullstack",
            tag: "Client-Side Suite / AI SEO",
            liveUrl: "https://www.omnikit.online",
            liveText: "omnikit.online",
            githubUrl: "https://github.com/lequangsang01/web-tool",
            desc: "Comprehensive suite of 53 free online utility tools (Typing speed test, text diff checker, developer utilities for JSON/JWT/Regex/Hash, image/PDF processing, financial ROI calculators, WCAG color contrast, QR generator). 100% client-side execution ensuring zero user data ever touches external servers.",
            tech: ["Next.js (SSG)", "TypeScript", "Tailwind CSS", "Firebase Auth", "Web Crypto API", "Web Workers", "Schema.org (JSON-LD)"],
            highlights: [
              "Engineered with cutting-edge AI SEO & GEO First architecture: Answer-First content modeling, native /llms.txt for AI crawlers, schema-dts structured data, and static generation (SSG) across 341 pages.",
              "Integrated Firebase Auth for unlimited usage tiers and full internationalization across 5 languages (VI, EN, ZH, JA, KO)."
            ]
          },
          {
            name: "SangLe AI Showcase (Real-Time In-Browser AI Platform)",
            category: "ai",
            tag: "Real-Time Browser AI",
            liveUrl: "https://sangle-ai.vercel.app/",
            liveText: "sangle-ai.vercel.app",
            githubUrl: "https://github.com/lequangsang01/sangle-AI",
            desc: "High-performance real-time browser AI showcase platform powered by Google MediaPipe Tasks, leveraging WebAssembly (WASM) and WebGL hardware acceleration across GPU/CPU for ultra-low latency on-device intelligence.",
            tech: ["Next.js 16 (App Router)", "TypeScript", "Google MediaPipe", "WASM", "WebGL", "Tailwind CSS", "Radix UI", "Chart.js"],
            highlights: [
              "Deployed 15+ frontier AI models across 3 core modalities: Computer Vision (468+ point Face Landmarker with blendshapes, Hand tracking, Gesture recognition, Pose estimation, 1-click Interactive Segmentation), NLP (client-side LLM inference with Gemma), and Audio classification.",
              "100% On-Device edge inference with zero camera/mic streaming to the cloud, ensuring complete privacy and high responsiveness on desktop and mobile."
            ]
          }
        ]
      }
    ]
  },
  skills: {
    title: "Engineering Skills & Competencies",
    groups: [
      {
        name: "Software Engineering & Architecture",
        items: ["System Architecture", "Clean Code & Design Patterns", "RESTful APIs", "OOP & Data Structures", "High Concurrency & Caching", "Database Optimization & Indexing", "Application Security (OWASP)", "Microservices Architecture"]
      },
      {
        name: "Applied AI & Computer Vision",
        items: ["YOLOv11", "PyTorch", "OpenCV", "Open3D", "TensorFlow", "Keras", "Scikit-Learn", "Tesseract OCR", "LLMs (Llama, DeepSeek)", "AI Agents (Hermes, n8n)"]
      },
      {
        name: "Web Development (Full Stack)",
        items: ["JavaScript / TypeScript", "Vue.js (Vue 3)", "ReactJS", "Next.js", "PHP (Laravel)", "Python (Django, Flask)", "HTML5 / CSS3", "Tailwind CSS", "Bootstrap"]
      },
      {
        name: "Mobile App Development",
        items: ["Flutter (Dart)", "React Native", "Cross-platform Architecture", "Offline-First Sync"]
      },
      {
        name: "Databases & In-Memory Stores",
        items: ["PostgreSQL", "MySQL", "MSSQL", "SQLite", "MongoDB", "Firebase (Firestore/RTDB)", "Redis"]
      },
      {
        name: "DevOps, Cloud & API Integrations",
        items: ["Docker", "AWS (EC2, S3, Lambda, DynamoDB, Cognito, Amplify)", "Google Cloud Platform", "Cloudflare", "Git / GitHub Actions", "Meta Ads API", "Google Ads API", "Salesforce API"]
      },
      {
        name: "Languages & Engineering Mindset",
        items: ["Team Leadership & Project Planning (Led a 5-member engineering team)", "Vietnamese (Native)", "English (CEFR B1 - Technical documentation & Communication)", "Critical Thinking", "Complex Problem Solving", "Systems Thinking"]
      }
    ]
  },
  education: {
    title: "Education & Credentials",
    school: "Electric Power University (EPU)",
    degree: "The Degree of Engineer in Information Technology",
    major: "Major: Artificial Intelligence & Computer Vision",
    period: "08/2019 - 04/2024",
    grade: "Honors: HIGH DISTINCTION (Summa Cum Laude / Xuất Sắc)",
    gpa: "Cumulative GPA: 3.61 / 4.0",
    notes: "Graduated in the Top 10 of the department with strong mastery in algorithms, computer architecture, networking, and computer vision systems.",
    documents: [
      {
        id: "diploma",
        title: "The Degree of Engineer - High Distinction",
        subtitle: "Electric Power University (Conferred April 09, 2024)",
        badge: "Summa Cum Laude Degree",
        src: "11515d67388696d8cf97.jpg",
        desc: ""
      },
      {
        id: "transcript-p1",
        title: "Academic Transcript (Page 1 of 2)",
        subtitle: "Courses 1 - 45: Core CS & Engineering curriculum",
        badge: "Transcript Page 1",
        src: "0af520d6ae30006e5921.jpg",
        desc: ""
      },
      {
        id: "transcript-p2",
        title: "Academic Transcript & University Seal (Page 2 of 2)",
        subtitle: "Courses 46 - 57: Thesis, Final GPA 3.61 & Official Seal",
        badge: "Transcript Page 2 (Seal)",
        src: "3acf5fe8d10e7f50261f.jpg",
        desc: ""
      }
    ]
  },
  awards: {
    title: "Honors & Achievements",
    items: [
      {
        year: "06/2022",
        title: "3rd Prize (Team) - Innovation Challenge 2022",
        issuer: "Faculty of IT - Electric Power University",
        desc: "Recognized for the project 'Biometric AI Face-Recognition Attendance & HR Management System'."
      },
      {
        year: "04/2024",
        title: "High Distinction Graduate (GPA 3.61/4.0)",
        issuer: "Electric Power University",
        desc: "Honored among top-tier academic graduates in the Department of Information Technology."
      }
    ]
  },
  interests: {
    title: "Personal Interests",
    items: [
      { icon: "💻", text: "Distributed systems architecture, open-source software & AI agents" },
      { icon: "🏃", text: "Long-distance running (Cultivating grit, stamina & discipline)" },
      { icon: "🎮", text: "Strategic thinking & logic games" }
    ]
  },
  footer: {
    copyright: "© 2026 Le Quang Sang. All rights reserved.",
    printNote: ""
  }
};
