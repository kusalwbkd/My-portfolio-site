import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({ url, img, github, title, text, highlights }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl duration-300 p-6 transition-all transform hover:-translate-y-2">
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full object-cover rounded-xl h-64 transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-wide">{title}</h2>
        <p className="mt-3 text-gray-700 leading-relaxed">{text}</p>
      </div>

      <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 text-sm">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2">
            <span className="text-cyan-500">✔</span> {highlight}
          </li>
        ))}
      </ul>

      <hr className="my-4 border-gray-300" />

      <div className="mt-4 flex gap-x-6 items-center justify-center">
        <a href={url} target="_blank" className="hover:scale-110 transition-transform duration-300">
          <TbWorldWww className="h-8 w-8 text-gray-500 hover:text-cyan-600 duration-300" />
        </a>
        <a href={github} target="_blank" className="hover:scale-110 transition-transform duration-300">
          <FaGithubSquare className="h-8 w-8 text-gray-500 hover:text-black duration-300" />
        </a>
      </div>
    </article>

  );
}

export default ProjectsCard