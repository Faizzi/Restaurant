import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qaulities from '../components/Qaulities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qaulities/>
    <Menu/>
    <WhoAreWe/>
    <Team/>
    <Reservation/>
    <Footer/>
    </>
  )
}


export default Home