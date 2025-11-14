import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord
} from "react-icons/fa";

const AboutSection = () => {
  return (
    <div>
    <h2 className="text-[#222222] text-2xl sm:text-3xl md:text-4xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
      <span className="text-white mr-3 md:mr-5">About</span>
      <span className="inline-block">HACKINVERSE</span>
    </h2>
<div
        className="after:content-[''] after:block after:h-[1.5px] after:w-full after:bg-red-600 after:mt-1 before:content-[''] before:block before:h-[1.5px] before:w-full before:bg-red-600 mx-4 sm:mx-8 md:mx-20 lg:mx-40"
      ></div>  
      <p className="items-center text-white justify-center mt-6 text-base sm:text-lg md:text-xl font-mono max-w-prose mx-4 sm:mx-8 md:mx-20 lg:mx-40 text-center md:text-left">
        HackInverse is the flagship hackathon by Magistics, built to bring
        together students, developers, designers and innovators from all walks
        of life. It's a community-driven space where creativity meets
        collaboration
      </p>


  <img className="h-50 w-95 mx-auto md:ml-10 mt-6 md:mt-20" src="./src/assets/monster.png" alt="monster" />

      <p className="text-center md:text-right mx-4 md:mx-20 -mt-6 md:-mt-60 font-mono text-sm md:text-base leading-relaxed">
        From brainstorming to building,
        <br />
        HackInverse inspires
        <br />
        participants to learn, connect,
        <br />
        and grow while turning bold
        <br />
        ideas into impactful
        <br />
        innovations.
      </p>

      <div className="flex justify-center md:justify-end">
        <div className="flex items-center justify-center md:justify-start space-x-3 mt-4 mx-4 md:mx-20">
          <Link
            ahref={"https://www.facebook.com/share/1DBsk7vayo/"}
            value={<FaFacebookF />}
          />
          <Link
            ahref={"https://www.linkedin.com/showcase/hackinverse/"}
            value={<FaLinkedinIn />}
          />
          <Link
            ahref={"https://discord.gg/QrpFxmAA"}
            value={<FaDiscord />}
          />
          <Link
            ahref={"https://www.instagram.com/hackinverse"}
            value={<FaInstagram />}
          />
          <Link
            ahref={"https://www.instagram.com/hackinverse"}
            value={<FaTwitter />}
          />
          
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <button
          className="flex items-center space-x-2 mx-20 md:ml-20 mt-4 cursor-pointer bg-red-600 hover:bg-red-700 text-white font-mono px-3  rounded-full shadow-lg transition hover:scale-110 hover:shadow-[0_0_30px_#ff0000dd]"
        >
          <span>Learn More</span>
          <span className="text-xl">→</span>
        </button>
      </div>
      

    </div>
  );
};

function Link(props) {
  return (
    <a
      href={props.ahref}
      target="blank"
      className="bg-gray-700 hover:bg-red-500 p-2 rounded-md transition hover:scale-110 
      hover:shadow-[0_0_30px_#ff0000dd]"
    >
      {props.value}
    </a>
  );
}

export default AboutSection;
