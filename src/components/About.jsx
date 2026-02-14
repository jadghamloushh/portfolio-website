import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[10px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[10px] py-4 px-8 min-h-[180px] flex justify-center items-center flex-col"
      >
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />

        <h3 className="text-white text-[16px] font-bold text-center mt-2">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a cybersecurity researcher and bug bounty hunter focused on
        identifying real-world vulnerabilities in modern web applications and
        enterprise systems. I specialize in offensive security discovering
        critical issues such as XSS, access control flaws, logic
        vulnerabilities, misconfigurations and more before they can be
        exploited. With a strong technical background, I approach security with
        an attacker’s mindset, constantly testing, refining, and building tools
        to uncover weaknesses.
      </motion.p>

      {/* Updated Container for Grid Layout */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
