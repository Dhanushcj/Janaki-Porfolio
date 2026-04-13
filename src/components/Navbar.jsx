import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Specializations', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(2, 6, 23, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : 'none',
        transition: 'all 0.3s ease',
        padding: '1rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
          <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
            Jana<span className="text-gradient">ki</span>
          </a>
          
          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text-secondary)', transition: 'color 0.3s' }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-gold)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ marginLeft: '1rem', color: 'var(--accent-gold)' }}><LinkedinIcon /></a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(true)}
            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'none' }}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Side Drawer Overlay */}
      <div className={`drawer-overlay ${isOpen ? 'open' : ''}`} onClick={closeDrawer}></div>

      {/* Side Drawer */}
      <div className={`drawer ${isOpen ? 'open' : ''}`}>
        <button 
          onClick={closeDrawer} 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
          <X size={32} />
        </button>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={closeDrawer}
              style={{ fontSize: '1.5rem', fontWeight: 600, fontFamily: 'var(--font-heading)' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div style={{ marginTop: 'auto' }}>
          <a href="https://linkedin.com" className="btn-premium" style={{ width: '100%', justifyContent: 'center' }}>
            <LinkedinIcon /> LinkedIn
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
