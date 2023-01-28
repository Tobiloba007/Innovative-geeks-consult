import React from 'react'
import About from './about/About'
import AboutIntro from './aboutIntro/AboutIntro'
import AboutTeam from './AboutTeam.js/AboutTeam'
import Footer from './footer/Footer'
import Header from './header/Header'

const AboutUs = () => {
  return (
    <div>
      <Header />
      <AboutIntro />
      <About />
      <AboutTeam />
      <Footer />
    </div>
  )
}

export default AboutUs