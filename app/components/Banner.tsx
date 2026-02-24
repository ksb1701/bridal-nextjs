import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="bg-[url('/images/banner-image.png')] bg-no-repeat bg-center bg-cover h-screen w-full">
      <div className="flex flex-col justify-between h-full">
        
        {/* Banner Top */}
        <div className="flex justify-between">
          <div className="mt-20 ml-25 text-center">
            <h1 className="font-normal text-[37px] leading-none uppercase mb-4.25">Bridal Wellness Retreat</h1>
            <h2 className="font-normal text-[46px] leading-none mb-5">
              <span className="font-notoSerif">5</span> Days of Natural Radiance
            </h2>
            <p className="text-brand-blue font-bold text-[20px] leading-none">Holistic Renewal <span className='font-semibold'>|</span> Doctor-Guided Care <span className='font-semibold'>|</span> Lasting Balance</p>
          </div>
          
          <div className="mt-12.5 mr-12.5">
            <Link href="https://trewellness.in/">
              <Image
                src="/images/logo.png" alt="Tre Wellness Logo"
                width={93} height={67} priority
              />
            </Link>
          </div>
        </div>

        {/* Banner Bottom */}
        <div className="flex justify-between items-end pb-7.5">
          <div className="pl-25">
            <Link 
              href="#form_bottom" 
              className="block px-6.25 py-4.25 bg-white rounded-[15px] font-bold text-[20px] leading-none text-brand-blue mb-2.5"
            >
              Book Your Bridal Experience
            </Link>
          </div>
          
          <div className="px-8.75 py-6.5 bg-white rounded-l-[15px]">
            <h3 className="font-semibold text-[26px] leading-none mb-2.5 text-[#020202]">
              All-inclusive <span className="font-normal">Stay</span>
            </h3>
            <p className="font-normal text-[20px] leading-none lowercase text-[#020202]">
              <span className="font-inter font-bold text-[37px] leading-none uppercase text-brand-blue">₹14,999 </span> 
              per person, per night
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
