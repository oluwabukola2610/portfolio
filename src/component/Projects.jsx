import { motion } from "framer-motion";
import { GoLinkExternal } from "react-icons/go";
import { fadeIn } from "../../variant";
import project from "../assets/portfolio/yumrun.png";
import project2 from "../assets/portfolio/project2.png";
import project3 from "../assets/portfolio/wallet.png";
import project4 from "../assets/portfolio/project4.png";

const Projects = () => {
  const works = [
    {
      id: 1,
      img: project3,
      text: "Wallet is a banking web application that allow users to register,login and perform transactions, it was built with React,Node js, Mongo db and frameworks",
      name: "Wallet Bank",
      link: "https://wallet-wb.vercel.app/",
      git: "https://github.com/oluwabukola2610/Wallet--Bank",
    },
    {
      id: 2,
      img: project,
      name: "YumRun",
      text: "YumRun is a food delivery website using React and Tailwind CSS to provide users with a seamless and visually appealing experience. The website includes a food search and filtering feature, and a login authentication system",
      link: "https://yum-run.vercel.app/",
      git: "https://github.com/oluwabukola2610/yumRunn",
    },

    {
      id: 3,
      img: project4,
      name: "Wemo Ecommerce",
      text: "Multi page ecommerce Website Buit with Html,Css and Javascript. In this website you can check for products,product details and have access to different pages on the site.",
      link: "https://wemo-ecommerce-12.vercel.app/",
      git: "https://github.com/oluwabukola2610/wemo-Ecommerce",
    },
    {
      id: 4,
      img: project2,
      name: "Webgpt",
      text: "This project is the landing page clone of Webgpt which i built with React",
      link: "https://web-gbt.vercel.app/",
      git: "https://github.com/oluwabukola2610/Web-gbt",
    },
  ];
  return (
    <div
      id="project"
      className="py-12 px-4 flex items-center text-white lg:max-w-[1640px]"
    >
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
              className=" text-lg text-center text-white/70 p-2 lg:p-0  font-sans"
            >
              Welcome to my portfolio! Here you&#x27;ll find a showcase of my
              passion and expertise, highlighting the projects that define my
              creative journey. Through my work, I strive to create impactful
              and visually stunning experiences that leave a lasting
              impression.I am constantly seeking new opportunities to
              collaborate and push the boundaries of creativity.
            </motion.p>
          </div>
          <div className="flex flex-col lg:m-10 gap-6 md:grid md:grid-cols-2 text-black ">
            {works.map((project) => (
              <div
                key={project.id}
                className="bg-[#010105]/30 text-white/90 p-4 rounded-xl hover:scale-[1.04]  hover:shadow-accent/30 hover:shadow-lg duration-300 "
              >
                <img
                  className="rounded mb-4"
                  src={project.img}
                  alt={project.name}
                  title={project.name}
                  loading="lazy"
                  width="550" height="550"
                />
                <div>
                  <h3 className="pb-3 text-center font-bold text-xl md:text-2xl">
                    {project.name}
                  </h3>
                  <p className="pb-4 text-xs md:text-base md:mx-2  font-sans">
                    {project.text}
                  </p>
                </div>
                <div className="flex justify-between items-center ">
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check project demo"
                  >
                    <GoLinkExternal size={28} />
                  </a>
                  <a
                    href={project.link}
                    className="border-2 px-6 py-1 md:py-2 rounded bg-[#7000ff]/50 hover:bg-[#E8E8FF] hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Check project demo"
                  >
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
