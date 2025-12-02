import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageUrl, heading, description, link, more }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-white rounded-xl border border-gray-200 shadow-xl dark:bg-gray-800 dark:border-gray-700 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
    >
      {imageUrl &&
        (link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-48 object-cover"
              src={imageUrl}
              alt={heading}
            />
          </a>
        ) : (
          <div className="block overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-48 object-cover"
              src={imageUrl}
              alt={heading}
            />
          </div>
        ))}
      <div className="p-6 flex flex-col flex-grow">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {heading}
            </h5>
          </a>
        ) : (
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {heading}
          </h5>
        )}
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-300 flex-grow leading-relaxed">
          {description}
        </p>
        {link && more && (
          <div className="mt-auto pt-4">
             <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-all"
          >
            {more}
            <svg
              className="ml-2 -mr-1 w-4 h-4"
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
          </div>

        )}
      </div>
    </motion.div>
  );
};

export default Card;
