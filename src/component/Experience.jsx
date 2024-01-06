import { motion } from "framer-motion";
import { fadeIn } from "../../variant";
import work from "../assets/coding.png";


import { BsBriefcase } from "react-icons/bs";

const Experience = () => {

  const exp = [
    {
      id: 1,
      year: 2023,
      title: "Front-End Developer",
      place: "Volt Wolf Limited",
    },
    {
      id: 2,
      year: 2023,
      title: "Lead Front-End Developer",
      place: "HookBank Limited",
    },
    {
      id: 3,
      year: 2023,
      title: "Front-End Developer (contract)",
      place: "SwiftVia",
    },
    {
      id: 4,
      year: 2022,
      title: "Front-End Developer Intern",
      place: "Nupat Technologies",
    },
  ];
  return (
    <section
      id="skills"
      className="py-14 px-4 flex items-center lg:max-w-[1640px] "
    >
      <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-white/80 font-extrabold font-secondary">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_500px] mt-12 items-center  px-3 w-full">
          {/* about me text */}
          <div className="grid grid-cols-1 gap-4 items-center w-full">
            {exp.map((data, key) => (
              <div
                key={key}
                className="flex space-x-6 p-4 bg-white/50 rounded-lg items-center"
              >
                <div className="rounded-full bg-accent w-12 h-12 flex justify-center items-center">
                  <BsBriefcase />
                </div>
                <div>
                  <p>{data.year}</p>
                  <p className="font-semibold">{data.title}</p>
                  <p>{data.place}</p>
                </div>
              </div>
            ))}
          </div>
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full"
          >
            <img
              src={work}
              title="roheemoh"
              alt=""
            className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
<div className="grid grid-cols-1 md:grid-cols-3 text-white/90 gap-7">
  {/* education */}
  {/* <div className="">
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
</div> */}

  {/* experience */}
  {/* <div className="">
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
        <p>{data.des}</p>
        <div className="border-b-[0.5px] border-slate-50/40"></div>
      </div>
    ))}
  </div>
</div> */}

  {/* skills */}
  {/* <div className="">
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
        <img
          loading="lazy"
          src={react}
          title="react"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div className="border-b-[0.5px] border-slate-50/40"></div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between">
        <h2>JavaScript</h2>
        <img
          loading="lazy"
          src={js}
          title="js"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div className="border-b-[0.5px] border-slate-50/40"></div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between">
        <h2>TypeScript</h2>
        <img
          loading="lazy"
          src={typeS}
          title="typescript"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div className="border-b-[0.5px] border-slate-50/40"></div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between">
        <h2>Html5/Css</h2>
        <span className="space-x-2 flex">
          <img
            loading="lazy"
            src={html}
            title="html"
            alt=""
            width="24"
            height="24"
          />
          <img
            loading="lazy"
            src={css}
            title="css"
            alt=""
            width="24"
            height="24"
          />
        </span>
      </div>
      <div className="border-b-[0.5px] border-slate-50/40"></div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between">
        <h2>TailwindCss</h2>
        <img
          loading="lazy"
          src={TailwindCss}
          title="tailwindcss"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div className="border-b-[0.5px] border-slate-50/40"></div>
    </div>
    <div className="space-y-3">
      <div className="flex justify-between">
        <h2>Git</h2>
        <img
          loading="lazy"
          src={git}
          title="git"
          alt=""
          width="24"
          height="24"
        />
      </div>
      <div className="border-b-[0.5px] border-slate-50/40"></div>
    </div>
  </div>
</div> */}
</div>;
