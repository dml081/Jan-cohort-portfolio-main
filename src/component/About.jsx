import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoDiscord } from "react-icons/io5";
import { SiYoutube } from "react-icons/si";
const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex px-6 py-20 bg-[#0b043a] text-white  lg:flex-row flex-col gap-8"
    >
      <div className="flex lg:w-[40%] w-full justify-center">
        <div className=" lg:relative w-[80%] bg-[#1B1448] ring-1 ">
          <img
            className="lg:absolute right-[-40px] top-[-60px]"
            src="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/about.jpg"
          />
          <div className="flex pl-10 w-full lg:absolute bottom-5 gap-5 text-2xl ">
            <FaTwitter /> <FaFacebook /> <IoLogoDiscord /> <SiYoutube />
          </div>
        </div>
      </div>
      <div className="flex lg:w-[60%] w-full flex-col gap-4 items-center justify-center">
        <p className="text-3xl font-semibold">
          I’m John Smith. I’m passionate about crafting exceptional websites.
          With a blend of design skills and coding expertise, I create unique
          online experiences that captivate users.
        </p>
        <p className="text-xl">
          Looking for a top-notch web developer to revamp your hotel’s website?
          Look no further than John Smith. With years of experience and a keen
          eye for design, John can take your site to the next level, helping you
          attract more visitors and boost your bookings.
        </p>
      </div>
    </section>
  );
};

export default About;
