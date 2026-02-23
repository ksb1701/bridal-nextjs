import Image from "next/image";

export default function FeelYourBest() {
  return (
    <section className="py-12.5">
      {/* Assuming standard container setup, added mx-auto to center it */}
      <div className="container mx-auto pt-5">
        <div className="flex justify-between items-center">
          
          {/* Text Container */}
          <div className="text-center w-1/2 pl-23">
            <h2 className="font-normal text-[36px] leading-none mb-1.25">
              Want to Feel Your Best
            </h2>
            <h3 className="font-thin text-[50px] leading-12.5 underline decoration-2 mb-10">
              For the Big Day?
            </h3>
            
            <p className="font-normal text-[18px] leading-6 max-w-122.5 mx-auto mb-5">
              Wedding <strong>celebrations</strong> often bring travel, indulgent meals, late nights & frequent makeup routines, all of which <strong>can leave the body & mind feeling overwhelmed.</strong>
            </p>
            <p className="font-normal text-[18px] leading-6 max-w-122.5 mx-auto mb-5">
              At Trē Wellness, <strong>integrative therapies</strong> help brides & their closest circle <strong>restore balance</strong> & well-being so you step into your celebrations <strong>feeling calm, confident & radiant.</strong>
            </p>
          </div>

          {/* Image Container */}
          <div className="w-1/2">
            <Image
              src="/images/want-to-feel-your.png" 
              alt="Want to feel your best"
              width={618}
              height={412}
              className="rounded-[15px] max-w-full h-auto" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}