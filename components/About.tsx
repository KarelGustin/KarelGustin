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
          <h2 className="section-title">About</h2>
        </div>

        <div className="about-content">
          <div className="about-text" ref={textRef}>
            <p className="about-intro">
              I&apos;m an <strong>Agentic Engineer</strong>—I own projects from concept to production. 
              I don&apos;t think in syntax; I think in <strong>systems and architecture</strong>. 
              I work fast, make decisions quickly, and deliver complete solutions autonomously.
            </p>
            <p>
              What sets me apart: I operate at the <strong>system level</strong>, not the code level. 
              I architect solutions, design experiences, and execute rapidly. Every project starts with 
              understanding the problem and system requirements, then I design the architecture, plan the 
              user experience, and execute the full stack—frontend, backend, infrastructure—all with speed and precision.
            </p>
            <p>
              I bridge business strategy, technical architecture, and user experience. My approach: 
              think strategically about systems, design thoughtfully for users, and execute fast. 
              I don&apos;t get lost in implementation details; I focus on outcomes and deliver measurable business impact.
            </p>
          </div>

          <div className="skills-grid" ref={skillsRef}>
            <div className="skill-category">
              <h3 className="skill-title">Agentic Engineering</h3>
              <div className="skill-items">
                <span className="skill-tag">System Thinking</span>
                <span className="skill-tag">Architecture First</span>
                <span className="skill-tag">Fast Execution</span>
                <span className="skill-tag">End-to-End Ownership</span>
                <span className="skill-tag">Business Impact</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Architecture</h3>
              <div className="skill-items">
                <span className="skill-tag">System Design</span>
                <span className="skill-tag">Scalability</span>
                <span className="skill-tag">API Design</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">Cloud Infrastructure</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">UI/UX</h3>
              <div className="skill-items">
                <span className="skill-tag">Design Systems</span>
                <span className="skill-tag">User Research</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">Accessibility</span>
                <span className="skill-tag">Performance</span>
              </div>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Full Stack</h3>
              <div className="skill-items">
                <span className="skill-tag">Frontend</span>
                <span className="skill-tag">Backend</span>
                <span className="skill-tag">Databases</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">Testing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
