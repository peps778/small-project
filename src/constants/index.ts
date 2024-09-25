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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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

const experiences: TExperience[] = [
  {
    title: "Lorem Ipsum Sit Dolor Amet",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Elaborandum et conservandum applicationes interretiales utendo React.js et aliis technologiis pertinentibus.",
"Collaborans cum turmis cross-functionalibus inter quos sunt designatores, producti gestores, et alii evolutores ad productos summae qualitatis creandos.",
"Designem responsivum adhibens et compatibilitatem inter navigatores diversos certans.",
"Participans in recensiones codicis et opiniones constructivas aliis evolutoribus praebens.",

    ],
  },
  {
    title: "Lorem Ipsum Sit Dolor Amet",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Elaborandum et conservandum applicationes interretiales utendo React.js et aliis technologiis pertinentibus.",
"Collaborans cum turmis cross-functionalibus inter quos sunt designatores, producti gestores, et alii evolutores ad productos summae qualitatis creandos.",
"Designem responsivum adhibens et compatibilitatem inter navigatores diversos certans.",
"Participans in recensiones codicis et opiniones constructivas aliis evolutoribus praebens.",

    ],
  },
  {
    title: "Lorem Ipsum Sit Dolor Amet",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
     "Elaborandum et conservandum applicationes interretiales utendo React.js et aliis technologiis pertinentibus.",
"Collaborans cum turmis cross-functionalibus inter quos sunt designatores, producti gestores, et alii evolutores ad productos summae qualitatis creandos.",
"Designem responsivum adhibens et compatibilitatem inter navigatores diversos certans.",
"Participans in recensiones codicis et opiniones constructivas aliis evolutoribus praebens.",

    ],
  },
  {
    title: "Lorem Ipsum Sit Dolor Amet",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Elaborandum et conservandum applicationes interretiales utendo React.js et aliis technologiis pertinentibus.",
"Collaborans cum turmis cross-functionalibus inter quos sunt designatores, producti gestores, et alii evolutores ad productos summae qualitatis creandos.",
"Designem responsivum adhibens et compatibilitatem inter navigatores diversos certans.",
"Participans in recensiones codicis et opiniones constructivas aliis evolutoribus praebens.",

    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
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
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
