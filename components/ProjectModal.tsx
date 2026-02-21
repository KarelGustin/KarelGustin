'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Project } from '@/lib/data';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current && contentRef.current) {
      // Set initial state
      gsap.set(contentRef.current, {
        scale: 0.9,
        opacity: 0,
      });

      // Animate to final state
      gsap.to(contentRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    }

    document.body.style.overflow = 'hidden';

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <div className="modal active" ref={modalRef} onClick={onClose}>
      <div className="modal-overlay"></div>
      <div className="modal-content" ref={contentRef} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="modal-body">
          <img src={project.image} alt={project.title} className="modal-image" />
          <span className="modal-category">{project.category}</span>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          
          {project.idea && (
            <div className="modal-section">
              <h3 className="modal-section-title">The Idea</h3>
              <p className="modal-section-content">{project.idea}</p>
            </div>
          )}
          
          {project.execution && (
            <div className="modal-section">
              <h3 className="modal-section-title">Execution</h3>
              <p className="modal-section-content">{project.execution}</p>
            </div>
          )}
          
          {project.result && (
            <div className="modal-section">
              <h3 className="modal-section-title">Result</h3>
              <p className="modal-section-content">{project.result}</p>
            </div>
          )}
          
          <div className="modal-tech">
            <h3 className="modal-tech-title">Technologies</h3>
            <div className="modal-tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="skill-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <a href={project.link} className="modal-link" target="_blank" rel="noopener noreferrer">
            View Live Project
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
    </div>
  );
}
