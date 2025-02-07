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

  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A Bit About Me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Adil Ansari is a highly motivated DevOps Engineer and a <strong>AWS Certified Solutions Architect Associate</strong> and <strong>Red Hat Certified System Administrator (RHCSA)</strong>. He brings expertise in building and managing cloud infrastructure across AWS and Azure, with a focus on automation, security, and optimization. His accomplishments at IGT Solutions include dramatically reducing deployment times (80%), improving application uptime (up to 20%), and cutting AWS costs (12%). Adil is a collaborative team player, a mentor, and a dedicated problem-solver who is passionate about leveraging technology to drive positive results.
            </p>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Professional Experience
            </h4>
            <div className="mt-8 flex flex-col relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full border-l-2 border-blue-500"></div>

              {professionalExperience.map((experience, index) => (
                <div key={index} className="mb-12 pl-12 relative">
                  {/* Timeline Marker */}
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

                  {/* Year Range */}
                  <div className="text-left text-blue-500 font-semibold text-lg mb-2">
                    {experience.fromYear} - {experience.toYear}
                  </div>

                  {/* Role, Company, and Description */}
                  <div className={darkMode ? "text-gray-600" : "text-gray-300"}>
                    <h5 className={darkMode ? "text-xl font-semibold" : "text-xl font-semibold text-white"}>
                      {experience.role}
                    </h5>
                    <p className="text-md font-semibold italic">{experience.company}</p>
                    <p className="text-md mt-2 text-justify w-1/2">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Education
            </h4>
            <div className="mt-8 flex flex-col relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full border-l-2 border-blue-500"></div>

              {education.map((degree, index) => (
                <div key={index} className="mb-12 pl-12 relative">
                  {/* Timeline Marker */}
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

                  {/* Year Range */}
                  <div className="text-left text-blue-500 font-semibold text-lg mb-2">
                    {degree.fromYear} - {degree.toYear}
                  </div>

                  {/* Role, Company, and Description */}
                  <div className={darkMode ? "text-gray-600" : "text-gray-300"}>
                    <h5 className={darkMode ? "text-xl font-semibold" : "text-xl font-semibold text-white"}>
                      {degree.degreeName}
                    </h5>
                    <p className="text-md font-semibold italic">{degree.university}</p>
                    <p className="text-md mt-2 text-justify w-1/2">{degree.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Certifications
            </h4>
            <div className="mt-8 flex flex-col relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full border-l-2 border-blue-500"></div>

              {certifications.map((certification, index) => (
                <div key={index} className="mb-12 pl-12 relative">
                  {/* Timeline Marker */}
                  <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full"></div>

                  {/* Year Range */}
                  <div className="text-left text-blue-500 font-semibold text-lg mb-2">
                    {certification.fromYear} - {certification.toYear}
                  </div>

                  {/* Role, Company, and Description */}
                  <div className={darkMode ? "text-gray-600" : "text-gray-300"}>
                    <h5 className={darkMode ? "text-xl font-semibold" : "text-xl font-semibold text-white"}>
                      {certification.certificateName} <a className="text-blue-500 text-base" href={certification.credentials} target="_blank" rel="noreferrer">(verify)</a>
                    </h5>
                    <p className="text-md font-semibold italic">{certification.organization}</p>
                    {/* <p className="text-md mt-2 text-justify w-1/2">{certification.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Tools and Technologies
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I use a combination of cutting-edge technology and new age tools.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-between ">
            {techStack.map((el, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
