import React, { useContext, useState } from "react";
import { contactLinks, API_KEY } from "../constants";
import { ThemeContext } from "../themeProvider";
import axios from 'axios';

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // const API_KEY = process.env.REACT_APP_API_KEY;

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
        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setPopupMessage('Failed to submit request. Please try again.');
      setShowPopup(true);
    }

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div
      id="contact"
      className={`${darkMode
        ? "bg-gray-100 text-black"
        : "bg-black text-white"
        } pt-24 md:min-h-screen`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center">Contact</h2>

        <div className="mt-12">
          <h4 className="text-3xl font-semibold text-blue-500">Connect with me</h4>
          <p className="text-gray-500 text-xl mt-4">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 mt-12">
          {/* Form Section */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit}>
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your message"
                  rows="5"
                  required
                />
              </div>
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-400"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:pl-8">
            <div className="md:text-right">
              <h1 className="text-2xl font-bold">Email</h1>
              <a
                href="mailto:adilansari488@gmail.com"
                className="block mt-4 text-blue-700 font-semibold"
              >
                adilansari488@gmail.com
              </a>

              <h1 className="text-2xl font-bold mt-8">Location</h1>
              <p className="mt-4 text-blue-700 font-semibold">
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
                      className="hover:scale-125 transition-transform"
                    >
                      <img src={theme.state.darkMode ? el.url : el.darkUrl} alt={el.name} className="w-8 h-8" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`w-full py-3 flex justify-center mt-12 ${darkMode ? "bg-white text-black" : "bg-gray-900 text-white"
          }`}
      >
        Thank You For Visiting Adil Ansari ❤
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className={`p-4 rounded-lg shadow-lg ${darkMode ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>

  );
};

export default Contact;
