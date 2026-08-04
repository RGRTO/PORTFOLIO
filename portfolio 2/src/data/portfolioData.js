export const personalInfo = {
  name: "Nayan Naveen",
  title: "Python Django Developer | Full Stack Developer",
  subtitle: "AI & Cybersecurity Enthusiast",
  location: "Kerala, India",
  email: "nayannaveen2707@gmail.com",
  phone: "+91 7994066467",
  linkedin: "https://www.linkedin.com/in/nayan-naveen-3a8668318",
  github: "https://github.com/RGRTO",
  status: "Available for Full-time Roles & High-Impact Projects",
  education: {
    degree: "Bachelor of Computer Applications (Honours)",
    institution: "DePaul Institute of Science and Technology",
    location: "Kerala, India",
    cgpa: "8.0",
    period: "2021 - 2024"
  }
};

export const aboutMe = {
  headline: "Engineering Scalable Web Solutions with Python, Django, AI & Modern Frontend Stack",
  bio: [
    "I am a results-driven Python Django Developer and Full Stack Developer based in Kerala, India. My passion lies in building robust, production-ready web applications, designing high-throughput REST APIs, and combining backend stability with modern interactive frontends.",
    "With hands-on experience developing decentralized expense platforms, scalable social platforms, and feature-rich e-commerce ecosystems, I bring a strong foundation in database architecture, user authentication, and Git workflows.",
    "Beyond traditional web development, I am deeply fascinated by Artificial Intelligence and Cybersecurity, actively exploring intelligent automation and secure application protocols. My project portfolio also spans cutting-edge WebAR solutions using AR.js and QR-based interaction flows."
  ],
  pillars: [
    {
      title: "Python & Django Mastery",
      description: "Expertise in designing clean Django models, scalable REST APIs, session/JWT auth, and query optimization.",
      icon: "python",
      color: "from-blue-500/20 to-cyan-500/20 border-cyan-500/30"
    },
    {
      title: "Full Stack Systems",
      description: "End-to-end web application development connecting responsive React user interfaces with solid Django backends.",
      icon: "layers",
      color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30"
    },
    {
      title: "AI Integration & Automation",
      description: "Exploring machine learning concepts, natural language workflows, and smart automation in modern applications.",
      icon: "cpu",
      color: "from-purple-500/20 to-violet-500/20 border-violet-500/30"
    },
    {
      title: "Cybersecurity & Security Mindset",
      description: "Focus on application security standards, OWASP guidelines, secure authentication, and data integrity.",
      icon: "shield",
      color: "from-rose-500/20 to-pink-500/20 border-rose-500/30"
    }
  ]
};

