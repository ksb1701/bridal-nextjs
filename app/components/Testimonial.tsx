'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "Between shopping, travel, and endless planning, I felt completely drained. The retreat helped me slow down and feel like myself again before the wedding.",
    name: "Ananya Reddy",
  },
  {
    id: 2,
    text: "The retreat helped improve my sleep and skin in just a few days, but more importantly, I felt mentally calm before the big day. It made the whole wedding experience much more enjoyable.",
    name: "Megha Shah",
  },
  {
    id: 3,
    text: "Coming here with my bridesmaids was the best decision. We felt rested, refreshed, and it gave us such a peaceful pause before all the celebrations began.",
    name: "Priya Menon",
  },
];

export default function Testimonial() {
  // Using state to store DOM nodes makes external controls bulletproof in React
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  return (
    <section className="pt-15 lg:pl-70 lg:pr-30">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Column: Heading & Controls */}
        <div className="w-full lg:w-[20%] flex flex-col items-center lg:items-start text-center lg:text-left relative">
          <Image
            src="/images/testimonial_icon.png"
            alt="Testimonial Icon"
            width={67}
            height={67}
            className="mb-10"
          />
          <h2 className="font-normal text-[38px] leading-12 mb-10">
            Real <br /> Experiences <br /> at Trē
          </h2>

          {/* Hidden entirely if Swiper locks the buttons */}
          <div className="[&>*:has(.swiper-button-lock)]:hidden flex flex-col items-center lg:items-start w-full">
            <div className="flex gap-15 mb-5 z-10 justify-center lg:justify-start">

              {/* Prev Button */}
              <button
                ref={setPrevEl}
                className="transition-all cursor-pointer [&.swiper-button-disabled]:opacity-20 [&.swiper-button-disabled]:cursor-default hover:[&:not(.swiper-button-disabled)]:brightness-0"
              >
                <Image src="/images/left_arrow.svg" alt="Prev" width={20} height={10} />
              </button>

              {/* Next Button */}
              <button
                ref={setNextEl}
                className="transition-all cursor-pointer [&.swiper-button-disabled]:opacity-20 [&.swiper-button-disabled]:cursor-default hover:[&:not(.swiper-button-disabled)]:brightness-0"
              >
                <Image src="/images/right_arrow.svg" alt="Next" width={20} height={10} />
              </button>
            </div>

            {/* Pagination */}
            <div
              ref={setPaginationEl}
              className="flex justify-center lg:justify-start gap-2 z-10 [&_.swiper-pagination-bullet-active]:bg-black!"
            ></div>
          </div>
        </div>

        {/* Right Column: Swiper */}
        <div className="w-full p-[0px_20px_20px_20px] lg:w-[75%]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            watchOverflow={true}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            // Bind the state-managed DOM nodes here
            navigation={{
              prevEl,
              nextEl,
            }}
            pagination={{
              el: paginationEl,
              clickable: true,
              renderBullet: function (index, className) {
                return `<span class="${className} w-7.5! h-0.5! m-0! bg-[#D6D6D6] rounded-none! block transition-colors cursor-pointer"></span>`;
              },
            }}
            className="w-full pb-5 h-full"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-[#D9D9D9] p-[45px_35px] rounded-[15px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] h-full flex flex-col justify-between">
                  <p className="font-normal text-[18px] leading-6 mb-17.5">
                    {item.text}
                  </p>

                  <div className="flex gap-2.5 items-center">
                    <div>
                      <h4 className="font-bold text-[18px] leading-[100%] font-inter italic uppercase mb-1.25">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
