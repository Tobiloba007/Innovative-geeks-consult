import React from 'react'
import About from './about/About'
import Footer from './footer/Footer'
import Header from './header/Header'
import Intro from './intro/Intro'
import Reviews from './reviews/Reviews'
import Section2 from './Section2/Section2'

const Home = () => {
  return (
    <>
        <Header />
        <Intro />
        <Section2 />
        <About />
        <Reviews />
        <Footer />
    </>
    )
}

export default Home