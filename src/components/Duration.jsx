import React from 'react'

const Duration = () => {
  return (
    <div className="min-h-screen pt-10 pb-24 lg:min-h-auto w-full flex  justify-center text-white font-mono">
      <div className="max-w-6xl w-full text-center">

        {/* <h1 className="text-6xl md:text-7xl font-extrabold tracking-widest text-red-600 drop-shadow-[0_0_20px_rgba(255,0,0,0.7)]">
          HACKINVERSE
        </h1> */}
        {/* <div className="w-72 h-[3px] bg-red-600 mx-auto mt-2" /> */}

        <p className=" text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Enter the Unknown. A 24-hour online coding saga where developers
          breach the portal to solve problems from another dimension
        </p>

        <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

          <div className="border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <p className="text-red-500 text-xl tracking-widest">DURATION</p>
            <h2 className="text-4xl font-bold mt-2">24 Hours</h2>
          </div>

         
          <div className="border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <p className="text-red-500 text-xl tracking-widest">MODE</p>
            <h2 className="text-4xl font-bold mt-2">Offline</h2>
          </div>

         
          <div className="border border-red-600 rounded-xl p-4 shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <p className="text-red-500 text-xl tracking-widest">LOCATION</p>
            <h2 className="text-4xl font-bold mt-2">Kolkata</h2>
          </div>
        </div>

        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href = "#" target = "blank" className="px-6 py-3 border border-red-600 rounded-lg text-white hover:bg-red-600 transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.5)] cursor-pointer">
            Learn More →
          </a>
          <a href = "https://discord.gg/WxbySH72Z" target = "blank" className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-[0_0_15px_rgba(79,70,229,0.6)] cursor-pointer ">
            DISCORD →
          </a>
        </div>
      </div>
    </div>

    
  )
}

export default Duration
