import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import SectionTitle from "./Common/SectionTitle";

const AboutSection = () => {
  return (
    <div>

      <div className=" py-16 px-15">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between ">


          {/*Monster Img*/}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./src/assets/monster.png"
              alt="monster"
              className="max-w-[18rem] md:max-w-150"
            />
          </div>


          <div className="max-w-9xl md:w-1/2 flex flex-col items-start md: mt-30 md:ml-30">
            <div className="md:mb-10 mb-15 -mt-10 flex flex-col items-end">
            <h2 className="text-white text-3xl md:text-5xl font-bold md:ml-50 text-center">
              ABOUT
            </h2>
            {/* <h1 className="text-white text-3xl md:text-5xl font-bold md:ml-15 ">
              HACKINVERSE
            </h1> */}
            <SectionTitle title="HACKINVERSE" strokeColor="rgba(255,0,0,0.8)" lineColor="rgba(255,0,0,0.8)" lineHeight="h-[3px]" className="merriweather"/>

            </div>
            
            <p className="sm:text-lg md:text-xl text-white md:text-right leading-relaxed text-center max-w-md">
              HackInverse is the flagship hackathon by
              <br />
              Magistics, built to bring together students,
              <br />
              developers, designers and innovators from
              <br />
              all walks of life. It's a community-driven
              <br/>
              space where creativity meets collaboration
              </p>
            
            <p className="sm:text-lg md:text-xl text-white leading-relaxed md:text-right max-w-md text-center md:mt-10 md:ml-9">
              From brainstorming to building,
              <br />
              HackInverse inspires participants to
              <br />
              learn, connect, and grow while turning
              <br />
               bold ideas into impactful innovations.
              </p>

            <div className="flex gap-4 mt-6 justify-center md:justify-start md:ml-37 md:mt-10">
              <Link
                ahref="https://www.facebook.com/share/1DBsk7vayo/"
                value={<FaFacebookF />}
              />
              <Link
                ahref="https://www.linkedin.com/showcase/hackinverse/"
                value={<FaLinkedinIn />}
              />
              <Link ahref="https://discord.gg/QrpFxmAA" value={<FaDiscord />} />
              <Link
                ahref="https://www.instagram.com/hackinverse"
                value={<FaInstagram />}
              />
              <Link
                ahref="https://www.instagram.com/hackinverse"
                value={<FaTwitter />}
              />
            </div>

            <button className="flex items-center self-center space-x-2 mt-6 md:mt-10 md:ml-58 cursor-pointer bg-red-600 hover:bg-red-700 text-white font-mono px-4 py-2 rounded-full shadow-lg transition hover:scale-110 hover:shadow-[0_0_30px_#ff0000dd]">
              <span>Learn More</span>
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
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
