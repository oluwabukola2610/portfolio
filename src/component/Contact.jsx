import { fadeIn } from "../../variant";
import { motion } from "framer-motion";

import contact from "../assets/contact-img (1).svg";

const Contact = () => {
  return (
    <div id="contact" className="py-16 px-4 flex items-center mb-12 lg:max-w-[1640px] lg:mb-0">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center lg:space-x-12 space-y-9 lg:flex-row">
        <motion.div
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount:0.3}}           className="flex flex-col items-center lg:items-start">
            <p className="capitalize font-primary text-white/70 font-bold text-xl border-accent border-b-2 p-2 inline">
              Let&#x27;s work together!
            </p>{" "}
            <img src={contact} loading="lazy" title="contact me" alt="" width="450" height="450"  />
          </motion.div>
          
         {/* form */}

          <form
            action="https://getform.io/f/bc8a3574-0432-490a-80a4-8d93d3d8c55e"
            method="POST"
            className="w-full md:w-2/3 lg:w-1/2 font-secondary border rounded-3xl flex flex-col p-6 gap-y-8 items-start text-white/70"
          >
            <input
              name="name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="text"
              placeholder="Enter your name"
            />
            <input
              name="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all "
              type="email"
              placeholder="Enter your email"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              className="bg-transparent border-b py-5 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-3"
            />
            <button className="btn btn-lg">Send message </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
