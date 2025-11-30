import React from "react";
import { articleData } from "../constants";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <div className="bg-premium-charcoal text-premium-silver py-24 relative" id="articles">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
             <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight"
           >
             Latest <br/> <span className="text-premium-gold italic">Insights</span>
           </motion.h2>
           <a
              href="https://dev.to/adilansari"
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center text-premium-gold hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold group"
           >
             Read all on Dev.to
             <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articleData.map((el, index) => (
            <motion.a
              key={index}
              href={el.articleLink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block bg-white/5 border border-white/5 hover:border-premium-gold/30 rounded-xl overflow-hidden transition-all duration-300 hover:bg-white/10"
            >
              <div className="aspect-video overflow-hidden">
                <img
                    src={el.img}
                    alt={el.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-display font-medium text-white mb-3 group-hover:text-premium-gold transition-colors">{el.name}</h4>
                <p className="text-premium-silver/60 text-sm leading-relaxed mb-6 line-clamp-3">{el.desc}</p>
                <span className="text-xs font-mono text-premium-gold uppercase tracking-wider">Read Article</span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <a
              href="https://dev.to/adilansari"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-premium-gold hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold group"
           >
             Read all on Dev.to
             <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
           </a>
        </div>

      </div>
    </div>
  );
};

export default Articles;
