import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="py-5 px-4 mx-auto max-w-[1640px]" >
      <div className="flex justify-center items-center w-full  ">
        <motion.a
          href="#home"
          className="border border-white/50 cursor-pointer font-signature rounded-2xl bg-accent/30 text-white/80 p-2 flex justify-center items-center  text-xl font-medium  "
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
