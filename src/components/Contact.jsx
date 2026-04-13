import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section container">
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'minmax(300px, 1fr) 1fr', 
        gap: '4rem',
        alignItems: 'center'
      }}>
        
        {/* Left Info */}
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Let's <span className="text-gradient">Connect!</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem' }}>
            Interested in working together or just want to say hi? I'm always open to discussing web development projects and new ideas.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(189,0,255,0.1)', borderRadius: '50%', color: 'var(--accent-purple)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email Me At</p>
                <h4 style={{ fontSize: '1.1rem' }}>hello@janaki.dev</h4>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(0,240,255,0.1)', borderRadius: '50%', color: 'var(--accent-cyan)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Location</p>
                <h4 style={{ fontSize: '1.1rem' }}>Remote / Global</h4>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="glass glass-card">
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Name</label>
              <input type="text" placeholder="John Doe" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</label>
              <input type="email" placeholder="john@example.com" style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Message</label>
              <textarea placeholder="How can I help you?" rows={4} style={{...inputStyle, resize: 'none'}} />
            </div>
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

const inputStyle = {
  background: 'rgba(255,255,255,0.02)',
  border: '1px solid var(--surface-border)',
  padding: '1rem',
  borderRadius: '8px',
  color: 'white',
  outline: 'none',
  fontFamily: 'var(--font-body)',
  fontSize: '1rem',
  transition: 'border-color 0.3s ease'
};

export default Contact;
