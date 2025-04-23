import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>

            <span className="chip">HTML</span>
            <span className="chip">JavaScript</span>
            <span className="chip">React</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">MySQL</span>
            <span className="chip">Tailwind CSS</span>
            <span className="chip">Firebase</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">TensorFlow</span>
            <span className="chip">Roboflow</span>
            <span className="chip">Docker</span>
            <span className="chip">Linux (Ubuntu)</span>
            <span className="chip">React Native</span>
            <span className="chip">Figma</span>
            <span className="chip">Photography 📸</span>
            <span className="chip">Mountain Travel 🏔️</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
