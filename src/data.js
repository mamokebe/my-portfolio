// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to personalize your portfolio.
//  Photo:         put your image at  public/profile.jpg
//  CV:            put your PDF at    public/cv/Kebede-Mamo-CV.pdf
//  Certificates:  put PDFs/images in public/certificates/ and
//                 update the `file` paths below.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Kebede',
  role: 'Full-Stack Web Developer',
  tagline:
    'I design and build fast, scalable web applications with the MERN stack — from clean React interfaces to robust Node.js, APIs,  well-structured databases and AI-powered features.',
  email: 'fmamo3375@gmail.com',
  phone: '+1 (945) 244-3810',
  location: 'Dallas, USA',
  cv: '/cv/Kebede-Mamo-CV.pdf',
  photo: '/profile3.svg',
  socials: [
    { label: 'GitHub', href: 'https://github.com/mamokebe' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/kebede-bekele-mamo-75b5692aa' },
  ],
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const about = {
  paragraphs: [
    "I'm a Full-Stack Software Developer and AI Application Developer passionate about turning ideas into polished, production-ready applications. I work across the MERN stack (MongoDB, Express.js, React.js, and Node.js), with experience in MySQL, PostgreSQL, REST API development, responsive web design, and AI-powered applications using Claude and ChatGPT.",
    "I enjoy building scalable, user-friendly solutions with clean code, efficient architecture, and great user experiences. From designing databases and developing backend services to creating responsive interfaces and deploying applications, I take pride in delivering practical solutions. I'm always eager to learn new technologies and use software development and AI to solve real-world problems.",
  ],
  stats: [
    { value: '3+', label: 'Years building' },
    { value: '15+', label: 'Projects shipped' },
    { value: '5', label: 'Databases & APIs' },
  ],
};

// export const skillGroups = [
//   {
//     title: 'Frontend',
//     icon: '◐',
//     skills: [
//       { name: 'JavaScript (ES6+)', level: 92 },
//       { name: 'React', level: 90 },
//       { name: 'Tailwind CSS', level: 88 },
//       { name: 'HTML & CSS', level: 92 },
//     ],
//   },
//   {
//     title: 'Backend',
//     icon: '◑',
//     skills: [
//       { name: 'Node.js', level: 90 },
//       { name: 'Express', level: 90 },
//       { name: 'REST APIs & JWT Auth', level: 88 },
//     ],
//   },
//   {
//     title: 'Databases',
//     icon: '◒',
//     skills: [
//       { name: 'MongoDB', level: 90 },
//       { name: 'PostgreSQL', level: 80 },
//       { name: 'MySQL', level: 80 },
//     ],
//   },
// ];


export const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      'JavaScript (ES6+)',
      'React.js',
      'Bootstrap',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'GraphQL',
      'API Integration',
      'Authentication',
      'Authorization',

    ],
  },
  {
    title: 'Databases',
    skills: [
      'MySQL',
      'MongoDB',
      'PostgreSQL',
      'Database Management',
    ],
  },
  {
    title: 'AI & LLMs',
    skills: [
      'Claude',
      'ChatGPT',
      'Prompt Engineering',
      'LLM Workflows',
    ],
  },
  {
    title: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Docker',
      'kubernetes',
      'Jenkins'
    ],
  },
  {
    title: 'Cloud Platforms',
    skills: [
      'AWS',
      'Azure',
      'Vercel',
      'Netlify',
      'Render',
    ],
  },
];

export const tools = [];

// export const tools = ['Git & GitHub', 'Vite', 'Postman', 'Cloudinary', 'Stripe', 'Socket.io', 'Zustand', 'Mongoose'];

