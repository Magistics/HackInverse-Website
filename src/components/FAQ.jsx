"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Section } from "lucide-react";
import SectionTitle from "./Common/SectionTitle";

const faqData = [
    {
        id: 1,
        question: "What is a Hackathon?",
        answer: "Have questions about our digital conference? Our FAQs have got you covered. Discover important details on registration, session logistics, and more.",
    },
    {
        id: 2,
        question: "Who can Participate?",
        answer: "The event is open to all students, developers, designers, and innovators eager to collaborate, learn, and create impactful solutions together.",
    },
    {
        id: 3,
        question: "What is the Prize?",
        answer: "Exciting prizes await the top teams, including cash rewards, mentorship opportunities, tech gadgets, and exclusive access to industry events.",
    },
    {
        id: 4,
        question: "Maximum Team Size?",
        answer: "Teams can have up to 4 members. Participants can also choose to work individually if they prefer.",
    },
    {
        id: 5,
        question: "Track Guidelines?",
        answer: "Participants can choose to work on projects across any of the specified tracks or propose their own innovative ideas outside these categories.",
    },
];

export default function FAQ() {
    const [openItems, setOpenItems] = useState(1); // First item open by default

    const toggleItem = (id) => {
        setOpenItems(openItems === id ? null : id);
    };

    return (
        <section className="py-16 px-4 background-dark flex flex-col items-center overflow-hidden">
            <div className="mb-12">
                <SectionTitle title="FAQ'S" strokeColor="#C83639" lineColor="#C83639" lineHeight="h-[3px]" className="merriweather"/>
            </div>

            <div className="space-y-4 min-w-3/5 w-full md:max-w-3/5">
                {faqData.map((item) => (
                    <motion.div
                        key={item.id}
                        className="overflow-hidden flex flex-col items-center relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.id * 0.1 }}
                    >
                        <button
                            onClick={() => toggleItem(item.id)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-200 cursor-pointer"
                        >
                            <span className="text-white text-xl md:text-2xl font-medium pr-4 spline-mono">
                                {item.question}
                            </span>
                            <motion.div
                                animate={{
                                    rotate: openItems === item.id ? 180 : 0,
                                }}
                                transition={{ duration: 0.2 }}
                                className="shrink-0"
                            >
                                <ChevronDown className="w-6 h-6 text-gray-400" />
                            </motion.div>
                        </button>

                        <AnimatePresence>
                            {openItems === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-4 pt-2">
                                        <p className="text-[#8E8E8E] leading-relaxed albert-sans">
                                            {item.answer}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="w-[94%] xl:w-[95%] border-t border-[#C83639]"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
