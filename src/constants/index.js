import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  certificate,
  nithLogo,
  godyn,
  github,
  exelogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
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
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML ",
    icon: html,
  },
  {
    name: "CSS ",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
];

const experiences = [
  {
    title: "Executive Member",
    company_name: "Team .EXE, NIT Hamirpur",
    icon: godyn,

    date: "December 2023 - December 2024",
    points: [
      "Innovated and collaborated on standout projects for the Annual Techfest Nimbus, enhancing Team .EXE's reputation at NIT Hamirpur.",
      "Boosted mobile traffic by 60% and improved site conversion rates by 15% through responsive design implementations.",
      "Conducted interactive workshops on Web Development, Git, and GitHub, empowering junior members with essential technical skills.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "National Institute of Technology, Hamirpur",
    icon: godyn,

    date: "March 2024 - February 2025",
    points: [
      "Developed and maintained web applications using React.js, Next.js and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design ensuring cross-browser compatibility.",
    ],
  },
];

const projects = [
  {
    name: "CSE Department Website",
    description:
      " Official website of Department of Computer Science & Engineering, NIT Hamirpur",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: nithLogo,
    app_link: "https://cse.nith.ac.in/",
    // source_code_link:
    //   "https://github.com/Akshanshkaushal/React_music_player_app",
  },

  {
    name: "Club Website",
    description: " Official website of Team .EXE, NIT Hamirpur",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: exelogo,
    app_link: "https://team-exe-nith.vercel.app/",
    // source_code_link: "https://github.com/",
  },
  {
    name: "Certifica Authentify",
    description:
      "A blockchain based certificate verification system using React.js and Solidity",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: certificate,
    app_link: "https://github.com/Rudransh-Singh-Athwal/Certifica_Authentify",
    // source_code_link: "https://github.com/",
  },

  // {
  //   name: "Quiz App",
  //   description: "Quiz application made using MERN and Redux",
  //   tags: [
  //     {
  //       name: "Reactjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Redux",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: redux,
  //   source_code_link: "https://github.com/Akshanshkaushal/Quiz__interface",
  // },
];

export { services, technologies, experiences, projects };
