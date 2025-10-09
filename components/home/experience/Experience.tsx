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
    time: "07/2024 - 09/2024",
    location: "Noida - Uttar Pradesh",
    description:
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver responsive and dynamic user experiences. Collaborated with cross-functional teams to design, develop, and deploy scalable solutions, while conducting code reviews, debugging, and performance optimization to ensure high efficiency, security, and adherence to software development best practices.",
    tech: [
      "MongoDB", "Express.js", "React", "Node.js", "Git", "Figma", "Clerk"
    ],
  },

  {
    title: "Global Infoventures Pvt. Ltd.",
    position: "AI/ML Trainee",
    time: "11/2023 - 05/2024",
    location: "Ghazibad - Uttar Pradesh",
    description: "Developed and deployed a deep learning–based real-time PPE violation detection system using Roboflow and custom-trained models, achieving 92% accuracy and reducing manual safety inspections by 40%.",
    tech: ["JavaScript", "React.js", "Python", "Tailwind CSS", "Express.js", "APIs", "HTML5"],
  },



];
