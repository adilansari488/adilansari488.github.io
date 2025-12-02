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
    <div
      id="/"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        darkMode
          ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover", backgroundPosition: "center" }
          : { backgroundImage: `url('${cloudDark}')`, backgroundSize: "cover", backgroundPosition: "center" }
      }
    >
      {/* Overlay gradient for better text readability */}
      <div className={darkMode
        ? "absolute inset-0 bg-gradient-to-r from-white/80 to-transparent pointer-events-none"
        : "absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none"}>
      </div>

      <main className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between">

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className={
              darkMode
              ? "text-2xl md:text-3xl font-bold text-blue-600 mb-2"
              : "text-2xl md:text-3xl font-bold text-blue-400 mb-2"
            }>
              Hello There!
            </h2>
            <h1 className={
              darkMode
                ? "text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4"
                : "text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
            }>
              I'm <span className={darkMode ? "text-blue-600" : "text-blue-400"}>Adil</span>
            </h1>

            <div className="text-2xl md:text-4xl font-semibold mb-6 h-12">
              <span className={darkMode ? "text-gray-700" : "text-gray-300"}>I am a </span>
              <span className={darkMode ? "text-blue-600" : "text-blue-400"}>
                <Typed
                  strings={[
                    "DevOps Engineer",
                    "Cloud Engineer",
                    "SRE Enthusiast",
                    "Tech Explorer"
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop
                />
              </span>
            </div>

            <p className={
              darkMode
                ? "text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
                : "text-lg md:text-xl text-gray-300 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            }>
              Building scalable cloud infrastructure and automating deployment pipelines.
              Currently crafting solutions at <span className="font-bold">IGT Solutions</span>.
            </p>

            <motion.div
              className="flex justify-center md:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {contactLinks.map((el, index) => (
                <motion.a
                  key={index}
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="bg-white/10 p-3 rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                >
                  <img src={el.url} alt={el.name} className="w-8 h-8" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
               className="mt-10"
            >
               <a
                 href="contact"
                 className={
                   darkMode
                   ? "inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all"
                   : "inline-block px-8 py-3 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transform hover:-translate-y-1 transition-all"
                 }
               >
                 Let's Connect
               </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Hero Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
            {/* Abstract Background Shapes behind image */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={
                    darkMode
                    ? "absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 top-0 right-0"
                    : "absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900 rounded-full mix-blend-screen filter blur-3xl opacity-30 -z-10 top-0 right-0"
                }
            ></motion.div>
             <motion.div
                animate={{
                    rotate: -360,
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className={
                    darkMode
                    ? "absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 bottom-0 left-10"
                    : "absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-900 rounded-full mix-blend-screen filter blur-3xl opacity-30 -z-10 bottom-0 left-10"
                }
            ></motion.div>

          <motion.img
            src={heroBg}
            alt="Adil Ansari"
            className="w-3/4 md:w-full max-w-lg object-contain drop-shadow-2xl"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

      </main>
    </div>
  );
};

export default Home;
