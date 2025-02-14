import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="text-center">
        <p className="text-sm text-gray-400">
          &copy; {currentYear} Kusal Dhananjaya. All rights reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Built with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
