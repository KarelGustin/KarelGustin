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
              <p className="timeline-company">Independent Projects & Deep Learning</p>
              <p className="timeline-description">
                Transitioned to agentic engineering using Cursor and Lovable, fundamentally changing how I approach 
                development. I think in systems and architecture, not syntax. Focused on building real-world applications 
                while deepening my understanding of system architecture, database design, and tech stack selection. 
                Every project is an exercise in making the right architectural decisions for the use case.
              </p>
              <ul className="timeline-achievements">
                <li>Mastered agentic coding workflows, enabling rapid development while maintaining code quality</li>
                <li>Built production applications using AI-assisted development, learning system architecture in practice</li>
                <li>Developed expertise in database selection, API design, and infrastructure decisions</li>
                <li>Created AI-powered tools and visualizations for real business use cases</li>
                <li>Learned to evaluate tech stacks based on project requirements, not just trends</li>
                <li>Currently deepening knowledge in system architecture, focusing on scalability and maintainability</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2024 - 2025</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Full Stack Foundation</h3>
              <p className="timeline-company">Self-Directed Learning</p>
              <p className="timeline-description">
                Intensively learned HTML, CSS, JavaScript, and React to understand the syntax and fundamentals. 
                While I think in systems, I recognized the importance of understanding implementation details. 
                This period balanced high-level architectural thinking with hands-on coding skills.
              </p>
              <ul className="timeline-achievements">
                <li>Mastered modern JavaScript (ES6+) and React component architecture</li>
                <li>Built responsive interfaces with CSS Grid, Flexbox, and modern layout techniques</li>
                <li>Learned to bridge system design with actual implementation</li>
                <li>Applied knowledge immediately to real projects, reinforcing learning through practice</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2022 - 2024</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Shopify Custom Development</h3>
              <p className="timeline-company">Custom Themes, Sections & Plugins</p>
              <p className="timeline-description">
                With ChatGPT as a learning partner, I advanced from customizing themes to building custom sections 
                and plugins. This period taught me to think in components, understand platform architecture, and 
                create reusable solutions. Each project was an exercise in understanding how systems work under the hood.
              </p>
              <ul className="timeline-achievements">
                <li>Built custom Shopify sections from scratch, understanding Liquid templating deeply</li>
                <li>Developed custom plugins extending Shopify functionality for specific business needs</li>
                <li>Learned component-based architecture and reusable code patterns</li>
                <li>Combined design thinking with technical implementation for better user experiences</li>
                <li>Used AI tools to accelerate learning and problem-solving</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020 - 2022</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Shopify Theme Customization & Design</h3>
              <p className="timeline-company">E-commerce Store Development</p>
              <p className="timeline-description">
                Deepened Shopify expertise by customizing themes to match my own designs. Focused on creating 
                unique storefronts that combined marketing strategy with technical execution. Each store was 
                built around a product with careful attention to conversion optimization, user experience, and 
                brand identity.
              </p>
              <ul className="timeline-achievements">
                <li>Customized Shopify themes to create unique, conversion-optimized storefronts</li>
                <li>Designed stores with marketing-first approach, focusing on audience and selling points</li>
                <li>Built multiple stores, each tailored to specific products and target markets</li>
                <li>Learned to balance design aesthetics with conversion optimization</li>
                <li>Developed understanding of e-commerce user psychology and purchase flows</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2018 - 2020</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Shopify E-commerce Development</h3>
              <p className="timeline-company">Store Building & Marketing Focus</p>
              <p className="timeline-description">
                Discovered Shopify and shifted focus from testing products to building complete stores. 
                Each project was a full e-commerce solution designed with marketing in mind—understanding 
                target audiences, crafting selling angles, and optimizing for conversion. This period taught 
                me to think about the entire customer journey, not just the technical implementation.
              </p>
              <ul className="timeline-achievements">
                <li>Built multiple Shopify stores, each designed around specific products and audiences</li>
                <li>Mastered the Shopify platform, understanding its architecture and capabilities</li>
                <li>Designed stores with conversion optimization as the primary goal</li>
                <li>Learned to think strategically about marketing, audience targeting, and sales psychology</li>
                <li>Combined technical skills with business and marketing understanding</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2017 - 2018</div>
            <div className="timeline-content">
              <h3 className="timeline-title">Web Development Exploration</h3>
              <p className="timeline-company">Learning Through Building</p>
              <p className="timeline-description">
                After the first e-commerce experience, I built several more websites to experiment and learn. 
                This period was about understanding different platforms, design approaches, and what makes 
                websites effective. Each project taught me something new about web development and user experience.
              </p>
              <ul className="timeline-achievements">
                <li>Built multiple websites experimenting with different platforms and approaches</li>
                <li>Learned through hands-on experience, making mistakes and iterating</li>
                <li>Developed understanding of what makes websites effective and user-friendly</li>
                <li>Gained confidence in building and deploying web projects</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2016 - 2017</div>
            <div className="timeline-content">
              <h3 className="timeline-title">First E-commerce Venture</h3>
              <p className="timeline-company">Garden Tiles Business - WooCommerce</p>
              <p className="timeline-description">
                Built my first e-commerce store using WooCommerce for my garden tiles business. Spent countless 
                nights learning, customizing, and perfecting the store. While the business didn&apos;t achieve the 
                sales I hoped for, this experience taught me the fundamentals of e-commerce, web development, 
                and the dedication required to build something from scratch.
              </p>
              <ul className="timeline-achievements">
                <li>Built complete WooCommerce e-commerce store from scratch</li>
                <li>Learned WordPress, PHP, and e-commerce fundamentals through hands-on experience</li>
                <li>Dedicated extensive time to learning and perfecting the implementation</li>
                <li>Gained first-hand experience with the challenges of running an online business</li>
                <li>Developed persistence and problem-solving skills through real-world challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
