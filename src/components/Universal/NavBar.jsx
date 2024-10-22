import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; // For hamburger icon
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="shadow-lg  relative mb-[5.75rem]">
      <div className="fixed top-0 z-50 bg-primary right-0 left-0 drop-shadow-lg py-4 ss:px-12 xx:px-6  ">
        <div className=" mx-auto flex justify-between items-start">
          {/* Logo */}
          <div className="">
            <img
              src="https://i.postimg.cc/rFrtmvVj/1000-X-1000-2.png"
              className="ss:w-[4rem] ss:h-[4rem] xx:w-[3rem] xx:h-[3rem] rounded-full"
              alt=""
            />
          </div>

          {/* Hamburger Icon (Mobile View) */}
          <div
            className="md:hidden text-2xl text-secondary flex gap-4 items-center my-auto cursor-pointer"
            onClick={toggleMenu}
          >
            <div className="">
              <FaSearch className="text-accent w-4 h-4 hover:w-5 hover:h-5 duration-300 " />
            </div>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

          {/* Nav Links (Desktop View) */}
          <div className="hidden md:flex items-center my-auto gap-8">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all  ${isActive ? "text-accent underline" : ""}`
                }
              >
                <span className="text-secondary hover:text-accent md:pb-2 font-medium hover:font-thin hover:border-b hover:border-b-accent cursor duration-300 ">
                  {link.name}
                </span>
              </Link>
            ))}
            <div className="md:flex md:gap-8 md:items-center ">
              <div className="md:block hidden">
                <FaSearch className="text-accent w-4 h-4 hover:w-5 hover:h-5 duration-300 " />
              </div>
              <motion.button
                initial={{ rotateZ: "0deg", scale: 1 }}
                whileHover={{ rotateZ: "-2deg", scale: 1.03 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className="ml-5 bg-accent text-primary hover:bg-transparent hover:border hover:border-accent hover:text-accent duration-700 rounded-md  xs:py-3 xs:px-6 xs:text-base xx:py-2 xx:px-4 xx:text-sm"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center mt-4 space-y-4 pt-12"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {links.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.1 }}
                className=""
              >
                <Link
                  to={link.path}
                  className={({ isActive }) =>
                    `text-secondary hover:text-accent font-medium transition-all ${
                      isActive ? "text-accent underline" : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="">
              <motion.button
                initial={{ rotateZ: "0deg", scale: 1 }}
                whileHover={{ rotateZ: "-2deg", scale: 1.03 }}
                transition={{ duration: 0.75, ease: "easeInOut" }}
                className=" bg-accent text-primary hover:bg-transparent hover:border hover:border-accent hover:text-accent duration-700 rounded-md  xs:py-3 xs:px-6 xs:text-base xx:py-2 xx:px-4 xx:text-sm"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
