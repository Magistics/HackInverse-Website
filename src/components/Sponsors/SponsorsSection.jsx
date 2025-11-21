import React from "react";
import Bg from "../../assets/Bg.png";
import spontext from "../../assets/sponsors/spontext.png";
import spon1 from "../../assets/sponsors/spon1.png";
import spon2 from "../../assets/sponsors/spon2.png";

const SponsorsSection = () => {
  const sponsors = [
    { id: 1, img: spon1, alt: "Sponsors Top Row" },
    { id: 2, img: spon2, alt: "Sponsors Bottom Row" },
  ];

  return (
    <section
      className="relative px-[2vw] py-[4vh] text-center text-black overflow-hidden box-border max-[992px]:py-[3vh] max-[768px]:py-[2vh] max-[576px]:py-[1.5vh] max-[576px]:px-[1vw]"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        fontFamily: '"Cinzel Decorative", serif',
      }}
    >
      <div
        className="flex justify-center items-center w-full  mx-auto mb-[3vh]"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        {/* <img 
          src={spontext} 
          alt="Our Sponsors" 
          className="w-full max-w-[500px] h-auto object-contain" 
        /> */}
        <h2 className="text-[#222222] text-3xl sm:text-5xl md:text-8xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
          <span className="inline-block">Sponsors</span>
        </h2>
        
      </div>

      <div className="mt-8 md:mt-16 flex flex-col gap-[3vh] justify-center items-center max-w-[1400px] mx-auto max-[992px]:gap-[2.5vh] max-[768px]:gap-[2vh] max-[576px]:gap-[1.5vh]">
        {sponsors.map((sponsor, index) => (
          <div
            key={sponsor.id}
            className="flex justify-center items-center w-full max-w-[1200px] transition-[transform,filter] duration-300 ease-[ease] hover:scale-[1.02] hover:drop-shadow-[0_0_15px_rgba(193,28,28,0.2)] max-[992px]:max-w-[1000px] max-[768px]:max-w-[800px] max-[576px]:max-w-[600px]"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            data-aos-duration="1000"
          >
            <img
              src={sponsor.img}
              alt={sponsor.alt}
              className="w-full max-w-full h-auto object-contain opacity-90 transition-opacity duration-300 ease-[ease] hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
