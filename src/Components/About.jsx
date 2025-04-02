import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="bg-base-200 min-h-screen flex flex-col md:flex-row items-center justify-center px-10 md:px-20 py-20 gap-10"
    >
      <div className="md:w-1/2">
        <div className="font-bold text-5xl mb-6 font-bebasneue">
          "I love building ideas into reality."
        </div>
        <p className="font-medium text-lg ">
          I’m Arpan Jamod, a 23-year-old full-stack developer. My journey in
          programming began in 2021, driven by a passion for creating seamless
          digital experiences. Over the years, I have honed my skills in
          building dynamic web applications while continuously exploring new
          trends in technology and development.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Images/about_anime.986764c2.gif"
          alt="Coding and Technology"
          className=" object-cover w-full max-w-md"
        />
      </div>
    </div>
  );
};

export default About;
