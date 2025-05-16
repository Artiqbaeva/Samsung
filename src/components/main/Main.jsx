import React from 'react'
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Hero from "../hero/Hero"
import Products from '../products/Products'
import {HEROS} from "../../static"

const Main = () => {
  return (
    <main>
        <Header />
        <Hero/>   
            {
                HEROS?.map((hero)=>(
                    <Products  key={hero.id} {...hero} />
                ))
            }
        <Footer/>
    </main>
  )
}

export default Main