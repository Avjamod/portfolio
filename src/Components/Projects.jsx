import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center mt-10  min-h-screen"
    >
      <div className="md:text-4xl text-4xl font-bebasneue px-5">
        "Scalable, user-friendly, and efficient digital solutions."
      </div>
      <div className="md:grid grid-cols-3 md:p-20 p-5 ">
        <ProjectCard
          imageUrl={"Images/CodeMatch.png"}
          projectTitle={"CodeMatch"}
          projectDescription={
            "Code Match connects developers based on skills and interests,enabling seamless collaboration. Built with React.js, Node.js,Express.js, and MongoDB, it features real-time chat and projectmatchmaking."
          }
        />
        <ProjectCard
          imageUrl={"Images/ReelIntel.png"}
          projectTitle={"ReelIntel"}
          projectDescription={
            "ReelIntel is a movie streaming platform with AI-powered search using Google AI’s API. It features Firebase authentication, multilingual support, and personalized movie recommendations."
          }
        />
        <ProjectCard
          imageUrl={"Images/TastyNest.png"}
          projectTitle={"TastyNest"}
          projectDescription={
            "TastyNest is a seamless food ordering platform built with React.js, Redux Toolkit, and Swiggy APIs. It offers real-time restaurant listings, search, and a smooth checkout experience."
          }
        />
      </div>
    </div>
  );
};

export default Projects;
