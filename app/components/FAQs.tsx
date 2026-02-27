"use client";
import Image from "next/image";
import React, { useState } from "react";

const faqData = [
  {
    question: "How far in advance should the Bridal Retreat be booked?",
    answer:
      "Booking at least 4-8 weeks before the wedding is recommended to allow sufficient time for therapies to support visible and lasting results.",
  },
  {
    question: "Is the retreat suitable for groups as well as individuals?",
    answer:
      "The experience is designed for both individual brides and groups, including bridesmaids, friends, or family members attending together.",
  },
  {
    question: "Are programs tailored to individual wellness needs?",
    answer:
      "Each guest receives personalised therapies and wellness recommendations following consultations with practitioners.",
  },
  {
    question: "How are dietary preferences or restrictions managed?",
    answer:
      "Meals are thoughtfully adapted based on dietary requirements and health considerations shared with the wellness team.",
  },
  {
    question: "What does the retreat program include?",
    answer:
      "The experience includes wellness consultations, personalised therapies, accommodation, and curated meals as part of the all-inclusive program.",
  },
];

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14">
      <div className="container mx-auto lg:px-22.25">
        <h2 className="mb-11.25 text-center text-[32px] font-normal leading-none">
          FAQs
        </h2>
        <div className="lg:w-85/96 mx-auto">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="mb-3.75 overflow-hidden rounded-md bg-brand-blue px-3.5 py-5 lg:px-11 lg:py-10 text-white shadow-[0_3px_10px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div
                  className="flex cursor-pointer items-center justify-between gap-5 font-['Inter',sans-serif] text-[18px] font-semibold leading-[1.3] tracking-[0px]"
                  onClick={() => toggleFaq(index)}
                >
                  <span
                    className={`pb-2.5 font-inter ${
                      isActive ? "border-b border-white" : ""
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className="flex h-6.5 min-h-6.5 w-6.5 min-w-6.5 items-center justify-center rounded-full bg-white font-bold text-brand-blue transition-all duration-300">
                    <Image
                      src="images/faq_arrow.svg" alt="" width={10} height={10}
                      className={`transition-transform duration-300 ${
                        isActive
                          ? "transform-[rotateX(0deg)]"
                          : "transform-[rotateX(180deg)]"
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`overflow-hidden bg-brand-blue transition-[max-height] duration-350 ease-in-out ${
                    isActive ? "max-h-50" : "max-h-0"
                  }`}
                >
                  <p className="my-3.75 mb-5 font-['Inter',sans-serif] text-[18px] font-semibold leading-[1.3]">
                    {faq.answer}
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
