import { motion } from "framer-motion";
import me from "../assets/HERO2.png";

import { fadeIn } from "../../variant";

const About = () => {
  return (
    <div
      id="about"
      className="md:min-h-screen flex items-center justify-center lg:max-w-[1640px] mx-auto "
    >
      <div className="">
        <h2 className="text-4xl md:text-5xl text-center text-white/80 font-extrabold font-secondary">
          Passion Fuels Purpose!
        </h2>
        <div className="flex flex-col-reverse gap-y-8  lg:flex-row  lg:space-x-24 mt-6  items-center px-3 ">
          {/* about me text */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 md:max-w-lg items-center lg:items-start "
          >
            <h2 className="capitalize font-primary text-white/70 font-bold text-2xl border-accent border-b-2 p-2 inline">
              About me
            </h2>
            <p className=" text-lg text-white/70 p-2 lg:p-0 text-justify font-sans">
              I am a Front-end Web Developer located in Lagos, boasting a
              year&rsquo;s worth of experience in this dynamic field. Despite
              commencing my career in Chemistry, my true passion undeniably lies
              in the expansive realm of technology and web development. I
              specialize in designing and building digital solutions for various
              clients. This includes creating modern and stylish websites,
              functional web services, and online stores. My focus is on making
              digital experiences that are not only visually appealing but also
              user-friendly. I&rsquo;m always excited to explore innovative ways
              to turn my client&rsquo;s concepts into actual online realities.
            </p>
          </motion.div>

          {/* image for desktop */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden lg:flex relative border-2 w-fit border-accent/50  rounded-2xl h-max border-solid border-r-[12px]"
          >
            <img
              src={me}
              title="roheemoh"
              alt=""
              className="rounded-2xl bg "
              width="380"
              height="380"
            />
          </motion.div>

          {/* image for mobile view */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" lg:hidden  max-w-[320px] lg:max-w-[480px] "
          >
            <div className="relative border-2 border-accent/50  p- rounded-2xl h-max border-solid border-r-[12px]">
              <img
                src={me}
                title="roheemoh"
                alt=""
                className="rounded-3xl bg "
                width="380"
                height="380"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
