import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNodeJs, } from 'react-icons/fa';
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
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
    text: 'Proficient in HTML and CSS, adeptly weaving visually captivating and responsive web experiences for seamless user interactions.',
   
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
    text: 'Proficient in Express.js, simplifying API development, routing, and server-side logic with elegance and precision.',
  },
  {
    id: nanoid(),
    title: 'Next.js',
    icon: <TbBrandNextjs className='h-16 w-16 text-cyan-500' />,
    text: 'Proficient in Next.js, I specialize in building server-rendered React applications. With Next.js, I seamlessly combine client-side and server-side rendering, optimizing performance and SEO. My focus lies in creating modular, scalable components for efficient front-end development'
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className='h-16 w-16 text-cyan-500' />,
    text: 'Proficient in TypeScript, I excel at building robust and type-safe applications. Leveraging TypeScript’s static type checking.',
  },
  {
    id: nanoid(),
    title: "React Native",
    icon: <TbBrandReactNative className='h-16 w-16 text-cyan-500' />,
    text: "Proficient in React Native, I specialize in building cross-platform mobile applications with a seamless and native-like user experience. Leveraging React Native’s component-based architecture, I create performant and scalable mobile apps with efficient state management and smooth UI interactions."
  }
  
  
];
 

export const projects=[
  {
    "id": "nanoid()",
    "img": "../projects/ecom.jpg",
    "url": "https://mern-ecommerce-siten.onrender.com/",
    "github": "https://github.com/kusalwbkd/MERN-Ecommerce-site",
    "title": "E-Commerce Platform",
    "text": "A full-stack E-Commerce platform built with MERN stack, featuring a modern UI, seamless shopping experience, and optimized backend.",
    "highlights": [
      "🚀 Built with React, Tailwind CSS, and Daisy-UI",
      "🛍 Smooth shopping experience with product filtering, cart, and checkout",
      "⚡ State management using Redux Toolkit & Context API",
      "🔗 Optimized data fetching with React-Router-Dom loaders & actions",
      "💾 Scalable backend with Node.js, Express, and MongoDB",
      "🔒 Secure authentication & user management"
    ]
  },
  {
    "id": "nanoid()",
    "img": "../projects/chat.jpg",
    "url": "https://mern-chat-application-u5gh.onrender.com",
    "github": "https://github.com/kusalwbkd/mern-chat-application",
    "title": "Real-time Chat App",
    "text": "A real-time chat application with private and group messaging, built using MERN stack and powered by Socket.io.",
    "highlights": [
      "💬 Real-time messaging powered by Socket.io",
      "🎨 UI built with React, Tailwind CSS, and Daisy-UI",
      "⚡ State management handled by Context API",
      "🔗 Fast and efficient API calls using React hooks",
      "🔒 Secure authentication & user sessions",
      "📡 Backend optimized with Node.js, Express, and MongoDB"
    ]
  },
  {
    "id": "nanoid()",
    "img": "../projects/admin-dashboard.jpg",
    "url": "https://mern-admin-dashboard-9alt.onrender.com/",
    "github": "https://github.com/kusalwbkd/mern-admin-dashboard/",
    "title": "Admin Dashboard",
    "text": "A feature-rich admin dashboard with analytics, user management, and role-based access control, built using MERN stack.",
    "highlights": [
      "📊 Dynamic dashboard with user & product analytics",
      "🔗 Data fetching with React-Router-Dom loaders & actions",
      "🎨 Modern UI built with React, Tailwind CSS, and Daisy-UI",
      "⚡ Backend API designed with Node.js & Express",
      "💾 Data storage & management using MongoDB",
      "🔐 Secure authentication and role-based access control"
    ]
  },
  {
    "id": "nanoid()",
    "img": "../projects/social.jpg",
    "url": "https://social-media-site-v2.onrender.com/",
    "github": "https://github.com/kusalwbkd/social-media-site-v2",
    "title": "Social Media Platform",
    "text": "A full-stack social media application where users can post, like, comment, and follow other users.",
    "highlights": [
      "📢 User authentication & profile management",
      "📝 Create, like, and comment on posts",
      "⚡ State management using Redux Toolkit",
      "📡 Backend built with Node.js, Express, and MongoDB",
      "📌 Real-time notifications for user interactions",
      "🔗 API calls optimized for fast performance"
    ]
  },
  {
    "id": "nanoid()",
    "img": "../projects/journal.png",
    "url": "https://nextjs-journal-ip4141zny-kusalwbkds-projects.vercel.app/",
    "github": "https://github.com/kusalwbkd/nextjs-journal",
    "title": "Journal App",
    "text": "A Next.js-powered journal app where users can record their thoughts and memories securely.",
    "highlights": [
      "📖 Built with Next.js for server-side rendering & SEO",
      "🔐 User authentication with Clerk",
      "💾 Database integration using NeonDB & Prisma ORM",
      "📝 Simple, intuitive UI for writing and managing journal entries",
      "⚡ Optimized performance with React & Next.js caching"
    ]
  },
  {
    "id": "nanoid()",
    "img": "../projects/rn.jpg",
    "url": "https://drive.google.com/file/d/1YSfXsFCF-sVgGlwtLH63fbZdnAIsju8I/view?usp=drive_link",
    "github": "https://github.com/kusalwbkd/react-native-ecommerce",
    "title": "React Native E-Commerce App",
    "text": "A mobile e-commerce app with product search, filtering, cart management, and checkout.",
    "highlights": [
      "📱 Developed with Expo & React Native",
      "🛍 E-Commerce features: product search, sorting, and cart",
      "⚡ State management using Redux Toolkit",
      "📡 Backend built with Node.js, Express, and MongoDB",
      "🔗 API calls optimized for smooth performance",
      "🚀 Mobile-first UI with optimized user experience"
    ]
  },
  {
    "id": "nanoid()",
    "img": "../projects/weather.png",
    "url": "https://sage-granita-a807e0.netlify.app/",
    "github": "https://github.com/kusalwbkd/weather-app-v2",
    "title": "Weather App",
    "text": "A real-time weather app that fetches data from OpenWeather API and displays current conditions with a modern UI.",
    "highlights": [
      "☀️ Real-time weather updates using OpenWeather API",
      "⚡ Optimized data fetching with React Query",
      "🎨 UI designed with ShadCN UI & Tailwind CSS",
      "🔍 Search and filter functionality",
      "📝 Custom hooks for cleaner and reusable code",
      "📌 TypeScript integration for better type safety"
    ]
  }
]

