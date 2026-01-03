import React, { useState, useEffect } from 'react';
import { RefreshCw, Mail, Phone, Calendar, Package } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchBookings = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API}/bookings`);
      const sortedBookings = response.data.sort((a, b) => 
        new Date(b.created_at) - new Date(a.created_at)
      );
      setBookings(sortedBookings);
    } catch (err) {
      setError('Failed to load bookings');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (bookingId, newStatus) => {
    setUpdatingId(bookingId);
    try {
      await axios.patch(`${API}/bookings/${bookingId}`, { status: newStatus });
      setBookings(bookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: newStatus }
          : booking
      ));
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'pending':
        return '#f8d47a';
      case 'confirmed':
        return '#d9fb06';
      case 'completed':
        return '#888680';
      default:
        return '#888680';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-page)',
      padding: '40px 20px'
    }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <h1 className="heading-2" style={{ marginBottom: '8px' }}>
              Admin Dashboard
            </h1>
            <p className="body-small">
              Manage service bookings for ArizonaLandscaping
            </p>
          </div>
          <button
            className="btn-primary"
            onClick={fetchBookings}
            disabled={loading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <RefreshCw size={20} />
            Refresh
          </button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            padding: '24px'
          }}>
            <p className="caption" style={{ marginBottom: '8px' }}>TOTAL BOOKINGS</p>
            <p className="heading-3" style={{ fontSize: '2rem' }}>
              {bookings.length}
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            padding: '24px'
          }}>
            <p className="caption" style={{ marginBottom: '8px' }}>PENDING</p>
            <p className="heading-3" style={{ fontSize: '2rem', color: '#f8d47a' }}>
              {bookings.filter(b => b.status === 'pending').length}
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            padding: '24px'
          }}>
            <p className="caption" style={{ marginBottom: '8px' }}>CONFIRMED</p>
            <p className="heading-3" style={{ fontSize: '2rem', color: 'var(--brand-primary)' }}>
              {bookings.filter(b => b.status === 'confirmed').length}
            </p>
          </div>
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            padding: '24px'
          }}>
            <p className="caption" style={{ marginBottom: '8px' }}>COMPLETED</p>
            <p className="heading-3" style={{ fontSize: '2rem' }}>
              {bookings.filter(b => b.status === 'completed').length}
            </p>
          </div>
        </div>

        {loading ? (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)'
          }}>
            <p className="body-large">Loading bookings...</p>
          </div>
        ) : error ? (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)'
          }}>
            <p className="body-large" style={{ color: '#dc2626' }}>{error}</p>
          </div>
        ) : bookings.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)'
          }}>
            <Package size={48} color="var(--text-secondary)" style={{ marginBottom: '20px' }} />
            <p className="body-large">No bookings yet</p>
            <p className="body-small">Bookings will appear here when customers submit requests</p>
          </div>
        ) : (
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-medium)',
            overflowX: 'auto'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{
                  borderBottom: '1px solid var(--border-medium)',
                  background: 'var(--secondary-olive)'
                }}>
                  <th className="body-small" style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>Customer</th>
                  <th className="body-small" style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>Contact</th>
                  <th className="body-small" style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>Service</th>
                  <th className="body-small" style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>Message</th>
                  <th className="body-small" style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>Date</th>
                  <th className="body-small" style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontWeight: 600,
                    color: 'var(--text-primary)'
                  }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={booking.id} style={{
                    borderBottom: index !== bookings.length - 1 ? '1px solid var(--border-medium)' : 'none'
                  }}>
                    <td className="body-small" style={{ padding: '20px' }}>
                      <div style={{ 
                        fontWeight: 600, 
                        color: 'var(--text-primary)',
                        marginBottom: '4px'
                      }}>
                        {booking.name}
                      </div>
                    </td>
                    <td className="body-small" style={{ padding: '20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Mail size={14} color="var(--text-secondary)" />
                          <a href={`mailto:${booking.email}`} style={{
                            color: 'var(--text-primary)',
                            textDecoration: 'none'
                          }}>
                            {booking.email}
                          </a>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Phone size={14} color="var(--text-secondary)" />
                          <a href={`tel:${booking.phone}`} style={{
                            color: 'var(--text-primary)',
                            textDecoration: 'none'
                          }}>
                            {booking.phone}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="body-small" style={{ padding: '20px' }}>
                      <span style={{
                        background: 'var(--secondary-olive)',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap'
                      }}>
                        {booking.service_type}
                      </span>
                    </td>
                    <td className="body-small" style={{
                      padding: '20px',
                      maxWidth: '200px'
                    }}>
                      {booking.message || <span style={{ color: 'var(--text-secondary)' }}>No message</span>}
                    </td>
                    <td className="body-small" style={{ padding: '20px', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Calendar size={14} color="var(--text-secondary)" />
                        {formatDate(booking.created_at)}
                      </div>
                    </td>
                    <td style={{ padding: '20px' }}>
                      <select
                        value={booking.status}
                        onChange={(e) => updateStatus(booking.id, e.target.value)}
                        disabled={updatingId === booking.id}
                        style={{
                          padding: '8px 12px',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-medium)',
                          borderRadius: '4px',
                          color: getStatusColor(booking.status),
                          fontFamily: 'Inter, Arial, sans-serif',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          cursor: updatingId === booking.id ? 'not-allowed' : 'pointer',
                          textTransform: 'uppercase',
                          outline: 'none'
                        }}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <a 
            href="/"
            className="body-small"
            style={{
              color: 'var(--brand-primary)',
              textDecoration: 'none'
            }}
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;