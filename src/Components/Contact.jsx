// import React from "react";

// const Contact = () => {
//   return (
//     <div id="contact" className="min-h-screen">
//       <div className="flex flex-col items-center ">
//         <h1 className="text-2xl">Get In Touch</h1>
//         <p className="w-[60%] text-center">
//           Feel free to reach out with any feedback, suggestions, or inquiries.
//           Whether you have a question, an idea, or just want to say hello, I'm
//           here and eager to connect!
//         </p>
//       </div>
//       <div className="w-[60%]">
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col items-center p-6 bg-base-100"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl font-bold">Get In Touch</h1>
        <p className="md:w-[60%] mt-4 text-center ">
          Feel free to reach out with any feedback, suggestions, or inquiries.
          Whether you have a question, an idea, or just want to say hello, I'm
          here and eager to connect!
        </p>
      </div>

      {/* Contact Form & Info Section */}
      <div className="w-full max-w-4xl  flex flex-col md:flex-row  rounded-lg overflow-hidden">
        {/* Contact Form */}
        <div className="w-full md:w-2/3 p-6">
          <form className="space-y-4">
            <div>
              <label className="block font-semibold">Name (required)</label>
              <input
                type="text"
                required
                placeholder="Full name"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">Email (required)</label>
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">Subject (required)</label>
              <input
                type="text"
                required
                placeholder="Subject"
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-semibold">Comment (required)</label>
              <textarea
                placeholder="Type comment"
                required
                className="w-full border border-gray-300 p-2 rounded h-24"
              ></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="captcha" required className="mr-2" />
              <label htmlFor="captcha" className="text-sm">
                I'm not a robot
              </label>
            </div>
            <button className="w-full bg-yellow-500 text-white p-2 rounded font-semibold">
              Contact Me
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3  p-6 flex flex-col  items-start">
          <h2 className="text-lg font-bold mb-4">What is your plan? Call me</h2>
          <p className="text-sm mb-4">
            You can get my contact information here and if you like, you can see
            the urls of my pages on social networks from the top of the page and
            find me there.
          </p>
          <div className="space-y-2">
            <p className="flex items-center">
              📍 <span className="ml-2 font-semibold">India, Botad</span>
            </p>
            <p className="flex items-center">
              ✉️{" "}
              <span className="ml-2 font-semibold">jamodarpan99@gmail.com</span>
            </p>
            <p className="flex items-center">
              📞 <span className="ml-2 font-semibold">+91 9924795696</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
