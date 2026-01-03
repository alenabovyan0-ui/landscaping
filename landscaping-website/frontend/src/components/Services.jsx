import React, { useState } from 'react';
import { Leaf, Droplets, Trees, Hammer } from 'lucide-react';
import BookingModal from './BookingModal';

const servicesData = [
  {
    id: 1,
    icon: Leaf,
    title: 'Lawn Care & Maintenance',
    description: 'Regular mowing, edging, fertilization, and weed control to keep your lawn healthy and vibrant year-round.',
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9'
  },
  {
    id: 2,
    icon: Trees,
    title: 'Garden Design & Installation',
    description: 'Custom garden designs featuring native Arizona plants, water-wise landscaping, and beautiful arrangements that thrive in our climate.',
    image: 'https://images.unsplash.com/photo-1597201278257-3687be27d954'
  },
  {
    id: 3,
    icon: Droplets,
    title: 'Irrigation Systems',
    description: 'Professional installation and maintenance of efficient irrigation systems designed to conserve water while keeping your landscape lush.',
    image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg'
  },
  {
    id: 4,
    icon: Hammer,
    title: 'Hardscaping & Outdoor Living',
    description: 'Transform your outdoor space with patios, walkways, retaining walls, and custom outdoor living areas built to last.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg'
  }
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleBookService = (serviceName) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="services" style={{
        background: 'var(--bg-page)',
        padding: '120px 0'
      }}>
        <div className="container">
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <p className="caption" style={{ marginBottom: '16px' }}>
              OUR EXPERTISE
            </p>
            <h2 className="heading-2" style={{ marginBottom: '24px' }}>
              Services We Offer
            </h2>
            <p className="body-medium" style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: 'var(--text-secondary)'
            }}>
              Comprehensive landscaping solutions tailored to Arizona's unique environment
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {servicesData.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="card-hover-effect"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-medium)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '240px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}>
                    <img
                      src={service.image}
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>

                  <div style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: 'var(--brand-primary)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px'
                    }}>
                      <IconComponent size={24} color="var(--text-inverse)" />
                    </div>
                    <h3 className="heading-4" style={{ marginBottom: '16px' }}>
                      {service.title}
                    </h3>
                    <p className="body-small" style={{
                      lineHeight: 1.6,
                      marginBottom: '24px',
                      flex: 1
                    }}>
                      {service.description}
                    </p>
                    
                    <button
                      className="btn-secondary"
                      onClick={() => handleBookService(service.title)}
                      style={{ width: '100%' }}
                    >
                      Book This Service
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />
    </>
  );
};

export default Services;
