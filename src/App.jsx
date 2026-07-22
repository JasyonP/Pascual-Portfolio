import React, { useEffect, useState } from 'react'
import profileImage from './assets/profile.jpg'
import ProjectsPage from './pages/ProjectsPage'
import ExperiencePage from './pages/ExperiencePage'
import SkillsPage, { SkillCards } from './pages/SkillsPage'
import CertificationsPage from './pages/CertificationsPage'

const navItems = [
  { label: 'Home', icon: 'home', action: { type: 'home' } },
  { label: 'About Me', icon: 'user', action: { type: 'anchor', target: 'about' } },
  { label: 'Projects', icon: 'folder', action: { type: 'anchor', target: 'projects' } },
  { label: 'Experience', icon: 'briefcase', action: { type: 'anchor', target: 'experience' } },
  { label: 'Skills', icon: 'grid', action: { type: 'anchor', target: 'skills' } },
  { label: 'Contact', icon: 'mail', action: { type: 'anchor', target: 'contact' } },
]

const focusAreas = [
  'Responsive layouts',
  'UI implementation',
  'Clean component structure',
  'Modern System interfaces',
]

const projectCards = [
  {
    title: 'E-HIRAM',
    type: 'Capstone Project',
    description: 'a web-based equipment borrowing and inventory management system featuring equipment request and approval workflows, inventory tracking, role based access control, automated record keeping, and real time monitoring to improve operational efficiency and asset accountability.',
  },
  {
    title: 'Student Management System',
    type: 'Java Project',
    description: 'Developed a Java-based Student Management System using Object Oriented Programming principles and array-based data storage, implementing student record management with CRUD operations, data validation, and a menu driven interface to organize and manage student information efficiently.',
  },
  {
    title: 'Space Shooter Game',
    type: 'Python Project',
    description: 'Developed a 2D Space Shooter game using Python and Pygame, applying Object Oriented Programming principles to implement core game mechanics, including a main menu, ship selection, player health system, score tracking, enemy interactions, and gameplay logic.',
  },
]

const mainProjects = [
  {
    title: 'E-HIRAM',
    type: 'Capstone Project',
    image: 'assets/images/projects/ehiram/ehiram.png',
    description:
      'A Web-based Electronic Hardware Inventory, Request, and Asset Management System for the Management Information System Department of Subic Bay Metropolitan Authority.',
    stack: ['React', 'Laravel', 'MySQL', 'Tailwind CSS', 'Javascript'],
    images: [
    '/assets/images/projects/ehiram/ehiram.png',
    '/assets/images/projects/ehiram/ehiram1.png',
    '/assets/images/projects/ehiram/ehiram2.png',
    '/assets/images/projects/ehiram/ehiram3.png',
    '/assets/images/projects/ehiram/ehiram4.png',
    '/assets/images/projects/ehiram/ehiram5.png',
    '/assets/images/projects/ehiram/ehiram6.png',
    '/assets/images/projects/ehiram/ehiram7.png',
  ],
  },
   {
    title: 'Stock Monitoring System',
    type: 'Web Application',
    image: '/assets/images/projects/hsosms.jpg',
    description:
      'A system interface for employee management, attendance tracking, and admin actions.',
    stack: ['Laravel', 'Tailwind', 'Php', 'MySql', 'Javascipt'],
     images: [
    '/assets/images/projects/hsosms.jpg',
    '/assets/images/projects/hsosms2.jpg'
  ],
  },
  {
    title: 'HR Management System',
    type: 'Web Application',
    image: '/assets/images/projects/hrms.jpg',
    description:
      'A system interface for employee management, attendance tracking, and admin actions.',
    stack: ['Laravel', 'Php', 'Bootstrap', 'MySql', 'Javascipt'],
     images: [
    '/assets/images/projects/hrms.jpg',
    '/assets/images/projects/hrms2.jpg'
  ],
  },
  {
    title: 'Patient and Inventory Management System',
    type: 'Web Application',
    image: '/assets/images/projects/pims.jpg',
    description:
      'A responsive portfolio focused on clean design, smooth animations, and project storytelling.',
    stack: ['CodeIgniter', 'Php', 'Bootstrap', 'MySql', 'Javascript'],
     images: [
    '/assets/images/projects/pims.jpg'
  ],
  },
  {
    title: 'Student Management System',
    type: 'Desktop Application',
    image: '/assets/images/projects/javaproject.jpg',
    description:
      'A desktop application focused on data management and practical workflows.',
    stack: ['Java', 'Java FX'],
     images: [
    '/assets/images/projects/javaproject/java.png',
    '/assets/images/projects/javaproject/java1.png',
    '/assets/images/projects/javaproject/java2.png',
    '/assets/images/projects/javaproject/java3.png',
    '/assets/images/projects/javaproject/java4.png',
    '/assets/images/projects/javaproject/java5.png',
    '/assets/images/projects/javaproject/java6.png',
  ],
  },
  {
    title: 'Space Shooter Game',
    type: 'Game Application',
    image: '/assets/images/projects/pythongame/cosmos.png',
    description:
      'A desktop application focused on data management and practical workflows.',
    stack: ['Python', 'Pygame'],
     images: [
    '/assets/images/projects/pythongame/cosmos.png',
    '/assets/images/projects/pythongame/cosmos1.png',
    '/assets/images/projects/pythongame/cosmos2.png',
    '/assets/images/projects/pythongame/cosmos3.png'
  ],
  },
]

