import { motion } from "framer-motion";
import { fadeIn } from "../../variant";

const Experience = () => {
  const sch = [
    {
      id: 1,
      year: 2022,
      title: "Front-End Developer",
      place: "Nupat Technologies",
    },
    {
      id: 2,
      year: 2023,
      title: "Software Engineer",
      place: "ALX Software Program",
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
    <section id="skills" className="py-14 px-4 flex items-center ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 text-white/90 gap-7">
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

          <div className="">
          <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} 
            >            <p className="capitalize font-primary font-bold text-2xl">
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

          <div className="">
          <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }} 
            >
            <p className="capitalize font-primary font-bold text-2xl">
              My Skills
            </p>
            <span className="border border-b-2 w-8 border-accent/70 inline-grid"></span>
            </motion.div>
            <div className="p-4 bg-accent/80 backdrop-blur-2xl flex-col flex space-y-8 mt-5">
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium ">React/Js</span>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                  <div
                    className="bg-[#2e50cb] h-2.5 rounded-full"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium ">Html</span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                  <div
                    className="bg-[#2e50cb] h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium ">
                    Firebase/Firestore
                  </span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                  <div
                    className="bg-[#2e50cb] h-2.5 rounded-full"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium ">
                    Photoshop/Figma
                  </span>
                  <span className="text-sm font-medium">75%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                  <div
                    className="bg-[#2e50cb] h-2.5 rounded-full"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium ">
                    CSS/Tailwind/MUI
                  </span>
                  <span className="text-sm font-medium">90%</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2.5 ">
                  <div
                    className="bg-[#2e50cb] h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
