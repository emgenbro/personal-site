import {
  aws,
  mobile,
  backend,
  creator,
  linkedin,
  github,
  githubicon,
  facebook,
  twitter,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  springboot,
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
  liberty,
  harvard,
  clayton,
  itt,
  irwin,
  purdue,
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
    id: "tech",
    title: "Tech",
  },
];

const services = [

  {
    title: "Linked In",
    icon: linkedin,
    url: "https://www.linkedin.com/in/emgenbro/",
  },
  {
    title: "Github",
    icon: githubicon,
    url: "https://github.com/emgenbro",
  },
  {
    title: "Facebook",
    icon: facebook,
    url: "https://www.facebook.com/emgenbro",
  },
  {
    title: "Twitter",
    icon: twitter,
    url: "https://twitter.com/emgenbro",
  },
];

const technologies = [
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "AWS",
    icon: aws,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineering Manager",
    company_name: "Liberty Mutual",
    icon: liberty,
    iconBg: "#383E56",
    date: "March 2018 - Present",
    points: [
      "Mentors all levels of engineers in agile development methodologies such as test-driven development and inversion of control patterns which facilitate such methodologies.",
      "Leads cloud-based development teams in building next generation product platforms.",
      "Facilitates IT Service Management practices across Agile Train.",
      "Champions excellent DevOps practices for scrum teams.",
      "Creates skill development plans for software engineers.",

    ],
  },
  {
    title: "Harvard Extension School",
    company_name: "Harvard University, Cambridge, Massachusetts",
    icon: harvard,
    iconBg: "#E6DEDD",
    date: "January 2013 – May 2018",
    points: [
      "Earned Master of Liberal Arts in the field of Information Management Systems",
    ],
  },
  {
    title: "Lead Software Engineer",
    company_name: "Liberty Mutual",
    icon: liberty,
    iconBg: "#E6DEDD",
    date: "January 2011 - March 2018",
    points: [
      "Facilitated transition from Waterfall to Agile methodologies.",
      "Developed architectural “blueprints” to facilitate consistency across integration teams.",
      "Designed and developed enterprise payment request integration that tied 3rd party and internal systems together to create a seamless robust payment request and notification framework.",
      "Developed and maintained web applications using Spring Boot and other related technologies.",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and provided constructive feedback to other developers.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "ITT Educational Services",
    icon: itt,
    iconBg: "#383E56",
    date: "February 2007 - December 2010",
    points: [
      "Wrote architectural and coding standards for .Net, J2EE, and PL/SQL platforms.",
	    "Designed SDLC that utilized Subversion, Jira, and MediaWiki to aid in SOX compliance.",
      "Developing and maintaining web applications using .Net and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Solutions Engineer",
    company_name: "Clayton",
    icon: clayton,
    iconBg: "#E6DEDD",
    date: "January 2004 - February 2007",
    points: [
      "Assisted management team with evaluating 3rd party vendor application packages.",
      "Conceptualized performance enhancements and implemented within platform.",
      "Managed the transition of the platform to clients.",
      "Handled support for outstanding platform opportunities.",
      "Developed platform using Enterprise Java, FileNet P8, iLog Jrules, Oracle 9i and Apache Jetspeed.",
      "Managed development and test environment hardware.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Irwin Mortgage Corporation",
    icon: irwin,
    iconBg: "#E6DEDD",
    date: "March 1999 - January 2004",
    points: [
      "Assisted management team with evaluating 3rd party vendor application packages.",
      "Conceptualized performance enhancements and implemented within platform.",
      "Managed the transition of the platform to clients.",
      "Handled support for outstanding platform opportunities.",
      "Developed platform using Enterprise Java, FileNet P8, iLog Jrules, Oracle 9i and Apache Jetspeed.",
      "Managed development and test environment hardware.",
    ],
  },
  {
    title: "School of Management",
    company_name: "Purdue University, West Lafayette, Indiana",
    icon: purdue,
    iconBg: "#E6DEDD",
    date: "September 1994 - December 1998",
    points: [
      "Earned Bachelor of Science in Industrial Management with a Minor in Computer Science",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
