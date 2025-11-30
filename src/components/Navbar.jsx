import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Replaced useMotionValueEvent with useEffect to support older framer-motion versions
  useEffect(() => {
    return scrollY.onChange((latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  }, [scrollY]);

  const links = [
    { name: "Home", route: "/" },
    { name: "About", route: "about" },
    { name: "Articles", route: "articles" },
    { name: "Projects", route: "projects" },
    { name: "Contact", route: "contact" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed w-full top-0 z-50 bg-premium-black/80 backdrop-blur-lg border-b border-white/5"
      >
        <div className="flex justify-between items-center py-4 px-6 md:px-12 mx-auto max-w-7xl">
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className="text-2xl font-display font-semibold text-premium-silver hover:text-premium-gold transition-colors duration-300"
            >
              Adil Ansari<span className="text-premium-gold">.</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-8">
              {links.map((el) => (
                <li key={el.name} className="relative group">
                  <Link
                    to={el.route}
                    spy={true}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="cursor-pointer text-sm font-medium text-premium-silver/80 hover:text-white transition-colors duration-300 uppercase tracking-wider"
                  >
                    {el.name}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-premium-gold transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center z-50">
            <Hamburger
              toggled={toggle}
              size={24}
              duration={0.8}
              distance="lg"
              toggle={setToggle}
              color={toggle ? "#d4af37" : "#e0e0e0"}
            />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-premium-black flex flex-col justify-center items-center md:hidden"
          >
            <ul className="flex flex-col space-y-8 text-center">
              {links.map((el, i) => (
                <motion.li
                  key={el.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  <Link
                    to={el.route}
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(false)}
                    className="text-4xl font-display font-medium text-premium-silver hover:text-premium-gold transition-colors duration-300 cursor-pointer"
                  >
                    {el.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
