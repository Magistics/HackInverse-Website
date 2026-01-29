import React from 'react'

const BlurCard = () => {
  return (
    <div className="w-80 h-24 rounded-xl flex items-center justify-center
                 bg-white/10 backdrop-blur-md border border-white/20
                 text-white text-lg font-semibold tracking-wide
                 shadow-[0_0_20px_rgba(255,0,0,0.2)]
                 relative overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div>


      <span className="relative z-10 text-red-500 underline underline-offset-4">
        Coming Soon...
      </span>
      
    </div>
  )
}

export default BlurCard
