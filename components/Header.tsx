'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 150;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (window.scrollY > sectionTop && window.scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'hero');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
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
        <div className="status-indicator">
          <span className="status-dot"></span>
          <span className="status-text">Available for New Project</span>
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

        <button
          className="cta-button header-cta magnetic"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contact');
          }}
        >
          Let&apos;s Talk
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: mobileMenuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}></span>
          <span style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}></span>
        </button>
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
