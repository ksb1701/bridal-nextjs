import Image from 'next/image';

const journeyData = [
  {
    day: 1,
    title: "Initiation & Grounding",
    image: "/images/day_1.png",
    hoverTitle: "Step gently into your wellness journey",
    text1: "Light naturopathy, herbal infusions & gentle yoga prepare the body & mind for the journey ahead.",
    text2: "Helps release fatigue and gently prepare the body & mind for recovery."
  },
  {
    day: 2,
    title: "Ease & Elimination",
    image: "/images/day_2.png",
    hoverTitle: "Cleanse from within, shine outside",
    text1: "Herbal therapies & restorative yoga support detoxification & help gently rebalance inner energy.",
    text2: "Supports detoxification, reduces heaviness & restores lightness in the body."
  },
  {
    day: 3,
    title: "Radiance & Rejuvenation",
    image: "/images/day_3.png",
    hoverTitle: "Glow that lasts beyond the wedding day",
    text1: "Ayurvedic massages, hair therapies & rejuvenating facials, along with yoga & meditation, restore vitality & natural glow.",
    text2: "Enhances skin vitality while relieving deep-seated tension & fatigue."
  },
  {
    day: 4,
    title: "Gentle Energizing",
    image: "/images/day_4.png",
    hoverTitle: "Step into your wedding with serenity and shine",
    text1: "Aromatherapy, herbal body polish & meditation complete the journey with calm & bridal radiance.",
    text2: "Leaves you calm, refreshed & confidently prepared for your wedding celebrations."
  },
  {
    day: 5,
    title: "Bridal Bliss",
    image: "/images/day_5.png",
    hoverTitle: "Step gently into your wellness journey.",
    text1: "Light naturopathy, herbal infusions & gentle yoga prepare the body & mind for the journey ahead.",
    text2: "Helps release fatigue and gently prepare the body & mind for recovery."
  }
];

export default function BridalJourney() {
  return (
    <section className="py-11.25 bg-[url('../public/images/bridal-journey.png')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="mb-5">
          <h2 className="font-normal text-[32px] leading-8 text-center mb-5">
            The <span>5</span>-Day Bridal Journey
          </h2>
          <p className="font-normal pt-1 text-[17.5px] leading-none text-center">
            A thoughtfully paced reset before your wedding festivities begin.
          </p>
        </div>

        {/* Journey Main Grid Container */}
        <div className="w-21/24 mx-auto mb-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4.25">

          {journeyData.map((item) => (
            <div key={item.day} className="w-full max-w-65 mx-auto flex flex-col">
              <h3 className="font-bold text-[22px] leading-none text-center text-brand-blue mb-0.5">
                DAY <span>{item.day}</span>
              </h3>
              <h4 className="font-normal text-[22px] leading-none text-center mb-2 min-h-11 flex items-center justify-center">
                {item.title}
              </h4>

              {/* Corrected Image Box */}
              <div className="w-full aspect-11/15 relative text-white group overflow-hidden rounded-[15px] cursor-pointer">
                <Image
                  src={item.image}
                  fill
                  alt={`Day ${item.day} - ${item.title}`}
                  className="object-cover"
                />

                {/* Fixed overlay classes and opacity */}
                <div className="bg-[linear-gradient(180deg,rgba(55,95,119,0.6)_0%,rgba(55,95,119,0.2)_50%,rgba(55,95,119,0.7)_100%)] px-6.25 pt-11.25 pb-6.25 absolute inset-0 opacity-100 xs:opacity-0 transition-opacity duration-325 ease-in-out group-hover:opacity-100 flex flex-col justify-start">
                  <h5 className="font-['Nimbus',sans-serif] font-medium text-[18px] leading-6 text-center italic mb-2.5">
                    {item.hoverTitle}
                  </h5>
                  <p className="font-normal text-[16px] leading-5 text-center">
                    {item.text1}
                  </p>

                  {/* mt-auto pushes this to the absolute bottom */}
                  <p className="font-normal text-[16px] leading-5 text-center mt-auto">
                    {item.text2}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Button */}
        <a
          href="#form_bottom"
          className="font-bold text-[20px] md:text-[28px] leading-none text-center p-[15px_40px] md:py-6.25 md:px-20 text-white rounded-[20px] bg-brand-blue block w-fit mx-auto transition-transform hover:scale-105"
        >
          Book Your Bridal Retreat Now
        </a>
      </div>
    </section>
  );
}