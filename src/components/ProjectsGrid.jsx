import { Shield, Lock, CheckCircle, FileText, Database, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Vault Operations',
    desc: 'Managing high-security fireproof vaults with strict dual-control access protocols.',
    span: 'span-2 row-2',
    color: '#FFC500',
    tags: ['Security', 'Dual-Control']
  },
  {
    title: 'Quality Assurance',
    desc: 'Precision net-weight calculation and purity notes for gold asset verification.',
    span: 'span-2 row-1',
    color: '#1e3a8a',
    tags: ['Verification', 'Audit']
  },
  {
    title: 'Regulatory Compliance',
    desc: 'Ensuring full adherence to RBI-approved custody norms and internal audits.',
    span: 'span-1 row-1',
    color: '#eab308',
    tags: ['Compliance']
  },
  {
    title: 'Asset Traceability',
    desc: 'Implementing unique packet ID tracking and tamper-evident packaging systems.',
    span: 'span-1 row-1',
    color: '#3b82f6',
    tags: ['Inventory']
  }
];

const ProjectsGrid = () => {
  return (
    <>
      <div className="bento-item span-4 reveal" style={{ animationDelay: '0.2s', padding: '1rem 2rem', background: 'transparent', border: 'none', display: 'flex', alignItems: 'center' }}>
         <h2 style={{ fontSize: '1.5rem' }}>Operational <span className="text-gradient">Specializations</span></h2>
      </div>

      {projects.map((project, index) => (
        <div 
          key={project.title} 
          className={`bento-item ${project.span} reveal`} 
          style={{ animationDelay: `${0.3 + index * 0.1}s` }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
               <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.desc}</p>
          </div>
          
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {project.tags.map(tag => (
                <span key={tag} className="glass-pill" style={{ borderColor: project.color, color: project.color }}>{tag}</span>
              ))}
            </div>
            <a href="#" className="text-gradient" style={{ fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              Live <ExternalLink size={14} />
            </a>
          </div>

          {/* Decorative Glow */}
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '150px',
            height: '150px',
            background: `radial-gradient(circle, ${project.color}11 0%, transparent 70%)`,
            zIndex: -1
          }}></div>
        </div>
      ))}
    </>
  );
};

export default ProjectsGrid;
