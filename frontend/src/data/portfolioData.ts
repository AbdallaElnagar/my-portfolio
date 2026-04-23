// Portfolio Data - Easy to edit and maintain
export const personalInfo = {
  name: 'Abdalla Elnagar',
  role: 'Junior Full Stack Developer',
  location: 'Cairo, Egypt',
  tagline:
    'ITI Graduate passionate about building modern web applications with React and Node.js',
  bio: `Junior Full Stack Developer and recent ITI graduate with hands-on experience in the MERN stack. 
  I've built 4 full-stack projects from scratch, focusing on clean code and user-friendly interfaces. 
  Eager to contribute to a development team and continue growing my skills in a professional environment.`,
  email: 'abdalla.elnagar.dev@gmail.com',
  phone: '+20 101 435 2738',
  social: {
    github: 'https://github.com/AbdallaElnagar',
    linkedin:
      'https://www.linkedin.com/in/abdalla-elnager-bb867022a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BspgXOwKmQBKFAzPnza9avQ%3D%3D',
    // twitter: 'https://twitter.com/abdallaelnagar',
    portfolio: 'https://abdallaelnagar.dev',
  },
  resume: '/resume.pdf',
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 80, icon: '⚛️' },
      { name: 'Angular', level: 80, icon: '🅰️' },
      { name: 'JavaScript (ES6+)', level: 75, icon: '📘' },
      { name: 'HTML5 & CSS3', level: 85, icon: '🎨' },
      { name: 'Tailwind CSS', level: 75, icon: '💨' },
      { name: 'Responsive Design', level: 80, icon: '📱' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 75, icon: '🟢' },
      { name: 'Express.js', level: 75, icon: '🚂' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
      { name: 'PostgreSQL', level: 60, icon: '🐘' },
      { name: 'REST APIs', level: 75, icon: '🔌' },
      { name: 'JWT Authentication', level: 65, icon: '🔐' },
    ],
  },
  {
    category: 'Tools & Others',
    items: [
      { name: 'Git & GitHub', level: 75, icon: '📦' },
      { name: 'VS Code', level: 85, icon: '💻' },
      { name: 'Postman', level: 70, icon: '📮' },
      { name: 'npm/yarn', level: 70, icon: '📦' },
      { name: 'Problem Solving', level: 75, icon: '🧩' },
    ],
  },
];

