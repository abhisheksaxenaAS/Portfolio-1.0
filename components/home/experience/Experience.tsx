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
    time: "July 2024 - September 2024",
    location: "Sector-63, Noida",
    description:
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) to deliver responsive and dynamic user experiences. Collaborated with cross-functional teams to design, develop, and deploy scalable solutions, while conducting code reviews, debugging, and performance optimization to ensure high efficiency, security, and adherence to software development best practices.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Git",
      "Figma"
    ],
  },

  {
    title: "Global Infoventures Pvt. Ltd.",
    position: "AI/ML Trainee",
    time: "December 2023 - June 2024",
    location: "ABESIT-Ghazibad",
    description:
      "Developed user- friendly interfaces for AI / ML applications using HTML, CSS, JavaScript, and React, integrating AI / ML models into the frontend for real - time data visualization and interactive features.Analyzed application performance and gained hands - on experience in implementing computer vision solutions using Python and deep learning frameworks.",
    tech: ["JavaScript", "React.js", "TensorFlow/PyTorch", "Python", "Jupyter Notebook", "Roboflow", "Gmail API"],
  },



];
