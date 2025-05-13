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
  //potech,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import potech from "../assets/company/potech.png";
import sql from "../assets/tech/sql.png";
import python from "../assets/tech/python.png";
import cpp from "../assets/tech/cpp.png";
import java from "../assets/tech/java.png";
import portfolio from "../assets/portfolio.png";
import sportify from "../assets/sportify.png";
import des from "../assets/des.png";

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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Penetration Tester",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Java",
    icon: java,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

const experiences = [
  {
    title: "Penetration Tester",
    company_name: "Potech Consulting",
    icon: potech,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Identified security vulnerabilities in web applications through hands-on testing and analysis",
      "Performed reconnaissance, vulnerability assessments, and exploitation of common flaws, including XSS and SQL injection.",
      "Enhanced expertise in tools like Burp Suite and automated scanners to streamline testing processes.",
    ],
  },
  {
    title: "Penetration Tester Intern",
    company_name: "Potech Consulting",
    icon: potech,
    iconBg: "#383E56",
    date: "June 2025 - August 2025",
    points: [
      "Conducting Penetration Testing assesments across web applications, Linux and windows machine thus identifying and helping mitigate security vulnerabilities.",
      "Experience with usage of several tools such as Metasploit. Burpsuite, Nmap, Wireshark and many other.",
      "Develop python scripts for variable red teaming tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Website",
    description:
      "Web-application that showcases my skills, experience, and personal projects",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/jadghamloushh/portfolio-website",
  },
  {
    name: "Sportify Ecommerce Website",
    description:
      "Web application that offers a secure platform for users to browse, purchase, and explore a wide range of sports clothing and shoes with seamless shopping and secure checkout.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: sportify,
    source_code_link:
      "https://github.com/jadghamloushh/sportify-ecommerce-website",
  },
  {
    name: "DES Cryptography Website",
    description:
      "A web application that encrypts and decrypts data using the Data Encryption Standard (DES) algorithm.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: des,
    source_code_link:
      "https://github.com/jadghamloushh/des-cryptography-website",
  },
];

export { services, technologies, experiences, testimonials, projects };
