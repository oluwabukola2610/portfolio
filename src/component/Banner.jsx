import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import me from "../assets/HERO2.png";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center lg:max-w-[1640px]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6 lg:flex-row items-center lg:gap-x-20">
          <div className="flex-1 text-center lg:text-justify max-w-md  ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[33px] md:text-[40px] text-white font-primary mb-4 font-bold leading-[0.8] lg:text-[40px]"
            >
              Hi, I&#x27;M ROHEEMOH
            </motion.h1>
            <div className="mb-6 text-[20px] md:text-[23px] lg:text-[28px] leading-[1] font-semibold">
              <TypeAnimation
                sequence={["Web Developer", 2000, "Front-End Developer", 2000]}
                speed={50}
                className="text-accent font-primary"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg text-xl font-sans md:text-2xl lg:text-xl mx-auto lg:mx-0 text-white/80"
            >
              As a skilled front-end developer, I am dedicated to turning ideas
              into innovative web applications and delivering high-quality
              results. Explore my latest projects and articles, showcasing my
              expertise in React.js and web development.
            </motion.p>
            <div className="items-center flex justify-center lg:justify-start mb-12 mx-auto lg:mx-0">
              <button className="btn btn-sm flex items-center cursor-pointer">
                <a href="#project">My Portfolio</a>
                <span className="hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex  max-w-[320px] lg:max-w-[480px]"
          >
            <div className="relative border-2 border-accent/50  p-4 rounded-2xl h-max border-solid border-r-[12px]">
              <img src={me} alt="" className="rounded-3xl bg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
