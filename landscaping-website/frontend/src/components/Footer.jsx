import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-page)',
      borderTop: '1px solid var(--border-medium)',
      padding: '80px 0 40px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div>
            <h3 className="heading-3" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>
              Arizona<span style={{ color: 'var(--text-secondary)' }}>Landscaping</span>
            </h3>
            <p className="body-small" style={{ marginBottom: '24px', lineHeight: 1.6 }}>
              Professional landscaping services for residential and commercial properties across Arizona.
            </p>
          </div>

          <div>
            <h4 className="heading-4" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={20} color="var(--brand-primary)" />
                <span className="body-small">(602) 555-0123</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={20} color="var(--brand-primary)" />
                <span className="body-small">info@azlandscaping.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={20} color="var(--brand-primary)" />
                <span className="body-small">Phoenix, Arizona</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="heading-4" style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
              Business Hours
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p className="body-small">
                Monday - Friday: 7am - 6pm
              </p>
              <p className="body-small">
                Saturday: 8am - 4pm
              </p>
              <p className="body-small">
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-medium)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="body-small">
            © 2024 ArizonaLandscaping. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#privacy" className="body-small" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none'
            }}>
              Privacy Policy
            </a>
            <a href="#terms" className="body-small" style={{
              color: 'var(--text-secondary)',
              textDecoration: 'none'
            }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;