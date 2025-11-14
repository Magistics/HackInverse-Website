import React from 'react'

const Sponsors = () => {
  return (
    <div>
        <h2 className="text-[#222222] text-2xl sm:text-3xl md:text-4xl text-center font-serif mt-10 sm:mt-16 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)] [text-shadow:1px_1px_0_red,-1px_-1px_0_red,1px_-1px_0_red,-1px_1px_0_red]">
  SPONSORS
</h2>
<div
        className="after:content-[''] after:block after:h-[1.5px] after:w-full after:bg-red-600 after:mt-1 before:content-[''] before:block before:h-[1.9px] before:w-full before:bg-red-600 mx-4 sm:mx-8 md:mx-20 lg:mx-40"
      ></div>      


    
    <div className="w-full  py-12 flex flex-col items-center">
     
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Image imgSrc={"./img/webflow.png"} />
        <Image imgSrc={"./img/digital sphere.png"} />
        <Image imgSrc={"./img/cybro space.png"} />
        <Image imgSrc={"./img/synapse solutions.png"} />
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Image imgSrc={"./img/synapse solutions.png"} />
        <Image imgSrc={"./img/cybro space.png"} />
        <Image imgSrc={"./img/digital sphere.png"} />
        <Image imgSrc={"./img/webflow.png"} />
      </div>
    </div>
   </div>
     
   
  )
}

function Image({ imgSrc }) {
  return (
    <div className="w-28 h-14 md:w-40 md:h-18 flex items-center justify-center">
      <img src={imgSrc} alt="sponsor" className="w-full h-full object-contain"/>
    </div>
  );
}

export default Sponsors
