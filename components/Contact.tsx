'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial state
    if (headerRef.current) {
      gsap.set(headerRef.current, { opacity: 0, y: 50 });
    }
    if (formRef.current) {
      gsap.set(formRef.current, { opacity: 0, x: -50 });
    }
    if (infoRef.current) {
      gsap.set(infoRef.current, { opacity: 0, x: 50 });
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

    if (formRef.current) {
      gsap.to(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

    if (infoRef.current) {
      gsap.to(infoRef.current, {
        scrollTrigger: {
          trigger: infoRef.current,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage(null);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setFormMessage({
        type: 'success',
        text: "Thank you! Your message has been sent. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => {
        setFormMessage(null);
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header" ref={headerRef}>
          <span className="section-number">04</span>
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            Need someone who can own a project from start to finish? 
            I architect, design, build, and deliver—autonomously.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-form-wrapper" ref={formRef}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <span className="form-line"></span>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <span className="form-line"></span>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <span className="form-line"></span>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <span className="form-line"></span>
              </div>

              <button type="submit" className="cta-button submit-btn magnetic" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
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

              {formMessage && (
                <div className={`form-message ${formMessage.type}`}>{formMessage.text}</div>
              )}
            </form>
          </div>

          <div className="contact-info" ref={infoRef}>
            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Email</h3>
                <a href="mailto:hello@karelgustin.com" className="contact-value">
                  hello@karelgustin.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Location</h3>
                <p className="contact-value">Netherlands</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div className="contact-details">
                <h3 className="contact-label">Available</h3>
                <p className="contact-value">For new projects</p>
              </div>
            </div>

            <div className="contact-social">
              <a href="#" className="contact-social-link magnetic" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="#" className="contact-social-link magnetic" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#" className="contact-social-link magnetic" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
