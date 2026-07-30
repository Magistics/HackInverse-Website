import React from 'react';
import { Layout as Layout2, BarChart3, Clock } from 'lucide-react';
import SectionTitle from '../Common/SectionTitle';

export default function PerksSection() {
  const perks = [
    {
      id: 1,
      number: '1',
      icon: Layout2,
      title: 'OFFLINE BUILD ENVIRONMENT',
      description: 'No cloud credits ? No problem, we provide local servers and cached repos to simulate an isolate env',
    },
    {
      id: 2,
      number: '2',
      icon: BarChart3,
      title: 'REAL COLLABORATION',
      description: 'No cloud credits ? No problem, we provide local servers and cached repos to simulate an isolate env',
    },
    {
      id: 3,
      number: '3',
      icon: Clock,
      title: 'LEARNING UNDER PRESSURE',
      description: 'No cloud credits ? No problem, we provide local servers and cached repos to simulate an isolate env',
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 px-16 md:px-20 lg:px-32 mb-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <SectionTitle
                  title="PERKS"
                  strokeColor="rgba(255,0,0,0.8)"
                  lineColor="rgba(255,0,0,0.8)"
                  lineHeight="h-[3px]"
                  titleSize="text-5xl lg:text-6xl xl:text-7xl mb-16"
                />

        {/* Cards Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 justify-items-center spline-mono">
          {perks.map((perk) => {
            const IconComponent = perk.icon;
            return (
              <div
                key={perk.id}
                className="relative w-full rounded-[10px] border-2 border-red-600 overflow-hidden group hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300"
              >
                {/* Card Content */}
                <div className="p-4 md:p-6 h-full flex flex-col">
                  {/* Header: Icon and Number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="border border-red-800 p-1 rounded">
                      <IconComponent size={72} className="text-white" />
                    </div>
                    <div className="text-4xl md:text-8xl font-bold text-gray-400">
                      {perk.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-red-600 font-semibold text-[1.5rem] md:text-4xl tracking-wider leading-tight">
                    {perk.title}
                  </h3>

                  {/* Divider */}
                  <div className="h-0.5 mt-8 md:mt-16 bg-red-600 mb-6"></div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-xl leading-relaxed font-mono grow">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}