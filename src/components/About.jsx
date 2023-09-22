//external imports
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

//internal imports
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title,icon }) => {
  return (
    <p>{title}</p>
  )
}

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
        Hello I&apos;m Hudu, a passionate frontend web developer, I enjoy
        creating things that live on the internet. My interest in Web
        development continuously grows because of the passion for building
        well-tailored web applications for our everyday activities. My main
        focus is building digitally inclusive web products for our world. I have
        developed impressive web apps personally and as well collaboratively
        with React, Javascript, Typescript, Node.js and Express.js.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;
