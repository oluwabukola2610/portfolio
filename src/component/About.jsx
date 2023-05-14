import { motion } from "framer-motion";
import bg from "../assets/heroo.jpeg";

import { fadeIn } from "../../variant";

const About = () => {
  return (
    <div id="about" className="md:py-10  px-4 flex items-center">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-6xl text-center text-white/80 font-extrabold font-secondary">
          Passion Fuels Purpose!
        </h1>
        <div className="grid grid-cols-1 space-y-6 lg:grid-cols-2 lg:space-x-24 mt-3 items-center  ">
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center gap-4 items-center lg:items-start "
          >
            <h2 className="capitalize font-primary text-white/70 font-bold text-2xl border-accent border-b-2 p-2 inline">
              About me
            </h2>
            <p className=" text-lg text-white/70 p-2 lg:p-0 text-justify">
              A Front-end Web Developer based in Lagos with 1 year of experience
              in the field. Although I started my career in the field of
              Chemistry, But my true passion lay in the realm of technology and
              web development. I design and develop services for customers of
              all sizes, specializing in creating stylish, modern websites, web
              services and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. I am always looking for new and innovative ways to
              bring my clients visions to life.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="relative border-2 border-accent/50  p-6 rounded-2xl h-max border-solid border-r-[12px]"
          >
            <img src={bg} alt="" className="bg rounded-3xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
