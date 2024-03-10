import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/mudashir-roheemoh-74127824b/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/oluwabukola2610",
    },

    {
      id: 3,
      child: (
        <>
          Mail <FiMail size={25} />
        </>
      ),
      href: "mailto:roheemohmudashir@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://drive.google.com/file/d/1B7RHc3DhpZ7yMSq1MIqNWVPl3JpIobV2/view",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex items-center w-28 h-10 px-3 ml-[-74px] hover:ml-[-4px] hover:rounded-md duration-300 bg-black/20 backdrop-blur-2xl" +
              " " +
              link.style
            }
          >
            <a
              target="_blank"
              rel='noreferrer'
              href={link.href}
              className="flex justify-between  items-center w-full text-white"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
