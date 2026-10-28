import React from "react";
import { motion } from "framer-motion";
import { Users, Award, Clock, Code, Sparkles, Building2 } from "lucide-react";
import { transitionCurves } from "../../utils/motion";

const metrics = [
  {
    icon: Users,
    value: "2,703",
    label: "APPLICATIONS RECEIVED",
    subtext: "Collegiate builders and hackers across India",
    id: "01",
  },
  {
    icon: Award,
    value: "₹15,000",
    label: "CASH PRIZE POOL",
    subtext: "Awarded to 5 outstanding teams + CodeCrafters VIP",
    id: "02",
  },
  {
    icon: Clock,
    value: "6 HOURS",
    label: "ON-SITE CODING SPRINT",
    subtext: "Single-day offline hackday at JIS University",
    id: "03",
  },
  {
    icon: Code,
    value: "45",
    label: "PROJECTS SUBMITTED",
    subtext: "Functional software & hardware prototypes",
    id: "04",
  },
  {
    icon: Sparkles,
    value: "1,000+",
    label: "COMMUNITY STRENGTH",
    subtext: "Innovators in the Magistics ecosystem",
    id: "05",
  },
  {
    icon: Building2,
    value: "146",
    label: "CHECKED-IN OPERATIVES",
    subtext: "43 competing teams + 2 solo creators",
    id: "06",
  },
];

export default function JourneyMetricsSection() {
  return (
    <section className="relative w-full py-20 bg-[#f6f4ee] text-[#111317] border-b border-[#e5e0d5] select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Broadsheet Masthead */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: transitionCurves.cinematic }}
          className="border-b-2 border-[#111317] pb-4 mb-10 flex flex-wrap items-center justify-between gap-4 font-space-mono text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c9182b]" />
            <span className="font-bold tracking-widest uppercase">THE HAWKINS GAZETTE</span>
            <span className="text-[#888]">// SPECIAL EDITION DISPATCH</span>
          </div>
          <div className="flex items-center gap-4 text-[#555] text-[11px]">
            <span>VOL. IV — NO. 83</span>
            <span>|</span>
            <span>CIRCULATION: NATIONWIDE</span>
            <span>|</span>
            <span className="text-[#c9182b] font-bold">DECLASSIFIED</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.1, ease: transitionCurves.cinematic }}
          className="mb-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111317] leading-tight">
            The Genesis of the Anomaly: Inside the HackInverse Expedition
          </h2>
          <p className="mt-4 font-courier text-sm sm:text-base text-[#555] italic max-w-2xl mx-auto">
            "What began as an isolated telemetry pulse in 2025 has escalated into Eastern India’s premier collegiate engineering convergence."
          </p>
        </motion.div>

        {/* 2-Column Newspaper Article Layout */}
        <div className="grid md:grid-cols-12 gap-8 pb-14 border-b border-[#e5e0d5]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: transitionCurves.cinematic }}
            className="md:col-span-7 font-space-grotesk text-sm sm:text-base text-[#222] leading-relaxed space-y-4"
          >
            <p className="drop-cap">
              Deep within the laboratory corridors, HackInverse assembles the country’s most relentless software architects, reverse engineers, and renegade hardware tinkerers. Unlike conventional competitions constrained by superficial templates, this sprint challenges squads to confront reality-bending problem spaces across autonomous agent systems, decentralized networks, and embedded hardware.
            </p>
            <p>
              Every team enters the breach with zero pre-written code. For an intense offline sprint, participants prototype, stress-test, and deploy functional solutions under the watchful supervision of industry mentors and declassified technical evaluation panels.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: transitionCurves.cinematic }}
            className="md:col-span-5 border-t md:border-t-0 md:border-l border-[#e5e0d5] pt-6 md:pt-0 md:pl-8 flex flex-col justify-between font-courier text-xs text-[#444]"
          >
            <div className="space-y-3">
              <div className="font-space-mono text-xs font-bold uppercase tracking-wider text-[#111317] pb-2 border-b border-[#e5e0d5] flex items-center justify-between">
                <span>LABORATORY DIRECTIVE</span>
                <span className="text-[#c9182b]">SECTION 07</span>
              </div>
              <p className="italic leading-relaxed">
                "Projects are appraised strictly on technical audacity, fault-tolerant execution, and original domain contribution. The perimeter is monitored; originality is non-negotiable."
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e5e0d5] font-space-mono text-[11px] text-[#777] flex justify-between items-center">
              <span>SECURITY CLASSIFICATION: CLEAR</span>
              <span className="px-2 py-0.5 bg-[#111317] text-white text-[10px] tracking-widest font-bold">
                VERIFIED
              </span>
            </div>
          </motion.div>
        </div>

        {/* 6 Minimalist Broadsheet Metrics with Staggered Fade Up */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-[#e5e0d5] divide-y lg:divide-y-0 divide-x divide-[#e5e0d5]">
          {metrics.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: transitionCurves.cinematic,
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="p-6 text-left flex flex-col justify-between bg-white/[0.2] hover:bg-white transition-colors"
            >
              <div>
                <span className="font-space-mono text-[10px] text-[#888] block mb-2">
                  METRIC // {item.id}
                </span>
                <span className="font-space-mono text-2xl sm:text-3xl font-bold tracking-tight text-[#111317]">
                  {item.value}
                </span>
                <span className="font-space-mono text-[10px] font-bold tracking-wider text-[#444] uppercase block mt-1">
                  {item.label}
                </span>
              </div>
              <p className="font-space-grotesk text-[10px] text-[#777] mt-3">
                {item.subtext}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
