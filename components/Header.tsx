'use client';

import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLogo, setShowLogo] = useState(true); // Start visible to show "MY NAME IS" at top
  const [logoText, setLogoText] = useState<'MY NAME IS' | 'KAREL' | 'GUSTIN'>('MY NAME IS');
  const [isAtTop, setIsAtTop] = useState(true); // Track if we're at the top
  const karelLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      const scrollY = window.scrollY;
      
      // Update active section
      const sections = ['hero', 'about', 'work', 'experience', 'contact'];
      let currentSectionIndex = -1;
      let newActiveSection = 'hero';
      
      sections.forEach((sectionId, index) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 200;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            newActiveSection = sectionId;
            currentSectionIndex = index;
          }
        }
      });

      setActiveSection(newActiveSection);

      // Show "My name is:" when at the very top, otherwise morph between KAREL and GUSTIN
      if (scrollY < 50) {
        // At the very top
        setLogoText('MY NAME IS');
        setShowLogo(true); // Show it at top
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
        // Show logo when hero is scrolled out of view
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // Show logo when hero is completely out of view
          setShowLogo(scrollY > heroBottom - viewportHeight);
        }

        // Morph logo text based on section (alternating)
        // hero = KAREL, about = GUSTIN, work = KAREL, experience = GUSTIN, contact = KAREL
        if (currentSectionIndex >= 0) {
          const shouldBeKarel = currentSectionIndex % 2 === 0;
          setLogoText(shouldBeKarel ? 'KAREL' : 'GUSTIN');
        }
      }

      // Toggle dark mode based on section (alternating)
      // hero = light, about = dark, work = light, experience = dark, contact = light
      const body = document.body;
      const darkSections = ['about', 'experience'];
      
      if (darkSections.includes(newActiveSection)) {
        body.classList.add('dark-mode');
      } else {
        body.classList.remove('dark-mode');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.header')?.clientHeight || 0;
      const targetPosition = section.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="header" id="header">
      <div className="container">
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
          <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
        </button>

        <div 
          ref={karelLogoRef}
          className={`header-logo ${showLogo ? 'visible' : ''}`}
        >
          <span className={`header-logo-text ${logoText === 'KAREL' ? 'karel' : logoText === 'GUSTIN' ? 'gustin' : 'my-name-is'}`} key={logoText}>
            {logoText}
          </span>
        </div>

        <nav className="nav">
          <a
            href="#work"
            className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('work');
            }}
          >
            Work
          </a>
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
          >
            About
          </a>
          <a
            href="#experience"
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}
          >
            Experience
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Contact
          </a>
        </nav>

        <div className="header-right">
          <a
            href="#contact"
            className={`status-indicator status-link magnetic ${isAtTop ? 'at-top' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <span className="status-dot"></span>
            <span className="status-text">Available for New Project</span>
            <span className="status-text-mobile">Available</span>
            <svg className="status-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      <nav className={`mobile-nav ${mobileMenuOpen ? 'active' : ''}`}>
        <a
          href="#work"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('work');
          }}
        >
          Work
        </a>
        <a
          href="#about"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('about');
          }}
        >
          About
        </a>
        <a
          href="#experience"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('experience');
          }}
        >
          Experience
        </a>
        <a
          href="#contact"
          className="mobile-nav-link"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Contact
        </a>
      </nav>

      <div className="scroll-progress">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      </div>
    </header>
  );
}
