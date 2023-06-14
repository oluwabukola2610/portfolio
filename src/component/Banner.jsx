// import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import me from "../assets/image-removebg-preview (2).png";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";

const Banner = () => {
  const links = [
    {
      id: 1,
      child: (
        
           <FaLinkedin size={30} />
      ),
      href: "https://www.linkedin.com/in/mudashir-roheemoh-74127824b/",
    },
    {
      id: 2,
      child: (
           <FaGithub size={30} />
      ),
      href: "https://github.com/oluwabukola2610",
    },
    {
      id: 3,
      child: (

           <FiMail size={30} />
      ),
      href: "mailto:roheemohmudashir@gmail.com",
    },
    {
      id: 4,
      child: (
           <BsFillPersonLinesFill size={30} />
      ),
      href: "/public/ROHEEMOH_MUDASHIR_Resume_25-05-2023-15-35-46.pdf",
      download: true,
    },
  ];
  const TEXTS = ["Front-End Developer", "Web Developer"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section
      id="home"
      className="min-h-[85vh] flex items-center justify-center lg:max-w-[1640px] mx-auto "
    >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 items-center">
          <div className="px-3 md:px-0 text-center lg:text-justify max-w-md space-y-6 ">
           
            {/* hero text */}
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[33px] md:text-[45px]  text-white font-primary mb-4 font-bold leading-[0.8] lg:text-[40px]"
            >
              Hi, I&#x27;M ROHEEMOH
            </motion.h1>
            <h1>
              <TextTransition
                springConfig={presets.wobbly}
                className="text-accent font-bold font-primary text-2xl flex justify-center lg:justify-start md:text-4xl lg:tex-2xl"
              >
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </h1>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 max-w-lg text-xl font-sans md:text-3xl lg:text-xl mx-auto lg:mx-0 text-white/80"
            >
              As a skilled front-end developer, I am dedicated to turning ideas
              into innovative web applications and delivering high-quality
              results. Explore my latest projects and articles, showcasing my
              expertise in React.js and web development.
            </motion.p>
            
            {/* button for desktop */}
            <div className="hidden items-center md:flex justify-center lg:justify-start mx-auto lg:mx-0">
              <button className=" btn lg:btn-sm md:btn-lg mt-2 flex items-center  cursor-pointer">
                <a href="#project">My Portfolio</a>
                <span className="hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} />
                </span>
              </button>
            </div>
          
          {/* social link for mobile only*/}
             <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
             className="md:hidden flex justify-center pt-5 space-x-12 text-[#a42086]">
              {links.map((data) => (
                <div key={data.id}>
                  <a href={data.href}
                  target="_blank"
                  rel='noreferrer'
                  download={data.download}
                  >{data.child}</a>
                </div>
              ))}
            </motion.div>

          </div>
          
          {/* hero image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex justify-center w-full"
          >
              <img src={me} alt="" className="rounded-3xl bg" />
          </motion.div>
        </div>
    </section>
  );
};

export default Banner;
