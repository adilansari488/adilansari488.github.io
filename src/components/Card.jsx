import React from "react";
import { motion } from "framer-motion";

const Card = ({ imageUrl, heading, description, link, more, tags }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
      className="max-w-xl bg-white rounded-xl border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 my-4 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1"
    >
      {imageUrl && (
        <a href={link} target="_blank" rel="noopener noreferrer">
           <img
            className="rounded-t-xl w-full h-48 object-cover"
            src={imageUrl}
            alt={heading}
          />
        </a>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <a href={link} target={link ? "_blank" : "_self"} rel="noopener noreferrer">
          <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 transition-colors">
            {heading}
          </h5>
        </a>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 flex-grow leading-relaxed">
          {description}
        </p>

        {tags && (
          <div className="mb-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="mt-auto">
             <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-200"
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
