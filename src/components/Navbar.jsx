import React from 'react'
import {links} from '../assets/data'
const Navbar = () => {
  return (
    <nav className=' bg-cyan-50'>
        <div className=' align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8'>
          <h2 className=' text-3xl font-bold'>
          Kus<span className=' text-cyan-600'>al</span>
          </h2>
          <div className=' flex gap-x-3 sm:mx-auto justify-start' >
            {links.map((link)=>{
     const{id,href,text}=link
       return(
        <a key={id} href={href} className=' text-lg capitalize tracking-wide hover:text-cyan-600 duration-300'>
            {text}
        </a>
       )
            })}
          </div>
        </div>
    </nav>
  )
}

export default Navbar