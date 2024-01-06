import { motion } from "framer-motion";
import me from "../assets/HERO2.png";

import { fadeIn } from "../../variant";
import { FaAward } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const About = () => {
  return (
    <div
      id="about"
      className="md:h-screen flex flex-col justify-center lg:max-w-[1640px] mx-auto "
    >
      <div className="container mx-auto ">
      <h2 className="text-3xl md:text-4xl text-center text-white/80 font-extrabold font-secondary">
          Passion Fuels Purpose!
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[400px_1fr]  mt-12 items-center  px-3 w-full">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex relative border-2 w-fit border-accent/50 rounded-2xl h-max border-solid border-r-[12px]"
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

          {/* about me text */}
          <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col space-y-6"
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center w-full">
              <div className="flex flex-col space-y-4 items-center p-4 border border-white rounded-lg text-white">
                <FaAward />{" "}
                <h2 className="font-semibold text-gray-300">Experience</h2>
                <p className="text-white/80">2+ years</p>
                <p className="text-white/80">Front-End Development</p>
              </div>
              <div className="flex flex-col space-y-4 items-center p-4 border border-white rounded-lg text-white">
                <BsFillPeopleFill />
                <h2 className="font-semibold text-gray-300">Education</h2>
                <p className="text-white/80">B.Sc Bachelors Degree</p>
                <p className="text-white/80">Alx-Software Engineer</p>
              </div>
            </div>
            <p className=" text-[17px] text-white/60 p-2 lg:p-0 text-justify font-sans">
              I'm a passionate web developer based in Nigeria. My expertise lies
              in crafting responsive and user-friendly UIs and web applications.
              With a focus on continuous learning and staying at the forefront
              of cutting-edge technologies, I bring a wealth of experience from
              freelance projects. Beyond client work, I invest time in nurturing
              my own product initiatives, infusing creativity and innovation
              into impactful digital solutions. I'm eager to connect with
              like-minded individuals, collaborate on exciting projects, and
              explore opportunities for mutual growth.
            </p>
            {/* <h2 className="capitalize font-primary text-white/70 font-bold text-2xl border-accent border-b-2 p-2 inline">
              About me
            </h2> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
