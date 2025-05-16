import React from 'react'
import {FOOTER} from "../../static"
const Footer = () => {
  return (
    <footer className='footer flex gap-3 justify-between container text-[black] '>
        <ul>
         <li><a className='text-2xl font-semibold' href="">SHOP</a></li>
            {
                
                FOOTER?.map((footer, index) =>(
                    <li key={index}><a href="">{footer}</a></li>
                ))
            }
        </ul>
        <ul>
           <li><a className='text-2xl font-semibold' href="">SUPPORT</a></li>
            {
                FOOTER?.map((footer, index) =>(
                    <li key={index}><a href="">{footer}</a></li>
                ))
            }
        </ul>
        <ul>
            <li><a className='text-2xl font-semibold' href="">OFFERS</a></li>
            {
                FOOTER?.map((footer, index) =>(
                    <li key={index}><a href="">{footer}</a></li>
                ))
            }
        </ul>
        <ul>
           <li><a className='text-2xl font-semibold' href="">SUSTAINABILITY</a></li>
            {
                FOOTER?.map((footer, index) =>(
                    <li key={index}><a href="">{footer}</a></li>
                ))
            }
        </ul>
    </footer>
  )
}

export default Footer