export const projects = [
  {
    id: '1',
    title: 'FitPower – AI-Driven Fitness Platform',
    shortDescription:
      'AI-powered fitness ecosystem with nutrition assistant and adaptive exercise library',
    longDescription: `Engineered a comprehensive fitness ecosystem featuring an AI-powered nutrition assistant and adaptive exercise library. 
    Implemented personalized health tracking tools, dynamic filtering systems, and user goal analytics to enhance engagement and retention. 
    Built a scalable architecture supporting modular expansion and real-time user interaction.`,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    ],
    technologies: [
      'Angular',
      'Node.js',
      'Express',
      'MongoDB',
      'AI Integration',
      'REST API',
    ],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://github.com/abdallaelnagar/fitpower',
    githubUrl: 'https://github.com/abdallaelnagar/fitpower',
    highlights: [
      'AI-powered nutrition assistant',
      'Adaptive exercise library with dynamic filtering',
      'Personalized health tracking and goal analytics',
      'Scalable modular architecture',
      'Real-time user interaction system',
    ],
    badge: 'Graduation Project',
  },
  {
    id: '2',
    title: 'TripStore – E-Commerce Platform',
    shortDescription:
      'Scalable outdoor gear e-commerce with admin dashboard and real-time inventory',
    longDescription: `Developed a scalable outdoor gear e-commerce platform with comprehensive admin dashboard and dynamic catalog system. 
    Implemented JWT authentication, reactive state management using RxJS, and optimized checkout flow. 
    Enhanced system performance with RxJS streams and real-time inventory synchronization for seamless shopping experience.`,
    image:
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    ],
    technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'RxJS', 'JWT'],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://github.com/abdallaelnagar/tripstore',
    githubUrl: 'https://github.com/abdallaelnagar/tripstore',
    highlights: [
      'Admin dashboard with analytics',
      'Dynamic catalog with advanced filtering',
      'JWT authentication and authorization',
      'Reactive state management with RxJS',
      'Real-time inventory synchronization',
    ],
    badge: 'ITI Project',
  },
  {
    id: '3',
    title: 'Personal Portfolio Website',
    shortDescription:
      'Modern responsive portfolio with optimized performance and smooth animations',
    longDescription: `Built a modern responsive portfolio using modular React architecture and component-based design. 
    Implemented lazy loading, code splitting, and performance optimization techniques to improve Core Web Vitals. 
    Focused on smooth user experience with Framer Motion animations and responsive design across all devices.`,
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    ],
    technologies: ['React', 'Bootstrap', 'Framer Motion', 'Vite', 'UI/UX'],
    category: 'Frontend',
    featured: true,
    liveUrl: 'https://abdallaelnagar.dev',
    githubUrl: 'https://github.com/abdallaelnagar/portfolio',
    highlights: [
      'Modular React architecture',
      'Lazy loading and code splitting',
      'Optimized Core Web Vitals',
      'Smooth animations with Framer Motion',
      'Fully responsive design',
    ],
  },
  {
    id: '4',
    title: 'Online Examination System',
    shortDescription:
      'Complete exam platform with role-based access and auto-grading system',
    longDescription: `Developed a comprehensive online examination platform with role-based access control for students and instructors. 
    Implemented timed exams with auto-grading system, analytics dashboard for performance tracking, and secure authentication. 
    Added real-time monitoring capabilities for scalable academic usage across multiple institutions.`,
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Socket.io',
    ],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://github.com/abdallaelnagar/exam-system',
    githubUrl: 'https://github.com/abdallaelnagar/exam-system',
    highlights: [
      'Role-based access control (students/instructors)',
      'Timed exams with auto-grading',
      'Analytics dashboard for performance tracking',
      'Secure authentication system',
      'Real-time exam monitoring',
    ],
  },
  {
    id: '5',
    title: 'TaskFlow – Project Management System',
    shortDescription:
      'Trello-like Kanban board with real-time collaboration and team management',
    longDescription: `Built a comprehensive project management system inspired by Trello, featuring Kanban boards, task assignments, and team collaboration tools. 
    Implemented real-time updates using WebSockets, role-based permissions for team hierarchy, and optimized database queries using Prisma ORM. 
    Designed for scalability and efficient team workflow management.`,
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    ],
    technologies: [
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'WebSockets',
      'TypeScript',
    ],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://github.com/abdallaelnagar/taskflow',
    githubUrl: 'https://github.com/abdallaelnagar/taskflow',
    highlights: [
      'Kanban board with drag-and-drop',
      'Real-time updates with WebSockets',
      'Role-based permissions system',
      'Optimized queries with Prisma ORM',
      'Team collaboration features',
    ],
  },
  {
    id: '6',
    title: 'EduSync – Learning Management System',
    shortDescription:
      'Smart LMS with course management, video learning, and real-time chat',
    longDescription: `Created a comprehensive Learning Management System with course management, video learning modules, progress tracking, and real-time chat system. 
    Implemented push notifications for course updates, scalable backend architecture for multi-user concurrency, and interactive learning tools. 
    Designed to support educational institutions with seamless content delivery.`,
    image:
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    ],
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Socket.io',
      'Video Streaming',
    ],
    category: 'Full Stack',
    featured: true,
    liveUrl: 'https://github.com/abdallaelnagar/edusync',
    githubUrl: 'https://github.com/abdallaelnagar/edusync',
    highlights: [
      'Course management and video learning',
      'Progress tracking and analytics',
      'Real-time chat with Socket.io',
      'Push notifications system',
      'Scalable multi-user architecture',
    ],
  },
];