export const experiences = [
  {
    id: "webandcrafts",
    company: "Webandcrafts",
    role: "Python Django Developer Intern",
    period: "2 Months",
    location: "Kerala, India",
    type: "Internship",
    description: "Built production-ready web applications using Python, Django, REST APIs, and modern frontend techniques within an agile collaborative development environment.",
    highlights: [
      "Engineered backend architecture for a Blockchain Expense Tracker, a Twitter Clone, and a feature-complete E-Commerce platform.",
      "Designed secure RESTful API endpoints, user authentication modules (JWT/Session), and relational database schemas (MySQL & SQLite).",
      "Collaborated closely with cross-functional teams using Git & GitHub for version control, code reviews, and feature branch deployments.",
      "Integrated frontend UI components with backend APIs ensuring efficient state synchronization and fast page rendering."
    ],
    tech: ["Python", "Django", "REST APIs", "MySQL", "SQLite", "Authentication", "Git", "GitHub", "Frontend Integration"]
  },
  {
    id: "ar-developer",
    company: "Augmented Reality Initiative",
    role: "Augmented Reality Project Developer",
    period: "Project Lead",
    location: "Kerala, India",
    type: "Independent Development",
    description: "Researched and built immersive WebAR experiences bringing static visual media to life using browser-native 3D graphics.",
    highlights: [
      "Developed an interactive AR Poster using AR.js and A-Frame for high-performance 3D object rendering in web browsers.",
      "Implemented QR-based markerless/marker interactions allowing seamless mobile camera scanning without installing standalone applications.",
      "Optimized 3D asset file sizes and asset loading times for immediate mobile browser responsiveness."
    ],
    tech: ["AR.js", "A-Frame", "JavaScript", "HTML5/CSS3", "3D Graphics", "QR Code Interaction"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Blockchain Expense Tracker",
    category: "Full Stack / Blockchain",
    tagline: "Immutable & transparent personal expense analytics powered by Django & Blockchain ledger logic.",
    description: "A decentralized financial management platform designed to record financial transactions with cryptographic integrity. Includes an interactive analytics dashboard, secure authentication, categorical budgeting, and immutable transaction logs.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Blockchain-based transaction validation & immutable hash ledger",
      "Interactive expense visualization charts & categorical breakdown",
      "Multi-user authentication with role-based access control",
      "Real-time balance computation & exportable financial reports",
      "Clean Django backend with REST endpoints for dashboard analytics"
    ],
    tech: ["Django", "Python", "Blockchain Integration", "REST APIs", "Dashboard Analytics", "Authentication", "SQLite/MySQL"],
    github: "https://github.com/RGRTO",
    demo: "#",
    featured: true
  },
  {
    id: 2,
    title: "Twitter Clone",
    category: "Full Stack Social App",
    tagline: "High-concurrency social networking platform featuring user feeds, instant likes, comments & follow loops.",
    description: "A feature-rich social web application inspired by Twitter/X. Engineered with Django backend architecture handling user relationships, media posts, timeline aggregation, dynamic follower systems, and real-time interaction feedback.",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1000&q=80",
    features: [
      "User authentication, profile management, and custom bio customization",
      "Post creation with media attachments, hashtags, and formatting",
      "Instant like, retweet/repost, and comment thread functionality",
      "Follow/Unfollow system with real-time timeline feed generation",
      "Optimized database queries for fast feed pagination"
    ],
    tech: ["Django", "Python", "REST APIs", "User Auth", "Follow System", "Relational DB", "JavaScript"],
    github: "https://github.com/RGRTO",
    demo: "#",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Website",
    category: "Full Stack Web App",
    tagline: "Complete online shopping ecosystem with cart management, product catalog, checkout & admin control.",
    description: "An end-to-end e-commerce platform featuring a dynamic product catalog, inventory management, user cart state persistence, smooth checkout flows, and an extensive admin management dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf4005a?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Categorized product catalog with search, filter, and sort capabilities",
      "Dynamic shopping cart with persistent user session state",
      "Secure checkout workflow with order summary and address entry",
      "Admin control center for inventory updates, price adjustments, and order tracking",
      "Responsive storefront design optimized for mobile shopping"
    ],
    tech: ["Django", "Python", "Shopping Cart", "Product Catalog", "Checkout Flow", "Admin Dashboard", "MySQL"],
    github: "https://github.com/RGRTO",
    demo: "#",
    featured: true
  },
  {
    id: 4,
    title: "AR QR Poster",
    category: "Augmented Reality / Web",
    tagline: "Interactive WebAR application transforming physical posters into 3D interactive digital media.",
    description: "A WebAR project created using AR.js and A-Frame. Users scan a QR code on a physical poster to immediately trigger interactive 3D model renderings and audio-visual animations directly in their mobile browser without installing extra software.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269bc1bd?auto=format&fit=crop&w=1000&q=80",
    features: [
      "Zero-app-install WebAR scanning via camera & QR code activation",
      "Smooth 3D model rendering and spatial position tracking",
      "Interactive touch triggers for rotating and inspecting 3D elements",
      "Lightweight WebGL shaders for instant 60 FPS mobile rendering",
      "Cross-browser mobile compatibility (iOS Safari & Android Chrome)"
    ],
    tech: ["AR.js", "A-Frame", "JavaScript", "3D WebGL", "Interactive WebAR", "HTML5/CSS3"],
    github: "https://github.com/RGRTO",
    demo: "#",
    featured: true
  }
];

