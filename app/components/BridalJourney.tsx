import Image from "next/image";

export default function BridalJourney() {
  return (
    <section className="py-11.25 bg-[url('../public/images/bridal-journey.png')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto">
        
        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="font-normal text-[32px] leading-8 text-center mb-5">
            The <span className="number-ctn">5</span>-Day Bridal Journey
          </h2>
          <p className="font-normal pt-1 text-[17.5px] leading-none text-center">
            A thoughtfully paced reset before your wedding festivities begin.
          </p>
        </div>

        {/* Journey Main Flex Container */}
        <div className="py-15 flex justify-between">
          
          {/* Day 1 */}
          <div className="w-[18.8%]">
            <h3 className="font-bold text-[22px] leading-none text-center text-brand-blue mb-2.5">
              DAY <span className="number-ctn">1</span>
            </h3>
            <h4 className="font-normal text-[22px] leading-none text-center mb-5">
              Initiation & Grounding
            </h4>
            {/* Image Box with group hover */}
            <div className="w-full aspect-11/15 relative text-white group">
              <Image src="/images/day_1.png" fill alt="" className="rounded-[15px] object-cover" />
              <div className="bg-[linear-gradient(180deg,#375F77_0%,rgba(55,95,119,0.6)_53.37%,rgba(55,95,119,0.5)_100%)] rounded-[15px] px-6.25 pt-11.25 pb-6.25 absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 cursor-pointer">
                <h5 className="font-['Nimbus',sans-serif] font-medium text-[18px] leading-6 text-center italic mb-2.5">
                  Step gently into your wellness journey
                </h5>
                <p className="font-normal text-[16px] leading-5 text-center mb-15">
                  Light naturopathy, herbal infusions & gentle yoga prepare the body & mind for the journey ahead.
                </p>
                <p className="font-normal text-[16px] leading-5 text-center">
                  Helps release fatigue and gently prepare the body & mind for recovery.
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="w-[18.8%]">
            <h3 className="font-bold text-[22px] leading-none text-center text-brand-blue mb-2.5">
              DAY <span className="number-ctn">2</span>
            </h3>
            <h4 className="font-normal text-[22px] leading-none text-center mb-5">
              Ease & Elimination
            </h4>
            <div className="w-full aspect-11/15 relative text-white group">
              <Image src="/images/day_2.png" fill alt="" className="rounded-[15px] object-cover" />
              <div className="bg-[linear-gradient(180deg,#375F77_0%,rgba(55,95,119,0.6)_53.37%,rgba(55,95,119,0.5)_100%)] rounded-[15px] px-6.25 pt-11.25 pb-6.25 absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 cursor-pointer">
                <h5 className="font-['Nimbus',sans-serif] font-medium text-[18px] leading-6 text-center italic mb-2.5">
                  Cleanse from within, shine outside
                </h5>
                <p className="font-normal text-[16px] leading-5 text-center mb-15">
                  Herbal therapies & restorative yoga support detoxification & help gently rebalance inner energy.
                </p>
                <p className="font-normal text-[16px] leading-5 text-center">
                  Supports detoxification, reduces heaviness & restores lightness in the body.
                </p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="w-[18.8%]">
            <h3 className="font-bold text-[22px] leading-none text-center text-brand-blue mb-2.5">
              DAY <span className="number-ctn">3</span>
            </h3>
            <h4 className="font-normal text-[22px] leading-none text-center mb-5">
              Radiance & Rejuvenation
            </h4>
            <div className="w-full aspect-11/15 relative text-white group">
              <Image src="/images/day_3.png" fill alt="" className="rounded-[15px] object-cover" />
              <div className="bg-[linear-gradient(180deg,#375F77_0%,rgba(55,95,119,0.6)_53.37%,rgba(55,95,119,0.5)_100%)] rounded-[15px] px-6.25 pt-11.25 pb-6.25 absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 cursor-pointer">
                <h5 className="font-['Nimbus',sans-serif] font-medium text-[18px] leading-6 text-center italic mb-2.5">
                  Glow that lasts beyond the wedding day
                </h5>
                <p className="font-normal text-[16px] leading-5 text-center mb-15">
                  Ayurvedic massages, hair therapies & rejuvenating facials, along with yoga & meditation, restore vitality & natural glow.
                </p>
                <p className="font-normal text-[16px] leading-5 text-center">
                  Enhances skin vitality while relieving deep-seated tension & fatigue.
                </p>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div className="w-[18.8%]">
            <h3 className="font-bold text-[22px] leading-none text-center text-brand-blue mb-2.5">
              DAY <span className="number-ctn">4</span>
            </h3>
            <h4 className="font-normal text-[22px] leading-none text-center mb-5">
              Gentle Energizing
            </h4>
            <div className="w-full aspect-11/15 relative text-white group">
              <Image src="/images/day_4.png" fill alt="" className="rounded-[15px] object-cover" />
              <div className="bg-[linear-gradient(180deg,#375F77_0%,rgba(55,95,119,0.6)_53.37%,rgba(55,95,119,0.5)_100%)] rounded-[15px] px-6.25 pt-11.25 pb-6.25 absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 cursor-pointer">
                <h5 className="font-['Nimbus',sans-serif] font-medium text-[18px] leading-6 text-center italic mb-2.5">
                  Step into your wedding with serenity and shine
                </h5>
                <p className="font-normal text-[16px] leading-5 text-center mb-15">
                  Aromatherapy, herbal body polish & meditation complete the journey with calm & bridal radiance.
                </p>
                <p className="font-normal text-[16px] leading-5 text-center">
                  Leaves you calm, refreshed & confidently prepared for your wedding celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="w-[18.8%]">
            <h3 className="font-bold text-[22px] leading-none text-center text-brand-blue mb-2.5">
              DAY <span className="number-ctn">5</span>
            </h3>
            <h4 className="font-normal text-[22px] leading-none text-center mb-5">
              Bridal Bliss
            </h4>
            <div className="w-full aspect-11/15 relative text-white group">
              <Image src="/images/day_5.png" fill alt="" className="rounded-[15px] object-cover" />
              <div className="bg-[linear-gradient(180deg,#375F77_0%,rgba(55,95,119,0.6)_53.37%,rgba(55,95,119,0.5)_100%)] rounded-[15px] px-6.25 pt-11.25 pb-6.25 absolute top-0 left-0 w-full h-full opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100 cursor-pointer">
                <h5 className="font-['Nimbus',sans-serif] font-medium text-[18px] leading-6 text-center italic mb-2.5">
                  Step gently into your wellness journey.
                </h5>
                <p className="font-normal text-[16px] leading-5 text-center mb-15">
                  Light naturopathy, herbal infusions & gentle yoga prepare the body & mind for the journey ahead.
                </p>
                <p className="font-normal text-[16px] leading-5 text-center">
                  Helps release fatigue and gently prepare the body & mind for recovery.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <a 
          href="#form_bottom" 
          className="font-bold text-[28px] leading-none text-center py-6.25 px-20 text-white rounded-[20px] bg-brand-blue block w-fit mx-auto"
        >
          Book Your Bridal Retreat Now
        </a>
      </div>
    </section>
  );
}