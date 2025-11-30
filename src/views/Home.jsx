import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { contactLinks } from "../constants";

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-premium-black"
      id="/"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-premium-slate/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-3/5 text-center md:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-premium-gold font-display text-xl md:text-2xl tracking-widest uppercase mb-4"
            >
              DevOps & Cloud Engineer
            </motion.h2>

            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white leading-tight mb-6">
              Adil <br/>
              <span className="text-white/20 relative">
                Ansari
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                  className="absolute bottom-2 left-0 h-[2px] bg-premium-gold"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-premium-silver/80 text-lg md:text-xl max-w-lg mx-auto md:mx-0 font-light leading-relaxed mb-10"
            >
              Architecting scalable infrastructure and automating workflows for the modern web. Specialized in AWS, Azure, and Kubernetes.
            </motion.p>

            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/adilansari488"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-transparent border border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-black transition-all duration-300 rounded-none font-medium tracking-wide uppercase text-sm"
              >
                View Resume
              </motion.a>

              <div className="flex items-center gap-6">
                {contactLinks.map((el, index) => (
                  <motion.a
                    key={index}
                    href={el.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                  >
                     <img src={el.darkUrl || el.url} alt={el.name} className="w-6 h-6 invert" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            style={{ y }}
            className="md:w-2/5 mt-16 md:mt-0 relative hidden md:block"
          >
             {/* Decorative Circle */}
             <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full"
             />
             <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-premium-gold/10 rounded-full"
             />

             {/* Abstract Code/Tech representation or keeping simple minimal visual */}
             <div className="relative z-10 p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
                <div className="flex space-x-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="space-y-2 font-mono text-xs text-premium-silver/60">
                   <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = &#123;</p>
                   <p className="pl-4">name: <span className="text-green-400">'Adil Ansari'</span>,</p>
                   <p className="pl-4">role: <span className="text-green-400">'DevOps Expert'</span>,</p>
                   <p className="pl-4">skills: [<span className="text-green-400">'AWS'</span>, <span className="text-green-400">'K8s'</span>, <span className="text-green-400">'Terraform'</span>],</p>
                   <p className="pl-4">passion: <span className="text-green-400">'Building Scalable Systems'</span></p>
                   <p>&#125;;</p>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
