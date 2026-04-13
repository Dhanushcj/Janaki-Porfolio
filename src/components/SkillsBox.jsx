import React from 'react';

const SkillsBox = () => {
  const skills = [
    { name: 'React', level: '95%' },
    { name: 'NextJS', level: '90%' },
    { name: 'TypeScript', level: '85%' },
    { name: 'UI Design', level: '90%' },
    { name: 'Animation', level: '80%' },
  ];

  return (
    <div className="bento-item span-1 row-2 reveal" style={{ animationDelay: '0.1s' }}>
      <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-gold)' }}>Core Expertise</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {[
          { name: 'Gold Valuation', level: '98%' },
          { name: 'Vault Security', level: '100%' },
          { name: 'RBI Compliance', level: '95%' },
          { name: 'Asset Auditing', level: '90%' },
          { name: 'Risk Mitigation', level: '92%' },
        ].map((skill) => (
          <div key={skill.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: '0.9rem' }}>
              <span>{skill.name}</span>
              <span style={{ color: 'var(--text-secondary)' }}>{skill.level}</span>
            </div>
            <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.05)', borderRadius: '2px' }}>
              <div style={{ width: skill.level, height: '100%', background: 'var(--accent-gold)', borderRadius: '2px' }}></div>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: 'auto', paddingTop: '2rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
        Upholding the highest standards of dual-control and safe custody.
      </div>
    </div>
  );
};

export default SkillsBox;
