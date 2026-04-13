import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const EducationBox = () => {
  return (
    <div className="bento-item span-1 row-1 reveal" style={{ animationDelay: '0.9s' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
        <div style={{ padding: '0.5rem', background: 'rgba(255,197,0,0.1)', borderRadius: '8px', color: 'var(--accent-gold)' }}>
          <GraduationCap size={20} />
        </div>
        <h3 style={{ fontSize: '1.1rem' }}>Education</h3>
      </div>
      
      <div style={{ marginBottom: '0.5rem' }}>
        <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)' }}>Bachelor of Commerce (B.COM)</h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', fontWeight: 600 }}>Sandhiya College</p>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
        Academic foundation in financial accounting, auditing, and business management—key pillars for high-integrity asset custody.
      </p>

      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)' }}>
        <BookOpen size={12} /> Financial & Business Foundations
      </div>
    </div>
  );
};

export default EducationBox;
