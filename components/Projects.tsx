'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects, Project } from '@/lib/data';
import ProjectModal from './ProjectModal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'architecture' | 'ui'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    // Set initial state
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
    }
    if (filtersRef.current) {
      gsap.set(filtersRef.current, { opacity: 0, y: 30 });
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

    if (filtersRef.current) {
      gsap.to(filtersRef.current, {
        scrollTrigger: {
          trigger: filtersRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }
  }, []);

  useEffect(() => {
    // Re-animate cards when filter changes
    const cards = gridRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card, index) => {
      gsap.set(card, { opacity: 0, y: 50 });
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: 'power2.out',
      });
    });
  }, [filter]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <section className="work" id="work">
        <div className="container">
          <div className="section-header" ref={headerRef}>
            <span className="section-number">02</span>
            <h2 className="section-title">Work that speaks for itself.</h2>
            <p className="section-subtitle">Real products. Real users. Real results.</p>
          </div>

          <div className="project-filters" ref={filtersRef}>
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button
              className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
              onClick={() => setFilter('mobile')}
            >
              Mobile
            </button>
            <button
              className={`filter-btn ${filter === 'architecture' ? 'active' : ''}`}
              onClick={() => setFilter('architecture')}
            >
              Architecture
            </button>
            <button
              className={`filter-btn ${filter === 'ui' ? 'active' : ''}`}
              onClick={() => setFilter('ui')}
            >
              UI Design
            </button>
          </div>

          <div className="projects-grid" ref={gridRef}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card" data-category={project.category}>
                <a
                  href="#"
                  className="project-image-link"
                  onClick={(e) => {
                    e.preventDefault();
                    openModal(project);
                  }}
                >
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-image-overlay"></div>
                    <div className="project-tech-preview">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="project-tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="project-tech-tag">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                  </div>
                </a>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <a
                    href="#"
                    className="project-link"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(project);
                    }}
                  >
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
}
