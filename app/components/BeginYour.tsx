import Image from "next/image";

export default function BeginYour() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* Image Container */}
          <div className="w-full pl-20 md:w-1/2 mb-10 md:mb-0">
            <Image 
              src="/images/gif-video.gif" alt="Bridal Wellness"
              className="rounded-[20px]" width={665} height={553} 
            />
          </div>

          {/* Text Container */}
          <div className="w-full md:w-1/2 md:pl-11.25">
            <h2 className="font-normal text-[28px] leading-8 mb-2.5">
              Begin Your
            </h2>
            <h3 className="font-medium text-[34px] leading-none uppercase pb-1.25 border-b border-black w-fit mb-7.5">
              Bridal Journey{" "}
              <span className="font-normal text-[28px] leading-none lowercase font-['Playfair_Display', serif]">
                with Balance
              </span>
            </h3>
            
            <p className="font-normal text-[18px] leading-6 max-w-120 mb-12.5">
              Step into your wedding celebrations feeling refreshed, confident &
              naturally radiant through restorative care that supports wellbeing
              from within.
            </p>
            
            <p className="font-normal text-[18px] leading-6 text-brand-blue mb-1.75">
              Enjoy an{" "}
              <span className="font-bold text-[18px] leading-none text-black">
                all-inclusive
              </span>{" "}
              wellness experience
            </p>
            
            <p className="font-normal text-[18px] leading-none mb-2.5 text-[#020202]">
              at just{" "}
              <span className="font-bold text-[34px] leading-none uppercase text-brand-blue [text-shadow:5px_5px_15px_#0000001A]">
                ₹14,999
              </span>{" "}
              per person, per night,
            </p>
            
            <p>
              <strong className="font-bold text-[18px] leading-none italic">
                with stay, meals & personalised therapies included.
              </strong>
            </p>
            
            <a
              href="#form_bottom"
              className="font-normal text-[18px] leading-6 text-center uppercase text-white bg-brand-blue py-4.25 px-12.5 block max-w-93.75 rounded-[15px] mt-18.75 hover:opacity-90 transition-opacity"
            >
              Book Your Bridal Wellness Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
