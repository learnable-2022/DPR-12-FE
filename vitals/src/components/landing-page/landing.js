import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Whoweare from './whoweare'
import Freetrial from './freetrial'
import Mission from './mission'
import Faq from './faq'
import Transform from './transform'
import Footer from './footer'


export default function Landing() {
  return (
    <div className='landing-container'>
        
        <Navbar />
        <Hero />
        <Whoweare />
        <Freetrial />
        <Mission />
        <Faq />
        <Transform />
        <Footer />
    </div>
  )
}
