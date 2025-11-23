import React, { useContext } from "react";
import heroBg from "../assets/heroBG.png";
import { ReactTyped as Typed } from "react-typed";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            >
              <span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Hi, I am Adil
              </span>
              <span className="block text-blue-500 z-0 lg:inline mt-2">
                <Typed
                  strings={["DevOps Engineer", "Cloud Engineer", "SRE"]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              I am a Cloud and DevOps Engineer. I am currently working at
              IGT Solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex md:justify-start "
            >
              {contactLinks.map((el) => (
                <a
                  href={el.link}
                  className="mr-5 cursor-pointer mt-8 hover:scale-125 transition-transform duration-300"
                  target="_blank"
                  rel="noreferrer"
                  key={el.name}
                >
                  <img alt={el.name} src={el.url} />
                </a>
              ))}
            </motion.div>
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div className="mt-3 sm:mt-0 cursor-pointer">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 md:py-4 md:text-lg md:px-10" href="https://github.com/adilansari488" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </div>
            </motion.div>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.2,
              delay: 0.2
            }}
            src={heroBg}
            alt="Hero Background"
            className="md:w-3/6 hidden sm:block object-contain max-h-[80vh]"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
