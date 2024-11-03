"use client";
import Heading from "@/components/heading";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import React, { useState } from "react";

const Experience = () => {
  let tabs = [
    {
        name: "Current",
        id: "current",
        link: "",
        position: "Infrastructure Support Specialist in Security Management and Specialist Administrator for Digital Records",
        description: [
            "Responsible for digital records management",
            "Ensure server security and network security",
            "Manage virtualization technologies",
            "Develop tools to automate tasks and enhance work efficiency"
        ],
        dates: "August 2024 - Present",
      },

    {
      name: "Brainspin",
      id: "brainspin",
      link: "",
      position: "Software Developer",
      description: [
        "Developing and maintaining responsive web applications using PHP, HTML, CSS, and JavaScript.",
        "Building and maintaining databases to store and retrieve application data using PHP and MySQL or other database systems",
        "Collaborating with our designer and product manager to create user-friendly and visually appealing interfaces",
        "Implementing and integrating APIs for third-party services and systems using PHP",
        "Troubleshooting and debugging issues, and performing regular testing to ensure optimal performance and functionality",
        "Staying updated with emerging PHP technologies and industry trends to continuously improve development practices",
        "Collaborating with team members in an agile environment and participating in code reviews and knowledge-sharing sessions",
        "Documenting project requirements, specifications, and technical processes using PHP documentation standards (PSR-12)",
      ],
      dates: "November 2022 - February 22024",
    },
    {
      name: "CLAP",
      id: "clap",
      link: "",
      position: "Web Developer",
      description: [
        "Developed web applications using modern technologies and frameworks.",
        "Designed and implemented databases to support application requirements.",
        "Debugged and troubleshooted issues to ensure optimal application performance.",
        "Deployed web applications to production environments and managed their operation.",
        "Gathered user requirements and translated them into functional specifications.",
        "Created prototypes and mockups to visualize application design and functionality.",
        "Conducted thorough testing and quality assurance of developed applications.",
        "Stayed updated with emerging trends and technologies in web development.",
      ],
      dates: "September 2019 - August 2021",
    },
    {
      name: "AAIP",
      id: "aaip",
      link: "",
      position: "Web Developer",
      description: [
        "Developed web applications using modern technologies and frameworks.",
        "Designed and implemented databases to support application requirements.",
        "Debugged and troubleshooted issues to ensure optimal application performance.",
        "Deployed web applications to production environments and managed their operation.",
        "Gathered user requirements and translated them into functional specifications.",
        "Created prototypes and mockups to visualize application design and functionality.",
        "Conducted thorough testing and quality assurance of developed applications.",
        "Collaborated with cross-functional teams to ensure seamless integration of systems.",
        "Stayed updated with emerging trends and technologies in web development.",
      ],
      dates: "September 2017 - June 2021",
    },
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
