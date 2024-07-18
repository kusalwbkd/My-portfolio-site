import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-cyan-500' />,
    text: 'Proficient in HTML and CSS, adeptly weaving visually captivating and responsive web experiences for seamless user interactions.'
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <IoLogoJavascript className='h-16 w-16 text-cyan-500' />,
    text: 'Proficient in JavaScript, adeptly crafting interactive and dynamic web applications that prioritize seamless user interactions and robust functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-cyan-500' />,
    text: 'Masterful in React, architecting efficient and interactive front-end applications with an unwavering focus on component-based design.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <DiMongodb className='h-16 w-16 text-cyan-500' />,
    text: 'Proficient in MongoDB, adeptly managing data in a flexible, JSON-like format for seamless storage and retrieval in web applications.',
  },
  {
    id: nanoid(),
    title: 'Node Js',
    icon: <DiNodejs className='h-16 w-16 text-cyan-500' />,
    text: 'Masterful in Node.js, orchestrating scalable and efficient backend services for web applications.',
  },
  {
    id: nanoid(),
    title: 'Express JS',
    icon: <SiExpress className='h-16 w-16 text-cyan-500' />,
    text: 'Proficient in Express.js, simplifying API development, routing, and server-side logic with elegance and precision..',
  },
  
];

export const projects = [

  {
    id: nanoid(),
    img: '../projects/ecom.jpg',
    url: 'https://mern-ecommerce-siten.onrender.com/',
    github: 'https://github.com/kusalwbkd/MERN-Ecommerce-site',
    title: 'E- Commerce Project',
    text: ' This is an E-Commerce project created using MERN stack. Frontend designed with React, Daisy-UI and Tailwind CSS while the backend designed with Node,Express and Mongo DB. State management is done by using redux-tool kit.Data fetching, and requests handled by loaders and actions of React-Router-Dom, Also this is optimized by using react-queries',
  },

  {
    id: nanoid(),
    img:  '../projects/chat.jpg',
    url: 'https://mern-chat-application-u5gh.onrender.com',
    github: 'https://github.com/kusalwbkd/mern-chat-application',
    title: 'Chat-App',
    text: 'This is a chat-app designed by using MERN stack.Frontend designed with React, Daisy-UI and Tailwind CSS while the backend designed with Node,Express and Mongo DB. State management is done by Context-API s and the real time messanging functionality is handled with Socket.io. Data fetching and requests are handled by react-hooks',
  },
 
  {
    id: nanoid(),
    img: '../projects/admin-dashboard.jpg',
    url: 'https://mern-admin-dashboard-9alt.onrender.com',
    github: 'https://github.com/kusalwbkd/mern-admin-dashboard/',
    title: 'Admin-Dashboard',
    text: 'This is an Admin-dashboard designed by using MERN stack. Frontend designed with React, Daisy-UI and Tailwind CSS while the backend designed with Node,Express and Mongo DB. In here data fetching and requests are done by React-Router-Dom loaders are actions',
  },
  {
    id: nanoid(),
    img: '../projects/social.jpg',
    url: 'https://mern-social-media-b3i9.onrender.com',
    github: 'https://github.com/kusalwbkd/mern-social-media/',
    title: 'Social media Site',
    text: 'This is an Social-media app project created using MERN stack. Frontend designed with React, Daisy-UI and Tailwind CSS while the backend designed with Node,Express and Mongo DB. State management is done by using redux-tool kit.Data fetching, and requests handled by loaders and actions of React-Router-Dom',
  },
  {
    id: nanoid(),
    img: '../projects/project-app.jpg',
    url: 'https://mern-project-management-app-tbdp.onrender.com',
    github: 'https://github.com/kusalwbkd/Mern-project-management-app',
    title: 'Project management app',
    text: 'This is a project-management-app designed by using MERN stack, frontend designed with React and styled components, backend designed with Express ,Node and Mongo DB. In here both data fetching and state management are handled by redux-tool kit. Also all the frontend filtering, sorting ,searching and paginations are done by using react',
  },
  {
    id: nanoid(),
    img: '../projects/real-state.jpg',
    url: 'https://reaact-app-real-estate.netlify.app',
    github: 'https://github.com/kusalwbkd/react-real-estate',
    title: 'React- real estate site',
    text: 'This is a real estate site designed with react. This is a frontend app and data are located locally. state managemnt is done by context API s and all frontend filtering,sorting done by react',
  },
  {
    id: nanoid(),
    img: '../projects/js-store.jpg',
    url: 'https://javascript-store-app.netlify.app',
    github: 'https://github.com/kusalwbkd/javascript-store',
    title: 'Store app',
    text: 'This is a store app designed by using html,css and JavaScript',
  },
];
