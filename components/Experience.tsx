'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Experience() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
    }

    // Animate header
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

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      gsap.set(item, { opacity: 0, x: -50 });
      gsap.to(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-number">03</span>
          <h2 className="section-title">Built through doing.</h2>
          <p className="section-subtitle">10 years of shipping products, solving real problems, and learning by building.</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 - Present</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Agentic Engineering & System Architecture</h3>
              <p className="timeline-company">Independent Projects</p>
              <p className="timeline-description">
                Mastered agentic workflows. Think in systems, not syntax. Build production apps while deepening 
                architecture expertise — database design, API design, tech stack selection.
              </p>
              <ul className="timeline-achievements">
                <li>Agentic coding workflows — rapid dev, maintained quality</li>
                <li>Production apps with AI-assisted development</li>
                <li>Database selection, API design, infrastructure decisions</li>
                <li>AI-powered tools for real business use cases</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2024 - 2025</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Full Stack Foundation</h3>
              <p className="timeline-company">Self-Directed Learning</p>
              <p className="timeline-description">
                Mastered HTML, CSS, JavaScript, React. Balanced system thinking with hands-on implementation.
              </p>
              <ul className="timeline-achievements">
                <li>Modern JavaScript (ES6+) and React architecture</li>
                <li>Responsive interfaces — CSS Grid, Flexbox</li>
                <li>Bridged system design with implementation</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2022 - 2024</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Shopify Custom Development</h3>
              <p className="timeline-company">Custom Sections & Plugins</p>
              <p className="timeline-description">
                Built custom sections and plugins from scratch. Learned component architecture and platform systems.
              </p>
              <ul className="timeline-achievements">
                <li>Custom Shopify sections — Liquid templating</li>
                <li>Custom plugins extending Shopify functionality</li>
                <li>Component-based architecture patterns</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020 - 2022</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Shopify Theme Customization</h3>
              <p className="timeline-company">E-commerce Store Development</p>
              <p className="timeline-description">
                Customized themes to match designs. Combined marketing strategy with technical execution.
              </p>
              <ul className="timeline-achievements">
                <li>Conversion-optimized storefronts</li>
                <li>Marketing-first design approach</li>
                <li>E-commerce user psychology expertise</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2018 - 2020</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Shopify E-commerce Development</h3>
              <p className="timeline-company">Store Building & Marketing</p>
              <p className="timeline-description">
                Built complete stores with marketing focus. Learned customer journey optimization.
              </p>
              <ul className="timeline-achievements">
                <li>Multiple Shopify stores — product-focused</li>
                <li>Conversion optimization expertise</li>
                <li>Marketing strategy and sales psychology</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2017 - 2018</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Web Development Exploration</h3>
              <p className="timeline-company">Learning Through Building</p>
              <p className="timeline-description">
                Built multiple websites. Learned what makes sites effective through experimentation.
              </p>
              <ul className="timeline-achievements">
                <li>Multiple platforms and approaches</li>
                <li>Hands-on learning and iteration</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2016 - 2017</div>
            <div className="timeline-content">
              <h3 className="timeline-title">First E-commerce Venture</h3>
              <p className="timeline-company">Garden Tiles — WooCommerce</p>
              <p className="timeline-description">
                Built first e-commerce store from scratch. Learned fundamentals through dedication.
              </p>
              <ul className="timeline-achievements">
                <li>Complete WooCommerce store</li>
                <li>WordPress, PHP, e-commerce fundamentals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
