import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  // const { loading, portfolioData } = useSelector((state) => state.root);
  // const { about } = portfolioData;

  // const { skills, lottiURL, description1, description2 } = about || {};
  const skills = ["React", "JAVA", "Javascript", "Express", "MongoDB"];
  return (
    <div>
      <SectionTitle title="About me" id="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2">
          {" "}
          <dotlottie-player
            src="https://lottie.host/1340dc7a-35f9-4b5b-8299-23f4bfb65710/q8qAk5ClRf.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>{" "}
        <div className="flex flex-col gap-5   w-1/2 sm:w-full">
          <p className="text-white">
            I'm a versatile programmer skilled in C/C++, Java, and Python, with
            a strong focus on problem-solving and expertise in data structures
            and algorithms. Currently, I specialize in the MERN stack, utilizing
            MongoDB, Express.js, React, and Node.js.
          </p>
          <p className="text-white">
            {" "}
            I've developed two impactful projects: an Instagram-like platform
            with Firebase authentication and a real estate app featuring user
            profiles and property listings.
          </p>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-tertiary font-semibold text-xl py-5">
          {" "}
          Here are the few technologies I've been working on recently!
        </h1>
        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => {
            return (
              <div className="group border border-secondary font-bold rounded shadow-md transition duration-300 py-3 px-10 hover:bg-secondary text-tertiary hover:text-white">
                {/* <h1 className="text-tertiary hover:text-white">{skill}</h1> */}
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
