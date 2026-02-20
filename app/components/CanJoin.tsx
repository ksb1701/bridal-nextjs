export default function CanJoin() {
  const eligibleGroups = [
    "Brides preparing for their wedding",
    "Bridesmaids & close family",
    "Anyone seeking a pre-wedding wellness reset"
  ];

  return (
    <section className="py-20 bg-[#F7FCFFBF]">
      {/* Added px-4 for basic container padding, adjust as needed based on your global container config */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">

          {/* Heading Column */}
          <div className="md:w-[30%] md:pr-30 mb-8 md:mb-0">
            <h2 className="font-medium text-[36px] leading-12">
              Who Can Join This Experience?
            </h2>
          </div>

          {/* List Column */}
          <div className="md:w-[70%] md:pl-12.5">
            {eligibleGroups.map((text, index) => (
              <p
                key={index}
                className="font-normal text-[28px] leading-none py-6.25 border-t border-[#333] first:pt-0 first:border-none"
              >
                {text}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
