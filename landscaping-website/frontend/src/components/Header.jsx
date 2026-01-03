import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(26, 28, 27, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-medium)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        <div className="heading-4" style={{ cursor: 'pointer' }} onClick={() => scrollToSection('hero')}>
          Arizona<span style={{ color: 'var(--text-secondary)' }}>Landscaping</span>
        </div>
        
        <nav style={{
          display: 'flex',
          gap: '0',
          alignItems: 'center'
        }}>
          <button
            onClick={() => scrollToSection('hero')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              padding: '1em 1.5em',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand-hover)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('services')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              padding: '1em 1.5em',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand-hover)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontFamily: 'Inter, Arial, sans-serif',
              fontSize: '1rem',
              fontWeight: 500,
              padding: '1em 1.5em',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--brand-hover)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
          >
            Testimonials
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;