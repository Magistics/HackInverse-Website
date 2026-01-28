import React from 'react'

const BlurCard = () => {
  return (
    <div className="w-full max-w-[266px] h-[100px] md:h-[127px] rounded-lg flex items-center justify-center
                 bg-white/5 backdrop-blur-md border border-white/10
                 text-white text-sm md:text-lg font-semibold tracking-wide
                 shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                 relative overflow-hidden group hover:border-red-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 backdrop-blur-lg bg-black/40"></div>
11→
12→
      <span className="relative z-10 text-red-500/80 italic group-hover:text-red-500 transition-colors">
        Coming Soon...
      </span>
      
    </div>
  )
}

export default BlurCard
