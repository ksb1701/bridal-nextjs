export default function WhyTre() {
  const features = [
    {
      title: 'Doctor-Guided Therapies',
      description: 'Personalised naturopathy, Ayurveda, and herbal treatments guided by experienced practitioners.',
      points: 'Consultations | Prescribed daily therapies | Supportive treatments | Guided yoga & meditation',
      bgImage: '/images/doctor-fuided-therapies.webp',
    },
    {
      title: 'Bespoke Nutrition',
      description: 'Plant-based, sattvic meals designed to support gut health & vitality.',
      points: 'Dietician consultations | Personalised international gourmet cuisine',
      bgImage: '/images/bespoke-nutrition.webp',
    },
    {
      title: 'Restful Stay',
      description: 'Comfortable accommodations set amidst the tranquil Vikarabad hills, offering space to rest and reconnect.',
      points: 'Comfortable accommodation | Optional city & airport transfers',
      bgImage: '/images/restful-stay.webp',
    },
    {
      title: 'Mindful Leisure Spaces',
      description: 'Meditation areas, library spaces, and creative therapies that encourage relaxation and emotional well-being.',
      points: 'Recreational activities | Wellness experiences for relaxation & rejuvenation',
      bgImage: '/images/mindful-leisure-spaces.webp',
    },
  ];

  return (
    <section className="py-12.5 pt-17.5">
      <div className="container mx-auto px-26">
        {/* Section Heading */}
        <div className="max-w-197.5 mx-auto mb-10 text-center">
          <h2 className="font-normal text-[32px] leading-none mb-5">
            Why Trē Makes the Perfect Bridal Retreat
          </h2>
          <p className="font-normal text-lg leading-6">
            Trē offers an experience designed in a space where brides can slow down, restore balance, and prepare for their celebrations, feeling calm and cared for
          </p>
        </div>

        {/* Features Main */}
        <div className="flex flex-col gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative px-8.75 pt-10 pb-6.25 text-white rounded-[15px] overflow-hidden z-0"
              style={{
                background: `url(${feature.bgImage}) no-repeat center center`,
                backgroundSize: 'cover',
              }}
            >
              {/* Gradient Overlay (Replaces the ::after pseudo-element) */}
              <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent -z-10"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-medium text-2xl leading-none mb-3">
                  {feature.title}
                </h3>
                <p className="font-normal text-lg leading-6 mb-10 max-w-125">
                  {feature.description}
                </p>
                <p className="font-bold text-lg leading-5 italic">
                  {feature.points}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
