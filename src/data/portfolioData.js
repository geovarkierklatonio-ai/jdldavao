export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: 'BUILD', label: 'Web & software development' },
  { value: 'DESIGN', label: 'Modern, responsive interfaces' },
  { value: 'LEARN', label: 'Always exploring new technologies' },
  { value: 'AI+', label: 'AI-assisted development' },
]

export const aboutContent = {
  intro:
    'I am a full stack developer focused on building scalable digital products that combine strong backend logic, elegant frontend experiences, and practical business value. I use modern technology, creative problem-solving, and the power of AI to transform ideas into products that are built to perform, evolve, and make an impact.',
  story:
    'My journey in technology has led me to build systems such as an <strong>Attendance Management System with Geofencing</strong>, combining mobile development and location-based technology to create a smarter attendance experience. I\'m also one of the developers behind <strong>lgumatanao-dmts.com</strong>, contributing to the development of a digital platform designed to support modern workflows and public service.',
  highlights: [
    'Full stack product development',
    'AI-assisted development workflows',
    'Location-based & geofencing technology',
    'Scalable system architecture',
  ],
}

export const skills = [
  { name: 'React', level: 'Advanced', color: 'from-cyan-500 to-sky-500' },
  { name: 'Node.js', level: 'Advanced', color: 'from-emerald-500 to-teal-500' },
  { name: 'Express', level: 'Advanced', color: 'from-violet-500 to-indigo-500' },
  { name: 'MongoDB', level: 'Intermediate', color: 'from-green-500 to-emerald-500' },
  { name: 'SQL', level: 'Intermediate', color: 'from-blue-500 to-cyan-500' },
  { name: 'Tailwind CSS', level: 'Advanced', color: 'from-teal-500 to-cyan-500' },
  { name: 'JavaScript', level: 'Advanced', color: 'from-yellow-500 to-amber-500' },
  { name: 'Git & GitHub', level: 'Advanced', color: 'from-violet-500 to-fuchsia-500' },
  { name: 'AI Tools', level: 'Advanced', color: 'from-pink-500 to-red-500' },
]

export const skillsByCategory = [
  {
    category: 'FRONT END',
    skills: [
      { name: 'HTML', icon: 'SiHtml5', color: 'text-orange-500', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/30' },
      { name: 'CSS', icon: 'SiCss3', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
      { name: 'JAVASCRIPT', icon: 'SiJavascript', color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-400/30' },
      { name: 'BOOTSTRAP', icon: 'SiBootstrap', color: 'text-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-600/30' },
      { name: 'REACT (VITE)', icon: 'SiReact', color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-400/30' },
    ],
  },
  {
    category: 'FULL STACK',
    skills: [
      { name: 'NEXT.JS', icon: 'SiNextdotjs', color: 'text-slate-900', bgColor: 'bg-slate-500/10', borderColor: 'border-slate-400/30' },
      { name: 'LARAVEL', icon: 'SiLaravel', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
      { name: 'FLUTTERFLOW', icon: 'SiFlutter', color: 'text-blue-500', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/30' },
    ],
  },
  {
    category: 'BACK END',
    skills: [
      { name: 'PHP', icon: 'SiPhp', color: 'text-indigo-600', bgColor: 'bg-indigo-500/10', borderColor: 'border-indigo-600/30' },
      { name: 'SUPABASE', icon: 'SiSupabase', color: 'text-emerald-500', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
      { name: 'MYSQL', icon: 'SiMysql', color: 'text-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-600/30' },
      { name: 'POSTGRESQL', icon: 'SiPostgresql', color: 'text-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-600/30' },
    ],
  },
  {
    category: 'LANGUAGE',
    skills: [
      { name: 'DART', icon: 'SiDart', color: 'text-cyan-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
      { name: 'JAVA', icon: 'SiJava', color: 'text-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-600/30' },
      { name: 'C#', icon: 'SiCsharp', color: 'text-green-600', bgColor: 'bg-green-500/10', borderColor: 'border-green-600/30' },
    ],
  },
  {
    category: 'TOOLS',
    skills: [
      { name: 'GIT', icon: 'SiGit', color: 'text-orange-600', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-600/30' },
      { name: 'GITHUB', icon: 'SiGithub', color: 'text-slate-700', bgColor: 'bg-slate-500/10', borderColor: 'border-slate-700/30' },
      { name: 'VSCODE', icon: 'SiVisualstudiocode', color: 'text-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-600/30' },
      { name: 'GEMINI', icon: 'SiGoogle', color: 'text-red-500', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/30' },
      { name: 'GPT', icon: 'SiOpenai', color: 'text-emerald-600', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-600/30' },
      { name: 'CLAUDE', icon: 'SiAnthropic', color: 'text-purple-600', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-600/30' },
    ],
  },
  {
    category: 'OTHER SKILLS',
    skills: [
      { name: 'PROJECT MAINTENANCE', icon: 'SiGitpod', color: 'text-cyan-500', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
      { name: 'FILE MANAGEMENT', icon: 'SiFiles', color: 'text-amber-500', bgColor: 'bg-amber-500/10', borderColor: 'border-amber-500/30' },
      { name: 'MS OFFICE', icon: 'SiMicrosoft', color: 'text-blue-600', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-600/30' },
    ],
  },
]

export const projects = [
  {
    title: 'Portfolio Dashboard',
    description:
      'A sleek admin-style dashboard focused on analytics, charts, and task management for modern teams.',
    tech: ['React', 'Tailwind', 'Charts'],
    year: '2025',
    featured: true,
    link: '#',
  },
  {
    title: 'E-Commerce Landing Page',
    description:
      'A premium product landing page with product highlights, reviews, pricing cards, and a conversion-focused layout.',
    tech: ['React', 'CSS', 'UX Design'],
    year: '2025',
    featured: false,
    link: '#',
  },
  {
    title: 'Task Manager App',
    description:
      'A productivity app with filterable tasks, local storage, and a clean interface for managing daily priorities.',
    tech: ['JavaScript', 'React', 'LocalStorage'],
    year: '2024',
    featured: false,
    link: '#',
  },
]

export const education = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'University of Technology',
    period: '2021 - 2025',
    details: 'Focused on software engineering, web technologies, and data structures.',
  },
  {
    degree: 'Frontend Development Diploma',
    institution: 'Online Academy',
    period: '2023 - 2024',
    details: 'Built practical projects in HTML, CSS, JavaScript, and React.',
  },
]

export const certifications = [
  { name: 'Responsive Web Design', provider: 'FreeCodeCamp', year: '2024' },
  { name: 'JavaScript Algorithms and Data Structures', provider: 'FreeCodeCamp', year: '2024' },
  { name: 'React Fundamentals', provider: 'Coursera', year: '2023' },
]

export const experience = [
  {
    role: 'Frontend Developer Intern',
    company: 'Creative Studio',
    period: '2024 - Present',
    description:
      'Created responsive landing pages, improved component consistency, and collaborated with designers to ship polished interfaces.',
  },
  {
    role: 'Web Design Volunteer',
    company: 'Community Project',
    period: '2023 - 2024',
    description:
      'Designed and maintained simple websites for local initiatives, improving accessibility and user experience.',
  },
]

export const contactLinks = [
  { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  { label: 'GitHub', value: 'github.com/yourname', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: 'https://linkedin.com' },
  { label: 'Location', value: 'Your City, Country', href: '#' },
]
