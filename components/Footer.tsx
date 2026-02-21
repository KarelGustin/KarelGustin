'use client';

export default function Footer() {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">&copy; 2024 Karel Gustin. Built with focus on architecture and design.</p>
          <div className="footer-links">
            <a
              href="#work"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('work');
              }}
            >
              Work
            </a>
            <a
              href="#about"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
            >
              About
            </a>
            <a
              href="#contact"
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
