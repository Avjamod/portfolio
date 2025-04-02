import React from "react";
import Lotti from "./Lotti";
import HelloLotti from "./HelloLotti";
import Music from "./Music";

const HeroSection = () => {
  return (
    <div className=" p-4 md:flex items-center min-h-screen">
      <div className="md:w-[60%] md:visible invisible flex justify-center md:mb-0 mb-20">
        <Lotti />
      </div>
      <div className="md:w-[40%]  flex flex-col  md:items-start  items-center">
        <div className="flex items-end">
          <HelloLotti />

          <div className="text-2xl flex ">Hi There , I am</div>
        </div>
        <div className="text-[#CD882A] md:text-6xl text-4xl  py-4 font-boldonse my-2">
          <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-4 border-[#CD882A] pr-1 pb-4">
            Arpan Jamod
          </span>
        </div>
        <div className="text-2xl animate-fadeIn">Full Stack Web Developer</div>
      </div>
      <div className="toast">
        <Music />
      </div>
    </div>
  );
};

export default HeroSection;
