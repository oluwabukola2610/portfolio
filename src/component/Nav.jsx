import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="mx-auto container">
        <div className="w-[90%] bg-neutral-900 h-[55px] backdrop-blur-2xl rounded-full max-w-[380px] mx-auto px-3 flex justify-between items-center text-xl text-white/50">
          <Link activeClass="active" smooth={true} spy={true} offset={-200} to="home" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer ">
            <BiHomeAlt />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="about" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer ">
            <BiUser />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="skills" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer ">
            <BsClipboardData />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="project" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer ">
            <BsBriefcase />
          </Link>
          <Link activeClass="active" smooth={true} spy={true} to="contact" className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer ">
            <BsChatSquare />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
