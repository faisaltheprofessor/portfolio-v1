"use client";
import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import React, { useState } from "react";

const Experience = () => {
  let tabs = [
  {
    name: "Land Berlin",
    id: "current",
    link: "",
    position: "Infrastructure Support Specialist in Security Management & Specialist Administrator for Digital Records",
    description: [
      "Manage and optimize digital records systems to ensure security, compliance, and accessibility",
      "Maintain and monitor IT infrastructure, including data centers and virtualization technologies",
      "Ensure server security and implement security protocols and best practices",
      "Automate workflows and deployments using Ansible",
      "Manage containerized environments with Kubernetes and Docker",
      "Develop and support internal applications for operational efficiency",
      "Provide technical support and troubleshooting for infrastructure and security-related issues",
      "Implement and oversee emergency response and backup plans",
      "Collaborate with cross-functional teams to safeguard system integrity and compliance",
      "Create and maintain detailed technical documentation",
      "Stay up to date with emerging technologies and industry trends in IT infrastructure and security"
    ],
    dates: "August 2024 - Present",
  },

  {
    name: "Brainspin",
    id: "brainspin",
    link: "",
    position: "Software Developer",
    description: [
      "Developed and maintained responsive web applications using PHP, HTML, CSS, and JavaScript",
      "Built and optimized databases for storing and retrieving application data using MySQL and other database systems",
      "Collaborated with designers and product managers to create user-friendly, visually appealing interfaces",
      "Implemented and integrated APIs for third-party services and systems",
      "Troubleshot and debugged issues, performing regular testing to ensure optimal performance and functionality",
      "Researched and applied emerging PHP technologies and industry best practices",
      "Collaborated in an agile environment, participating in code reviews and knowledge-sharing sessions",
      "Documented project requirements, specifications, and technical processes following PHP standards (PSR-12)"
    ],
    dates: "November 2022 - February 2024",
  },

  {
    name: "CLAP",
    id: "clap",
    link: "",
    position: "Web Developer",
    description: [
      "Developed web applications using modern technologies and frameworks",
      "Designed and implemented databases to support application requirements",
      "Debugged and resolved issues to ensure optimal application performance",
      "Deployed applications to production environments and managed ongoing operations",
      "Gathered user requirements and translated them into functional specifications",
      "Created prototypes and mockups to visualize application design and functionality",
      "Conducted thorough testing and quality assurance of developed applications",
      "Stayed up to date with emerging trends and technologies in web development"
    ],
    dates: "September 2019 - August 2021",
  },

  {
    name: "AAIP",
    id: "aaip",
    link: "",
    position: "Web Developer",
    description: [
      "Developed web applications using modern technologies and frameworks",
      "Designed and implemented databases to support application requirements",
      "Debugged and resolved issues to ensure optimal application performance",
      "Deployed applications to production environments and managed ongoing operations",
      "Gathered user requirements and translated them into functional specifications",
      "Created prototypes and mockups to visualize application design and functionality",
      "Conducted thorough testing and quality assurance of developed applications",
      "Collaborated with cross-functional teams to ensure seamless integration of systems",
      "Stayed up to date with emerging trends and technologies in web development"
    ],
    dates: "September 2017 - June 2021",
  }
];
  let [selectedTab, setSelectedTab] = useState("current");
  let experience = tabs.find((tab) => tab.id === selectedTab);
  return (
    <>
      <motion.section
        className="flex flex-col mx-auto  px-auto w-[80%]"
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Heading text="Where I have worked" number={2} />

        <motion.div
          className="flex flex-col md:flex-row mt-10 transition-all gap-5 pr-20  mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        >
          <div className="w-60">
            <ul className="transition-all flex md:flex-col transition:all">
              {tabs.map((tab) => (
                <li
                  className={cn(
                    "hover:bg-light-navy text-slate hover:text-green transition-all  px-6 hover:cursor-pointer py-5 border-t-2 md:border-t-0 md:border-l-2  border-light-navy text-base",
                    {
                      "border-t-green md:border-l-green bg-light-navy text-green":
                        selectedTab === tab.id,
                    }
                  )}
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </div>
          <motion.div
            key={selectedTab}
            className="text-slate h-screen md:h-36"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-2xl text-light-slate">
              {experience?.position}
            </h1>
            <h2 className="text-base m-3  ml-0">{experience?.dates}</h2>
            <ul className="mt-2 flex flex-col gap-y-2">
              {experience?.description.map((description) => (
                <li
                  className="text-base last-of-type:mb-40"
                  key={Math.random()}
                >
                  <span className="text-green text-2xl">▹ </span>
                  {description}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Experience;
