import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  Code2, 
  Database, 
  Cloud, 
  BrainCircuit, 
  Award,
  MapPin,
  ChevronRight,
  Sun,
  Moon,
  Users,
  Calendar,
  Briefcase,
  Star,
  GitBranch
} from 'lucide-react';
import Chatbot from './components/Chatbot';

const SKILLS = [
  "Core Java", "Python", "HTML", "CSS", "MySQL", "AWS (Basics)", 
  "Oracle Cloud (OCI)", "Data Structures", "Algorithms", "OOP", "OS", 
  "Computer Networks", "DBMS", "Git", "GitHub", "Firebase"
];

const PROJECTS = [
  {
    title: "Swift Meet - Smart Appointment Planner",
    description: "Architected a backend system using Firebase reducing scheduling conflicts by 100%. Integrated Google Calendar API to automate reminders, increasing attendance by 30%.",
    tech: ["Firebase", "Google Calendar API"],
    icon: <Code2 className="text-blue-400" />
  },
  {
    title: "Sentiment Analysis for Hospitals",
    description: "Developed an NLP model to analyze patient reviews with 85% accuracy. Visualized satisfaction trends to identify service gaps 2x faster.",
    tech: ["Python", "NLP", "Scikit-learn"],
    icon: <BrainCircuit className="text-blue-400" />
  },
  {
    title: "Live Hand Gesture Recognition",
    description: "Built a real-time computer vision system with <100ms latency. Enabled touchless interface control for improved accessibility.",
    tech: ["Python", "OpenCV", "MediaPipe"],
    icon: <Database className="text-blue-400" />
  }
];

const CERTIFICATIONS = [
  { name: "Oracle: Cloud Infrastructure 2025 Certified Foundations Associate", icon: <Cloud /> },
  { name: "Oracle: Java Foundations Badge & Cloud Jump Start Badge", icon: <Code2 /> },
  { name: "AWS: Solutions Architecture Job Simulation (Forage)", icon: <Cloud /> },
  { name: "IBM Skill Build: Learn Programming with Java", icon: <Code2 /> },
  { name: "Infosys Springboard: Python Programming", icon: <Code2 /> }
];

const TIMELINE = [
  {
    year: "2023 - 2026",
    title: "Bachelor of Engineering in CS",
    company: "MVJ College of Engineering, Bengaluru",
    description: "Specializing in Computer Science & Engineering with a strong focus on Cloud Computing and Backend systems. Current CGPA: 7.5",
    icon: <Award />
  },
  {
    year: "2020 - 2023",
    title: "Diploma in Computer Science",
    company: "Govt. Polytechnic, Chitradurga",
    description: "Completed Diploma in Computer Science & Engineering with an excellent CGPA of 8.85.",
    icon: <Award />
  }
];

const GITHUB_REPOS = [
  { name: "swift-meet", stars: 12, forks: 4, lang: "TypeScript" },
  { name: "sentiment-ai", stars: 8, forks: 2, lang: "Python" },
  { name: "gesture-control", stars: 15, forks: 5, lang: "Python" }
];

