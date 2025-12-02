import React, { useContext } from "react";
import { articleData } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import Card from "../components/Card";

const Services = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={
        darkMode ? "pb-20 bg-gray-50 transition-colors duration-300" : "pb-20 bg-black transition-colors duration-300"
      }
      id="articles"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4 pt-20">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2
            className={
                darkMode
                ? "text-5xl font-bold px-4 md:px-0 text-center text-gray-900"
                : "text-5xl font-bold px-4 md:px-0 text-center text-white"
            }
            >
            Articles
            </h2>
        </motion.div>

        <div className="">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-3xl font-semibold text-blue-500"
          >
            I Write on Dev.to
          </motion.h4>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articleData.map((el, index) => (
               <Card
                  key={index}
                  imageUrl={el.img}
                  heading={el.name}
                  description={el.desc}
                  link={el.articleLink}
                  more="Read More"
               />
            ))}
          </div>

          <motion.div
            className="w-full flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
          <a
            href="https://dev.to/adilansari"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-3 px-8 text-lg font-medium text-center text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:-translate-y-1 transform transition-all focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
            See All Articles
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
