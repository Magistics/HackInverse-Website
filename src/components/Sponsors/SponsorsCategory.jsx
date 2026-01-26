import React from 'react'
import SponsorsLogo from './SponsorsLogo'
import BlurCard from './BlurCard'

const SponsorsCategory = ({ title, sponsors, columns = 3 }) => {
  return (
    <div className="w-full text-center">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div
        className={`grid gap-8 justify-items-center 
        ${columns === 1 && "grid-cols-1"} 
        ${columns === 2 && "grid-cols-1 sm:grid-cols-2"} 
        ${columns === 3 && "grid-cols-1 sm:grid-cols-3"}`}
      >
         {sponsors.map((item, index) =>
          item?.src ? (
            <SponsorsLogo key={index} src={item.src} alt={item.alt} />
          ) : (
            <BlurCard key={index} />
          )
        )}
      </div>
      
    </div>
  )
}

export default SponsorsCategory
