import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn } from "../utils/motion";
import { hero } from "../constants";
import { zoomIn } from "../utils/motion";

const HeroCard = ({ desc, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", index + 1 * 2, 3)}
    // variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="flex-[0.75]  rounded-2xl"
  >
    <li>{desc}</li>
  </motion.div>
);

const Hero = () => {
  return (
    <>
      <section className="relative  w-full h-screen  mx-auto">
        <div
          className={`${styles.paddingX}  absolute inset-0  max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <motion.div variants={zoomIn(0.1, 1)}>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className=" text-[#915eff]">Himanshu</span>
              </h1>
              <h1 className={`${styles.heroHeadText} text-white`}>
                A <span className=" text-[#915eff]">Web </span> Developer
              </h1>
            </motion.div>

            <ul
              role="list"
              className={`${styles.heroSubText}  mt-6 text-white-100 list-disc pl-5 space-y-3 `}
            >
              {hero.map((item, index) => (
                <HeroCard key={item.desc} index={index} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Hero, "hero");
