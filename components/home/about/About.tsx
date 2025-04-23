import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Abhishek Saxena, and I&apos;m final year Computer Science and Engineering student.
              <br /><br />
              I specialize in both frontend and backend development, combining creativity and logic to deliver seamless user experiences and powerful functionality.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              On the backend, I work extensively with <strong>Spring Boot</strong> for creating robust, secure RESTful APIs and enterprise-grade applications. I also build efficient server-side solutions using <strong>JavaScript (Node.js)</strong>, giving me flexibility in designing modern full-stack applications.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              My tech stack includes React, Tailwind CSS, Node.js, Spring Boot, and MySQL — along with strong experience in API integration, user authentication, and database design. I&apos;m also familiar with Docker, Linux environments, and tools like Roboflow for deploying AI/ML models.
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m always looking for new challenges and opportunities to learn and grow as a developer.
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
              🔗
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve interned as both a full-stack and AI/ML developer, working on projects like PPE Violation Detection, Brain Tumor Classification using CNNs, and secure login/signup systems backed by MySQL.
            </p>
          </Reveal>

          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              When I&apos;m not immersed in code, you&apos;ll probably find me wandering through the mountains — my favorite escape from the digital world.
              There&apos;s something magical about the fresh mountain air, the calmness of nature, and the energizing vibes that fuel my creativity. It&apos;s where I recharge, reflect, and reconnect with what matters most.

            </p>

          </Reveal>


          <Reveal>
            <p className={styles.aboutText}>
            </p>
          </Reveal>

          <Reveal>
            <p className={styles.aboutText}>
              I also love capturing moments through my lens — snapping scenic views, candid moments, and anything that tells a story. Photography in the mountains is more than a hobby; it&apos;s a way of preserving memories that inspire my work back at the desk.

            </p>
          </Reveal>


          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
