import html from "../assets/html.png";
import css from "../assets/CSS3.png";
import js from "../assets/JAVASCRIPT-LOGO.png";
import git from "../assets/git-hd.png";
import typescript from "../assets/typescript.png";
import react from "../assets/eact-react.png";
import nextjs from "../assets/next-js.png";
import tailwimd from "../assets/tailwind-css.png";
import { fadeIn } from "../../variant";
import {motion} from 'framer-motion'

const Skills = () => {
  const skill = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-sky-500" },
    { id: 3, src: js, title: "JS", style: "shadow-yellow-500" },
    { id: 4, src: typescript, title: "TS", style: "shadow-blue-400" },
    { id: 5, src: react, title: "REACT", style: "shadow-blue-800" },
    { id: 6, src: nextjs, title: "NextJs", style: "shadow-white" },
    { id: 7, src: tailwimd, title: "TailwindCss", style: "shadow-sky-400" },
    { id: 8, src: git, title: "GIT", style: "shadow-gray-400" },
  ];
  return (
    <section id="skills" className="py-16 lg:section flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center w-full h-full text-white/70">
          <div className="text-center md:text-left">
            <p className="capitalize font-primary font-bold text-2xl border-accent border-b-2 p-2 inline">
              Experience
            </p>
            <p className="py-4 text-lg font-secondary">
              These are the technologies I&#x27;ve worked with
            </p>
          </div>

          <motion.divdiv
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}  
             className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
            {skill.map((x) => (
              <div
                key={x.id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${x.style}`}
              >
                <img src={x.src} alt="" className=" w-24 mx-auto h-24 object-contain "  />
                <p className="mt-4 font-secondary">{x.title}</p>
              </div>
            ))}
          </motion.divdiv>
        </div>
      </div>
    </section>
  );
};

export default Skills;
