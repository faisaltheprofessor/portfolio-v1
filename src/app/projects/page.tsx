"use client";
import Heading from "@/components/heading";
import { ExternalLink, Github, Link } from "lucide-react";
import Image from "next/image";
import WorkCard from "../components/work-card";
import { MacbookScroll } from "@/components/macbook-scroll";
const Home = () => {
  return (
    <>
      <MacbookScroll src="/work/intellecta.webp" badge="👨‍💻" />
      <main className="flex flex-col items-center md:mt-60 justify-start md:w-full  xl:w-[80%]  mx-auto min-h-screen flex-grow h-[2000px]">
        <Heading text="Some things i have built" number={3} />

        <WorkCard
          description="A comprehensive monitoring and evaluation web app theme tailored for
        tracking the progress of planned activities against actual outcomes.
        Featuring a clean interface designed for precision and clarity"
          image="/work/clap.webp"
          title="Monitoring and Evaluation"
          featureText="Featured Proejct"
          // github="https://github.com/faisaltheprofessor/clap-m-e.git"
          url="https://mis.iamfaisal.de"
          reverse={true}
        />

        <WorkCard
          className="mt-20"
          description="A web application for managing employee records, attendance, and leave in the HR department. This all-in-one system offers seamless tracking of employee data, attendance records, leave management, and detailed reporting for effective workforce management."
          image="/work/hr.webp"
          title="Employee Management"
          featureText="Featured Proejct"
          // github="https://github.com/faisaltheprofessor/hrmis.git"
          url="https://hrmis.iamfaisal.de"
        />
        <WorkCard
          description="A game created by Jeffery Way, for which I developed the RTL version."
          image="/work/codebreaker.webp"
          title="Code Breaker"
          featureText="Featured Proejct"
          github="https://github.com/faisaltheprofessor/codebreaker/tree/feature/rtl"
          url="https://codebreaker.iamfaisal.de"
          reverse={true}
        />

        <WorkCard
          className="mb-20"
          description="A blog for my friend where people can comment and react to blog posts"
          image="/work/quranmitmir.webp"
          title="Quran mit mir"
          featureText="Featured Proejct"
          github="https://github.com/faisaltheprofessor/blog-quranmitmir"
          url="https://quranmitmir.de"
        />
      </main>
    </>
  );
};

export default Home;
