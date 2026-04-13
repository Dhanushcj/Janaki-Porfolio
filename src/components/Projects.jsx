import { ExternalLink } from 'lucide-react';

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with dynamic routing and cart management.',
      tags: ['React', 'Node.js', 'Stripe'],
      color: '#bd00ff',
      image: 'linear-gradient(45deg, #1f1c2c, #928DAB)'
    },
    {
      title: 'Finance Dashboard',
      description: 'An interactive data visualization board for tracking personal finances.',
      tags: ['Vue', 'D3.js', 'Firebase'],
      color: '#00f0ff',
      image: 'linear-gradient(45deg, #0f2027, #203a43, #2c5364)'
    },
    {
      title: 'AI Companion',
      description: 'A chat interface integrated with OpenAI models to provide virtual assistance.',
      tags: ['Next.js', 'Tailwind', 'OpenAI API'],
      color: '#ff007b',
      image: 'linear-gradient(45deg, #141e30, #243b55)'
    }
  ];

  return (
    <section id="projects" className="section container">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured <span className="text-gradient">Projects</span></h2>
        <p style={{ color: 'var(--text-secondary)' }}>A selection of my recent work.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="glass glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            {/* Image Placeholder */}
            <div style={{ 
              height: '200px', 
              background: project.image,
              position: 'relative'
            }}>
               <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                 <button className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', cursor: 'pointer' }}><GithubIcon /></button>
                 <button className="btn-outline" style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', cursor: 'pointer' }}><ExternalLink size={18} /></button>
               </div>
            </div>

            {/* Content */}
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '20px',
                    color: project.color
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
