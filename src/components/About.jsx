import React from 'react';
import SectionTitle from './SectionTitle';
import mynew from '../assets/mynew.jpg';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { TbBrandGmail } from 'react-icons/tb';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        {/* Image Section */}
        <img
          src={mynew}
          className="object-cover max-w-96 max-h-96 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          alt="Profile"
        />

        {/* About Content */}
        <article>
          <SectionTitle text="About Me" />
          <p className="text-slate-600 mt-8 leading-loose text-lg">
            I am a passionate and detail-oriented **Full-Stack Developer** with expertise in
            building **scalable and user-friendly web applications**. My journey in development
            has equipped me with a strong command of **React, Node.js, Express, and MongoDB**.
            I thrive on problem-solving and constantly stay updated with the latest technologies
            to deliver high-quality solutions.
          </p>

          {/* Contact Info */}
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-4 text-lg text-gray-700">
              <BsFillTelephoneFill className="text-cyan-500 h-6 w-6" />
              <span className="hover:text-cyan-600 transition-colors">+94 770596047</span>
            </div>

            <div className="flex items-center gap-4 text-lg text-gray-700">
              <TbBrandGmail className="text-red-500 h-6 w-6" />
              <span className="hover:text-red-600 transition-colors">dhananjayakusal975@gmail.com</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
