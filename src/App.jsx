import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Download, 
  Award, 
  BookOpen, 
  Terminal, 
  Code, 
  Database, 
  Cpu, 
  Globe, 
  Search, 
  Filter, 
  CheckCircle, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronRight, 
  Play, 
  Send, 
  Check,
  Plus,
  Trash2,
  TrendingUp,
  FileText,
  Briefcase,
  Layers
} from 'lucide-react';
import { portfolioData } from './portfolioData.js';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // Projects filtering
  const [activeSection, setActiveSection] = useState('hero');

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Section Tracking on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'coding-profiles', 'github', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hand Cricket logic
  

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setContactForm({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };


  const printResume = () => {
    window.print();
  };

  const filteredProjects = activeTab === 'all' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.category === activeTab);

  return (
    <div id="portfolio-root" className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Dynamic Floating Navbar */}
      <nav id="app-navbar" className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 backdrop-blur-md ${isDark ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#hero" className="flex items-center gap-2 group">
                <span className={`p-2 rounded-lg text-white bg-gradient-to-tr from-cyan-500 to-blue-600 transition-transform group-hover:rotate-12`}>
                  <Terminal size={18} />
                </span>
                <span className={`font-bold tracking-tight text-lg transition-colors duration-200 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Adarsh <span className="text-cyan-500">.Dev()</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'coding-profiles', label: 'Profiles' },
                { id: 'github', label: 'GitHub' },
                { id: 'resume', label: 'Resume' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  href={`#${item.id}`}
                  className={`px-3 py-2 rounded-md text-xs font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-cyan-500 bg-cyan-500/10'
                      : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800/50' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {/* Theme Toggle Button */}
              <button
                id="theme-toggle-desktop"
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle Theme"
                className={`ml-4 p-2 rounded-lg transition-colors duration-200 ${
                  isDark ? 'text-yellow-400 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="md:hidden flex items-center gap-2">
              <button
                id="theme-toggle-mobile"
                onClick={() => setIsDark(!isDark)}
                aria-label="Toggle Theme"
                className={`p-2 rounded-lg ${isDark ? 'text-yellow-400' : 'text-slate-600'}`}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                id="mobile-menu-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg ${isDark ? 'text-slate-400 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'}`}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div id="mobile-menu-drawer" className={`md:hidden border-b px-4 pt-2 pb-4 space-y-1 transition-colors duration-200 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            {[
              { id: 'hero', label: 'Home' },
              { id: 'about', label: 'About Me' },
              { id: 'skills', label: 'Technical Skills' },
              { id: 'projects', label: 'Projects & Demos' },
              { id: 'certifications', label: 'Certifications' },
              { id: 'coding-profiles', label: 'Coding Profiles' },
              { id: 'github', label: 'GitHub Ecosystem' },
              { id: 'resume', label: 'Professional Resume' },
              { id: 'contact', label: 'Contact Details' }
            ].map((item) => (
              <a
                key={item.id}
                id={`mobile-nav-${item.id}`}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-500 bg-cyan-500/10'
                    : isDark ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-16">
        
        {/* SECTION 1: HERO */}
        <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-15">
            <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-cyan-500' : 'bg-cyan-300'}`}></div>
            <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-blue-600' : 'bg-blue-300'}`}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text details */}
              <div className="md:col-span-7 space-y-6 text-center md:text-left">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' : 'bg-cyan-100 text-cyan-800'
                }`}>
                  <Terminal size={14} /> Ready for Software Developer Roles
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Hi, I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{portfolioData.personalInfo.name}</span>
                </h1>
                
                <h2 className={`text-xl sm:text-2xl font-bold tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {portfolioData.personalInfo.title}
                </h2>
                
                <p className={`text-base max-w-xl mx-auto md:mx-0 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {portfolioData.personalInfo.bio}
                </p>

                {/* Micro Metrics widget */}
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto md:mx-0 py-4">
                  {/* <div className={`p-3 rounded-xl border text-center ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <span className="block text-2xl font-black text-cyan-500">6+</span>
                    <span className="text-2xs text-slate-500 uppercase tracking-wider">Projects Made</span>
                  </div> */}
                  {/* <div className={`p-3 rounded-xl border text-center ${isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <span className="block text-2xl font-black text-blue-500">900+</span>
                    <span className="text-2xs text-slate-500 uppercase tracking-wider">DSA Solved</span>
                  </div> */}
                  
                </div>

                {/* CTAs Row */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    id="hero-cta-resume"
                    href={portfolioData.personalInfo.resumeUrl}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all duration-200"
                  >
                    <Download size={16} /> View Resume
                  </a>
                  <a
                    id="hero-cta-github"
                    href={portfolioData.personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a
                    id="hero-cta-linkedin"
                    href={portfolioData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a
                    id="hero-cta-contact"
                    href="#contact"
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm border transition-all duration-200 ${
                      isDark ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white animate-pulse' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Mail size={16} /> Contact
                  </a>
                </div>
              </div>

              {/* Right Column Profile Image Avatar */}
             <div className="md:col-span-5 flex justify-center">
  <div className="relative group">
    <div className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-opacity duration-300 bg-gradient-to-tr from-cyan-500 to-blue-600"></div>
    <div className={`relative p-2 rounded-full border ball-bounce ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
      <img
        id="hero-avatar-image"
        src={portfolioData.personalInfo.avatar}
        alt={portfolioData.personalInfo.name}
        className="w-92 h-92 sm:w-100 sm:h-100 object-cover rounded-full"
      />
      <div className={`absolute bottom-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-xl border shadow-lg ${
        isDark ? 'bg-slate-950/90 border-slate-800 text-slate-200' : 'bg-white/95 border-slate-200 text-slate-800'
      }`}>
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-xs font-semibold">Active Developer</span>
      </div>
    </div>
  </div>
</div>

<style>{`
  @keyframes ballBounce {
    0%   { transform: translateY(0); animation-timing-function: ease-in; }
    22%  { transform: translateY(-30px); animation-timing-function: ease-in; }
    50%  { transform: translateY(0); animation-timing-function: ease-out; }
    62%  { transform: translateY(-20px); animation-timing-function: ease-in; }
    80%  { transform: translateY(0); animation-timing-function: ease-out; }
    90%  { transform: translateY(-10px); animation-timing-function: ease-in; }
    100% { transform: translateY(0); }
  }
  .ball-bounce {
    animation: ballBounce 5.6s infinite;
    will-change: transform;
  }
`}</style>

            </div>
          </div>
        </section>

        {/* SECTION 2: ABOUT ME */}
        <section id="about" className={`py-20 border-t ${isDark ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/50 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                About Me
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                A deep dive into my professional goals, academic history, and background.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Bio Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className={`p-6 sm:p-8 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <h3 className="text-lg font-bold text-cyan-500 flex items-center gap-2 mb-4">
                    <Briefcase size={18} /> Career Objective
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    {portfolioData.personalInfo.careerObjective}
                  </p>
                </div>

                <div className={`p-6 sm:p-8 rounded-2xl border ${isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <h3 className="text-lg font-bold text-blue-500 flex items-center gap-2 mb-4">
                    <BookOpen size={18} /> Core Academic Focus
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    As a computer science student, my primary academic focus is centered on scalable architectures, structural optimization, and intelligent systems. I spend much of my free time benchmarking system efficiencies, analyzing complex algorithms on LeetCode, and developing robust full-stack applications.
                  </p>
                </div>
              </div>

              {/* Right Education Column */}
              <div className="lg:col-span-6 space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 mb-2">
                  <Award size={20} className="text-cyan-500" /> Education History
                </h3>
                
                <div className="space-y-6 relative before:absolute before:top-2 before:bottom-2 before:left-3.5 before:w-0.5 before:bg-slate-800">
                  {portfolioData.education.map((edu, idx) => (
                    <div key={idx} id={`edu-card-${idx}`} className="relative pl-10 group">
                      {/* Timeline dot */}
                      <span className={`absolute left-2.5 top-2.5 w-2.5 h-2.5 rounded-full ring-4 transition-all group-hover:scale-125 ${
                        isDark ? 'bg-cyan-500 ring-cyan-500/10' : 'bg-cyan-600 ring-cyan-100'
                      }`}></span>
                      
                      <div className={`p-6 rounded-2xl border transition-all duration-200 hover:shadow-md ${
                        isDark ? 'bg-slate-900/20 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 hover:border-slate-300'
                      }`}>
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {edu.degree}
                          </h4>
                          <span className={`text-2xs font-semibold px-2 py-1 rounded-full ${
                            isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-cyan-100 text-cyan-800'
                          }`}>
                            {edu.period}
                          </span>
                        </div>
                        
                        <p className={`text-xs font-semibold mb-3 text-cyan-500`}>
                          {edu.institution} <span className="mx-1">•</span> <span className="text-emerald-500">{edu.grade}</span>
                        </p>
                        
                        <ul className="space-y-1.5">
                          {edu.details.map((detail, dIdx) => (
                            <li key={dIdx} className={`text-xs flex items-start gap-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                              <ChevronRight size={12} className="text-slate-500 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: SKILLS */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Technical Skills
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                A taxonomy of my core competencies, framework familiarity, tools, and computer science concepts.
              </p>
            </div>

            {/* Grid for categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Category: Programming Languages */}
              <div id="skills-group-languages" className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="p-2 rounded-lg bg-orange-500/10 text-orange-500">
                    <Code size={18} />
                  </span>
                  <h3 className="text-base font-bold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills.filter(s => s.category === 'languages').map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-orange-500/10 text-orange-200' : 'bg-orange-100 text-orange-700'}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Frameworks & Libraries */}
              <div id="skills-group-frameworks" className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500">
                    <Layers size={18} />
                  </span>
                  <h3 className="text-base font-bold">Frameworks & DBs</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills.filter(s => s.category === 'frameworks').map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-cyan-500/10 text-cyan-200' : 'bg-cyan-100 text-cyan-700'}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Tools & VCS */}
              <div id="skills-group-tools" className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Cpu size={18} />
                  </span>
                  <h3 className="text-base font-bold">Tools & Systems</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills.filter(s => s.category === 'tools').map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-emerald-500/10 text-emerald-200' : 'bg-emerald-100 text-emerald-700'}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Category: Core CS Concepts */}
              <div id="skills-group-concepts" className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Database size={18} />
                  </span>
                  <h3 className="text-base font-bold">Core CS Concepts</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills.filter(s => s.category === 'concepts').map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-blue-500/10 text-blue-200' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* {DS} */}
              <div id="skills-group-concepts" className={`p-6 rounded-2xl border ${isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <Database size={18} />
                  </span>
                  <h3 className="text-base font-bold">Data Science</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {portfolioData.skills.filter(s => s.category === 'New').map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-semibold ${isDark ? 'bg-blue-500/10 text-blue-200' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: PROJECTS */}
        <section id="projects" className={`py-20 border-t ${isDark ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/50 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Projects Showcase
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Review standard card highlights and project summaries below.
              </p>
            </div>

            {/* Filter Tabs for Project Categories */}
            <div className="flex justify-center gap-2 mb-10 flex-wrap">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'web', label: 'Web Apps' },
                { id: 'game', label: 'Interactive Games' },
                { id: 'system', label: 'System Portals' }
              ].map(tab => (
                <button
                  key={tab.id}
                  id={`project-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeTab === tab.id 
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/10' 
                      : isDark ? 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800' : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className={`group rounded-3xl border overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 ${
                    isDark ? 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700 hover:shadow-cyan-950/20 hover:shadow-xl' : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-slate-200/50 hover:shadow-xl'
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    {project.featured && (
                      <span className="absolute top-3 left-3 bg-cyan-500 text-white text-3xs font-extrabold uppercase px-2 py-1 rounded-md tracking-wider">
                       
                      </span>
                    )}
                    {/* <span className={`absolute bottom-3 right-3 text-3xs font-bold uppercase px-2 py-1 rounded-md ${
                      project.category === 'game' ? 'bg-orange-500 text-white' : project.category === 'web' ? 'bg-cyan-500 text-white' : 'bg-blue-600 text-white'
                    }`}>
                      {project.category}
                    </span> */}
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4 pt- border-t border-slate-800/20">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className={`text-3xs font-semibold px-2 py-0.5 rounded-md ${
                              isDark ? 'bg-slate-950 text-slate-400 border border-slate-800' : 'bg-slate-100 text-slate-600 border border-slate-200'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-semibold text-2xs hover:opacity-90 transition-all"
                        >
                          <Play size={12} /> {project.id === 'hand-cricket' ? 'Live Demo' : 'Live Demo'}
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center justify-center p-2 rounded-lg border transition-all ${
                            isDark ? 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800' : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                          }`}
                        >
                          <Github size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Certifications
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Professional certifications, specializations, and verified skill achievements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolioData.certificates.map((cert, idx) => (
                <div
                  key={idx}
                  id={`cert-card-${idx}`}
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 hover:shadow-xl ${
                    isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-44 object-cover"
                  />
                  <div className={`p-5 ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-900'}`}>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-bold leading-snug line-clamp-2">
                          {cert.name}
                        </h3>
                        <p className="text-2xs font-semibold text-cyan-400 mt-1">{cert.organization}</p>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-800/10 flex items-center justify-between">
                      <span className="text-4xs font-mono text-slate-500">{cert.date}</span>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-3xs font-extrabold text-cyan-400 hover:underline"
                      >
                        View Certificate <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: CODING PROFILES */}
        <section id="coding-profiles" className={`py-20 border-t ${isDark ? 'bg-slate-950/40 border-slate-100' : 'bg-slate-50/50 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Competitive Coding Ecosystem
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Tracking active metrics and problem-solving benchmarks across major competitive platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 position-center">
              {portfolioData.codingProfiles.map((profile, idx) => (
                <div
                  key={idx}
                  id={`coding-profile-${profile.platform.toLowerCase()}`}
                  className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/40 ${
                    isDark ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <span className={`text-xs font-black uppercase px-2.5 py-1 rounded-lg ${
                        profile.platform === 'LeetCode' ? 'bg-amber-500/10 text-amber-200' :
                        profile.platform === 'GeeksforGeeks' ? 'bg-emerald-500/10 text-emerald-200' :
                        profile.platform === 'HackerRank' ? 'bg-cyan-500/10 text-cyan-500' : 'bg-rose-500/10 text-rose-500'
                      }`}>
                        {profile.platform}
                      </span>
                      
                    </div>

                    <span className="text-4xs font-mono text-slate-500">{profile.Achievement}</span>

                    <div className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="text-3xs text-slate-500 uppercase tracking-widest">Problems Solved</span>
                        <span className="text-lg font-black text-white">{profile.solvedCount}+</span>
                      </div>
                      
                      {/* Solved Meter bar chart */}
                      {/* <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${
                          profile.platform === 'LeetCode' ? 'bg-amber-500' :
                          profile.platform === 'GeeksforGeeks' ? 'bg-emerald-500' :
                          profile.platform === 'HackerRank' ? 'bg-cyan-500' : 'bg-rose-500'
                        }`} style={{ width: `${(profile.solvedCount / 600) * 100}%` }}></div>
                      </div> */}

                      {/* <p className={`text-4xs font-mono ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        Score: {profile.rating}
                      </p> */}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/20 flex items-center justify-between">
                    {/* <span className="text-5xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2 py-0.5 rounded font-bold uppercase">{profile.badge}</span> */}
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-4xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1"
                    >
                      Profile <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: GITHUB ENVIRONMENT */}
        <section id="github" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                GitHub Repository Ecosystem
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Visualizing language contributions, activity metrics, and top operational structures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              {/* Left Column: Repository details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">Featured Registries</h3>
                  <a href={portfolioData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-cyan-400 hover:underline inline-flex items-center gap-1">
                    Explore all <ChevronRight size={14} />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {portfolioData.githubProfile.topRepos.map((repo, idx) => (
                    <div
                      key={idx}
                      id={`github-repo-${idx}`}
                      className={`p-5 rounded-2xl border flex flex-col justify-between ${
                        isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                      }`}
                    >
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-extrabold font-mono text-cyan-400 truncate max-w-44">
                            {repo.name}
                          </h4>
                          {/* <span className="text-5xs bg-slate-800 px-2 py-0.5 rounded font-bold uppercase text-slate-400">Public</span> */}
                        </div>
                        <p className={`text-4xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {repo.description}
                        </p>
                      </div>

                      <div className="mt-6 flex justify-between items-center text-5xs font-mono text-slate-500">
                        <div className="flex items-center gap-1.5">
                          {/* <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.language === 'JavaScript' ? '#f1e05a' : '#f34b7d' }}></span> */}
                          {/* <span>{repo.language}</span> */}
                        </div>
                        <div className="flex gap-4">
                          {/* <span>★ {repo.stars}</span>
                          <span>⑂ {repo.forks}</span> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Stats Panel */}
              <div className="lg:col-span-4 flex flex-col justify-between">
                <div className={`p-6 rounded-3xl border flex-1 flex flex-col justify-between ${
                  isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Language Distribution</h3>
                      <Terminal size={14} className="text-cyan-500 animate-pulse" />
                    </div>

                    {/* Stacked Multi-Color Segment Meter Bar */}
                    <div className="w-full h-4 rounded-full overflow-hidden flex mb-6">
                      {portfolioData.githubProfile.languages.map((lang, idx) => (
                        <div
                          key={idx}
                          style={{ 
                            width: `${lang.percentage}%`,
                            backgroundColor: lang.color
                          }}
                          title={`${lang.name}: ${lang.percentage}%`}
                        />
                      ))}
                    </div>

                    {/* Legends checklist */}
                    <div className="space-y-2.5">
                      {portfolioData.githubProfile.languages.map((lang, idx) => (
                        <div key={idx} className="flex justify-between items-center text-4xs font-mono">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                            <span className="text-slate-300 font-bold">{lang.name}</span>
                          </div>
                          {/* <span className="text-slate-500">{lang.percentage}%</span> */}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800/20 grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/30">
                      <span className="block text-base font-black text-white">{portfolioData.githubProfile.followers}</span>
                      <span className="text-5xs text-slate-500 uppercase tracking-widest">Followers</span>
                    </div>
                    <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/30">
                      <span className="block text-base font-black text-cyan-400">{portfolioData.githubProfile.totalStars}</span>
                      <span className="text-5xs text-slate-500 uppercase tracking-widest">Stars Gained</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 8: RESUME PREVIEW */}
        <section id="resume" className={`py-20 border-t ${isDark ? 'bg-slate-950/40 border-slate-900' : 'bg-slate-50/50 border-slate-200'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Professional Resume
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Review my educational metrics, technical timeline, and export a localized copy directly.
              </p>
            </div>

            {/* Document preview block */}
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-end gap-3 mb-6">
                <button
                  id="print-resume-button"
                  onClick={printResume}
                  className="flex items-center gap-1.5 py-2 px-4 rounded-xl border border-slate-800 hover:border-cyan-500 text-xs font-semibold text-slate-300 hover:text-white transition-all bg-slate-950"
                >
                  <FileText size={14} /> Print / Export PDF
                </button>
                <a
                  id="download-resume-button"
                  href={portfolioData.personalInfo.resumeUrl}
                  className="flex items-center gap-1.5 py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg"
                >
                  <Download size={14} /> Download Resume File
                </a>
              </div>

              {/* Sheet preview representation */}
              <div id="resume-preview-sheet" className="p-8 sm:p-12 rounded-3xl border shadow-2xl bg-white text-slate-900 font-sans leading-relaxed">
                <div className="border-b-2 border-slate-800 pb-6 flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">
                      {portfolioData.personalInfo.name}
                    </h3>
                    <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mt-1">
                      {portfolioData.personalInfo.title}
                    </p>
                  </div>
                  <div className="text-xs text-slate-600 text-right space-y-1 font-mono">
                    <p className="flex items-center gap-1 justify-end"><Mail size={12} /> {portfolioData.personalInfo.email}</p>
                    <p className="flex items-center gap-1 justify-end"><Phone size={12} /> {portfolioData.personalInfo.phone}</p>
                    <p className="flex items-center gap-1 justify-end"><MapPin size={12} /> {portfolioData.personalInfo.location}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8">
                  {/* Left Resume column */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">Professional Objective</h4>
                      <p className="text-xs text-slate-600">{portfolioData.personalInfo.careerObjective}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">Academic Background</h4>
                      <div className="space-y-4">
                        {portfolioData.education.map((edu, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between font-bold text-xs text-slate-800">
                              <h5>{edu.degree}</h5>
                              <span>{edu.period}</span>
                            </div>
                            <p className="text-xs font-bold text-cyan-600">{edu.institution} — <span className="text-emerald-600">{edu.grade}</span></p>
                            <ul className="list-disc list-inside space-y-1 text-2xs text-slate-500 pl-2">
                              {edu.details.map((detail, dIdx) => (
                                <li key={dIdx}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">Operational Projects Highlights</h4>
                      <div className="space-y-4">
                        {portfolioData.projects.slice(0, 3).map((project, idx) => (
                          <div key={idx} className="space-y-1">
                            <div className="flex justify-between font-bold text-xs text-slate-800">
                              <h5>{project.name} {idx === 0 && ' (Top Year 1 Project)'}</h5>
                              <span className="text-2xs text-slate-500 font-mono">[{project.techStack.slice(0, 3).join(', ')}]</span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">{project.longDescription || project.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Resume column */}
                  <div className="md:col-span-4 space-y-6 border-l border-slate-200 pl-0 md:pl-6">
                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">Skill Matrix</h4>
                      
                      <div className="space-y-3">
                        {['languages', 'frameworks', 'tools', 'concepts'].map(cat => (
                          <div key={cat} className="space-y-1">
                            <span className="text-4xs font-black uppercase tracking-wider text-slate-400 block capitalize">{cat}</span>
                            <div className="flex flex-wrap gap-1">
                              {portfolioData.skills.filter(s => s.category === cat).map((skill, idx) => (
                                <span key={idx} className="text-4xs bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded text-slate-700 font-medium">
                                  {skill.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">Verified Credentials</h4>
                      <ul className="space-y-2 text-2xs text-slate-600">
                        {portfolioData.certificates.slice(0, 3).map((c, idx) => (
                          <li key={idx} className="leading-tight">
                            <strong>{c.name}</strong> <br />
                            <span className="text-3xs text-slate-400">{c.organization} ({c.date})</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">Coding Ecosystem</h4>
                      <ul className="space-y-1.5 text-2xs text-slate-600 font-mono">
                        {portfolioData.codingProfiles.map((p, idx) => (
                          <li key={idx} className="flex justify-between">
                            <span>{p.platform}:</span>
                            <strong className="text-slate-800">{p.solvedCount} Solved</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 9: CONTACT */}
        <section id="contact" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Contact & Collaborations
              </h2>
              <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>
              <p className={`mt-4 text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                Get in touch for internships, projects, competitive training collaborations, or professional queries.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Info Column */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div className={`p-6 sm:p-8 rounded-3xl border flex-1 space-y-8 ${
                  isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Connect Directly</h3>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Feel free to ping me on phone, drop a mail, or check my professional handles. I usually reply within a few hours.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <span className="p-3 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                        <Mail size={18} />
                      </span>
                      <div>
                        <span className="block text-4xs uppercase tracking-widest text-slate-500">Email Address</span>
                        <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">{portfolioData.personalInfo.email}</span>
                      </div>
                    </a>

                    <a
                      href={`tel:${portfolioData.personalInfo.phone}`}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <span className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                        <Phone size={18} />
                      </span>
                      <div>
                        <span className="block text-4xs uppercase tracking-widest text-slate-500">Phone Number</span>
                        <span className="text-xs font-bold text-slate-200 group-hover:text-blue-400 transition-colors">{portfolioData.personalInfo.phone}</span>
                      </div>
                    </a>

                    <div className="flex items-center gap-4">
                      <span className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                        <MapPin size={18} />
                      </span>
                      <div>
                        <span className="block text-4xs uppercase tracking-widest text-slate-500">Location Base</span>
                        <span className="text-xs font-bold text-slate-200">{portfolioData.personalInfo.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800/20 flex gap-4">
                    <a
                      href={portfolioData.personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex-1 text-center font-bold text-xs flex justify-center items-center gap-2"
                    >
                      <Github size={14} /> GitHub
                    </a>
                    <a
                      href={portfolioData.personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all flex-1 text-center font-bold text-xs flex justify-center items-center gap-2"
                    >
                      <Linkedin size={14} /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="lg:col-span-7">
                <div className={`p-6 sm:p-8 rounded-3xl border ${
                  isDark ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <h3 className="text-lg font-bold text-white mb-6">Dispatch Message Hub</h3>
                  
                  {isSubmitted ? (
                    <div className="text-center py-10 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                        <CheckCircle size={32} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-slate-200">Message successfully registered!</h4>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-sm mx-auto">
                          Thank you for connecting! Your message query has been securely locked in our offline client dispatch database.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-4xs font-extrabold text-slate-400 uppercase tracking-widest block">Your Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Firstname Lastname"
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 outline-none focus:border-cyan-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-4xs font-extrabold text-slate-400 uppercase tracking-widest block">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="adarsh@gmail.com"
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full text-xs px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 outline-none focus:border-cyan-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-4xs font-extrabold text-slate-400 uppercase tracking-widest block">Subject Matter</label>
                        <input
                          type="text"
                          required
                          placeholder="Project collaboration query..."
                          value={contactForm.subject}
                          onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 outline-none focus:border-cyan-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-4xs font-extrabold text-slate-400 uppercase tracking-widest block">Your Message Body</label>
                        <textarea
                          rows="4"
                          required
                          placeholder="Describe details of project requirement, competitive team requests, or feedback..."
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          className="w-full text-xs px-4 py-3 rounded-xl border border-slate-800 bg-slate-900 text-slate-200 outline-none focus:border-cyan-500 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/15"
                      >
                        <Send size={14} /> Send Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-12 transition-colors duration-200 ${isDark ? 'bg-slate-950 border-slate-900' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex justify-center items-center gap-2">
            <span className="p-2 rounded-lg text-white bg-gradient-to-tr from-cyan-500 to-blue-600">
              <Terminal size={14} />
            </span>
            <span className={`font-bold tracking-tight text-sm ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Adarsh<span className="text-cyan-500">.Dev()</span>
            </span>
          </div>

          <p className={`text-4xs uppercase tracking-widest max-w-sm mx-auto ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            Built using fully responsive React, Tailwind, and custom vector graphic arrays. All code structures optimized for immediate hosting.
          </p>

          <div className="flex justify-center gap-6 text-slate-500">
            <a href="#hero" className="hover:text-cyan-400 transition-colors text-2xs">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors text-2xs">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors text-2xs">Projects</a>
            <a href="#resume" className="hover:text-cyan-400 transition-colors text-2xs">Resume</a>
          </div>

          <p className="text-5xs font-mono text-slate-600">
            © {new Date().getFullYear()} AdarshDev. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