const experienceEntries = [
  {
    period: "May 2025 - October 2025",
    type: "On-the-Job Training (500 Hours)",
    role: "On-the-job Trainee",
    company: "Management Information System Office",
    organization: "Subic Bay Metropolitan Authority (SBMA)",
    location: "Subic Bay Freeport Zone, Philippines",

    description:
      "Completed a 500-hour On-the-Job Training program supporting daily IT operations, hardware asset management, and technical service requests.",

    highlights: [
      "Organized and maintained hard drive inventory by department.",
      "Reformatted BitLocker-encrypted hard drives for secure redeployment.",
      "Processed and coordinated IT job orders from multiple departments.",
      "Facilitated the transfer of technical documents and request forms.",
      "Supported daily IT operations and responded to service requests.",
      "Maintained records of IT assets, job requests, and document transfers."
    ]
  }
]

const skillGroups = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', level: 'Learning', icon: 'javascript' },
      { name: 'HTML', level: 'Proficient', icon: 'html5' },
      { name: 'CSS', level: 'Proficient', icon: 'css3' },
      { name: 'Tailwind', level: 'Comfortable', icon: 'tailwind' },
      { name: 'Bootstrap', level: 'Comfortable', icon: 'bootstrap' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'MySQL', level: 'Proficient', icon: 'mysql' },
      { name: 'Python', level: 'Learning', icon: 'python' },
      { name: 'Node.js', level: 'Learning', icon: 'nodejs' },
      { name: 'Laravel', level: 'Learning', icon: 'laravel' },
      { name: 'Php', level: 'Learning', icon: 'php' },
    ],
  },
  {
    category: 'Design & UI',
    items: [
      { name: 'Figma', level: 'Comfortable', icon: 'figma' },
      { name: 'Canva', level: 'Proficient', icon: 'canva' },
      { name: 'Photoshop', level: 'Comfortable', icon: 'photoshop' },
      { name: 'Illustrator', level: 'Comfortable', icon: 'illustrator' },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', level: 'Comfortable', icon: 'git' },
      { name: 'GitHub', level: 'Comfortable', icon: 'github' },
      { name: 'VS Code', level: 'Proficient', icon: 'vscode' },
      { name: 'GitHub Copilot', level: 'Comfortable', icon: 'githubcopilot' },
      { name: 'Codex AI', level: 'Proficient', icon: 'chatgpt' },
      { name: 'Cursor AI', level: 'Proficient', icon: 'cursorai' },
      { name: 'Perplexity AI', level: 'Proficient', icon: 'perplexity' },
    ],
  },
  {
    category: 'Other Tools',
    items: [
      
      { name: 'CapCut', level: 'Comfortable', icon: 'capcut' },
      { name: 'Flutterflow', level: 'Comfortable', icon: 'flutterflow' },
      { name: 'SketchUp', level: 'Learning', icon: 'sketchup' },
    ],
  },
]
const featuredSkills = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'HTML', icon: 'html5' },
  { name: 'CSS', icon: 'css3' },
  { name: 'React', icon: 'react' },
  { name: 'Tailwind', icon: 'tailwind' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Python', icon: 'python' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'VS Code', icon: 'vscode' },
  { name: 'GitHub Copilot', icon: 'githubcopilot' },
  { name: 'Bootstrap', icon: 'bootstrap' },
]
const homeSectionIds = ['home', 'about', 'projects', 'experience', 'skills', 'contact']

