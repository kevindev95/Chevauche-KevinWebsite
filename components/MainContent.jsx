import React from 'react'
import Hello from './Hello'
import ProjectsExemple from './ProjectsExemple'
import Footer from './Footer'

const MainContent = ({ goToOffres, goToAbout }) => {
  return (
    <div className="bg-[#101e2b] text-white">
  <Hello goToOffres={goToOffres} goToAbout={goToAbout} />
      <ProjectsExemple />
      <Footer />
    </div>
  )
}

export default MainContent