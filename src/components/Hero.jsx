import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="animate-fade-in-up">
          <p style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase' }}>
            Welcome to my portfolio
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', margin: 0 }}>
            Hi, I'm <span className="text-gradient">Janaki</span>.<br />
            I build digital experiences.
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.8' }}>
            A passionate Frontend Developer specializing in crafting interactive, premium, and human-centered web solutions using modern technologies.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href="#" className="btn btn-outline">
              Resume <Download size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Blob */}
      <div className="animate-float" style={{
        position: 'absolute',
        right: '10%',
        top: '20%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(189,0,255,0.15) 0%, rgba(0,240,255,0.15) 100%)',
        filter: 'blur(60px)',
        borderRadius: '50%',
        zIndex: -1
      }}></div>
    </section>
  );
};

export default Hero;
