import React from "react";
import { techStack } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const professionalExperience = [
    {
      fromYear: "Aug 2023",
      toYear: "Present",
      role: "Cloud and DevOps Engineer + ASE",
      company: "IGT Solutions",
      description: "Designing and configuring highly available AWS and Azure infrastructures, implementing DevSecOps practices with secure CI/CD pipelines (integrating tools like SonarQube, Mend, and Trivy), and managing Kubernetes clusters. Implemented monitoring solutions (Prometheus, Grafana), and migrated databases (Oracle to AWS RDS). Configured Nginx as a reverse proxy to improve application security. Optimizing infrastructure costs (reducing AWS spend by 12%). My role also included mentoring junior team members and fostering cross-functional collaboration."
    },
    {
      fromYear: "May 2022",
      toYear: "Aug 2023",
      role: "Cloud and DevOps Engineer",
      company: "IGT Solutions",
      description: "Automated the deployment process using Azure Pipelines, achieving an 80% reduction in deployment time. I designed and configured highly available AWS infrastructures, significantly improving application uptime and performance. Collaborated closely with cross-functional teams to streamline workflows and improve collaboration, resulting in more efficient development cycles and faster time-to-market for new features"
    },
    {
      fromYear: "Sep 2021",
      toYear: "Sep 2022",
      role: "ARTH2.0 Trainee",
      company: "LinuxWorld Informatics Pvt Ltd",
      description: " Acquired knowledge and practical experience in Linux OS for effective server management and administration. Achieved proficiency in Docker, Kubernetes and DevOps for containerization, orchestration and managing SDLC effectively. Developed skills in writing scripts for automation using Bash and Python3. "
    }
  ];

  const education = [
    {
      fromYear: "Jul 2019",
      toYear: "Jun 2022",
      degreeName: "B.Voc Specialization in IoT",
      university: "Dayalbagh Educational Institute",
      // description: ""
    }
  ]

  const certifications = [
    {
      fromYear: "Aug 2024",
      toYear: "Aug 2027",
      certificateName: "Solutions Architect Associate",
      organization: "Amazon Web Services (AWS)",
      credentials: "https://www.credly.com/badges/0b10aa6a-c7b4-4258-aacf-c7d69da736ed",
      // description: ""
    },
    {
      fromYear: "Dec 2023",
      toYear: "Dec 2026",
      certificateName: "Red Hat Certified System Administrator (RHCSA-v9)",
      organization: "Red Hat",
      credentials: "https://rhtapps.redhat.com/verify?certId=230-271-777",
      // description: ""
    }
  ]

  const SectionTitle = ({ children }) => (
    <h3 className="text-3xl font-display font-semibold text-premium-gold mb-8 uppercase tracking-wider">
      {children}
    </h3>
  );

  return (
    <div id="about" className="bg-premium-charcoal text-premium-silver py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">

        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-premium-gold mx-auto"
          />
        </div>

        {/* Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
            <div className="md:col-span-4 relative">
                <div className="w-full h-full bg-premium-slate/30 rounded-lg border border-white/5 p-8 flex items-center justify-center">
                     <span className="font-display text-9xl text-premium-gold/10 font-bold absolute top-4 left-4">"</span>
                     <p className="text-2xl font-serif text-white italic text-center z-10">
                        Building the future of cloud infrastructure, one container at a time.
                     </p>
                </div>
            </div>
            <div className="md:col-span-8">
                <SectionTitle>My Story</SectionTitle>
                <p className="text-lg leading-relaxed text-premium-silver/80 mb-6">
                    Adil Ansari is a highly motivated DevOps Engineer and a <strong>AWS Certified Solutions Architect Associate</strong> and <strong>Red Hat Certified System Administrator (RHCSA)</strong>. He brings expertise in building and managing cloud infrastructure across AWS and Azure, with a focus on automation, security, and optimization.
                </p>
                <p className="text-lg leading-relaxed text-premium-silver/80">
                     His accomplishments at IGT Solutions include dramatically reducing deployment times (80%), improving application uptime (up to 20%), and cutting AWS costs (12%). Adil is a collaborative team player, a mentor, and a dedicated problem-solver who is passionate about leveraging technology to drive positive results.
                </p>
            </div>
        </div>

        {/* Experience */}
        <div className="mb-24">
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="border-l border-white/10 ml-4 md:ml-0 space-y-16">
                {professionalExperience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-12 md:pl-16"
                    >
                        <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-premium-gold rounded-full ring-4 ring-premium-black" />
                        <span className="text-premium-gold font-mono text-sm mb-2 block">{exp.fromYear} — {exp.toYear}</span>
                        <h4 className="text-2xl font-serif text-white mb-1">{exp.role}</h4>
                        <h5 className="text-xl text-premium-silver/60 mb-4">{exp.company}</h5>
                        <p className="text-premium-silver/70 max-w-3xl leading-relaxed">{exp.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Two Column Layout for Education & Certs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
                <SectionTitle>Education</SectionTitle>
                <div className="border-l border-white/10 space-y-12">
                     {education.map((edu, index) => (
                        <div key={index} className="relative pl-12">
                             <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-premium-silver rounded-full ring-4 ring-premium-black" />
                             <span className="text-premium-gold font-mono text-sm mb-2 block">{edu.fromYear} — {edu.toYear}</span>
                             <h4 className="text-xl font-serif text-white mb-1">{edu.degreeName}</h4>
                             <p className="text-premium-silver/60">{edu.university}</p>
                        </div>
                     ))}
                </div>
            </div>
             <div>
                <SectionTitle>Certifications</SectionTitle>
                <div className="space-y-6">
                     {certifications.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.credentials}
                            target="_blank"
                            rel="noreferrer"
                            className="block group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-premium-gold/30 p-6 rounded-lg transition-all duration-300"
                        >
                             <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="text-lg font-semibold text-white group-hover:text-premium-gold transition-colors">{cert.certificateName}</h4>
                                    <p className="text-sm text-premium-silver/60 mt-1">{cert.organization}</p>
                                </div>
                                <span className="text-xs font-mono text-premium-silver/40">{cert.fromYear} — {cert.toYear}</span>
                             </div>
                        </a>
                     ))}
                </div>
            </div>
        </div>

        {/* Tech Stack */}
        <div>
            <SectionTitle>Tools & Technologies</SectionTitle>
             <motion.div
                className="flex flex-wrap gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.05 } }
                }}
             >
                {techStack.map((tech, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, scale: 0.8 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.5)' }}
                        className="bg-premium-black border border-white/10 rounded-full px-6 py-3 flex items-center space-x-3 cursor-default transition-colors duration-300"
                    >
                        <img src={tech.link} alt={tech.name} className="w-6 h-6 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                        <span className="text-sm font-medium text-premium-silver">{tech.name}</span>
                    </motion.div>
                ))}
             </motion.div>
        </div>

      </div>
    </div>
  );
};

export default About;
