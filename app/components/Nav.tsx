'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Nav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Setup high-performance intersection observer for active states
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' } // Trigger when element hits center of viewport
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // If we are on the home page, we want scroll links to work smoothly
  return (
    <nav className="navbar">
      <div className="container-custom nav-container">
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          Viet.dev
        </Link>
        
        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            About
          </a>
          <a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
            Skills
          </a>
          <a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            Experience
          </a>
          <a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
            Projects
          </a>
          <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} color="var(--text-main)" /> : <Menu size={28} color="var(--text-main)" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={closeMenu} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            About
          </a>
          <a href="#skills" onClick={closeMenu} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
            Skills
          </a>
          <a href="#experience" onClick={closeMenu} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            Experience
          </a>
          <a href="#projects" onClick={closeMenu} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
