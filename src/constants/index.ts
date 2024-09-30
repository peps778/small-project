import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  SPS,
  jobit,
  tripguide,
  nyx,
  java,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Java Freelancer",
    icon: backend,
  },
  {
    title: "CRM Specialist",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Java",
    icon: java,
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
    name: "figma",
    icon: figma,
  },

];

const experiences: TExperience[] = [
  {
    title: "CRM Specialist",
    companyName: "Nyx Virtual Solutions",
    icon: nyx,
    iconBg: "#383E56",
    date: "October 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and relevant technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring compatibility across various browsers.",
      "Participating in code reviews and providing constructive feedback to fellow developers.",

    ],
  },
  {
    title: "Web Developer",
    companyName: "Nyx Virtual Solutions",
    icon: nyx,
    iconBg: "#383E56",
    date: "July 2024 - October 2024",
    points: [
      "Developing and maintaining web applications using React.js and relevant technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring compatibility across various browsers.",
      "Participating in code reviews and providing constructive feedback to fellow developers.",

    ],
  },
  {
    title: "Java Desktop App Freelancer",
    companyName: "Freelance",
    icon: java,
    iconBg: "#383E56",
    date: "Send Me A Message",
    points: [
      "Developing and maintaining desktop applications in Java, focusing on user-friendly interfaces and functionality.",
      "Working with clients to understand their requirements and deliver tailored solutions.",
      "Implementing best practices in software development and ensuring code quality.",
      "Continuously learning and adapting to new technologies to improve service offerings.",

    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Working with Paul Jhon Magbanua at Sharpen Clicks has been an outstanding experience. His attention to detail and innovative thinking have significantly contributed to the success of our projects. I highly recommend his expertise for any tech-related needs.",
    name: "Brandon Seay",
    designation: "Founder",
    company: "Sharpen Clicks",
    image: "https://randomuser.me/api/portraits/men/1.jpg", 
  },
  {
    testimonial:
      "Paul Jhon Magbanua is a remarkable talent. As the Co-Founder and CEO of JobNimbus, I can confidently say that his contributions have been vital in driving our technology forward. His ability to deliver high-quality results consistently sets him apart in the industry.",
    name: "Ben Hodson",
    designation: "Co-Founder & CEO",
    company: "JobNimbus",
    image: "https://randomuser.me/api/portraits/men/2.jpg", 
  },

  {
    testimonial:
      "I had the pleasure of collaborating with Paul Jhon Magbanua on a Java desktop application project. His technical expertise and dedication to excellence were evident throughout the development process, resulting in a high-quality application that exceeded client expectations.",
    name: "Random Client",
    designation: "Client",
    company: "Freelance Project",
    image: "https://randomuser.me/api/portraits/men/3.jpg", 
  }
  
];

const projects: TProject[] = [
  {
    name: "School Payment System",
    description:
      "Developed a user-friendly School Payment System utilizing Java Swing, enabling seamless management of student payments and financial records. This application features an intuitive interface for both administrators and parents, allowing for easy navigation through payment history, fee structures, and invoice generation. The system ensures secure transactions and reliable data management, streamlining the payment process for educational institutions.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Java Swing",
        color: "green-text-gradient",
      },
      {
        name: "SQLite",
        color: "pink-text-gradient",
      },
    ],
    image: SPS,
    sourceCodeLink: "https://github.com/peps778",
  },
  // {
  //   name: "Job IT",
  //   description:
  //    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   sourceCodeLink: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   sourceCodeLink: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
