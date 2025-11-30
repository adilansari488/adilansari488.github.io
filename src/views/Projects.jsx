import React from "react";
import { motion } from "framer-motion";

const projectsData = [
  {
    heading: "TinyZr",
    subheading: "Serverless URL Shortener",
    description: "TinyZr is a sleek and efficient URL shortener service created by Adil Ansari. Simplify and enhance your online experience by transforming long cumbersome URLs into concise links with TinyZr.",
    link: "https://urlshortener.tinyzr.link",
    tags: ["Serverless", "AWS Lambda", "DynamoDB", "React"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" // Placeholder
  },
  {
    heading: "Cloud Infrastructure",
    subheading: "Multi-Tier AWS Architecture",
    description: "Built a scalable, secure multi-tier AWS cloud infrastructure using ASG, EC2, ELB, VPC, RDS, CloudWatch, SES, SNS, Lambda and S3 for high availability and cost efficiency.",
    tags: ["AWS", "Terraform", "VPC", "EC2", "RDS"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
  },
  {
    heading: "Cost Optimization",
    subheading: "20% AWS Cost Reduction",
    description: "Achieved a 20% reduction in AWS infrastructure costs by analyzing and right-sizing EC2 instances, implementing S3 lifecycle policies, introducing Auto Scaling groups.",
    tags: ["FinOps", "AWS", "EKS", "S3"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="bg-premium-black text-premium-silver py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight"
           >
             Selected <br/> <span className="text-premium-gold italic">Works</span>
           </motion.h2>
           <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-premium-silver/60 max-w-sm mt-6 md:mt-0"
           >
             A showcase of technical excellence in cloud architecture, automation, and full-stack development.
           </motion.p>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Image Section */}
              <div className="w-full md:w-3/5 group cursor-pointer overflow-hidden rounded-xl">
                 <div className="relative overflow-hidden aspect-video bg-premium-slate/30">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                      src={project.image}
                      alt={project.heading}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-premium-black/20 group-hover:bg-transparent transition-colors duration-500" />
                 </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                 <span className="text-premium-gold font-mono text-xs uppercase tracking-widest mb-4">0{index + 1} / Project</span>
                 <h3 className="text-4xl font-display font-medium text-white mb-2">{project.heading}</h3>
                 <p className="text-xl text-premium-silver/60 mb-6 font-light">{project.subheading}</p>
                 <p className="text-premium-silver/80 leading-relaxed mb-8">{project.description}</p>

                 <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-xs text-premium-silver/60 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                 </div>

                 {project.link && (
                   <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-premium-gold hover:text-white transition-colors duration-300 uppercase tracking-widest text-sm font-semibold group"
                   >
                     View Project
                     <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                   </a>
                 )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
