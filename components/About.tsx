'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const headerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state for animations
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
    }
    if (textRef.current) {
      gsap.set(textRef.current, { opacity: 0, x: -50 });
    }
    if (skillsRef.current) {
      gsap.set(skillsRef.current, { opacity: 0, x: 50 });
    }

    // Animate in
    if (headerRef.current) {
      gsap.to(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    if (textRef.current) {
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    if (skillsRef.current) {
      gsap.to(skillsRef.current, {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-number">01</span>
          <h2 className="section-title">Think systems. Ship products.</h2>
        </div>

        <div className="about-content">
          <div className="about-text" ref={textRef}>
            <p className="about-intro">
              Most engineers write code. I <strong>engineer outcomes</strong>. I see the full picture — 
              from database schema to conversion funnel — and I build the entire thing.
            </p>
            <p>
              I don&apos;t wait for specs. I identify the problem, architect the solution, design the experience, 
              and ship it. <strong>Frontend, backend, infrastructure, marketing</strong> — I own it all. 
              That&apos;s what agentic engineering means: <strong>complete autonomy, complete accountability</strong>.
            </p>
            <p>
              My edge? I think like a founder and execute like an engineer. I choose the right database for the use case, 
              not the trend. I design for conversion, not just aesthetics. And I ship fast — because 
              <strong>speed with intention beats perfection every time</strong>.
            </p>
          </div>

          <div className="skills-grid" ref={skillsRef}>
            <div className="skill-category">
              <h3 className="skill-title">How I Work</h3>
              <div className="skill-items">
                <span className="skill-tag">End-to-End Ownership</span>
                <span className="skill-tag">Rapid Prototyping</span>
                <span className="skill-tag">Architecture-First</span>
                <span className="skill-tag">Outcome-Driven</span>
                <span className="skill-tag">Autonomous Execution</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">System Design</h3>
              <div className="skill-items">
                <span className="skill-tag">Database Architecture</span>
                <span className="skill-tag">API Design</span>
                <span className="skill-tag">Tech Stack Selection</span>
                <span className="skill-tag">Scalability Planning</span>
                <span className="skill-tag">Cloud Infrastructure</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Product & Design</h3>
              <div className="skill-items">
                <span className="skill-tag">UI/UX Design</span>
                <span className="skill-tag">Conversion Optimization</span>
                <span className="skill-tag">Brand Strategy</span>
                <span className="skill-tag">Mobile-First</span>
                <span className="skill-tag">Performance</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Execution</h3>
              <div className="skill-items">
                <span className="skill-tag">React / Next.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">Shopify / Liquid</span>
                <span className="skill-tag">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
