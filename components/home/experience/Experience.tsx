import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Appz Global Tech Pvt. Ltd.",
    position: "Mern Stack Developer",
    time: "04/2025 - 06/2025",
    location: "Noida - Uttar Pradesh",
    description:
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver responsive and dynamic user experiences. Collaborated with cross-functional teams to design, develop, and deploy scalable solutions, while conducting code reviews, debugging, and performance optimization to ensure high efficiency, security, and adherence to software development best practices.",
    tech: [
      "MongoDB", "Express.js", "React", "Node.js", "Git", "Figma", "Clerk"
    ],
  },

  {
    title: "Global Infoventures Pvt. Ltd.",
    position: "Frontend Developer",
    time: "12/2024 - 02/2025",
    location: "Ghazibad - Uttar Pradesh",
    description: "Worked on end-to-end development of responsive web applications using React.js, integrating modern UI libraries like Tailwind CSS and Shadcn UI for sleek, dynamic interfaces. Implemented state management using Context API, and enhanced frontend-backend communication via secure API integration using Axios. Gained hands-on experience in optimizing performance, managing authentication with JWT, and building scalable, mobile-first designs using Vite and component-based architecture.",
    tech: ["JavaScript", "React.js", "Node.js", "Tailwind CSS", "Express.js", "APIs", "HTML5"],
  },



];
