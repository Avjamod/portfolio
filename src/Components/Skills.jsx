import React from "react";

const SkillsPage = () => {
  return (
    <div className="md:flex justify-center   mx-10 px-4 py-8 font-sans min-h-screen ">
      <section className="mb-12 md:w-[55%]">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <p className="text-lg mb-6">
          Here you can see my skills, one of the fascinations of the computer
          world is the momentary changes of technologies, but I try to update my
          knowledge every day and experience new technologies.
        </p>

        <div className="space-y-4">
          <div className="flex flex-wrap md:gap-5 gap-3">
            <SkillBadge name="Javascript" />
            <SkillBadge name="HTML/CSS" />
            <SkillBadge name="Node.js" />
            <SkillBadge name="Express.js" />
          </div>

          <div className="flex flex-wrap md:gap-5 gap-3">
            <SkillBadge name="React.js" />
            <SkillBadge name="Redux Toolkit" />
            <SkillBadge name="MongoDB" />
            <SkillBadge name="Tailwind CSS" />
          </div>

          <div className="flex flex-wrap md:gap-5 gap-3">
            <SkillBadge name="Github" />
            <SkillBadge name="DaisyUi" />
            <SkillBadge name="C/C++" />
            <SkillBadge name="VSCode" />
            <SkillBadge name="Firebase" />
          </div>
        </div>
      </section>

      <section className="md:w-[40%] md:pl-10">
        <h2 className="text-3xl font-bold mb-4">Language Skills</h2>
        <p className="mb-12">
          One of my hobbies is studying and learning languages. I try to be able
          to learn and use my favorite languages.
        </p>
        <div className="flex flex-col    flex-wrap gap-8">
          <LanguageSkill percentage="70%" language="English" />
          <LanguageSkill percentage="90%" language="Hindi" />
          <LanguageSkill percentage="99%" language="Gujarati" />
        </div>
      </section>
    </div>
  );
};

const SkillBadge = ({ name }) => {
  return (
    <span className="bg-gray-200 px-4 py-2 rounded-full text-gray-800 font-medium">
      {name}
    </span>
  );
};

const LanguageSkill = ({ percentage, language }) => {
  return (
    <div className="flex items-center gap-2 text-gray-800  bg-gray-200 p-3 md:w-[35%] w-[55%] rounded-4xl ">
      <span className="text-2xl   font-bold">{percentage}</span>
      <span className="text-lg">{language}</span>
    </div>
  );
};

export default SkillsPage;
