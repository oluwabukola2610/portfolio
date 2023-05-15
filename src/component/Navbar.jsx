import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="py-5 mx-auto container" >
      <div className="flex justify-center lg:justify-start items-center w-full h-16  ">
        <motion.a
          href="#home"
          className="border-2 border-white/70 cursor-pointer font-signature rounded-xl bg-accent/30 text-white/80 p-2 flex justify-center items-center  text-2xl font-bold  "
          whileInView={{
            backgroundColor: [
              "#121212",
              "#B809C3",
              "rgba(219, 26, 210)",
              "rgba(217, 85, 52)",
              "#b936ee",
              "rgba(131,58,180,1)",
              "rgba(253,29,29,1)",
              "rgba(217, 52, 159)",
            ],
            transition: { duration: 1, repeat: Infinity },
          }}
        >
         Bukky&#x27;s
          Code
        </motion.a>
      </div>
    </header>
  );
};

export default Navbar;
