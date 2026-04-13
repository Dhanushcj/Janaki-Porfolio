import React from 'react';
import { PhoneCall, Users } from 'lucide-react';

const ExperienceBox = () => {
  return (
    <div className="bento-item span-1 row-1 reveal" style={{ animationDelay: '0.8s' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
        <div style={{ padding: '0.5rem', background: 'rgba(255,197,0,0.1)', borderRadius: '8px', color: 'var(--accent-gold)' }}>
          <PhoneCall size={20} />
        </div>
        <h3 style={{ fontSize: '1.1rem' }}>Past Experience</h3>
      </div>
      
      <div style={{ marginBottom: '1rem' }}>
        <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Tele-Calling Executive</h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Vindhya Info Media</p>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
        Developed strong communication and customer relationship skills through high-volume professional outreach and service management.
      </p>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>
        <Users size={12} /> Team Collaboration & Service Excellence
      </div>
    </div>
  );
};

export default ExperienceBox;
