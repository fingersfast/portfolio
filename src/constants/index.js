import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  carrent,
  threejs,
  prompt_app,
  landing_page,
  nextjs,
  reactIcon,
  expressjs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const hero = [
  {
    desc: "I develop user interfaces and web applications.",
  },
  {
    desc: "Frontend with React and Next.js",
  },
  {
    desc: "Backend with Express",
  },
  {
    desc: "MongoDB for Storage",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Tailwind Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Self",
    icon: reactIcon,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "I adeptly utilized React.js to create dynamic and responsive user interfaces. Leveraging the virtual DOM and component-based architecture, I ensured the seamless rendering of complex UI components, delivering engaging and interactive web applications.",
      " I integrated state management solutions to efficiently handle complex data flows within applications. I demonstrated expertise in Redux Toolkit, implementing a centralized and predictable state container.",
      "Employing Tailwind CSS, I skillfully crafted visually appealing and responsive user interfaces. By leveraging the utility-first CSS framework, I streamlined the styling process, achieving consistent designs across the application.",
    ],
  },
  {
    title: "Express.js Developer",
    company_name: "Self",
    icon: expressjs,
    iconBg: "#E6DEDD",
    date: "June 2023 - Present",
    points: [
      "Expert in crafting scalable backend systems with Express.js, specializing in RESTful API development for dynamic web applications.",
      "Implemented seamless Create, Read, Update, and Delete operations, optimizing database interactions and ensuring standardized API design principles.",
      "Designed and implemented RESTful APIs adhering to industry standards, utilizing Express.js for secure, scalable, and predictable endpoint structures.",
      "Leveraged Express.js middleware for robust functionality, incorporating authentication, authorization, logging, and compression measures to improve security and performance.",
    ],
  },
  {
    title: "Next.js Developer",
    company_name: "Self",
    icon: nextjs,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      " Employing server-side rendering (SSR) and static site generation (SSG) techniques, I enhanced page load times and overall site responsiveness.",
      "As a Next.js developer, I successfully led the end-to-end development of web applications, showcasing expertise in both frontend and backend development using Next.js.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      " I implemented caching mechanisms and code-splitting strategies to ensure optimal resource utilization, contributing to a smoother and more efficient user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Himanshu proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Himanshu does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Himanshu optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/fingersfast/car-showcase-app.git",
  },
  {
    name: "AI-Prompt App",
    description:
      "This is an App made in next.js in which i am going to implement full CRUD functionality and build both frontend and backend in next.js itself.",
    tags: [
      {
        name: "Next.js",
        color: "text-purple-500",
      },
      {
        name: "CRUD",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: prompt_app,
    source_code_link: "https://github.com/fingersfast/ai-prompt-app.git",
  },
  {
    name: "Business Landing Page",
    description:
      "This is an example of a landing page website for businesses with various functionalities like showcasing your product and giving your contact details.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "text-purple-500",
      },
    ],
    image: landing_page,
    source_code_link: "https://github.com/fingersfast/landing-page.git",
  },
];

export { hero, services, technologies, experiences, testimonials, projects };
