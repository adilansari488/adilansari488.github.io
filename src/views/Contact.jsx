import React, { useContext, useState } from "react";
import { contactLinks, API_KEY } from "../constants";
import { ThemeContext } from "../themeProvider";
import axios from 'axios';
import { motion } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'https://xe1sr8pze4.execute-api.ap-south-1.amazonaws.com/prod/api';

    try {
      const response = await axios.post(apiUrl, {
        name,
        email,
        message
      }, { headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY } });

      if (response.status === 200) {
        setPopupMessage('Request submitted successfully!');
        setShowPopup(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setPopupMessage('Failed to submit request. Please try again.');
      setShowPopup(true);
    }

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div
      id="contact"
      className={`${darkMode
        ? "bg-gray-100 text-black"
        : "bg-black text-white"
        } pt-24 md:min-h-screen flex flex-col justify-between transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h4 className="text-3xl font-semibold text-blue-500">Connect with me</h4>
          <p className="text-gray-500 text-xl mt-4">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:space-x-8 mt-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"
                    }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"
                    }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"
                    }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white transition-colors"
                  placeholder="Enter your message"
                  rows="5"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-8 flex flex-col justify-center"
          >
            <div className="md:text-right">
              <h1 className="text-2xl font-bold">Email</h1>
              <a
                href="mailto:adilansari488@gmail.com"
                className="block mt-2 text-blue-500 font-semibold hover:underline text-lg"
              >
                adilansari488@gmail.com
              </a>

              <h1 className="text-2xl font-bold mt-8">Location</h1>
              <p className="mt-2 text-blue-500 font-semibold text-lg">
                Agra, Uttar Pradesh
                <br />
                India
              </p>

              <h1 className="text-2xl font-bold mt-8">Social</h1>
              <ul className="flex justify-end space-x-6 mt-4">
                {contactLinks.map((el, index) => (
                  <li key={index}>
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noreferrer"
                      className="block hover:scale-125 transition-transform duration-300"
                    >
                      <img src={theme.state.darkMode ? el.url : el.darkUrl} alt={el.name} className="w-10 h-10" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className={`w-full py-6 flex justify-center mt-12 font-medium ${darkMode ? "bg-white text-black border-t border-gray-200" : "bg-gray-900 text-white border-t border-gray-800"
          }`}
      >
        Thank You For Visiting Adil Ansari ❤
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
          >
            <div className={`p-6 rounded-xl shadow-2xl ${darkMode ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
              <p className="text-lg font-medium">{popupMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
};

import { AnimatePresence } from "framer-motion";

export default Contact;
