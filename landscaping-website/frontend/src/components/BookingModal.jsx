import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const BookingModal = ({ isOpen, onClose, selectedService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: selectedService || '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service_type: selectedService }));
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const response = await axios.post(`${API}/bookings`, formData);
      setSubmitStatus('success');
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service_type: selectedService || '',
          message: ''
        });
        setSubmitStatus(null);
        onClose();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error.response?.data?.detail || 'Failed to submit booking request');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-medium)',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>
        <div style={{
          padding: '32px',
          borderBottom: '1px solid var(--border-medium)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h2 className="heading-3" style={{ fontSize: '1.8rem' }}>
            Book a Service
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <X size={24} color="var(--text-primary)" />
          </button>
        </div>

        <div style={{ padding: '32px' }}>
          {submitStatus === 'success' ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <CheckCircle size={64} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
              <h3 className="heading-4" style={{ marginBottom: '12px' }}>
                Booking Request Submitted!
              </h3>
              <p className="body-small">
                We'll contact you soon to confirm your service.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '24px' }}>
                <label className="body-small" style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-small" style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-small" style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-small" style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Service Type *
                </label>
                <select
                  name="service_type"
                  value={formData.service_type}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                    outline: 'none'
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="Lawn Care & Maintenance">Lawn Care & Maintenance</option>
                  <option value="Garden Design & Installation">Garden Design & Installation</option>
                  <option value="Irrigation Systems">Irrigation Systems</option>
                  <option value="Hardscaping & Outdoor Living">Hardscaping & Outdoor Living</option>
                </select>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-small" style={{
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    fontFamily: 'Inter, Arial, sans-serif',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {submitStatus === 'error' && (
                <div style={{
                  padding: '12px 16px',
                  background: 'rgba(220, 38, 38, 0.1)',
                  border: '1px solid rgba(220, 38, 38, 0.3)',
                  marginBottom: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <AlertCircle size={20} color="#dc2626" />
                  <span className="body-small" style={{ color: '#fca5a5' }}>
                    {errorMessage}
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;