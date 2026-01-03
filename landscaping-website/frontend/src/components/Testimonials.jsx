import React from 'react';
import { Star, Award } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner, Scottsdale',
    content: 'ArizonaLandscaping transformed our backyard into an oasis. Their attention to detail and knowledge of desert plants is exceptional. Highly recommend!',
    rating: 5
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Property Manager, Phoenix',
    content: 'Professional, reliable, and always on time. They\'ve been maintaining our commercial properties for 3 years now. Excellent service every time.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Homeowner, Tempe',
    content: 'From design to installation, the team was fantastic. Our water-wise garden looks amazing and has reduced our water bills significantly.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{
      background: 'var(--secondary-olive)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{
          background: 'var(--bg-page)',
          border: '1px solid var(--border-medium)',
          padding: '60px 40px',
          marginBottom: '80px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '24px'
          }}>
            <Award size={48} color="var(--brand-primary)" />
          </div>
          <h2 className="heading-2" style={{ marginBottom: '16px' }}>
            15+ Years of Excellence
          </h2>
          <p className="body-medium" style={{
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Serving Arizona with professional landscaping services, 500+ satisfied clients, and thousands of successful projects
          </p>
        </div>

        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <p className="caption" style={{ marginBottom: '16px' }}>
            CLIENT TESTIMONIALS
          </p>
          <h2 className="heading-2">
            What Our Clients Say
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-hover-effect"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-medium)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '20px'
              }}>
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} size={20} fill="var(--brand-primary)" color="var(--brand-primary)" />
                ))}
              </div>

              <p className="body-small" style={{
                color: 'var(--neutral-light)',
                marginBottom: '24px',
                flex: 1,
                lineHeight: 1.6
              }}>
                "{testimonial.content}"
              </p>

              <div style={{ borderTop: '1px solid var(--border-medium)', paddingTop: '20px' }}>
                <p className="heading-4" style={{
                  fontSize: '1.1rem',
                  marginBottom: '4px'
                }}>
                  {testimonial.name}
                </p>
                <p className="body-small">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;