import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import Figures from '../Figures/Figures'
import RightColumn from '../RightColumn/RightColumn'
const Hero = () => {
  return (
    <div className="hero">
        <div className='left-h'>
          <Header/>
          <div className='the-best-ad'>
            <div></div>
            <span> the best itness club in the town</span>
          </div>
          <div className='hero-text'>
            <div>
              <span className='stroke-text'>Shape</span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>In here we will help you to shape and build our ideal body and life up your life to fullest</span>
            </div>
          </div>
          <Figures/>
          <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
        </div>
        <div className='right-h'> 
           <RightColumn/>
        </div>
    </div>
  )
}

export default Hero