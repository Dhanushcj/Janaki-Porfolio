import React from 'react';
import { Code, Palette, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={32} color="var(--accent-cyan)" />, title: 'Frontend Dev', desc: 'React, Vue, TypeScript, Next.js' },
    { icon: <Palette size={32} color="var(--accent-purple)" />, title: 'UI/UX Design', desc: 'Figma, Prototyping, Wireframing' },
    { icon: <Layout size={32} color="#ff00aa" />, title: 'Responsive', desc: 'CSS3, Tailwind, Framer Motion' },
  ];

  return (
    <section id="about" className="section container">
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About <span className="text-gradient">Me</span></h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          I am a specialized developer with a deep passion for UI structures and animations. Bridging the gap between beautiful design and robust technical implementation is what I do best.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {skills.map((skill, index) => (
          <div key={index} className="glass glass-card">
            <div style={{ marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{skill.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
