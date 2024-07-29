// This is the primary section that you see when you visit the page on top of the fold
import React from 'react'
import { Spotlight } from './ui/Spotlight'

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" /> 
            <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill= "purple" /> 
            <Spotlight className="top-28 left-80 h-[80vh] w-[30vw]" fill= "blue" /> 
        </div>
        
        Hero</div>
  )
}

export default Hero 

