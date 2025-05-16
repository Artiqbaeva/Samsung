import React from 'react'
import {UlCollection} from "../../static/index"
import search from "../../assets/Search.svg"

const Header = () => {
  return (
    <header>
       <nav  className='container navbar flex items-center justify-between gap-10 '>
          <h2 className='font-semibold text-3xl'>SAMSUNG</h2>
          <ul className='flex gap-4'>
            {
              UlCollection?.map((lists, index)=>(
                <li className='font-sans' key={index}>{lists}</li>
              ))
            }
          </ul>
          <div>
            <div className='navbar-search flex items-center gap-3 w-[250px] h-[40px] bg-gray-100 text-black p-2 rounded-3xl'>
              <img className='w-[30px] h-[30px]' src={search} alt="" />
              <input className='outline-none '  type="text"  placeholder='Search' />
            </div>
          </div>
       </nav>
    </header>
  )
}

export default Header