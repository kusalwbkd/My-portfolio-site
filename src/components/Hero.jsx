import React from 'react'
import Photo from '../assets/photo.svg';
import hero1 from '../assets/hero1.svg';

import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';



const Hero = () => {
  return (
    <section className=' bg-cyan-50 py-24'>
    <div className=' align-element grid md:grid-cols-2 items-center gap-8'>
   <article>
   <h1 className='text-7xl font-bold tracking-wider'>I'm Kusal</h1>
   <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Full-stack developer
    </p>
    <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
    Crafting digital dreams into functional experiences
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/kusalwbkd' target="_blank">
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/kusal-dhananjaya-55323116a/' target="_blank">
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          
          </div>
   </article>

   <article className='hidden md:block '>
          <img src={hero1} className='h-80 lg:h-96' />
        </article>
    </div>
    </section>
  )
}

export default Hero