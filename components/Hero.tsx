'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const karelRef = useRef<HTMLSpanElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const portraitImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const karelElement = karelRef.current;
    if (!karelElement || !titleRef.current) return;

    // Hero animations
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    });

    // KAREL scroll animation - moves from hero to header
    // Animation stops when hero is out of view (handled by header component)
    ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        const scrollY = window.scrollY;
        const heroSection = document.getElementById('hero');
        if (!heroSection) return;
        
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const viewportHeight = window.innerHeight;
        const isHeroOutOfView = scrollY > heroBottom - viewportHeight;
        
        // Only animate KAREL if hero is still in view
        if (!isHeroOutOfView && karelElement) {
          const heroHeight = window.innerHeight;
          const maxScroll = heroHeight * 0.6;
          
          if (scrollY < maxScroll) {
            const scale = Math.max(1 - (scrollY / maxScroll) * 0.6, 0.4);
            const y = -(scrollY * 0.25);
            gsap.set(karelElement, {
              scale: scale,
              y: y,
              opacity: Math.max(1 - scrollY / maxScroll * 0.5, 0.5),
            });
          }
        } else if (isHeroOutOfView && karelElement) {
          // Reset KAREL when hero is out of view
          gsap.set(karelElement, {
            scale: 1,
            y: 0,
            opacity: 1,
          });
        }
      },
    });

    gsap.to(leftRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.4,
    });

    gsap.to(portraitRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6,
    });

    gsap.to(rightRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.8,
    });

    gsap.to(scrollIndicatorRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 1.2,
    });

    // Subtle parallax effect for portrait — slower scroll
    if (portraitImgRef.current) {
      gsap.to(portraitImgRef.current, {
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: -40,
        ease: 'none',
      });
    }
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
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1 className="main-title" ref={titleRef}>
          <span className="title-outline" ref={karelRef} data-text="KAREL">KAREL</span>
          <span className="title-solid" data-text="GUSTIN">GUSTIN</span>
        </h1>

        <div className="hero-content">
          <div className="hero-left" ref={leftRef}>
            <div className="hero-badge">Agentic Engineer</div>
            <h2 className="hero-subtitle">I engineer systems that ship.</h2>
            <p className="hero-description">
              I don&apos;t write code — I <strong>architect solutions</strong>. From system design to pixel-perfect UI, 
              I own every layer of the stack. <strong>Fast execution. Clean architecture. Real results.</strong>
            </p>
            <div className="hero-ctas">
              <button
                className="cta-button primary-cta magnetic"
                onClick={() => scrollToSection('work')}
              >
                See the Work
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
                className="cta-button secondary-cta magnetic"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="portrait-container" ref={portraitRef}>
            <div className="portrait-wrapper">
              <img
                src="/images/Karelgustin.png"
                alt="Karel Gustin"
                className="portrait"
                ref={portraitImgRef}
              />
            </div>
          </div>

          <div className="hero-right" ref={rightRef}>
            <div className="social-links">
              <a href="https://github.com/karelgustin" className="social-link magnetic" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/karelgustin" className="social-link magnetic" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="https://instagram.com/karelgustin" className="social-link magnetic" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <span>Instagram</span>
              </a>
              {/* <a href="#" className="social-link magnetic" target="_blank" rel="noopener noreferrer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a> */}
            </div>
          </div>
        </div>

        <div className="scroll-indicator" ref={scrollIndicatorRef}>
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Scroll</span>
        </div>
      </div>
    </section>
  );
}