const TypingAnimation = () => {
  const words = ["Backend Developer", "Cloud Enthusiast", "AI Builder", "Problem Solver"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="text-primary min-h-[1.5em] inline-block">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold mb-2"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-blue-400 font-medium"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 60 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-primary mt-4 rounded-full"
    />
  </div>
);

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simple visitor counter simulation
    const count = localStorage.getItem('visitorCount') || '0';
    const newCount = parseInt(count) + 1;
    localStorage.setItem('visitorCount', newCount.toString());
    setVisitorCount(newCount);

    if (!isDarkMode) {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-bg-dark text-white' : 'bg-bg-light text-slate-900'} selection:bg-primary/30 transition-colors duration-500`}>
      <div className="bg-glow" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 glass border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-display font-bold tracking-tighter flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm">A</div>
            AKASH<span className="text-primary">.N</span>
          </motion.div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-70">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-40">
                <Users size={12} /> {visitorCount}
              </div>
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-xl glass hover:bg-white/10 transition-colors"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/20">
                Available for opportunities
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-[1.1]">
                I'm <span className="text-gradient">Akash N</span>
              </h1>
              <div className="text-xl md:text-2xl font-medium mb-4 h-[1.5em]">
                <TypingAnimation />
              </div>
              <p className="text-lg opacity-60 max-w-xl mb-10">
                Building intelligent systems that solve real-world problems. Final-year CS Engineering student at the intersection of Cloud & AI.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-white font-bold btn-glow"
                >
                  <Download size={20} /> Download Resume
                </motion.button>
                
                <div className="flex items-center gap-3 ml-2">
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://github.com/akash-n-dev"
                    target="_blank"
                    className="p-3 rounded-xl glass hover:text-primary transition-all"
                  >
                    <Github size={22} />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="https://linkedin.com/in/akash-n-dev"
                    target="_blank"
                    className="p-3 rounded-xl glass hover:text-primary transition-all"
                  >
                    <Linkedin size={22} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glow-border animate-float p-1.5 bg-gradient-to-br from-primary to-blue-600">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-bg-dark">
                <img 
                  src="https://picsum.photos/seed/akash/800/800" 
                  alt="Akash N" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-32">
          <SectionHeading subtitle="Get to know me">About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg text-white/70 leading-relaxed"
            >
              <p className="mb-6">
                Results-oriented Computer Science Engineering student (Final Year) with a strong foundation in Cloud Computing (AWS/Oracle), Java, and Python.
              </p>
              <p>
                Passionate about building scalable backend architectures and AI/ML solutions. Successfully engineered a smart appointment system reducing scheduling conflicts by 100%. Seeking to leverage full-stack skills to drive software innovation and optimize organizational workflows.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Bengaluru, India', icon: <MapPin size={18} /> },
                { label: 'Education', value: 'CS Engineering', icon: <Code2 size={18} /> },
                { label: 'Focus', value: 'Backend & Cloud', icon: <Cloud size={18} /> },
                { label: 'Interests', value: 'AI & Automation', icon: <BrainCircuit size={18} /> },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 rounded-2xl"
                >
                  <div className="text-primary mb-2">{item.icon}</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-wider mb-1">{item.label}</div>
                  <div className="text-sm font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32 scroll-mt-32">
          <SectionHeading subtitle="What I work with">Technical Skills</SectionHeading>
          <div className="flex flex-wrap gap-4">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 rounded-2xl glass-card flex items-center gap-3 group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-primary group-hover:shadow-[0_0_10px_#3b82f6] transition-all" />
                <span className="font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-32">
          <SectionHeading subtitle="Recent work">Featured Projects</SectionHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col h-full group"
              >
                <div className="h-48 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2 hover:gap-3 transition-all">
                      View Details <ChevronRight size={14} />
                    </button>
                    <ExternalLink size={18} className="text-white/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Timeline Section */}
        <section id="experience" className="mb-32 scroll-mt-32">
          <SectionHeading subtitle="My journey">Experience & Education</SectionHeading>
          <div className="relative">
            <div className="timeline-line" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1 w-full md:w-auto">
                    <div className={`glass-card p-6 rounded-3xl ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="text-primary font-bold text-sm mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <div className="text-blue-400 text-sm font-medium mb-4">{item.company}</div>
                      <p className="opacity-60 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white z-10 -translate-x-1/2 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GitHub Activity Section */}
        <section id="github" className="mb-32 scroll-mt-32">
          <SectionHeading subtitle="Open source">GitHub Activity</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {GITHUB_REPOS.map((repo, i) => (
              <motion.a
                key={i}
                href={`https://github.com/akash-n-dev/${repo.name}`}
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5 text-primary">
                    <GitBranch size={20} />
                  </div>
                  <div className="flex items-center gap-3 text-xs font-bold opacity-40">
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitBranch size={12} /> {repo.forks}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{repo.name}</h3>
                <div className="mt-auto flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-medium opacity-60">{repo.lang}</span>
                </div>
              </motion.a>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 p-6 glass-card rounded-2xl flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                <Github size={24} />
              </div>
              <div>
                <div className="font-bold">Recent Contributions</div>
                <div className="text-xs opacity-40">240+ contributions in the last year</div>
              </div>
            </div>
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`w-3 h-3 rounded-sm ${i % 3 === 0 ? 'bg-green-500' : i % 2 === 0 ? 'bg-green-500/60' : 'bg-green-500/20'}`} />
              ))}
            </div>
          </motion.div>
        </section>

        {/* Certifications Section */}
        <section className="mb-32">
          <SectionHeading subtitle="Professional validation">Certifications</SectionHeading>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.02, x: i % 2 === 0 ? 5 : -5 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl flex items-center gap-4 group cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {cert.icon}
                </div>
                <div>
                  <span className="font-bold text-lg block mb-1">{cert.name}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary opacity-60">Verified Credential</span>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={18} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-32">
          <SectionHeading subtitle="Let's build something">Contact Me</SectionHeading>
          <div className="glass-card rounded-[2rem] p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Get in touch</h3>
                <p className="text-white/60 mb-10">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                
                <div className="space-y-6">
                  <a href="mailto:akashn200328@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Email</div>
                      <div className="font-medium">akashn200328@gmail.com</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-white/40 uppercase font-bold tracking-wider">Location</div>
                      <div className="font-medium">Bengaluru, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">Name</label>
                    <input type="text" className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-white/40">Email</label>
                    <input type="email" className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors" placeholder="Your Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-white/40">Message</label>
                  <textarea rows={4} className="w-full glass rounded-xl px-4 py-3 focus:outline-none focus:border-primary/50 transition-colors resize-none" placeholder="How can I help you?"></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Akash N. Built with React & Tailwind.
        </p>
      </footer>

      <Chatbot />
    </div>
  );
}
