import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}>
        <img
          src="https://images.unsplash.com/photo-1681465766418-6474cfdcbb3c"
          alt="Professional landscaping"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0
          }}
        />
        <div style={{
          opacity: 0.75,
          background: 'linear-gradient(135deg, #000, transparent)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0
        }} />
      </div>

      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 40px 80px'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <p className="caption" style={{ marginBottom: '24px' }}>
            PROFESSIONAL LANDSCAPING SERVICES
          </p>
          <h1 className="heading-1" style={{ marginBottom: '32px' }}>
            Transform Your Outdoor Space
          </h1>
          <p className="body-large" style={{
            marginBottom: '40px',
            maxWidth: '500px',
            color: 'var(--neutral-light)'
          }}>
            Arizona's premier landscaping company. Creating beautiful, sustainable outdoor environments for over 15 years.
          </p>
          <button className="btn-primary" onClick={scrollToServices} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            Explore Services <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;