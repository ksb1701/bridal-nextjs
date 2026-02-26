import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="bg-[url('/images/banner-img-mobile.webp')] xs:bg-[url('/images/banner-image.png')] bg-no-repeat bg-center bg-cover h-dvh w-full">
      <div className="flex flex-col justify-between h-full">
        
        {/* Banner Top */}
        {/* Mobile: Column-reverse puts the logo on top, text below it. Desktop: Row splits them left/right */}
        <div className="flex flex-col-reverse xs:flex-row justify-center xs:justify-between items-start px-2.5 xs:px-0">
          
          <div className="mt-5 xs:mt-20 gap-2 xs:ml-25 text-left xs:text-center w-full xs:w-auto">
            <h1 className="font-normal text-[24px] xs:text-[37px] leading-none uppercase mb-4.25 text-[#020202]">Bridal Wellness Retreat</h1>
            <h2 className="font-normal text-[30px] xs:text-[46px] leading-none mb-5 text-[#020202]">
              <span className="font-notoSerif">5</span> Days of Natural Radiance
            </h2>
            <p className="text-brand-blue font-bold text-[15px] xs:text-[20px] leading-none">
              Holistic Renewal <span className='font-semibold'>|</span> Doctor-Guided Care <span className='font-semibold'>|</span> Lasting Balance
            </p>
          </div>
          
          <div className="ml-auto mt-10 mr-2.5 mb-2.5 xs:m-0 xs:mt-12.5 xs:mr-12.5">
            <Link href="https://trewellness.in/">
              <Image
                src="/images/logo.png" alt="Tre Wellness Logo"
                width={93} height={67} priority
                className="w-20 xs:w-23.25 h-auto"
              />
            </Link>
          </div>
        </div>

        {/* Banner Bottom */}
        {/* Mobile: Stacked column, padded top. Desktop: Spaced out bottom-aligned row */}
        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-end pt-62.5 xs:pt-0 pb-12.5 xs:pb-7.5 gap-3.75 xs:gap-0 w-full">
          
          <div className="pl-2.5 xs:pl-25">
            <Link 
              href="#form_bottom" 
              className="block px-6.25 py-4.25 bg-white rounded-[15px] font-bold text-[18px] xs:text-[20px] leading-none text-brand-blue xs:mb-2.5"
            >
              Book Your Bridal Experience
            </Link>
          </div>
          
          {/* Mobile: Anchored to the left edge (rounded-r). Desktop: Anchored to the right edge (rounded-l) */}
          <div className="px-8.75 py-5 xs:px-8.75 xs:py-6.5 bg-white rounded-r-[20px] xs:rounded-r-none xs:rounded-l-[15px] text-left">
            <h3 className="font-semibold text-[23px] xs:text-[26px] leading-none mb-3.75 xs:mb-2.5 text-[#020202]">
              All-inclusive <span className="font-normal">Stay</span>
            </h3>
            <p className="font-normal text-[20px] leading-none lowercase text-[#020202]">
              <span className="font-inter font-bold text-[25px] xs:text-[37px] leading-none uppercase text-brand-blue">₹14,999 </span> 
              per person, per night
            </p>
          </div>
          
        </div>

      </div>
    </section>
  );
}