export const skills = {
  Languages: [
    { name: "Python", level: 92, icon: "SiPython", color: "from-blue-500 to-yellow-500" },
    { name: "JavaScript", level: 88, icon: "SiJavascript", color: "from-yellow-400 to-amber-500" },
    { name: "Java", level: 80, icon: "FaJava", color: "from-red-500 to-orange-500" },
    { name: "C", level: 75, icon: "SiC", color: "from-blue-600 to-indigo-600" },
    { name: "SQL", level: 88, icon: "SiMysql", color: "from-cyan-500 to-blue-600" },
    { name: "HTML5", level: 95, icon: "SiHtml5", color: "from-orange-500 to-amber-600" },
    { name: "CSS3", level: 90, icon: "SiCss3", color: "from-blue-400 to-cyan-500" }
  ],
  Frameworks: [
    { name: "Django", level: 92, icon: "SiDjango", color: "from-emerald-600 to-teal-700" },
    { name: "React", level: 85, icon: "SiReact", color: "from-cyan-400 to-blue-500" },
    { name: "FastAPI", level: 82, icon: "SiFastapi", color: "from-teal-400 to-emerald-500" },
    { name: "REST Framework", level: 90, icon: "SiDjango", color: "from-rose-500 to-red-600" }
  ],
  Databases: [
    { name: "MySQL", level: 86, icon: "SiMysql", color: "from-blue-500 to-cyan-600" },
    { name: "SQLite", level: 90, icon: "SiSqlite", color: "from-sky-400 to-blue-500" }
  ],
  Tools: [
    { name: "Git", level: 90, icon: "SiGit", color: "from-orange-600 to-red-500" },
    { name: "GitHub", level: 92, icon: "SiGithub", color: "from-purple-500 to-indigo-600" },
    { name: "VS Code", level: 95, icon: "SiVisualstudiocode", color: "from-blue-500 to-sky-400" },
    { name: "Linux", level: 82, icon: "SiLinux", color: "from-amber-400 to-yellow-500" }
  ],
  Other: [
    { name: "Blockchain Integration", level: 80, icon: "SiBlockchaindotcom", color: "from-yellow-400 to-amber-600" },
    { name: "REST APIs", level: 92, icon: "SiPostman", color: "from-orange-500 to-rose-500" },
    { name: "AR.js & A-Frame", level: 85, icon: "SiThree-dot-js", color: "from-purple-400 to-violet-600" },
    { name: "Problem Solving", level: 90, icon: "Brain", color: "from-emerald-400 to-teal-500" }
  ]
};

export const stats = [
  { label: "BCA CGPA", value: "8.0", suffix: "/ 10", icon: "Award" },
  { label: "Major Web Projects", value: "4", suffix: "+", icon: "Code2" },
  { label: "Core Tech Stack", value: "15", suffix: "+", icon: "Layers" },
  { label: "Code Commits", value: "250", suffix: "+", icon: "GitCommit" }
];

export const achievements = [
  {
    title: "BCA Honours with 8.0 CGPA",
    institution: "DePaul Institute of Science and Technology",
    description: "Graduated with top academic standing, focusing on Software Engineering, Data Structures, Web Development, and Database Management Systems."
  },
  {
    title: "Webandcrafts Developer Internship",
    institution: "Webandcrafts",
    description: "Completed intensive 2-month Python Django development internship building 3 major full-stack applications with production REST APIs."
  },
  {
    title: "Augmented Reality Web Innovation",
    institution: "Self-Initiated AR Project",
    description: "Engineered high-performance WebAR QR Poster utilizing AR.js & A-Frame for zero-install mobile browser augmented reality."
  }
];
