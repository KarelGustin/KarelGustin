// ============================================
// Initialize GSAP
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// Sample Projects Data
// ============================================

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        category: "web",
        description: "Scalable e-commerce solution with microservices architecture, real-time inventory management, and intuitive checkout flow.",
        image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=E-Commerce+Platform",
        technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
        link: "#"
    },
    {
        id: 2,
        title: "Mobile Banking App",
        category: "mobile",
        description: "Secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
        image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Mobile+Banking",
        technologies: ["React Native", "Node.js", "MongoDB", "Stripe API"],
        link: "#"
    },
    {
        id: 3,
        title: "Design System",
        category: "ui",
        description: "Comprehensive design system with reusable components, documentation, and implementation guidelines for consistent UI/UX.",
        image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Design+System",
        technologies: ["Figma", "React", "Storybook", "TypeScript"],
        link: "#"
    },
    {
        id: 4,
        title: "Cloud Infrastructure",
        category: "architecture",
        description: "Multi-region cloud infrastructure setup with auto-scaling, load balancing, and disaster recovery protocols.",
        image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Cloud+Infrastructure",
        technologies: ["AWS", "Terraform", "Kubernetes", "CI/CD"],
        link: "#"
    },
    {
        id: 5,
        title: "SaaS Dashboard",
        category: "web",
        description: "Analytics dashboard with real-time data visualization, customizable widgets, and export functionality.",
        image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=SaaS+Dashboard",
        technologies: ["Vue.js", "Python", "PostgreSQL", "Chart.js"],
        link: "#"
    },
    {
        id: 6,
        title: "Mobile UI Kit",
        category: "ui",
        description: "Premium mobile UI component library with 100+ customizable components and dark mode support.",
        image: "https://via.placeholder.com/600x400/000000/FFFFFF?text=Mobile+UI+Kit",
        technologies: ["Figma", "React Native", "TypeScript"],
        link: "#"
    }
];

// ============================================
// Custom Cursor
// ============================================

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}

animateFollower();

// Magnetic effect for buttons and links
const magneticElements = document.querySelectorAll('.magnetic');

magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(element, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// ============================================
// Loading Screen
// ============================================

window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    gsap.to('.loader-progress', {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out',
        onComplete: () => {
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.classList.add('hidden');
                    initAnimations();
                }
            });
        }
    });
    
    gsap.to('.loader-text', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2
    });
});

// ============================================
// Scroll Progress
// ============================================

const scrollProgress = document.querySelector('.scroll-progress-bar');

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ============================================
// Navigation
// ============================================

const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

// Smooth scroll to sections
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu
            mobileNav.classList.remove('active');
        }
    });
});

// Mobile menu toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (mobileNav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Active section highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// CTA buttons scroll to sections
document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('data-target');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// GSAP Animations
// ============================================

function initAnimations() {
    // Hero animations
    gsap.to('.main-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    });
    
    gsap.to('.hero-left', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.4
    });
    
    gsap.to('.portrait-container', {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.to('.hero-right', {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
    });
    
    gsap.to('.scroll-indicator', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 1.2
    });
    
    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
    
    // About section
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.skills-grid', {
        scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Project filters
    gsap.from('.project-filters', {
        scrollTrigger: {
            trigger: '.project-filters',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out'
    });
    
    // Project cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Timeline items
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            x: -50,
            duration: 0.8,
            delay: index * 0.2,
            ease: 'power3.out'
        });
    });
    
    // Contact form
    gsap.from('.contact-form-wrapper', {
        scrollTrigger: {
            trigger: '.contact-form-wrapper',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    // Parallax effect for portrait
    gsap.to('.portrait', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        y: 100,
        scale: 0.95,
        ease: 'none'
    });
}

// ============================================
// Projects
// ============================================

function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(p => p.category === filter);
    
    projectsGrid.innerHTML = filteredProjects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <div class="project-info">
                <span class="project-category">${project.category}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <a href="#" class="project-link" data-project-id="${project.id}">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>
    `).join('');
    
    // Re-animate cards
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 50,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Add click handlers
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = parseInt(link.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
    });
}

// Project filters
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        renderProjects(filter);
    });
});

// ============================================
// Project Modal
// ============================================

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;
    
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <span class="modal-category">${project.category}</span>
        <h2 class="modal-title">${project.title}</h2>
        <p class="modal-description">${project.description}</p>
        <div class="modal-tech">
            <h3 class="modal-tech-title">Technologies</h3>
            <div class="modal-tech-tags">
                ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
        </div>
        <a href="${project.link}" class="modal-link" target="_blank" rel="noopener noreferrer">
            View Live Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animate modal entrance
    gsap.from('.modal-content', {
        scale: 0.9,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
    });
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal handlers
document.querySelector('.modal-close').addEventListener('click', closeProjectModal);
document.querySelector('.modal-overlay').addEventListener('click', closeProjectModal);

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProjectModal();
    }
});

// ============================================
// Contact Form
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Success
        formMessage.textContent = 'Thank you! Your message has been sent. I\'ll get back to you soon.';
        formMessage.className = 'form-message success';
        formMessage.style.display = 'block';
        
        // Reset form
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
        
        // Animate success message
        gsap.from(formMessage, {
            opacity: 0,
            y: -10,
            duration: 0.3
        });
    }, 1500);
    
    // In production, replace with:
    /*
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            formMessage.textContent = 'Thank you! Your message has been sent.';
            formMessage.className = 'form-message success';
            contactForm.reset();
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
        formMessage.className = 'form-message error';
    } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
    */
});

// Form input animations
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', () => {
        const formLine = input.nextElementSibling;
        if (formLine && formLine.classList.contains('form-line')) {
            gsap.to(formLine, {
                width: '100%',
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            const formLine = input.nextElementSibling;
            if (formLine && formLine.classList.contains('form-line')) {
                gsap.to(formLine, {
                    width: '0%',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        }
    });
});

// ============================================
// Initialize
// ============================================

// Initial render of projects
renderProjects('all');

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Disable cursor on mobile
if (window.innerWidth < 768) {
    document.body.style.cursor = 'default';
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
}