const sidebarHighlights = {
  featured: ['Capstone Project', 'Certification'],
  snapshot: [
    {
      label: 'Frontend Developer',
      title: 'Frontend Focus',
      description: 'I create polished interfaces with thoughtful structure, smooth interaction, and a modern visual language that feels clear from the first screen.',
      accent: 'UI systems • Interaction details • Modern layouts',
      ctaLabel: 'Explore projects',
      ctaHref: '#projects',
    },
    {
      label: 'Responsive UI',
      title: 'Responsive Experience',
      description: 'I design layouts that adapt elegantly across mobile, tablet, and desktop, keeping usability and visual balance strong at every screen size.',
      accent: 'Mobile-ready • Flexible layouts • Clean spacing',
      ctaLabel: 'See experience',
      ctaHref: '#experience',
    },
    {
      label: 'Open for Projects',
      title: 'Available for New Work',
      description: 'If you need a thoughtful website, product interface, or collaborative build, I’d be glad to help turn your idea into a polished experience.',
      accent: 'Freelance • Team projects • Website builds',
      ctaLabel: 'Get in touch',
      ctaHref: '#contact',
    },
  ],
}

const socialIconFiles = {
  github: `${import.meta.env.BASE_URL}assets/images/icons/github.png`,
  linkedin: `${import.meta.env.BASE_URL}assets/images/icons/linkedin.png`,
  gmail: `${import.meta.env.BASE_URL}assets/images/icons/gmail.png`,
}


function AnimatedHeroBackdrop() {
  return (
    <div className="section-backdrop section-backdrop--hero" aria-hidden="true">
      <span className="backdrop-static-glow backdrop-static-glow--one" />
      <span className="backdrop-static-glow backdrop-static-glow--two" />
      <span className="backdrop-grid" />
    </div>
  )
}

