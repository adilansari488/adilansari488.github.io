import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const darkMode = theme.state.darkMode;

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Articles", route: "articles" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={
          scrolled
            ? darkMode
              ? "glass fixed w-full top-0 z-50 transition-all duration-300 shadow-md"
              : "glass fixed w-full top-0 z-50 transition-all duration-300 shadow-md"
            : "fixed w-full top-0 z-50 transition-all duration-300 bg-transparent"
        }
      >
        <div className="flex justify-between items-center py-4 px-4 md:px-12 mx-auto max-w-7xl">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-3xl font-bold tracking-wider text-black"
                  : "text-3xl font-bold tracking-wider text-white"
              }
              style={{ fontFamily: "'Lobster', cursive" }}
            >
              &lt;Adil /&gt;
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {links.map((el) => (
                <li key={el.name} className="cursor-pointer group relative">
                  <Link
                    to={el.route}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={
                      darkMode
                        ? "text-lg font-medium text-gray-800 transition-colors duration-300 hover:text-blue-600"
                        : "text-lg font-medium text-gray-200 transition-colors duration-300 hover:text-blue-400"
                    }
                  >
                    {el.name}
                  </Link>
                  <span
                    className={
                      darkMode
                      ? "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full duration-300"
                      : "absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full duration-300"
                    }
                  ></span>
                </li>
              ))}
            </ul>

            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleTheme()}
              className="cursor-pointer p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 h-6"
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 h-6"
                  alt="Dark Mode"
                />
              )}
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center space-x-4">
             <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleTheme()}
              className="cursor-pointer"
            >
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 h-6"
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 h-6"
                  alt="Dark Mode"
                />
              )}
            </motion.div>

            <div className={darkMode ? "text-black" : "text-white"}>
              <Hamburger
                toggled={toggle}
                size={24}
                toggle={setToggle}
                color={darkMode ? "#000000" : "#ffffff"}
              />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100 }}
            className={
              darkMode
                ? "fixed inset-0 z-40 bg-white/95 backdrop-blur-sm flex flex-col justify-center items-center"
                : "fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm flex flex-col justify-center items-center"
            }
          >
            <ul className="flex flex-col space-y-8 text-center">
              {links.map((el) => (
                <motion.li
                  key={el.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={el.route}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    onClick={() => setToggle(false)}
                    className={
                      darkMode
                        ? "text-3xl font-bold text-gray-800"
                        : "text-3xl font-bold text-white"
                    }
                  >
                    {el.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
