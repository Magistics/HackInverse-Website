import React from 'react';
import { motion } from 'framer-motion';
import tvCornerImage from '../../assets/TvCorner.png';
import { MapPin, Navigation, Compass, Radio } from 'lucide-react';
import { transitionCurves } from '../../utils/motion';

export default function Venue() {
  return (
    <section className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto select-none" id="venue">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[11px] font-space-mono text-red-500 uppercase tracking-[0.25em] mb-4">
          <Compass className="w-3.5 h-3.5 text-red-500" />
          <span>CHAPTER 12 // PHYSICAL BASE</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          THE VENUE
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Hawkins Expedition Headquarters stationed in Kolkata, West Bengal."
        </p>
      </div>

      {/* Main Minimalist Frame with Smooth Scroll Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: transitionCurves.cinematic }}
        className="relative p-6 sm:p-10 bg-[#090b12] border border-zinc-800"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left: Venue Intel */}
          <div className="flex flex-col gap-6 text-left lg:w-1/2">
            <div className="border-b border-zinc-800 pb-5">
              <span className="font-space-mono text-[11px] text-zinc-500 uppercase tracking-widest block mb-1">
                FACILITY DESIGNATION
              </span>
              <h3 className="font-cinzel text-2xl sm:text-4xl font-bold text-white tracking-wide leading-tight">
                JIS UNIVERSITY
              </h3>
              <h4 className="font-cinzel text-lg sm:text-xl font-semibold text-red-500 tracking-wider mt-1">
                AGARPARA CAMPUS, KOLKATA
              </h4>
            </div>

            <div className="space-y-3 font-space-mono text-xs text-zinc-300">
              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="p-3.5 bg-[#06080e] border border-zinc-800 flex items-start gap-3 transition-colors hover:border-red-600/70"
              >
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-0.5">ADDRESS</span>
                  <span className="text-zinc-200">198, Nilgunj Road, Jagarata, Agarpara, Kolkata, WB 700109</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="p-3.5 bg-[#06080e] border border-zinc-800 flex items-center gap-3 transition-colors hover:border-[#00f0ff]/70"
              >
                <Radio className="w-5 h-5 text-[#00f0ff] shrink-0" />
                <div>
                  <span className="text-zinc-500 text-[10px] uppercase tracking-wider block mb-0.5">GPS TELEMETRY</span>
                  <span className="text-white font-bold tracking-wider">22.6759° N, 88.3783° E</span>
                </div>
              </motion.div>
            </div>

            {/* Directions Action */}
            <div className="pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://www.google.com/maps/search/?api=1&query=22.675971300000004,88.37834250000002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-space-mono text-xs font-bold tracking-widest uppercase transition-colors shadow-[0_0_20px_rgba(255,0,60,0.3)]"
              >
                <Navigation className="w-4 h-4" />
                <span>LAUNCH FIELD MAP NAVIGATION</span>
              </motion.a>
            </div>
          </div>

          {/* Right: Retro TV Cathode Monitor Frame with Inverted Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2, ease: transitionCurves.cinematic }}
            className="relative flex items-center justify-center w-full max-w-[480px] lg:w-1/2"
          >
            <img
              src={tvCornerImage}
              alt="Retro Television Display"
              loading="lazy"
              decoding="async"
              className="relative z-30 w-full h-auto object-contain pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
            />
            <iframe
              src="https://maps.google.com/maps?q=22.675971300000004,88.37834250000002&z=17&output=embed"
              title="Venue Satellite Feed"
              className="absolute z-20 pointer-events-auto"
              style={{
                top: '20%',
                left: '4%',
                width: '92%',
                height: '58%',
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
