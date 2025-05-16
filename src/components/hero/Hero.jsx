import React from 'react'
import img from "../../assets/hero.webp"
const Hero = () => {
  return (
    <>
    <div className='hero container '>
        <img src={img} alt="" />
    </div>
    <div className=' hero-card container text-center bg-[rgb(178,222,248)] '>
        <h2>Next-gen tech</h2>
        <h1>Upgrade your home <br /> with AI this summer</h1>
        <button>Shop now</button>
    </div>
    </>
    

  )
}

export default Hero