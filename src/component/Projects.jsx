import { motion } from "framer-motion";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { fadeIn } from "../../variant";

const Projects = () => {
  return (
    <div id="project" className="py-12 px-4 flex items-center text-white ">
      <div className="mx-auto container">
        <div className="space-y-6 md:space-y-10">
          <div className="flex flex-col items-center gap-4">
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="capitalize  font-primary font-bold text-3xl border-accent border-b-2 p-2 inline"
            >
              Projects
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-lg text-center text-white/70 p-2 lg:p-0  font-secondary"
            >
              Welcome to my portfolio! Here you&#x27;ll find a showcase of my
              passion and expertise, highlighting the projects that define my
              creative journey. Through my work, I strive to create impactful
              and visually stunning experiences that leave a lasting
              impression.I am constantly seeking new opportunities to
              collaborate and push the boundaries of creativity.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-black gap-2 md:gap-5 lg:gap-7">
            <div className="group relative block h-[320px] ">
              <div className="relative rounded-lg flex md:h-[310px] h-[260px] transform items-end border-2 bg-white bg-project bg-no-repeat bg-contain transition-transform group-hover:scale-105 group-hover:opacity-70">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-sm font-medium ">
                    The classic vegie is a landing page with functionality where
                    you can search and filter foods by categories and price, It
                    is designed and developed with react,js and figma.
                  </h2>
                </div>

                <div className="absolute p-4  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://web-gbt-27rd.vercel.app/"
                  >
                    <BsFillPlayCircleFill
                      size={40}
                      className="text-center text-accent/60"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative block h-[320px] ">
              <div className="relative rounded-lg flex md:h-[310px] h-[260px] transform items-end border-2 bg-white  bg-project2 bg-no-repeat bg-contain transition-transform group-hover:scale-105 group-hover:opacity-70">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-md font-secondary font-medium ">
                    This project is the landing page clone of Webgpt which i
                    deploy with React
                  </h2>
                </div>

                <div className="absolute p-4  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://web-gbt.vercel.app/"
                  >
                    <BsFillPlayCircleFill
                      size={40}
                      className="text-center text-accent/60"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative block h-[320px] ">
              <div className="relative rounded-lg flex md:h-[310px] h-[260px] transform items-end border-2 bg-white bg-project3 bg-no-repeat bg-contain transition-transform group-hover:scale-105 group-hover:opacity-70">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-md font-medium  font-secondary">
                    This is a fitness landing page designed and deploy with
                    React,Js,Tailwind and React libries.
                  </h2>
                </div>

                <div className="absolute p-4  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://web-gbt.vercel.app/"
                  >
                    <BsFillPlayCircleFill
                      size={40}
                      className="text-center text-accent/60"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative block h-[320px] ">
              <div className="relative rounded-lg flex md:h-[310px] h-[260px] transform items-end border-2 bg-white bg-project4 bg-no-repeat bg-contain transition-transform group-hover:scale-105 group-hover:opacity-70">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-sm font-medium font-secondary">
                    Multi page ecommerce Website Buit with Html,Css and
                    Javascript. In this website you can check for products,
                    product details and have access to
                    different pages on the site.
                  </h2>
                </div>

                <div className="absolute p-4  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10 ">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wemo-ecommerce-12.vercel.app/"
                  >
                    <BsFillPlayCircleFill
                      size={40}
                      className="text-center text-accent/60"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative block h-[320px] ">
              <div className="relative rounded-lg flex md:h-[300px] h-[250px] transform items-end border-2 bg-white bg-project5 bg-no-repeat bg-contain transition-transform group-hover:scale-105 group-hover:opacity-70">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                  <h2 className="mt-4 text-xl font-medium sm:text-2xl">
                    Go around the world
                  </h2>
                </div>
                <div className="absolute p-4  opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8 z-10 ">
                  <a target="_blank" rel="noreferrer" href="">
                    <BsFillPlayCircleFill
                      size={40}
                      className="text-center text-accent/60"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
