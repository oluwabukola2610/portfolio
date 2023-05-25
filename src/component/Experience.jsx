import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import react from "../assets/react (1).svg";
import typeS from "../assets/typescript.svg";
import js from "../assets/javascript.svg";
import git from "../assets/git.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import TailwindCss from "../assets/tailwind.svg";

const Experience = () => {
  const sch = [
    {
      id: 1,
      year: 2023,
      title: "Software Engineer",
      place: "ALX Software Program",
    },
    {
      id: 2,
      year: 2022,
      title: "Front-End Developer",
      place: "Nupat Technologies(bootcamp)",
    },

    {
      id: 3,
      year: 2022,
      title: "Bsc Chemistry",
      place: "Lagos State University",
    },
  ];
  const exp = [
    {
      id: 1,
      year: 2022,
      title: "Front-End Developer Intern",
      place: "Nupat Technologies",
    },
    {
      id: 2,
      year: 2023,
      title: "Freelancer",
      place: "Lagos State",
    },
    {
      id: 3,
      year: 2023,
      title: "Software Engineer",
      place: "ALX Software Program",
    },
  ];
  return (
    <section
      id="skills"
      className="py-14 px-4 flex items-center lg:max-w-[1640px] "
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 text-white/90 gap-7">
          {/* education */}
          <div className="">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className="capitalize font-primary font-bold text-2xl">
                Education
              </p>
              <span className="border border-b-2 w-8 border-accent/70 inline-grid"></span>
            </motion.div>
            <div className="p-4 bg-[#ff56f6]/50 backdrop-blur-2xl flex-col flex space-y-8 mt-5">
              {sch.map((data) => (
                <div key={data.id} className="space-y-3">
                  <p className="px-3 text-sm bg-black rounded-2xl w-fit text-white">
                    {data.year}
                  </p>
                  <h2>{data.title}</h2>
                  <p>{data.place}</p>
                  <div className="border-b-[0.5px] border-slate-50/40 "></div>
                </div>
              ))}
            </div>
          </div>

          {/* experience */}
          <div className="">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className="capitalize font-primary font-bold text-2xl">
                Experience
              </p>
              <span className="border border-b-2 w-8 border-accent/70 inline-grid"></span>
            </motion.div>
            <div className="p-4 bg-black/5 backdrop-blur-2xl flex-col flex space-y-8 mt-5">
              {exp.map((data) => (
                <div key={data.id} className="space-y-3">
                  <p className="px-3 text-sm bg-accent rounded-2xl w-fit text-white">
                    {data.year}
                  </p>
                  <h2>{data.title}</h2>
                  <p>{data.place}</p>
                  <div className="border-b-[0.5px] border-slate-50/40"></div>
                </div>
              ))}
            </div>
          </div>

          {/* skills */}
          <div className="">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <p className="capitalize font-primary font-bold text-2xl">
                Skills
              </p>
              <span className="border border-b-2 w-8 border-accent/70 inline-grid"></span>
            </motion.div>
            <div className="p-4 bg-accent/80 backdrop-blur-2xl flex-col flex space-y-8 mt-5">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h2>React/Js</h2>
                  <img src={react} alt="" className="h-6 w-6" />
                </div>
                <div className="border-b-[0.5px] border-slate-50/40"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h2>JavaScript</h2>
                  <img src={js} alt="" className="h-6 w-6" />
                </div>
                <div className="border-b-[0.5px] border-slate-50/40"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h2>TypeScript</h2>
                  <img src={typeS} alt="" className="h-6 w-6" />
                </div>
                <div className="border-b-[0.5px] border-slate-50/40"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h2>Html5/Css</h2>
                  <span className="space-x-2 flex">
                    <img src={html} alt="" className="h-6 w-6" />
                    <img src={css} alt="" className="h-6 w-6" />
                  </span>
                </div>
                <div className="border-b-[0.5px] border-slate-50/40"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h2>TailwindCss</h2>
                  <img src={TailwindCss} alt="" className="h-6 w-6" />
                </div>
                <div className="border-b-[0.5px] border-slate-50/40"></div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <h2>Git</h2>
                  <img src={git} alt="" className="h-6 w-6" />
                </div>
                <div className="border-b-[0.5px] border-slate-50/40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
