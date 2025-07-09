import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [

  {
    title: "Moview...Let-s-watch",
    imgSrc: "/project-imgs/Moview1.png",
    code: "https://github.com/abhisheksaxenaAS/Moview...Let-s-watch.git",
    projectLink: "https://moview-let-s-watch.vercel.app/",
    tech: ["React.js", "framer-motion", "Sytled Components", "React Router "],
    description:
      "The moview app is built using React.js with Vite for fast frontend development. React Router handles navigation, and Axios is used for API calls.",
    modalContent: (
      <>
        <p>
          Worked as a front-end developer and created dynamic reusable
          components, integrated calendly, messaging and project management
          features.
        </p>
        <p>
          The tech stack is based on Nextjs with the custom Styled components,
          integrated a third party api.
        </p>
      </>
    ),
  },

  {
    title: "MyPortfolio",
    imgSrc: "/project-imgs/MyPortfolio.png",
    code: "https://github.com/abhisheksaxenaAS/MyPortfolio.git",
    projectLink:
      "https://my-portfolio-pi-seven-77.vercel.app/",
    tech: ["React", "Styled Components", "vite", "tailwind"],
    description:
      "MyPortfolio is a sleek and responsive personal portfolio website built using React, designed to showcase my skills, projects, and professional journey in a dynamic and interactive way.",
    modalContent: (
      <>
        <p>
          MyPortfolio is a personal portfolio website developed to present my journey as a web developer.
          It features my key projects, technical skills, and achievements, all in one interactive space.
          The goal is to create a clean and engaging platform that reflects both my creativity and technical strengths.
        </p>
        <p>This is a very enjoyable project that I built using React and styled with Tailwind CSS.</p>

      </>
    ),
  },

  {
    title: "CityMart",
    imgSrc: "/project-imgs/CityMart.png",
    code: "https://github.com/abhisheksaxenaAS/CityMart.git",
    projectLink:
      "https://city-mart.vercel.app/",
    tech: ["React", "Styled Components", "vite", "tailwind", "Shadcn UI", "React Lucid"],
    description:
      "At CityMart, we’re on a mission to make modern shopping simple, stylish, and accessible. Whether you’re looking for the latest fashion trends, cutting-edge electronics, or everyday essentials, we bring the best right to your doorstep",
    modalContent: (
      <>
        <p>
          CityMart is a modern shopping platform designed to simplify your everyday purchases.
          From fashion and electronics to daily essentials, CityMart brings a wide variety of quality products directly to your doorstep.
          The aim is to provide a seamless and stylish shopping experience that is both accessible and enjoyable.

          <br />
          <p>🚚 Lightning-Fast Delivery</p>
          <p>💳 Safe & Seamless Payments</p>
          <p>🔍 Smart Search & Personalized Experience</p>
          Easily find what you&apos;re looking for with our powerful search and filter tools. Plus, enjoy a personalized feed based on your preferences and previous orders.
        </p>
        <p>
          This exciting project was built using React for a dynamic frontend experience and styled with Tailwind CSS to ensure a clean, responsive, and user-friendly design.
        </p>


      </>
    ),
  },

  {
    title: "Zinema - A movie ticket booking app ",
    imgSrc: "/project-imgs/Zinema.png",
    code: "https://github.com/abhisheksaxenaAS/Zinema.git",
    projectLink:
      "https://zinema-nu.vercel.app/",
    tech: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind", "Clerk-Authentication", "JavaScript"],
    description:
      "Zinema is a MERN stack-based movie ticket booking application that lets users browse movies, check showtimes, and securely book tickets. It features Clerk-based authentication with admin role support, TMDB integration for real-time movie data, Stripe for payments, and Brevo for email notifications. Inngest handles async tasks like background jobs and webhooks. The project is deployed via Vercel with MongoDB Atlas as the database, offering a fast, responsive, and production-ready user experience.",
    modalContent: (
      <>
        <p>Zinema is a modern, full stack movie ticket booking application designed to provide users with a seamless and engaging experience for discovering movies and booking tickets. Built using the MERN stack (MongoDB, Express.js, React, Node.js), Zinema offers a dynamic interface with real-time movie data integration via TMDB (The Movie Database), enabling users to browse the latest movies, showtimes, and book tickets with ease.</p>
        <p>User authentication and role management are handled securely using Clerk, allowing both regular users and admins to access tailored features. Admins can manage movies, shows, and bookings through a powerful admin dashboard, while users receive timely updates and booking confirmations via Brevo-powered email notifications. Stripe integration ensures smooth and secure payment processing for ticket purchases.</p>
        <p>To enhance backend efficiency, the app utilizes Inngest for handling asynchronous events and background workflows such as email triggers and data syncs. MongoDB Atlas is used as the cloud database solution, ensuring data is stored reliably and scalably.</p>
        <p>The project follows a clean code structure with environment-based configurations, and is fully version-controlled with GitHub. The frontend is deployed using Vercel, ensuring fast load times and a responsive user experience across devices. With thoughtful design, powerful integrations, and robust performance, Zinema delivers a production-ready movie ticket booking solution for both users and administrators.</p>

      </>
    ),
  },


  // {
  //   title: "Portfolio v.1",
  //   imgSrc: "",
  //   code: "",
  //   projectLink: "",
  //   tech: ["React", "Styled Components", "Typescript"],
  //   description: "First Portfolio Made with React JS",
  //   modalContent: (
  //     <>
  //       <p>
  //         This is my first version of my portfolio that i made to showcase my
  //         projects.
  //       </p>
  //       <p>First step for learning React JS and creating my portfolio</p>
  //     </>
  //   ),
  // },
];
