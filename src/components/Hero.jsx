import React from 'react';
import Photo from '../assets/photo.svg';
import hero1 from '../assets/hero1.svg';

import { FaGithubSquare, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';
import { TbBrandGmail } from 'react-icons/tb';

const Hero = () => {
  return (
    <section className="bg-cyan-50 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8 px-4">
        {/* Left Section: Text */}
        <article>
          <h1 className="text-7xl font-bold tracking-wider text-gray-800 animate__animated animate__fadeIn">
            I'm Kusal
          </h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Full-stack developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Crafting digital dreams into functional experiences
          </p>

          {/* Social Links with Hover Effect */}
          <div className="flex gap-x-6 mt-6">
            <a
              href="https://github.com/kusalwbkd"
              target="_blank"
              className="group"
            >
              <FaGithubSquare className="h-10 w-10 text-slate-500 group-hover:text-black transition-all duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kusal-dhananjaya-55323116a/"
              target="_blank"
              className="group"
            >
              <FaLinkedin className="h-10 w-10 text-slate-500 group-hover:text-black transition-all duration-300" />
            </a>
            <a
              href="mailto:dhananjayakusal975@gmail.com"
              className="group"
            >
              <TbBrandGmail className="h-10 w-10 text-slate-500 group-hover:text-black transition-all duration-300" />
            </a>
          </div>
        </article>

        {/* Right Section: Image */}
        <article className="hidden md:block">
          <img
            src={hero1}
            alt="Hero Image"
            className="h-80 lg:h-96 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
