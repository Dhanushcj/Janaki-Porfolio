import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const HeroBox = () => {
  return (
    <div className="bento-item span-3 row-2 reveal" style={{ justifyContent: 'center' }}>
      <div className="glass-pill" style={{ marginBottom: '1rem', width: 'fit-content' }}>
        Shriram Finance | Senior Gold Custodian
      </div>
      <h1 style={{ 
        fontSize: 'clamp(2rem, 8vw, 4.5rem)', 
        lineHeight: '1.2', 
        marginBottom: '1.5rem',
        wordWrap: 'break-word',
        overflowWrap: 'break-word'
      }}>
        Preserving Value. <br />
        <span className="text-gradient">Safeguarding Assets.</span>
      </h1>
      <p style={{ 
        color: 'var(--text-secondary)', 
        fontSize: '1.1rem', 
        maxWidth: '100%', 
        marginBottom: '2rem',
        lineHeight: '1.5'
      }}>
        I'm Janaki, a dedicated Gold Custodian at Shriram Finance. I specialize in high-security vault management, precision valuation, and ensuring the absolute integrity of physical collateral.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} className="hero-btns">
        <a href="#projects" className="btn-premium">
          Professional Expertise <ArrowUpRight size={20} />
        </a>
      </div>
      
      <style>{`
        @media (max-width: 640px) {
          .hero-btns { flex-direction: column !important; width: 100%; }
          .hero-btns a { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)',
        zIndex: -1
      }}></div>
    </div>
  );
};

export default HeroBox;
