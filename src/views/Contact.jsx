import React, { useContext, useState } from "react";
import { contactLinks, API_KEY } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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
    } finally {
        setIsSubmitting(false);
    }

    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div
      id="contact"
      className={`${darkMode
        ? "bg-gray-100 text-black transition-colors duration-300"
        : "bg-black text-white transition-colors duration-300"
        } pt-24 min-h-screen relative`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-5xl font-bold text-center">Contact</h2>
        </motion.div>

        <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
        >
          <h4 className="text-3xl font-semibold text-blue-500">Connect with me</h4>
          <p className="text-gray-500 text-xl mt-4 max-w-2xl mx-auto">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:space-x-12 mt-12 justify-center">
          {/* Form Section */}
          <motion.div
            className="w-full md:w-1/2 max-w-lg mx-auto md:mx-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"}`}
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
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"}`}
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
                  className={`block mb-2 text-lg font-medium ${darkMode ? "text-gray-900" : "text-white"}`}
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
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white font-bold py-3 px-4 rounded-lg shadow-md transition-all ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="md:text-right text-center">
              <h1 className="text-2xl font-bold text-blue-500">Email</h1>
              <a
                href="mailto:adilansari488@gmail.com"
                className={`block mt-2 text-xl font-semibold hover:text-blue-500 transition-colors ${darkMode ? 'text-gray-800' : 'text-gray-200'}`}
              >
                adilansari488@gmail.com
              </a>

              <h1 className="text-2xl font-bold mt-8 text-blue-500">Location</h1>
              <p className={`mt-2 text-xl font-semibold ${darkMode ? 'text-gray-800' : 'text-gray-200'}`}>
                Agra, Uttar Pradesh
                <br />
                India
              </p>

              <h1 className="text-2xl font-bold mt-8 text-blue-500">Social</h1>
              <ul className="flex md:justify-end justify-center space-x-6 mt-4">
                {contactLinks.map((el, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <a
                      href={el.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={darkMode ? el.url : el.darkUrl} alt={el.name} className="w-10 h-10" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className={`w-full py-6 flex justify-center mt-20 font-medium ${darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}`}
      >
        Thank You For Visiting Adil Ansari ❤
      </div>

      <AnimatePresence>
        {showPopup && (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-10 right-10 z-50"
            >
            <div className={`px-6 py-4 rounded-lg shadow-2xl border ${darkMode ? "bg-white text-black border-gray-200" : "bg-gray-800 text-white border-gray-700"}`}>
                <p className="font-semibold">{popupMessage}</p>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