function Icon({ name }) {
  const props = {
    className: 'portfolio-icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const icons = {
    home: (
      <svg {...props}>
        <path d="m4 11 8-7 8 7" />
        <path d="M6 10v10h12V10" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
    user: (
      <svg {...props}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </svg>
    ),
    folder: (
      <svg {...props}>
        <path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
      </svg>
    ),
    briefcase: (
      <svg {...props}>
        <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
        <rect x="3" y="6" width="18" height="14" rx="2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    ),
    grid: (
      <svg {...props}>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    ),
    mail: (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  }

  return icons[name]
}

function Sidebar({ activeSection, isCollapsed, onGoHome, onNavigate, onToggle, onSnapshotSelect, selectedSnapshot }) {
  return (
    <aside className={`portfolio-sidebar ${isCollapsed ? 'is-collapsed' : ''}`}>
      <button
        type="button"
        className="sidebar-toggle"
        onClick={onToggle}
        aria-label={isCollapsed ? 'Open sidebar' : 'Close sidebar'}
        aria-expanded={!isCollapsed}
      >
        <span className={`toggle-icon ${isCollapsed ? 'is-collapsed' : ''}`} aria-hidden="true">
          {isCollapsed ? (
            <svg className="toggle-icon__svg" viewBox="0 0 24 24" fill="none">
              <path
                d="M2 12c2.2-4.2 6.1-7 10-7s7.8 2.8 10 7c-2.2 4.2-6.1 7-10 7S4.2 16.2 2 12Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          ) : (
            <>
              <span className="toggle-icon__line toggle-icon__line--top" />
              <span className="toggle-icon__line toggle-icon__line--middle" />
              <span className="toggle-icon__line toggle-icon__line--bottom" />
            </>
          )}
        </span>
        <span className="toggle-tooltip">{isCollapsed ? 'Open sidebar' : 'Close sidebar'}</span>
      </button>

      <div className="sidebar-scroll">
        <div className="sidebar-brand">
          <a href="/" className="brand-mark" onClick={onGoHome}>JP</a>
          <div className="brand-copy">
            <p className="brand-name">Jayson B. Pascual</p>
            <p className="brand-role">Frontend Developer</p>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Portfolio sections">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href="/"
              className={`nav-link ${activeSection === item.action.target || (item.action.type === 'home' && activeSection === 'home') ? 'is-active' : ''}`}
              onClick={(event) => onNavigate(event, item.action)}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <Icon name={item.icon} />
              <span className="nav-label">{item.label}</span>
              <span className="rail-tooltip">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-featured">
          <div className="sidebar-group">
            <p className="sidebar-kicker">Featured</p>
            <div className="sidebar-chip-list">
              {sidebarHighlights.featured.map((item, index) => (
                item === 'Certification' ? (
                  <a
                    key={item}
                    href="/"
                    className={`sidebar-chip ${activeSection === 'certifications' ? 'is-active' : ''}`}
                    onClick={(event) => onNavigate(event, { type: 'page', target: 'certifications' })}
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {item}
                  </a>
                ) : (
                  <a
                    key={item}
                    href="/"
                    className="sidebar-chip"
                    onClick={(event) => onNavigate(event, { type: 'anchor', target: 'projects' })}
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {item}
                  </a>
                )
              ))}
            </div>
          </div>

          <div className="sidebar-group">
            <p className="sidebar-kicker">Quick Snapshot</p>
            <div className="sidebar-chip-list">
              {sidebarHighlights.snapshot.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  className={`sidebar-chip sidebar-chip--static ${selectedSnapshot?.label === item.label ? 'is-active' : ''}`}
                  onClick={() => onSnapshotSelect(item)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a href="mailto:hello@example.com" className="sidebar-cta">Let's Work Together</a>
    </aside>
  )
}

function SnapshotModal({ item, onClose, onNavigate }) {
  if (!item) return null

  const isMailto = item.ctaHref?.startsWith('mailto:')

  const handleCtaClick = (event) => {
    if (isMailto) return
    event.preventDefault()
    onClose()
    onNavigate(event, { type: 'anchor', target: item.ctaHref.replace('#', '') })
  }

  return (
    <div className="snapshot-modal" role="dialog" aria-modal="true" aria-labelledby="snapshot-modal-title" onClick={onClose}>
      <div className="snapshot-modal__panel" onClick={(event) => event.stopPropagation()}>
        <span className="snapshot-modal__glow" aria-hidden="true" />
        <button type="button" className="snapshot-modal__close" onClick={onClose} aria-label="Close highlight details">
          ×
        </button>

        <p className="snapshot-modal__eyebrow">{item.title}</p>
        <h3 id="snapshot-modal-title" className="snapshot-modal__title">{item.label}</h3>
        <p className="snapshot-modal__description">{item.description}</p>

        <div className="snapshot-modal__accent">
          <span>{item.accent}</span>
        </div>

        {item.ctaHref ? (
          <a className="button primary snapshot-modal__action" href={item.ctaHref} onClick={handleCtaClick}>
            {item.ctaLabel}
          </a>
        ) : null}
      </div>
    </div>
  )
}

function MobileHeader({ activeSection, isMenuOpen, onGoHome, onNavigate, onToggleMenu, onCloseMenu }) {
  return (
    <>
      <header className="mobile-header">
        <a href="/" className="brand-mark" onClick={onGoHome}>JP</a>
        <div>
          <p className="mobile-name">Jayson Pascual</p>
          <p className="mobile-role">Portfolio</p>
        </div>
        <button
          type="button"
          className={`mobile-menu-button ${isMenuOpen ? 'is-open' : ''}`}
          onClick={onToggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu-layer ${isMenuOpen ? 'is-open' : ''}`} onClick={onCloseMenu} />

      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu-nav" aria-label="Mobile portfolio sections">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="/"
              className={`mobile-menu-link ${activeSection === item.action.target || (item.action.type === 'home' && activeSection === 'home') ? 'is-active' : ''}`}
              onClick={(event) => {
                onNavigate(event, item.action)
                onCloseMenu()
              }}
            >
              <Icon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <a href="mailto:hello@example.com" className="mobile-menu-cta" onClick={onCloseMenu}>
          Let's Work Together
        </a>
      </div>
    </>
  )
}

function HomePage({ onOpenPage }) {
  return (
    <>
      <section id="home" className="hero-section">
        <AnimatedHeroBackdrop />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer</p>
            <h1>Jayson B. Pascual</h1>
            <h2>I create modern, thoughtful digital experiences.</h2>
            <p className="hero-description">
              I'm a frontend developer focused on building clean, high-impact websites with a strong visual language and smooth interaction.
            </p>

            <div className="hero-actions">
              <div className="hero-socials" aria-label="Social links">
                <div className="social-icon-item" data-social="github">
                  <a className="social-icon-button" href="https://github.com/JasyonP" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <img className="social-icon-image" src={socialIconFiles.github} alt="" aria-hidden="true" />
                  </a>
                  <span className="social-tooltip">GitHub</span>
                </div>
                <div className="social-icon-item" data-social="linkedin">
                  <a className="social-icon-button" href="https://www.linkedin.com/in/jayson-pascual-3b9548279/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <img className="social-icon-image" src={socialIconFiles.linkedin} alt="" aria-hidden="true" />
                  </a>
                  <span className="social-tooltip">LinkedIn</span>
                </div>
                <div className="social-icon-item" data-social="gmail">
                  <a
                    className="social-icon-button"
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jaysonbpascual16@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Gmail"
                  >
                    <img className="social-icon-image" src={socialIconFiles.gmail} alt="" aria-hidden="true" />
                  </a>
                  <span className="social-tooltip">Gmail</span>
                </div>
              </div>
              <a href="#contact" className="button secondary">Contact Me</a>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="portrait-stage">
              <div className="portrait-card">
                <img src={profileImage} alt="Portrait of Jayson Pascual" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="content-section about-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2>Building interfaces that feel clear, modern, and easy to use.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm Jayson B. Pascual, Bachelor of Science in Information Technology graduate with a strong interest in web development. I have developed a strong foundation in front-end and back-end technologies through my work on independent computer science and IT projects. 
              </p>
              <p>
               My passion is using code to solve complicated problems, and I use AI as a strategic tool to speed up my development process and build effective, better, and creative digital solutions.
              </p>
            </div>

            <div className="about-panel">
              <div className="about-stat">
                <span>01</span>
                <p>Frontend-focused portfolio and system interfaces</p>
              </div>
              <div className="about-stat">
                <span>02</span>
                <p>Comfortable with React, JavaScript, HTML, and CSS</p>
              </div>
              <div className="about-stat">
                <span>03</span>
                <p>Interested in clean UI, usability, and smooth details</p>
              </div>
            </div>
          </div>

          <div className="focus-list" aria-label="Frontend focus areas">
            {focusAreas.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work built around clarity, structure, and practical use.</h2>
            <div className="page-actions">
              <button type="button" className="button secondary" onClick={() => onOpenPage('projects')}>
                View All Projects
              </button>
            </div>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="content-section experience-section">
        <div className="section-inner split-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>Hands-on practice with portfolio, school, and system-based projects.</h2>
            <div className="page-actions">
              <button type="button" className="button secondary" onClick={() => onOpenPage('experience')}>
                View Experience
              </button>
            </div>
          </div>

          <div className="timeline-list-home">
            <div className="timeline-item-home">
              <span>Current</span>
              <h3>Frontend Developer</h3>
              <p>Designing and building responsive portfolio pages, UI sections, and reusable interface patterns.</p>
            </div>
            <div className="timeline-item-home">
              <span>Projects</span>
              <h3>System Interfaces</h3>
              <p>Creating layouts for admin systems, dashboards, monitoring tools, and capstone-style workflows.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="content-section">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools and Stacks I use to build clean web interfaces.</h2>
            <p className="skills-intro">
              A quick look at my core stack and the everyday tools I work with. Visit the Skills page for the full, detailed breakdown.
            </p>
            <div className="page-actions">
              <button type="button" className="button secondary" onClick={() => onOpenPage('skills')}>
                View All Skills
              </button>
            </div>
          </div>

          <SkillCards items={featuredSkills} />
        </div>
      </section>

      <section id="contact" className="content-section contact-section">
        <div className="section-inner contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Have a website or interface idea? Let us build it clearly.</h2>
          </div>
          <a href="mailto:hello@example.com" className="button primary">Send Email</a>
        </div>
      </section>
    </>
  )
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [activeSection, setActiveSection] = useState('home')
  const [pendingAnchor, setPendingAnchor] = useState(null)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedSnapshot, setSelectedSnapshot] = useState(null)

  useEffect(() => {
    window.history.replaceState(null, '', window.location.pathname)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  useEffect(() => {
    if (currentPage !== 'home' || !pendingAnchor) return

    const frame = window.requestAnimationFrame(() => {
      if (pendingAnchor === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        document.getElementById(pendingAnchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      setPendingAnchor(null)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [currentPage, pendingAnchor])

  useEffect(() => {
    if (currentPage !== 'home') return undefined

    const sections = homeSectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!sections.length) return undefined

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.34
      let nearestSection = 'home'
      let nearestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        const isInView = rect.bottom > focusLine * 0.6 && rect.top < window.innerHeight - focusLine * 0.15

        if (!isInView) return

        const distance = Math.abs(rect.top - focusLine)

        if (distance < nearestDistance) {
          nearestDistance = distance
          nearestSection = section.id
        }
      })

      setActiveSection(nearestSection)
    }

    updateActiveSection()

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [currentPage])

  function handleNavigate(event, action) {
    event.preventDefault()
    setIsMobileMenuOpen(false)

    if (action.type === 'home') {
      setCurrentPage('home')
      setActiveSection('home')
      setPendingAnchor('home')
      return
    }

    if (action.type === 'page') {
      setCurrentPage(action.target)
      setActiveSection(action.target)
      setPendingAnchor(null)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setCurrentPage('home')
    setActiveSection(action.target)
    setPendingAnchor(action.target)
  }

  function handleGoHome(event) {
    event.preventDefault()
    setCurrentPage('home')
    setActiveSection('home')
    setIsMobileMenuOpen(false)
    setPendingAnchor('home')
    window.history.replaceState(null, '', window.location.pathname)
  }

  function openPage(page) {
    setCurrentPage(page)
    setActiveSection(page)
    setPendingAnchor(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleBackHome() {
    setCurrentPage('home')
    setActiveSection('home')
    setPendingAnchor('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleSnapshotSelect(item) {
    setSelectedSnapshot(item)
  }

  let mainContent = (
    <HomePage onOpenPage={openPage} />
  )

  if (currentPage === 'projects') {
    mainContent = <ProjectsPage projects={mainProjects} onBack={handleBackHome} />
  } else if (currentPage === 'experience') {
    mainContent = <ExperiencePage experiences={experienceEntries} onBack={handleBackHome} />
  } else if (currentPage === 'skills') {
    mainContent = <SkillsPage groups={skillGroups} onBack={handleBackHome} />
  } else if (currentPage === 'certifications') {
    mainContent = <CertificationsPage onBack={handleBackHome} />
  }

  return (
    <div className={`portfolio-shell ${isSidebarCollapsed ? 'sidebar-is-collapsed' : ''}`}>
      <Sidebar
        activeSection={activeSection}
        isCollapsed={isSidebarCollapsed}
        onGoHome={handleGoHome}
        onNavigate={handleNavigate}
        onToggle={() => setIsSidebarCollapsed((value) => !value)}
        onSnapshotSelect={handleSnapshotSelect}
        selectedSnapshot={selectedSnapshot}
      />
      <MobileHeader
        activeSection={activeSection}
        isMenuOpen={isMobileMenuOpen}
        onGoHome={handleGoHome}
        onNavigate={handleNavigate}
        onToggleMenu={() => setIsMobileMenuOpen((value) => !value)}
        onCloseMenu={() => setIsMobileMenuOpen(false)}
      />

      <main className="portfolio-main">{mainContent}</main>
      <SnapshotModal item={selectedSnapshot} onClose={() => setSelectedSnapshot(null)} onNavigate={handleNavigate} />
    </div>
  )
  
}
