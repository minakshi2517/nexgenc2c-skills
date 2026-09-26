/**
 * NexGen C2C Skills - Dynamic CMS Data Store (LocalStorage Powered)
 * Manages Courses, Events, Gallery, Testimonials, and Student Inquiries
 */

const NexGenStore = {
  // Default Initial Data
  defaults: {
    events: [
      {
        id: "evt-1",
        title: "Generative AI Masterclass: Prompting to Workflow Automation",
        category: "Webinar",
        date: "2026-08-30",
        time: "06:00 PM IST",
        speaker: "Dr. Rajesh Verma (AI Principal)",
        badge: "Free Live Session",
        link: "book-demo.html"
      },
      {
        id: "evt-2",
        title: "Campus to Corporate 4-Quadrant Leadership Boot Camp",
        category: "Campus Workshop",
        date: "2026-09-05",
        time: "10:00 AM IST",
        speaker: "Ananya Deshmukh (Ex-Corporate HR Lead)",
        badge: "Certified",
        link: "book-demo.html"
      },
      {
        id: "evt-3",
        title: "Industrial Automation 4.0: Hands-On PLC & HMI Simulation",
        category: "Technical Lab",
        date: "2026-09-12",
        time: "02:00 PM IST",
        speaker: "Er. Amit Saini (Automation Specialist)",
        badge: "Limited Seats",
        link: "book-demo.html"
      }
    ],
    pillars: [
      {
        id: "pillar-ai",
        theme: "ai",
        badge: "VERTICAL 01",
        title: "Artificial Intelligence",
        tagline: "Turn AI into a competitive advantage.",
        description: "Build hands-on AI capabilities to work smarter, automate repetitive tasks, solve problems faster, and unlock new opportunities.",
        duration: "6–8 Weeks",
        icon: "fa-robot",
        link: "ai-training.html",
        cta: "View AI Programs →",
        demoCta: "Book AI Demo Session",
        bullets: [
          "20+ AI Tools (ChatGPT, Claude, Gemini)",
          "Prompt Engineering & AI Agents",
          "Workflow Automation with Make & n8n"
        ],
        detailBullets: [
          "20+ AI Tools: Learn & apply leading AI tools across real-world use cases",
          "Prompt Engineering: Master the art of getting better results from AI",
          "Workflow Automation: Automate repetitive tasks and streamline everyday work",
          "AI Agents: Build intelligent agents that can perform tasks and workflows",
          "AI-Powered Productivity: Use AI to research, create, analyze, and make decisions faster",
          "Real-World Projects: Apply AI to practical business and workplace challenges"
        ]
      },
      {
        id: "pillar-automation",
        theme: "automation",
        badge: "VERTICAL 02",
        title: "Industrial Automation",
        tagline: "Build hands-on skills for the future of industry.",
        description: "Get practical exposure to PLC programming, HMI operation, and industrial sensors through hands-on learning.",
        duration: "8 Weeks Hands-on Lab",
        icon: "fa-cogs",
        link: "industrial-training.html",
        cta: "View Automation Tracks →",
        demoCta: "Book Automation Lab Demo",
        bullets: [
          "PLC Programming & Troubleshooting",
          "HMI Operator Interfaces",
          "Industrial Sensors"
        ],
        detailBullets: [
          "PLC: Programming, wiring, and troubleshooting",
          "HMI: Operator screens and plant visualization",
          "Sensors: Detection, feedback, and shop-floor signals",
          "Industry Projects: Real-world industrial applications"
        ]
      },
      {
        id: "pillar-opex",
        theme: "opex",
        badge: "VERTICAL 03",
        title: "Operational Excellence",
        tagline: "Build smarter, faster, and more efficient operations.",
        description: "Build practical skills to improve productivity, OEE, quality, cost, and delivery using proven Lean Six Sigma & 8D methodologies.",
        duration: "6 Weeks Practical",
        icon: "fa-chart-line",
        link: "c2c-skills.html",
        cta: "View Operations Tracks →",
        demoCta: "Book Operations Demo",
        bullets: [
          "Lean 5S, Kaizen, VSM, Waste Elimination",
          "Six Sigma DMAIC & Process Capability",
          "OEE, Bottleneck Analysis & Power BI"
        ],
        detailBullets: [
          "Problem Solving: RCA, 5 Why, Fishbone, Pareto, 8D",
          "Lean: 5S, Kaizen, VSM, Waste Elimination",
          "Six Sigma: DMAIC, SPC, Process Capability",
          "OEE & Productivity: Downtime, Cycle Time, Bottleneck & Loss Analysis",
          "Process Excellence: Process Mapping, Line Balancing, Standard Work",
          "Data & Performance: Excel, Minitab, Power BI, KPI Dashboards"
        ]
      }
    ],
    courses: [
      {
        id: "crs-1",
        title: "Artificial Intelligence",
        category: "Artificial Intelligence",
        target: "Students, Professionals & Leaders",
        duration: "6-8 Weeks (Live + Hands-on Projects)",
        mode: "Online Live + Lab Access",
        icon: "fa-robot",
        link: "ai-training.html",
        description: "Master 20+ everyday AI tools, prompt engineering, workflow automation, autonomous AI agents, and real-world practical AI implementation."
      },
      {
        id: "crs-2",
        title: "Operational Excellence",
        category: "Operational Excellence",
        target: "Engineers, Operations Teams & Graduates",
        duration: "6 Weeks Practical",
        mode: "Interactive Case Studies & Real Projects",
        icon: "fa-chart-line",
        link: "c2c-skills.html",
        description: "Shop-floor Lean Manufacturing, 5S, Kaizen, VSM, RCA, 8D problem solving, Six Sigma (DMAIC), and OEE optimization for world-class quality."
      },
      {
        id: "crs-3",
        title: "Industrial Automation",
        category: "Industrial Automation",
        target: "Engineers & Automation Professionals",
        duration: "8 Weeks Hands-on Lab",
        mode: "Hardware Lab + Simulation",
        icon: "fa-cogs",
        link: "industrial-training.html",
        description: "Hands-on PLC programming, HMI design, and industrial sensors through lab practice and plant-aligned projects."
      }
    ],
    modules: [
      {
        id: "mod-ai-1",
        pillar: "ai",
        badge: "01. FOUNDATION",
        title: "NexGen AI Foundation",
        subtitle: "Build your AI foundation.",
        duration: "1 Month",
        modulesText: "Module 1: AI & Generative AI Essentials\nModule 2: AI Tools & Prompting",
        tools: "ChatGPT, Gemini, Claude, Suno, ElevenLabs",
        cta: "Enroll in Foundation"
      },
      {
        id: "mod-ai-2",
        pillar: "ai",
        badge: "02. ACCELERATOR",
        title: "NexGen AI Accelerator",
        subtitle: "Move from AI user to AI practitioner.",
        duration: "2 Months",
        modulesText: "Module 1: Advanced Prompt Engineering\nModule 2: AI Research & Knowledge Work\nModule 3: AI for Content, Data & Presentations\nModule 4: Multimodal AI & Real-World Applications",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Canva AI, Gamma, Suno, HeyGen, ElevenLabs",
        cta: "Enroll in Accelerator"
      },
      {
        id: "mod-ai-3",
        pillar: "ai",
        badge: "03. PRODUCTIVITY",
        title: "NexGen AI Productivity Professional",
        subtitle: "Work smarter. Create faster. Deliver better.",
        duration: "2 Months",
        modulesText: "Module 1: AI-Powered Communication\nModule 2: AI for Documents, Excel & Presentations\nModule 3: AI Research, Analysis & Reporting\nModule 4: Personal AI Workflows & Productivity",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Perplexity, Canva, Gamma, ChatGPT Data Analysis, Make",
        cta: "Enroll in Productivity"
      },
      {
        id: "mod-ai-4",
        pillar: "ai",
        badge: "04. AUTOMATION",
        title: "NexGen AI Automation Specialist",
        subtitle: "Automate repetitive work with AI.",
        duration: "2 Months",
        modulesText: "Module 1: Automation Mindset & Workflow Mapping\nModule 2: AI-Powered Workflow Automation\nModule 3: Business Process Automation\nModule 4: Build & Deploy Automation Projects",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Perplexity, Canva, Gamma, Make, n8n, Zapier",
        cta: "Enroll in Automation"
      },
      {
        id: "mod-ai-5",
        pillar: "ai",
        badge: "05. BUSINESS STRATEGY",
        title: "NexGen AI for Business",
        subtitle: "Turn AI into business value.",
        duration: "2 Months",
        modulesText: "Module 1: AI Opportunity & Use-Case Identification\nModule 2: AI for Business Functions\nModule 3: AI-Powered Reporting & Decision Support\nModule 4: AI Strategy, ROI & Adoption",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Perplexity, Canva, Gamma, Microsoft Copilot",
        cta: "Enroll in AI for Business"
      },
      {
        id: "mod-ai-6",
        pillar: "ai",
        badge: "06. AI AGENTS",
        title: "NexGen AI Agents & Applied AI",
        subtitle: "Build AI agents that can execute tasks.",
        duration: "2 Months",
        modulesText: "Module 1: AI Assistants vs AI Agents\nModule 2: Agent Design & Task Decomposition\nModule 3: Tools, Actions & Agent Workflows\nModule 4: Build AI Agent Projects",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Perplexity, Canva, Gamma, n8n, Make",
        cta: "Enroll in AI Agents"
      },
      {
        id: "mod-ai-7",
        pillar: "ai",
        badge: "07. MASTERY",
        title: "AI Mastery & Solutions",
        subtitle: "Design and build AI-powered solutions.",
        duration: "3 Months",
        modulesText: "Module 1: Advanced Generative AI & LLMs\nModule 2: RAG & Knowledge-Based AI\nModule 3: AI Agents & Advanced Automation\nModule 4: AI APIs & Solution Integration\nModule 5: AI Evaluation, Governance & Responsible AI\nModule 6: Capstone: Build an AI Solution",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Perplexity, Canva, Gamma, ChatGPT Data Analysis, n8n, Python basics, AI Dev Tools",
        cta: "Enroll in AI Mastery"
      },
      {
        id: "mod-ai-8",
        pillar: "ai",
        badge: "08. FACILITATOR CERTIFICATION",
        title: "AI Train-the-Trainer",
        subtitle: "Become an AI-enabled educator and facilitator.",
        duration: "3 Months",
        modulesText: "Module 1: AI & Generative AI Fundamentals\nModule 2: Prompt Engineering for Educators\nModule 3: AI for Teaching, Learning & Research\nModule 4: AI-Powered Content & Assessment\nModule 5: AI-Enabled Training Design & Facilitation\nModule 6: Capstone: Design & Deliver an AI-Enabled Program",
        tools: "ChatGPT, Gemini, Claude, NotebookLM, Perplexity, Canva, Gamma, n8n",
        cta: "Enroll in Train the Trainer"
      },
      {
        id: "mod-auto-1",
        pillar: "automation",
        badge: "MODULE 01",
        title: "Quality Tools Training Module",
        subtitle: "Build analytical mastery for defect prevention and statistical quality control.",
        duration: "2 Weeks",
        modulesText: "Pareto Chart\nFishbone Diagram\nSPC & Control Charts\nCAPA & MSA",
        tools: "Excel, Minitab",
        cta: "Enroll Now"
      },
      {
        id: "mod-auto-2",
        pillar: "automation",
        badge: "MODULE 02",
        title: "Maintenance Tools Training Overview",
        subtitle: "Hands-on PLC, HMI, sensors, and plant reliability practices.",
        duration: "2 Weeks",
        modulesText: "PLC Programming & Troubleshooting\nHMI Operator Interfaces\nIndustrial Sensors\nPdM & PM",
        tools: "PLC, HMI, Sensors",
        cta: "Enroll Now"
      },
      {
        id: "mod-auto-3",
        pillar: "automation",
        badge: "MODULE 03",
        title: "Production Tools Training Overview",
        subtitle: "Lean production tools for output, flow, and waste reduction.",
        duration: "2 Weeks",
        modulesText: "OEE\n5S & Kaizen\nLine Balancing\nKanban & Andon",
        tools: "OEE, Lean Toolkit",
        cta: "Enroll Now"
      },
      {
        id: "mod-auto-4",
        pillar: "automation",
        badge: "MODULE 04",
        title: "Process Engineering Training Overview",
        subtitle: "Process mapping, risk analysis, and industrial engineering methods.",
        duration: "2 Weeks",
        modulesText: "Control Plan\nPFMEA\nProcess Flow Diagram\nWork Instructions",
        tools: "PFMEA, Control Plan",
        cta: "Enroll Now"
      },
      {
        id: "mod-auto-5",
        pillar: "automation",
        badge: "MODULE 05",
        title: "Mechanical Tools Training Overview",
        subtitle: "Machine systems, hydraulics, pneumatics, and plant maintenance basics.",
        duration: "2 Weeks",
        modulesText: "Pneumatic Circuit\nHydraulic Circuit\nBearings, Gears & Belts",
        tools: "Mechanical Lab",
        cta: "Enroll Now"
      },
      {
        id: "mod-opex-1",
        pillar: "opex",
        badge: "MODULE 01 • PRODUCTIVITY",
        title: "OEE (Overall Equipment Effectiveness)",
        subtitle: "The gold standard for measuring shop-floor manufacturing productivity and equipment health.",
        duration: "3 Days",
        modulesText: "Measures performance across Availability, Performance, and Quality\nIdentifies hidden losses due to downtime, speed loss, or defects\nHelps maximize equipment utilization and plant output\nDrives continuous data-driven improvement",
        tools: "OEE Dashboard",
        image: "assets/images/operational/tool_oee.jpg",
        cta: "Book OEE Lab Demo →"
      },
      {
        id: "mod-opex-2",
        pillar: "opex",
        badge: "MODULE 02 • QUALITY",
        title: "7 QC Tools (Quality Control)",
        subtitle: "Universal data-driven statistical tools for systematic problem solving and defect elimination.",
        duration: "3 Days",
        modulesText: "Structured problem solving and root cause quality control\nPareto, Fishbone, Histogram, Control Chart, Scatter, Check Sheet, Flowchart\nData-driven decision making\nFoundation of Six Sigma DMAIC and TQM",
        tools: "7 QC Toolkit",
        image: "assets/images/operational/tool_7qc.jpg",
        cta: "Enroll in 7 QC Tools →"
      },
      {
        id: "mod-opex-3",
        pillar: "opex",
        badge: "MODULE 03 • WORKFLOW",
        title: "Kanban (Visual Scheduling)",
        subtitle: "Visual pull-based workflow management system to eliminate shop-floor inventory bottlenecks.",
        duration: "3 Days",
        modulesText: "Visual scheduling for shop-floor workflow\nReduces overproduction and improves transparency\nPull-based Just-In-Time production\nBetter team collaboration and accountability",
        tools: "Kanban Board",
        image: "assets/images/operational/tool_kanban.jpg?v=3",
        cta: "Explore Kanban Workshop →"
      },
      {
        id: "mod-opex-4",
        pillar: "opex",
        badge: "MODULE 04 • ZERO DEFECT",
        title: "Poka-Yoke (Mistake Proofing)",
        subtitle: "Japanese engineering mechanisms to guarantee defect-free production.",
        duration: "3 Days",
        modulesText: "Foolproof error prevention\nJigs, sensors, and interlocks to avoid human mistakes\nZero-defect manufacturing and scrap reduction\nReliability built into assembly processes",
        tools: "Poka-Yoke Lab",
        image: "assets/images/operational/tool_poka_yoke.jpg?v=3",
        cta: "Hands-On Poka-Yoke →"
      },
      {
        id: "mod-opex-5",
        pillar: "opex",
        badge: "MODULE 05 • EFFICIENCY",
        title: "Single Piece Flow",
        subtitle: "Continuous flow manufacturing to eliminate WIP and compress lead time.",
        duration: "3 Days",
        modulesText: "One unit at a time through each assembly step\nMinimizes waiting, batching, and lead time\nImproves flexibility and responsiveness\nCore Lean and JIT principle",
        tools: "Flow Lab",
        image: "assets/images/operational/tool_single_piece_flow.jpg?v=3",
        cta: "Learn Flow Optimization →"
      },
      {
        id: "mod-opex-6",
        pillar: "opex",
        badge: "MODULE 06 • WASTE ELIMINATION",
        title: "Lean Waste (TIMWOODS)",
        subtitle: "Hunt and eradicate the 8 deadly wastes in any operational process.",
        duration: "3 Days",
        modulesText: "Transportation, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills\nEliminates non-value-adding activities\nImproves flow, efficiency, and cost\nDaily Kaizen culture",
        tools: "TIMWOODS Audit",
        image: "assets/images/operational/tool_timwoods_lean_waste.jpg?v=3",
        cta: "TIMWOODS Audit Training →"
      },
      {
        id: "mod-opex-7",
        pillar: "opex",
        badge: "MODULE 07 • REAL-TIME ALERT",
        title: "Andon (Visual Signal System)",
        subtitle: "Real-time visual problem reporting to halt defects and escalate line issues.",
        duration: "3 Days",
        modulesText: "Audio-light signaling for shop-floor problems\nInstant alerts to engineering and maintenance\nRapid response and accountability\nBetter operator-supervisor communication",
        tools: "Andon System",
        image: "assets/images/operational/tool_andon.jpg?v=3",
        cta: "Andon Simulation Lab →"
      },
      {
        id: "mod-opex-8",
        pillar: "opex",
        badge: "MODULE 08 • TIME STUDY",
        title: "Cycle Time & Takt Time",
        subtitle: "Time study and pacing analytics to balance line speeds with demand.",
        duration: "3 Days",
        modulesText: "Measures time for one full production cycle\nFinds bottlenecks and micro-inefficiencies\nCapacity planning and line balancing\nOptimize flow against Takt Time",
        tools: "Time Study",
        image: "assets/images/operational/tool_cycletime.jpg?v=4",
        cta: "Time Study Workshop →"
      },
      {
        id: "mod-opex-9",
        pillar: "opex",
        badge: "MODULE 09 • THROUGHPUT",
        title: "Bottleneck Analysis",
        subtitle: "Theory of Constraints to identify and remove capacity-limiting operations.",
        duration: "3 Days",
        modulesText: "Finds process steps that limit throughput\nFocuses improvement where it matters most\nReduces delays and inventory build-up\nBalanced, synchronized workflow",
        tools: "TOC / Bottleneck",
        image: "assets/images/operational/tool_bottleneck.jpg?v=4",
        cta: "Bottleneck Diagnostics →"
      },
      {
        id: "mod-opex-10",
        pillar: "opex",
        badge: "MODULE 10 • KAIZEN LOOP",
        title: "PDCA (Plan-Do-Check-Act)",
        subtitle: "The Deming cycle for disciplined organizational learning and growth.",
        duration: "3 Days",
        modulesText: "Scientific approach for continuous improvement\nPilot testing and learning from results\nClosed-loop feedback for standards\nFoundation for Kaizen, Six Sigma, and ISO",
        tools: "PDCA",
        image: "assets/images/operational/tool_pdca.jpg?v=4",
        cta: "PDCA Kaizen Workshop →"
      },
      {
        id: "mod-opex-11",
        pillar: "opex",
        badge: "MODULE 11 • WORKPLACE 5S",
        title: "5S Workplace Organization",
        subtitle: "Sort, Set in Order, Shine, Standardize, and Sustain for a visual workspace.",
        duration: "3 Days",
        modulesText: "Seiri, Seiton, Seiso, Seiketsu, Shitsuke\nOrganized, clean, visual, efficient workspace\nImproves safety and reduces search time\nFoundation for Lean discipline",
        tools: "5S Audit",
        image: "assets/images/operational/tool_5s.jpg?v=4",
        cta: "5S Audit Masterclass →"
      },
      {
        id: "mod-opex-12",
        pillar: "opex",
        badge: "MODULE 12 • VALUE STREAM",
        title: "Value Stream Mapping (VSM)",
        subtitle: "End-to-end visual mapping of information and material flow.",
        duration: "3 Days",
        modulesText: "Maps flows from supplier to client\nFinds waste, waiting, and improvement opportunities\nFuture-state operational design\nSupports Lean transformation planning",
        tools: "VSM",
        image: "assets/images/operational/tool_vsm.jpg?v=4",
        cta: "Master VSM Mapping →"
      }
    ],
    gallery: [
      {
        id: "gal-1",
        title: "Hands-on AI Lab & Prompt Engineering Workshop",
        category: "Campus",
        tag: "College Bootcamp",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        date: "August 2026"
      },
      {
        id: "gal-2",
        title: "Corporate Executive AI Productivity Seminar",
        category: "Corporate",
        tag: "Leadership Upskilling",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        date: "July 2026"
      },
      {
        id: "gal-3",
        title: "PLC & HMI Industrial Automation Training Lab",
        category: "Technical",
        tag: "Hands-on Automation",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
        date: "July 2026"
      },
      {
        id: "gal-4",
        title: "Campus to Corporate 7 Habits Certification Ceremony",
        category: "Campus",
        tag: "Student Placement Drive",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
        date: "June 2026"
      },
      {
        id: "gal-5",
        title: "Faculty Development Program (FDP) on AI in Pedagogy",
        category: "Corporate",
        tag: "Faculty Training",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        date: "May 2026"
      },
      {
        id: "gal-6",
        title: "Robotics Motion Control & Servo Drive Lab Session",
        category: "Technical",
        tag: "Robotics Lab",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
        date: "April 2026"
      }
    ],
    testimonials: [
      {
        id: "tst-1",
        name: "Pooja Sharma",
        role: "B.Tech Computer Science Graduate",
        org: "Placed as Associate Consultant at Top MNC",
        quote: "The AI Foundation and C2C Leadership tracks gave me an unfair advantage in campus placements. The 7 Habits practical framework completely changed how I answer interview case studies!",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "tst-2",
        name: "Rohan Kulkarni",
        role: "Operations & Quality Lead",
        org: "Automotive Manufacturing Enterprise",
        quote: "The Lean, RCA, and 8D problem-solving modules were directly applicable to our plant floor. We cut defect reporting turnaround by 40% using NexGen's AI-enabled analysis templates.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
      },
      {
        id: "tst-3",
        name: "Prof. Dr. Sanjay Nair",
        role: "Head of Training & Placements",
        org: "Engineering Institute",
        quote: "NexGen conducted an intensive 3-day Campus-to-Corporate workshop for 250+ students. The feedback was extraordinary. Students learned not just tools, but the real corporate mindset.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
      }
    ],
    leads: [
      {
        id: "lead-101",
        name: "Vikram Malhotra",
        phone: "9876543210",
        email: "vikram.m@gmail.com",
        program: "AI Executive & Professional Accelerator",
        type: "Professional",
        message: "Looking for weekend batch timings and fee structure.",
        date: "2026-08-21 14:30",
        status: "New"
      },
      {
        id: "lead-102",
        name: "Sneha Reddy",
        phone: "9823456789",
        email: "sneha.reddy@college.edu",
        program: "Campus to Corporate (C2C) Master Leadership",
        type: "Campus",
        message: "Interested in college-wide workshop for 120 final year students.",
        date: "2026-08-22 09:15",
        status: "Contacted"
      }
    ]
  },

  // Memory fallback when localStorage is blocked by tracking prevention
  _memoryStore: {},

  _hasStorage() {
    try {
      const testKey = '__nexgen_test__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  },

  // Init Data Store
  init() {
    const hasStorage = this._hasStorage();
    const keys = ['events', 'courses', 'gallery', 'testimonials', 'leads', 'pillars', 'modules'];

    keys.forEach(k => {
      if (hasStorage) {
        try {
          if (!localStorage.getItem(`nexgen_${k}`)) {
            localStorage.setItem(`nexgen_${k}`, JSON.stringify(this.defaults[k] || []));
          }
        } catch (e) {
          if (!this._memoryStore[k]) this._memoryStore[k] = [...(this.defaults[k] || [])];
        }
      } else {
        if (!this._memoryStore[k]) this._memoryStore[k] = [...(this.defaults[k] || [])];
      }
    });
    this._mergeMissingModules();
  },

  _mergeMissingModules() {
    const list = this.get("modules") || [];
    const defaults = this.defaults.modules || [];
    const ids = new Set(list.map((m) => m.id));
    let added = false;
    defaults.forEach((item) => {
      if (!ids.has(item.id)) {
        list.push(item);
        added = true;
      }
    });
    if (added) this.set("modules", list);
  },

  // Getters
  get(key) {
    try {
      if (this._hasStorage()) {
        const item = localStorage.getItem(`nexgen_${key}`);
        return item ? JSON.parse(item) : (this._memoryStore[key] || this.defaults[key]);
      }
    } catch (e) {}
    return this._memoryStore[key] || this.defaults[key] || [];
  },

  // Setters
  set(key, data) {
    this._memoryStore[key] = data;
    try {
      if (this._hasStorage()) {
        localStorage.setItem(`nexgen_${key}`, JSON.stringify(data));
      }
    } catch (e) {}
  },

  // Add Item
  addItem(key, item) {
    const list = this.get(key);
    item.id = `${key.slice(0, 3)}-${Date.now()}`;
    list.unshift(item);
    this.set(key, list);
    return item;
  },

  // Update Item
  updateItem(key, id, updatedFields) {
    let list = this.get(key);
    list = list.map(item => item.id === id ? { ...item, ...updatedFields } : item);
    this.set(key, list);
  },

  // Delete Item
  deleteItem(key, id) {
    let list = this.get(key);
    list = list.filter(item => item.id !== id);
    this.set(key, list);
  },

  // Add Lead
  addLead(leadData) {
    const lead = {
      id: `lead-${Date.now()}`,
      date: new Date().toLocaleString(),
      status: "New",
      ...leadData
    };
    const leads = this.get("leads");
    leads.unshift(lead);
    this.set("leads", leads);
    return lead;
  }
};

try {
  NexGenStore.init();
} catch (e) {
  console.warn("Storage initialized with memory fallback.");
}
