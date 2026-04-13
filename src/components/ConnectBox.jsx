import { Mail, Send, Share2, Globe, MessageSquare } from 'lucide-react';

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const ConnectBox = () => {
  return (
    <div id="contact" className="bento-item span-4 reveal" style={{ animationDelay: '0.7s', minHeight: '300px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', width: '100%' }}>
        
        {/* Left Side: Professional Outreach */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Professional <span className="text-gradient">Inquiries.</span></h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px' }}>
            Available for professional discussions regarding gold loan operations, vault security, and compliance management at Shriram Finance.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="#" className="glass-pill" style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LinkedinIcon /> LinkedIn Profile
            </a>
            <a href="#" className="glass-pill" style={{ padding: '0.6rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} /> Contact Office
            </a>
          </div>
        </div>

        {/* Right Side: Simple Form */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={e => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <input type="text" placeholder="Name" style={inputStyle} />
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <textarea placeholder="Tell me about your project..." rows="4" style={{ ...inputStyle, resize: 'none' }}></textarea>
            <button className="btn-premium" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

const inputStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid var(--border-glass)',
  borderRadius: '8px',
  padding: '0.8rem 1rem',
  color: 'white',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  fontSize: '0.9rem'
};

export default ConnectBox;
