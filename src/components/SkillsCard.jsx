import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="bg-white shadow-md rounded-lg p-6 items-start justify-start min-h-[30rem] hover:shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <span className="inline-block bg-cyan-100 p-4 rounded-full text-cyan-500 text-4xl">
        {icon}
      </span>
      <h4 className="font-bold mt-6 text-lg text-gray-800">{title}</h4>
      <p className="mt-2 text-slate-500 leading-relaxed">{text}</p>
    </article>
  );
};

export default SkillsCard;
