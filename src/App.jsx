import React from 'react'
import Navbar from './components/Navbar'
import HeroBox from './components/HeroBox'
import SkillsBox from './components/SkillsBox'
import ProjectsGrid from './components/ProjectsGrid'
import ConnectBox from './components/ConnectBox'
import ExperienceBox from './components/ExperienceBox'
import EducationBox from './components/EducationBox'

function App() {
  return (
    <>
      <div className="mesh-bg"></div>
      <div className="noise"></div>
      
      <Navbar />
      
      <main className="bento-container">
        {/* Row 1 Content */}
        <HeroBox />
        <SkillsBox />
        
        {/* Row 2 & 3: High Impact Areas */}
        <ProjectsGrid />
        
        {/* Row 4: Background & History */}
        <ExperienceBox />
        <EducationBox />
        <ConnectBox />
      </main>
      
      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem 0', 
        color: 'var(--text-secondary)',
        fontSize: '0.9rem'
      }}>
        <p>© {new Date().getFullYear()} Janaki Portfolio. Design refined for 2025.</p>
      </footer>
    </>
  )
}

export default App