export const projects = [
  {
    title: 'AI-powered Sena Healthcare Website',
    description:
      'A healthcare website with AI-powered features, including a chatbot for user inquiries and admin functionality, built with React, Node.js, Express.js and MySQL Database.',
      
    tags: ['React', 'Node.js','Express', 'Claude API' ,'MySQL', 'Admin Panel'], 
    live: 'https://senahomecare.vercel.app/',
    code: 'https://github.com/mamokebe/senahomecarenew',
    gradient: 'from-sunset-400 to-sunset-700',
    image: '/images/sena.png',
  },
  {
    title: 'AreaSwap E-Commerce Website',
    description:
      'A modern, responsive website for an e-commerce platform, featuring a clean design, easy navigation, product listings and a seamless shopping experience.',
    tags: ['React', 'Node.js', 'express', 'MongoDB', 'JWT', 'Stripe'],
    live: 'https://areaswap.com',
    code: 'https://github.com/mamokebe/FrontendofAreaSwap',
    gradient: 'from-sunset-400 to-sunset-700',
    // gradient: 'from-sunset-300 to-sunset-600',
    image: '/images/areaswap.png',
  },
  {
    title: 'Forge code and Studio Software solutions Website',
    description:
      'A modern, responsive website for a software development company, featuring a clean design, easy navigation, and a showcase of their services and projects.',
    tags: ['React', 'Node.js', 'express', 'MongoDB', 'JWT', 'Stripe', 'Admin Dashboard'],
    live: 'https://fcsorg.com',
    code: 'https://github.com/mamokebe/forgecodefrontend',
    gradient: 'from-sunset-400 to-sunset-700',
    // gradient: 'from-sunset-300 to-sunset-600',
    image: '/images/forge.png',
  },
  {
    title: 'Male Barber Salon Website',
    description:
      'A modern, responsive website for a male barber salon, featuring a clean design, easy navigation, service listings and appointment booking.',
    tags: ['React', 'Tailwind CSS', 'Responsive Design'],
    live: 'https://barbersalon-eight.vercel.app/',
    code: 'https://github.com/mamokebe/barberfrontend',
    gradient: 'from-sunset-400 to-sunset-700',
    // gradient: 'from-sunset-300 to-sunset-600',
    image: '/images/barber.png',
  },
  {
    title: 'AI-powered Study Planner App',
    description:
      'A web application that helps students plan and manage their study schedules, with AI-powered features for personalized recommendations and task prioritization.',
    tags: ['React', 'Node.js', 'Express', 'Tailwind'],
    live: 'https://summerstudyfrontend.vercel.app/',
    code: 'https://github.com/mamokebe/summerstudyfrontend',
    gradient: 'from-sunset-500 to-sunset-900',
    image: '/images/study.png',
  },
  {
    title: 'Odaa Beauty salon website',
    description:
      'A responsive beauty product salon website with a clean design, built with React and Tailwind CSS.',
    tags: ['React', 'Node.js', 'MySQL', 'JWT'],
    live: 'https://odaa-beauty.vercel.app/',
    code: 'https://github.com/mamokebe/odaa-beauty',
    gradient: 'from-sunset-400 to-sunset-800',
    image: '/images/odaa.png',
  },

];

export const experience = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Freelance / Self-employed',
    period: '2025 — Present',
    points: [
      'Develop and deploy responsive, full-stack web applications using React.js, Node.js, Express.js, and MongoDB.',
      'Design and implement REST APIs, database schemas, authentication systems, and backend services.',
      'Build AI-powered applications and chatbot solutions using Claude API, ChatGPT, and prompt engineering.',
      'Create user-friendly interfaces with React.js and Tailwind CSS, focusing on performance and accessibility.',
      'Manage database integration, application deployment, and ongoing optimization using modern development tools and cloud platforms.',
    ],
  },
  {
    role: 'Junior Web Developer',
    company: 'Evangadi INC, Dallas, USA',
    period: '2024 — 2025',
    points: [
      'Developed features across the front end and back end of production apps.',
      'Collaborated with designers and teammates using Git-based workflows.',
      'Wrote and optimized MongoDB and SQL queries.',
    ],
  },
  {
    role: 'Full-Stack Web Developer Certification',
    company: 'Evangadi INC, Dallas, USA',
    period: '2023 — 2024',
    points: [
      'Foundations in algorithms, databases and software engineering.',
      'Completed a comprehensive full-stack web development course covering front-end and back-end technologies.',
      'Gained hands-on experience in building web applications using JavaScript, React, Node.js, and Express.',
    ],
  },
  {
    role: 'Master of Science in Physics',
    company: 'University of Addis Ababa, Ethiopia',
    period: '2015 — 2017',
    points: [
      'Focusing on space physics and mathematical principles.',
      'Conducted research in theoretical and experimental physics, focusing on data analysis and modeling.',
      'Developed strong analytical, problem-solving, and programming skills through coursework and research projects.',
    ],
  },
  {
    role: 'Bachelor of Science in Physics',
    company: 'University of Ambo, Ethiopia',
    period: '2010 — 2013',
    points: [
      'Completed coursework in classical mechanics, electromagnetism, quantum mechanics, and statistical physics.',
      'Developed strong analytical and problem-solving skills through laboratory experiments and research projects.',
      'Gained experience in programming, data analysis, and scientific computing using FORTRAN and MATLAB.',
    ],
  },
];

export const certificates = [
  {
    title: 'Full-Stack Web Development',
    issuer: 'Evangadi INC',
    year: '2024',
    file: '/certificates/Full-Stack-Web-Development.jpg',
  },
  {
    title: 'Claude 101',
    issuer: 'Anthropic',
    year: '2026',
    file: '/certificates/claude-academy-badge-claude-101.pdf',
  },
  {
    title: 'AI Fluency: Framework and foundations ',
    issuer: 'Anthropic',
    year: '2026',
    file: '/certificates/claude-academy-badge-ai-fluency.pdf',
  },
];
