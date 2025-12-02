import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

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
    }
  ];

  const certifications = [
    {
      fromYear: "Aug 2024",
      toYear: "Aug 2027",
      certificateName: "Solutions Architect Associate",
      organization: "Amazon Web Services (AWS)",
      credentials: "https://www.credly.com/badges/0b10aa6a-c7b4-4258-aacf-c7d69da736ed",
    },
    {
      fromYear: "Dec 2023",
      toYear: "Dec 2026",
      certificateName: "Red Hat Certified System Administrator (RHCSA-v9)",
      organization: "Red Hat",
      credentials: "https://rhtapps.redhat.com/verify?certId=230-271-777",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="about" className={darkMode ? "bg-white transition-colors duration-300" : "bg-gray-900 transition-colors duration-300"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:mt-0 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
            <h2
            className={
                darkMode
                ? "text-5xl font-bold px-4 md:px-0 text-center text-gray-900"
                : "text-5xl font-bold px-4 md:px-0 text-center text-white"
            }
            >
            About Me
            </h2>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A Bit About Me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-600 leading-relaxed"
                  : "mt-4 text-xl text-justify text-gray-300 leading-relaxed"
              }
            >
              Adil Ansari is a highly motivated DevOps Engineer and a <strong>AWS Certified Solutions Architect Associate</strong> and <strong>Red Hat Certified System Administrator (RHCSA)</strong>. He brings expertise in building and managing cloud infrastructure across AWS and Azure, with a focus on automation, security, and optimization. His accomplishments at IGT Solutions include dramatically reducing deployment times (80%), improving application uptime (up to 20%), and cutting AWS costs (12%). Adil is a collaborative team player, a mentor, and a dedicated problem-solver who is passionate about leveraging technology to drive positive results.
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={containerVariants}
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Professional Experience
            </h4>
            <div className="mt-8 flex flex-col relative border-l-2 border-blue-500 ml-4 md:ml-6">
              {professionalExperience.map((experience, index) => (
                <motion.div
                    key={index}
                    className="mb-12 pl-8 md:pl-12 relative"
                    variants={timelineVariants}
                >
                  {/* Timeline Marker */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                     <h5 className={darkMode ? "text-xl font-bold text-gray-800" : "text-xl font-bold text-white"}>
                      {experience.role}
                    </h5>
                    <div className="text-blue-500 font-semibold text-md">
                        {experience.fromYear} - {experience.toYear}
                    </div>
                  </div>

                  <p className="text-lg font-semibold italic text-blue-400 mb-2">{experience.company}</p>
                  <p className={darkMode ? "text-gray-600 text-justify" : "text-gray-400 text-justify"}>
                      {experience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={containerVariants}
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Education
            </h4>
             <div className="mt-8 flex flex-col relative border-l-2 border-blue-500 ml-4 md:ml-6">
              {education.map((degree, index) => (
                <motion.div
                    key={index}
                    className="mb-12 pl-8 md:pl-12 relative"
                    variants={timelineVariants}
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                     <h5 className={darkMode ? "text-xl font-bold text-gray-800" : "text-xl font-bold text-white"}>
                      {degree.degreeName}
                    </h5>
                    <div className="text-blue-500 font-semibold text-md">
                        {degree.fromYear} - {degree.toYear}
                    </div>
                  </div>
                  <p className="text-lg font-semibold italic text-blue-400">{degree.university}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

           {/* Certifications Section */}
           <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={containerVariants}
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Certifications
            </h4>
             <div className="mt-8 flex flex-col relative border-l-2 border-blue-500 ml-4 md:ml-6">
              {certifications.map((certification, index) => (
                <motion.div
                    key={index}
                    className="mb-12 pl-8 md:pl-12 relative"
                    variants={timelineVariants}
                >
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                     <h5 className={darkMode ? "text-xl font-bold text-gray-800" : "text-xl font-bold text-white"}>
                      {certification.certificateName}
                       <a className="text-blue-500 text-sm ml-2 hover:underline" href={certification.credentials} target="_blank" rel="noreferrer">(verify)</a>
                    </h5>
                    <div className="text-blue-500 font-semibold text-md">
                        {certification.fromYear} - {certification.toYear}
                    </div>
                  </div>
                  <p className="text-lg font-semibold italic text-blue-400">{certification.organization}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Tech Stack Section */}
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Tools and Technologies
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-600"
                  : "mt-4 text-xl text-justify text-gray-300"
              }
            >
              I use a combination of cutting-edge technology and new age tools.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap mt-8 justify-center gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, translateY: -5 }}
                className={
                    darkMode
                    ? "py-4 px-6 bg-white shadow-md border border-gray-100 rounded-xl flex items-center w-40 md:w-48 justify-center flex-col gap-3"
                    : "py-4 px-6 bg-gray-800 shadow-md border border-gray-700 rounded-xl flex items-center w-40 md:w-48 justify-center flex-col gap-3"
                }
              >
                <img alt={el.name} src={el.link} className="w-12 h-12 object-contain" />
                <h4 className={darkMode ? "text-md font-medium text-gray-800" : "text-md font-medium text-white"}>
                    {el.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
