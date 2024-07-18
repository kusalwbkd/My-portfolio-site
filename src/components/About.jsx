import React from 'react'
import SectionTitle from './SectionTitle'
import myImg from '../assets/MyImg.jpg'
import mynew from '../assets/mynew.jpg'
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbBrandGmail } from 'react-icons/tb';

const About = () => {
    return(
        <section class='bg-white py-20' id='about'>
        <div class='align-element grid  md:grid-cols-2 items-center gap-16'>
          <img src={mynew} className=' object-cover max-w-96 max-h-96 rounded-lg' />
          <article>
            <SectionTitle text='About Me' />
            <p className='text-slate-600 mt-8 leading-loose'>
            Passionate and detail-oriented web developer with a strong foundation in front-end and back-end technologies. Armed with a creative mindset and a problem-solving approach, I specialize in crafting responsive and user-friendly websites. My journey in web development has equipped me with expertise in HTML, CSS, JavaScript, and various frameworks such as React,Node and Express JS, I am Committed to staying updated with the latest industry trends and technologies,I am ready to contribute my skills to creating exceptional digital experiences.
           
            </p>
            <div className=' mt-4 flex gap-4 items-center'> 
            <BsFillTelephoneFill />
            +94 770596047
            </div>

            <div className="mt-4 flex gap-4 items-center">
            <TbBrandGmail/>
            dhananjayakusal975@gmail.com
            </div>
          </article>
        </div>
      </section>
    )
   
}

export default About