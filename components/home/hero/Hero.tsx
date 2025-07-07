import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/as.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          
          <Reveal>
            <h1 className={styles.title}>
              Hi, I&apos;m AS<span>.</span>
            </h1>
          </Reveal>
          
          <Reveal>
            <h2 className={styles.subTitle}>
              I&apos;m a <span>Frontend Developer</span>
            </h2>
          </Reveal>
          
          <Reveal>
            <p className={styles.aboutCopy}>
              I&apos:m a web developer with a strong foundation in Computer Science and a deep interest in AI/ML. Over the past few years, I've built impactful web applications through personal projects and internships, constantly expanding my skill set. Passionate about creating modern digital solutions—always curious, always growing.
              <br />Let&apos;s connect!
            </p>
          </Reveal>

          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Abhishek Saxena | Full Stack Developer"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
