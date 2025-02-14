import React from "react";

const SkillsCard = ({ icon, title }) => {
  return (
    <article className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
      <span className="inline-block bg-cyan-100 p-4 rounded-full text-cyan-600 text-5xl mb-4">
        {icon}
      </span>
      <h4 className="font-semibold text-xl text-gray-800 text-center">
        {title}
      </h4>
    </article>
  );
};

export default SkillsCard;
