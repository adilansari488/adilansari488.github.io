import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
            Projects
            </h2>
        </motion.div>

        <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 text-3xl font-semibold text-blue-600"
        >
          What I Built
        </motion.h4>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            heading="TinyZr a Serverless URL Shortener"
            description="TinyZr is a sleek and efficient URL shortener service created by Adil Ansari. Simplify and enhance your online experience by transforming long cumbersome URLs into concise links with TinyZr."
            link="https://urlshortener.tinyzr.link"
            more="Checkout TinyZr"
          />
          <Card
            heading="Multi Tier AWS Cloud Infrastructure"
            description="Built a scalable, secure multi-tier AWS cloud infrastructure using ASG, EC2, ELB, VPC, RDS, CloudWatch, SES, SNS, Lambda and S3 for high availability and cost efficiency."
          />
          <Card
            heading="Reduced AWS Cloud Infrastructure Cost by 20%"
            description="Achieved a 20% reduction in AWS infrastructure costs by analyzing and right-sizing EC2 instances, implementing S3 lifecycle policies, introducing Auto Scaling groups, and migrating an over-engineered EKS application to EC2 instances, resulting in significant cost savings for the project."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
