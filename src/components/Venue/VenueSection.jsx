import tvCornerImage from '../../assets/TvCorner.png';
import tvDisplayImage from '../../assets/VenueTvDisplay.png';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';

const Venue = () => {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center p-4 sm:p-8 lg:p-16 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 bg-[#9E1C1E]"
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-8 lg:gap-8 xl:gap-16"
        >
          {/* Text Section */}
          <div className="flex flex-col gap-8 text-white text-center lg:text-left lg:w-1/2">
            {/* Header */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <SectionTitle
                title="Venue"
                strokeColor="rgba(248, 243, 235, 0.95)"
                lineColor="rgba(248, 243, 235, 0.85)"
                lineHeight="h-[3px]"
                titleSize="text-3xl sm:text-4xl md:text-7xl"
              />
            </div>

            {/* Venue Info */}
            <div className="flex flex-col gap-2">
              <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight text-white italic">
                Will be Revealed soon
              </h2>
              <address className="text-[clamp(1rem,3.3vw,1.8rem)] not-italic leading-relaxed opacity-45">
                Map and travel information will be available soon.
              </address>
            </div>

            {/* Button */}
            <div className="self-center lg:self-start relative">
              {/* Subtle red glow animation */}
              <motion.div
                className="absolute -inset-1.5 bg-red-500/40 rounded-full blur-lg"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.button
                tabIndex={-1}
                className="relative cursor-pointer bg-white text-black text-xl md:text-2xl font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Map & Travel Info (soon)
              </motion.button>
            </div>
          </div>

          {/* TV Section */}
          <div className="relative flex items-center justify-center w-full max-w-[calc(100%-2rem)] sm:max-w-[700px] lg:max-w-[1300px] translate-x-0 lg:translate-x-16">
            <img
              src={tvCornerImage}
              alt="Retro TV frame"
              className="relative z-30 w-full h-auto object-contain pointer-events-none"
              style={{ aspectRatio: '20/20' }}
            />
            <img
              src={tvDisplayImage}
              alt="Venue image inside TV screen"
              className="absolute z-20 object-cover"
              style={{
                top: '20%',
                left: '4%',
                width: '92%',
                height: '58%',
              }}
            />
          </div>
        </div>
      </div>
      {/* Coming Soon Overlay */}
        <div className="absolute mx-5 2xl:mx-20 inset-0 z-20 flex flex-col items-center justify-center gap-1 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md">
          <SectionTitle
            title="Venue"
            strokeColor="rgba(248, 243, 235, 0.95)"
            lineColor="rgba(248, 243, 235, 0.85)"
            lineHeight="h-[3px]"
            titleSize="text-5xl sm:text-7xl md:text-8xl"
          />
          <p className="sofia-sans-extra-condensed text-2xl sm:text-4xl md:text-5xl tracking-[0.15em] text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)]">
            Coming Soon...
          </p>
        </div>
    </div>
  );
};

export default Venue;
