import React, { useContext, useState } from "react";
import { contactLinks, API_KEY } from "../constants";
import { ThemeContext } from "../themeProvider";
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const theme = useContext(ThemeContext);
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
      className="bg-premium-black text-premium-silver pt-24 pb-12 relative border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="text-center mb-16">
           <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-4"
           >
             Let's <span className="text-premium-gold italic">Talk</span>
           </motion.h2>
           <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="text-premium-silver/60 text-lg max-w-xl mx-auto"
           >
              Interested in collaborating or have a question? Feel free to reach out. I'm always open to discussing new projects and opportunities.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-premium-gold uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-premium-gold transition-colors duration-300 placeholder-white/20"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-premium-gold uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-premium-gold transition-colors duration-300 placeholder-white/20"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-mono text-premium-gold uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-premium-gold transition-colors duration-300 placeholder-white/20 h-32 resize-none"
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-premium-gold text-premium-black font-semibold py-4 uppercase tracking-widest hover:bg-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-12 md:pl-12 border-l border-white/5"
          >
            <div>
              <h4 className="text-sm font-mono text-premium-silver/40 uppercase tracking-wider mb-2">Contact Details</h4>
              <a href="mailto:adilansari488@gmail.com" className="text-2xl md:text-3xl font-display text-white hover:text-premium-gold transition-colors duration-300 block mb-2">adilansari488@gmail.com</a>
              <p className="text-xl font-display text-white">Agra, Uttar Pradesh, India</p>
            </div>

            <div>
              <h4 className="text-sm font-mono text-premium-silver/40 uppercase tracking-wider mb-4">Socials</h4>
              <div className="flex space-x-6">
                {contactLinks.map((el, index) => (
                  <a
                    key={index}
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group"
                  >
                    <div className="p-3 border border-white/10 rounded-full group-hover:border-premium-gold transition-colors duration-300">
                         <img src={theme.state.darkMode ? el.url : el.darkUrl} alt={el.name} className="w-5 h-5 invert opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-premium-silver/40 text-sm font-mono">
            <p>&copy; {new Date().getFullYear()} Adil Ansari. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed & Built with <span className="text-red-500">♥</span></p>
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
               initial={{ scale: 0.9, y: 20 }}
               animate={{ scale: 1, y: 0 }}
               exit={{ scale: 0.9, y: 20 }}
               className="bg-premium-slate border border-premium-gold/20 p-8 max-w-sm text-center shadow-2xl"
            >
              <div className="w-16 h-16 bg-premium-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-premium-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="text-xl font-display text-white mb-2">Message Sent</h3>
              <p className="text-premium-silver/80 mb-6">{popupMessage}</p>
              <button
                onClick={() => setShowPopup(false)}
                className="text-sm font-mono text-premium-gold uppercase tracking-wider hover:text-white transition-colors"
              >
                  Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
