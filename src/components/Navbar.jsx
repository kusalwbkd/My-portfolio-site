import React from 'react';
import { links } from '../assets/data';

const Navbar = () => {
  return (
    <nav className="bg-cyan-50 shadow-md">
      <div className="align-element py-4 sm:py-8 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center">
        <h2 className="text-3xl font-bold text-center sm:text-left">
          Kus<span className="text-cyan-600">al</span>
        </h2>
        <div className="flex gap-x-6 mt-4 sm:mt-0 sm:mx-auto justify-start">
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className="text-lg capitalize tracking-wide hover:text-cyan-600 duration-300"
            >
              {text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
