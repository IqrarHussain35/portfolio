import React from 'react'
import Footer from './Footer';
import HeroSection from './HeroSection';
import TechStack from './TechStack';
import Projects from './Projects';
import LiveChatButton from './LiveChatButton';
import About from './About';
import DynamicHeader from './DynamicHeader'
import Header from './Header'


const Portfolio = () => {
  return (
    <>
            <DynamicHeader />
            <Header />
            <HeroSection />
            <TechStack />
            <Projects />
            <LiveChatButton />
            <About /> 
            <Footer />
           
    </>
  )
}

export default Portfolio