import {
  web,
  frontend,
  javascript,
  typescript,
  html,
  css,
  sass,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  bookapi,
  weather,
  covid,
  threejs,
  freelance,
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Javascript Developer",
    icon: frontend,
  },
  {
    title: "Typescript Developer",
    icon: frontend,
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
    threejs,
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
    name: "Scss",
    icon: sass,
    tailwind,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Frealance",
    icon: freelance,
    iconBg: "#101010",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "101010",
    date: "Dec 2022 - Dec 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "In_Progress",
    icon: freelance,
    iconBg: "101010",
    date: "Sept 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Web development is sometimes fun, especially building with react.js but not when you're stack.",
    name: "Fodio",
    designation: "Frontend Dev",
    company: "none",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    testimonial:
      "I had always thought software development was all about java, until I met javascript.",
    name: "Hudu",
    designation: "Frontend Dev",
    company: "none",
    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    testimonial:
      "After learning javascript, I knew typescript was not that much different.",
    name: "Hamed",
    designation: "Frontend Dev",
    company: "none",
    image: "https://randomuser.me/api/portraits/women/85.jpg",
  },
];

const projects = [
  {
    name: "Weather App",
    description:
      "A weather API that fetches climatic data within a 24 hour period of a specific region or city, built using fetch api getting data from openweather api.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/Hudufodio/weatherApiProject",
  },
  {
    name: "Bookshop",
    description:
      "Web application that enables users to search for books of all kind, view prices, availability, language choice and order placements for paper bag or virtual.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bookapi,
    source_code_link: "https://github.com/Hudufodio/online-bookshop",
  },
  {
    name: "Covid tracker",
    description:
      "API data fetch app of covid infected countries, created to track data of active, recovery and death cases of a region as well preventive measures.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "ajax",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: covid,
    source_code_link: "https://github.com/Hudufodio/Covid-tracker",
  },
];

export { services, technologies, experiences, testimonials, projects };
