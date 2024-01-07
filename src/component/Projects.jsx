import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import project2 from "../assets/portfolio/yumrun.png";
import project3 from "../assets/portfolio/purfi-image.png";
import project1 from "../assets/portfolio/wallet.png";
import project4 from "../assets/portfolio/project4.png";

const Projects = () => {
  const works = [
    {
      id: 1,
      img: project1,
      text: "Wallet Bank is a personal project, and it's an immersive financial experience. As a user, you'll not only find it effortless to register and log in, but you'll also step into a secure digital space. Expect a user-friendly interface, seamless transaction capabilities,",
      name: "Wallet Bank",
      stack:
        "React,NodeJs, Emailjs, Framer Motion ,Hooks,Tailwind css, and Daisy Ui",
      link: "https://wallet-wb.vercel.app/",
      git: "https://github.com/oluwabukola2610/Wallet--Bank",
    },
    {
      id: 2,
      img: project3,
      name: " Purfi Business",
      stack: "Next,Redux,Ant design, Tailwind css, Daisy Ui, and other Libraries",
      link: "https://pursfinance.com/",
      git: "https://github.com/oluwabukola2610",
    },
    {
      id: 3,
      img: project2,
      name: "YumRun",
      stack: "React,Firebase,Tailwind css, Daisy Ui, and other Libraries",
      text: " YumRun is your go-to destination for food delivery, offering users a delightful and visually engaging experience. Our website boasts advanced features like food search, filtering, and a robust login authentication system.",
      link: "https://yum-run.vercel.app/",
      git: "https://github.com/oluwabukola2610/yumRunn",
    },
   

    {
      id: 4,
      img: project4,
      name: "Wemo Ecommerce",
      stack: "Html,TailwindCSS, SASS, and JAVASCRIPT ",
      text: " Wemo Ecommerce is a comprehensive multi-page online shopping platform. Explore our website to discover a wide range of products, access detailed product information, and navigate seamlessly through various sections.",
      link: "https://wemo-ecommerce-12.vercel.app/",
      git: "https://github.com/oluwabukola2610/wemo-Ecommerce",
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
            <h2 className="text-3xl md:text-4xl text-center text-white/80 font-extrabold font-secondary">
             Personal Projects
            </h2>
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" text-lg text-center text-white/70 p-2 lg:p-0 mt-6  font-sans"
            >
              Welcome to my portfolio! Here you&#x27;ll find a showcase of my
              passion and expertise, highlighting the projects that define my
              creative journey. Through my work, I strive to create impactful
              and visually stunning experiences that leave a lasting
              impression.I am constantly seeking new opportunities to
              collaborate and push the boundaries of creativity.
            </motion.p>
          </div>

          <div className=" gap-6 grid-cols-1 grid md:grid-cols-2 text-black ">
            {works.map((project) => (
              <div
                key={project.id}
                className="w-full h-[410px] md:w-[500px] md:h-[350px] bg-transparent cursor-pointer group perspective"
              >
                <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
                  <div className="absolute backface-Hidden border-2 w-full h-full">
                    <img
                      src={project.img}
                      alt={project.name}
                      title={project.title}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute backface-Hidden my-rotate-y-180 w-full h-full bg-accent/80 overflow-hidden">
                    <div className="flex flex-col space-y-6 h-full p-4 pb-8">
                      <h2>
                        <span className="font-semibold font-serif">Title:</span>{" "}
                        {project.name}
                      </h2>
                      <h2>
                        <span className="font-semibold font-serif">
                          Description:
                        </span>{" "}
                        {project.text}
                      </h2>
                      <h2>
                        <span className="font-semibold font-serif">
                          Tech stack:
                        </span>{" "}
                        {project.stack}
                      </h2>
                      <div className="flex justify-center px-6 absolute -bottom-10 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-110">
                        <a
                          className="border-2 px-6 py-1 rounded mr-1"
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Check project source code"
                        >
                          Source code
                        </a>
                        <a
                          href={project.link}
                          className="border-2 px-6 py-1 rounded"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Check project demo"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </div>
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
