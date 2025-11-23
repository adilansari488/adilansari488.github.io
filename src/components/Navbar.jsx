import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Articles",
      route: "articles",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm md:px-8 px-1 fixed w-full top-0 transition-colors duration-300"
            : "bg-gray-900/80 backdrop-blur-md border-b border-gray-700 z-50 shadow-sm md:px-8 px-1 fixed w-full top-0 transition-colors duration-300"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto max-w-7xl">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={
                darkMode
                  ? "text-xl font-medium text-decoration-none whitespace-nowrap text-black transition-colors duration-300"
                  : "text-xl font-medium text-decoration-none whitespace-nowrap text-white transition-colors duration-300"
              }
              style={{ fontFamily: "'Lobster', cursive", fontSize: "2rem" }}
            >
              {`<Adil Ansari>`}
            </a>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul
              className={
                "flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {links.map((el) => (
                <li className="cursor-pointer" key={el.name}>
                  <Link
                    to={el.route}
                    activeClass={"text-white bg-blue-500"}
                    spy={true}
                    smooth={true}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md transition-all duration-200"
                        : "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md transition-all duration-200"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-110 transition-transform duration-200 block"
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-110 transition-transform duration-200 block"
                  alt="Dark Mode"
                />
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-110 transition-transform duration-200 block"
                  alt="Light Mode"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  alt="Dark Mode"
                  className="w-6 mr-4 cursor-pointer hover:scale-110 transition-transform duration-200 block"
                />
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
        {/* Mobile view nav bar */}
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }}
            exit={{ x: 100, opacity: 0, transition: { type: "spring", stiffness: 100 } }}
            className={
              darkMode
                ? "bg-white/95 backdrop-blur-md py-4 px-4 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-xl right-2 block w-48 border border-gray-100"
                : "bg-gray-900/95 backdrop-blur-md py-4 px-4 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-xl right-2 block w-48 border border-gray-800"
            }
          >
            <ul className="md:hidden flex flex-col space-y-2 md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  key={el.name}
                  to={el.route}
                  activeClass={"text-white bg-blue-500"}
                  className={
                    darkMode
                      ? "hover:bg-blue-100 text-gray-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                      : "hover:bg-gray-800 text-gray-200 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)}
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
