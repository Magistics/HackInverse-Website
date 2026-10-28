import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    id: 1,
    num: "01",
    category: "ELIGIBILITY",
    question: "Who can Participate?",
    answer: "The event is open to all students, developers, designers, and innovators eager to collaborate, learn, and create impactful solutions together.",
  },
  {
    id: 2,
    num: "02",
    category: "BOUNTIES",
    question: "What is the Prize?",
    answer: "Exciting prizes await the top teams, including cash rewards, CodeCrafters VIP memberships, mentorship opportunities, tech gadgets, and exclusive access to industry events.",
  },
  {
    id: 3,
    num: "03",
    category: "SQUAD FORMATION",
    question: "Maximum Team Size?",
    answer: "Teams can have up to 4 members. Participants can also choose to work individually if they prefer.",
  },
  {
    id: 4,
    num: "04",
    category: "SUBMISSIONS",
    question: "Track Guidelines?",
    answer: "Participants can choose to work on projects across any of the specified tracks or propose their own innovative ideas outside these categories.",
  },
  {
    id: 5,
    num: "05",
    category: "APPLICATION",
    question: "How do I register for HackInverse?",
    answer: "Applications are submitted directly through the official Devfolio portal. Simply click the 'Apply with Devfolio' button on the website.",
  },
  {
    id: 6,
    num: "06",
    category: "EXPERIENCE",
    question: "Can beginners participate?",
    answer: "Yes! HackInverse welcomes participants of all technical backgrounds and skill levels. Mentors will be present throughout the event to guide you through technical roadblocks.",
  },
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState(1);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="relative py-24 px-4 md:px-8 max-w-5xl mx-auto select-none" id="faq">
      {/* Chapter Masthead */}
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900/80 border border-zinc-800 text-[11px] font-space-mono text-red-500 uppercase tracking-[0.25em] mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-red-500" />
          <span>CHAPTER 14 // DECLASSIFIED ARCHIVE</span>
        </div>

        <h2 className="stranger-things-filled text-4xl sm:text-6xl tracking-wider text-[#ff0505] drop-shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          FAQ'S
        </h2>

        <p className="mt-4 font-playfair italic text-zinc-400 text-base md:text-lg max-w-xl">
          "Essential information and guidelines for HackInverse participants."
        </p>
      </div>

      {/* Stripe Press / Editorial Hairline Accordion List */}
      <div className="border-t border-zinc-800">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openItem === item.id;
          return (
            <div
              key={item.id}
              className="border-b border-zinc-800 transition-colors"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full py-6 text-left flex items-start justify-between gap-6 cursor-pointer focus:outline-none group"
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-space-mono text-xs text-red-500 mt-1 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <span className="font-space-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-cinzel text-base sm:text-lg font-bold text-zinc-100 group-hover:text-red-400 transition-colors">
                      {item.question}
                    </h3>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full border border-zinc-800 group-hover:border-red-500/60 flex items-center justify-center shrink-0 text-zinc-400 group-hover:text-white transition-colors mt-1">
                  {isOpen ? (
                    <Minus className="w-3.5 h-3.5 text-red-500" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-10 sm:pl-12 pr-4 text-xs sm:text-sm font-space-mono text-zinc-400 leading-relaxed">
                      <div className="pt-2 border-t border-zinc-900">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