export const experience = [
  {
    id: '1',
    company: 'Information Technology Institute (ITI)',
    position: 'Full Stack Web Development Track',
    location: 'Cairo, Egypt',
    startDate: '2026-01',
    endDate: '2026-06',
    current: false,
    description: `Completed intensive 6-month Full Stack Web Development program at ITI, one of Egypt's leading tech training institutes. 
    Gained hands-on experience building real-world applications using the MERN stack. Graduated with honors after completing 
    4 full-stack projects and passing all technical assessments.`,
    achievements: [
      'Built 4 complete full-stack applications from scratch',
      'Learned React, Node.js, Express, MongoDB, and PostgreSQL',
      'Completed team project as graduation requirement',
      'Achieved 95% average score in technical assessments',
      'Participated in code reviews and pair programming sessions',
    ],
    technologies: [
      'React',
      'Angular',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Git',
    ],
  },
  {
    id: '2',
    company: 'Personal Projects & Learning',
    position: 'Self-Taught Developer',
    location: 'Cairo, Egypt',
    startDate: '2025-06',
    endDate: '2026-01',
    current: false,
    description: `Started my web development journey through online courses and self-study. Built foundational knowledge 
    in HTML, CSS, JavaScript, and basic React before joining ITI. Created several practice projects to solidify my understanding 
    of web development concepts.`,
    achievements: [
      'Completed online courses on Udemy and freeCodeCamp',
      'Built 5+ practice projects to learn fundamentals',
      'Learned JavaScript ES6+ features and async programming',
      'Created responsive websites using HTML, CSS, and Bootstrap',
      'Practiced problem-solving on LeetCode and HackerRank',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'Git',
      'React Basics',
    ],
  },
  {
    id: '3',
    company: 'University Education',
    position: "Bachelor's Degree Student",
    location: 'Cairo, Egypt',
    startDate: '2021-09',
    endDate: '2025-06',
    current: false,
    description: `Completed bachelor's degree with focus on computer science fundamentals. Gained strong foundation in 
    programming concepts, data structures, algorithms, and software engineering principles. Participated in university 
    tech clubs and coding competitions.`,
    achievements: [
      'Graduated with Good grade',
      'Completed coursework in Data Structures and Algorithms',
      'Learned programming fundamentals in C++ and Java',
      'Participated in university coding competitions',
      'Completed graduation project using web technologies',
    ],
    technologies: ['C++', 'Java', 'Data Structures', 'Algorithms', 'OOP'],
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Ahmed Hassan',
    position: 'ITI Instructor',
    company: 'Information Technology Institute',
    image: 'https://i.pravatar.cc/150?img=12',
    content: `Abdalla was one of the most dedicated students in the Full Stack track. His projects showed 
    strong understanding of React and Node.js fundamentals, and he was always eager to learn more.`,
    rating: 5,
  },
  {
    id: '2',
    name: 'Sara Mohamed',
    position: 'ITI Classmate',
    company: 'ITI Graduate',
    image: 'https://i.pravatar.cc/150?img=5',
    content: `Working with Abdalla on our graduation project was great. He's a quick learner and writes clean code. 
    His problem-solving skills really helped our team succeed.`,
    rating: 5,
  },
  {
    id: '3',
    name: 'Omar Khaled',
    position: 'Study Partner',
    company: 'ITI Graduate',
    image: 'https://i.pravatar.cc/150?img=8',
    content: `Abdalla has a solid grasp of full-stack development. He's always willing to help others understand 
    difficult concepts and his enthusiasm for coding is contagious.`,
    rating: 5,
  },
];

export const stats = [
  { label: 'ITI Graduate', value: '2026' },
  { label: 'Projects Built', value: '4+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Code Commits', value: '500+' },
];
