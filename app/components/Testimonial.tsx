'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image'; // Assuming you want to use Next.js Image

import 'swiper/css';

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
  return (
    <section className="pt-32.5 pb-20 pl-70">
      <div className="flex">
        
        <div className="w-[20%] relative">
          {/* FIX: If using next/image, width and height are strictly required. 
              If you don't know the exact size, swap this back to a standard <img src="..." /> */}
          <Image 
            src="/images/testimonial_icon.png" 
            alt="Testimonial Icon" 
            width={60} // Adjust to your actual image width
            height={60} // Adjust to your actual image height
            className="mb-10" 
          />
          <h2 className="font-normal text-[38px] leading-12">
            Real <br /> Experiences <br /> at Trē
          </h2>
        </div>

        <div className="w-[80%] relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            // Replicating your Owl Carousel structure exactly
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            pagination={{
              el: '.custom-pagination',
              clickable: true,
              // Mimicking your specific dot styling: 30x2px blocks
              renderBullet: function (index, className) {
                return `<span class="${className} w-7.5! h-0.5! m-0! bg-[#D6D6D6] rounded-none! block transition-colors"></span>`;
              },
            }}
            className="w-full pb-5"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-[#D9D9D9] p-[45px_35px] rounded-[15px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-86.25">
                  <p className="font-normal text-[18px] leading-6 mb-17.5">
                    {item.text}
                  </p>
                  
                  <div className="flex gap-2.5 items-center">
                    {/* <img src="images/testimonial_image.png" alt="" /> */}
                    <div>
                      <h4 className="font-bold text-[18px] leading-[100%] font-['Nimbus', sans-serif] italic uppercase mb-1.25">
                        {item.name}
                      </h4>
                      {/* Star logic kept as comments per your HTML */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Nav & Dots mapped exactly to your CSS absolute positions (-325px / -275px) */}
          <div className="custom-nav absolute -left-68 top-66.25 flex gap-15 z-10">
            <button className="custom-prev hover:brightness-0 transition-all">
               {/* Replace with your exact prev arrow image */}
               <Image src="/images/left_arrow.svg" alt="Prev" width={20} height={10} /> 
            </button>
            <button className="custom-next opacity-20 hover:opacity-100 transition-all">
               {/* Replace with your exact next arrow image */}
               <Image src="/images/right_arrow.svg" alt="Next" width={20} height={10} />
            </button>
          </div>

          <div className="custom-pagination absolute -left-68.75 top-75 flex gap-2 z-10 [&_.swiper-pagination-bullet-active]:bg-black!"></div>
        </div>
        
      </div>
    </section>
  );
}