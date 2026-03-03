import Image from "next/image";

export default function FeelYourBest() {
  return (
    <section className="pb-12.5 md:py-12.5">
      <div className="container mx-auto pt-5">
        {/* Swapped justify-center for justify-between to utilize the full container width */}
        <div className="flex grow flex-col-reverse md:flex-row justify-between px-1.25 md:gap-10 items-center">
          
          {/* Text Container: Changed md:w-1/2 to flex-1 */}
          <div className="text-center py-auto mt-7.5 flex-1 md:p-0 xl:pl-15">
            <h2 className="font-normal text-[28px] xs:text-[36px] leading-none mb-1.25">
              Want to Feel Your Best
            </h2>
            <h3 className="font-thin text-[38px] xs:text-[50px] leading-12.5 underline decoration-2 mb-10">
              For the Big Day?
            </h3>
            
            <p className="font-normal text-[18px] leading-6 max-w-122.5 mx-auto mb-5">
              Wedding <strong>celebrations</strong> often bring travel, indulgent meals, late nights & frequent makeup routines, all of which <strong>can leave the body & mind feeling overwhelmed.</strong>
            </p>
            <p className="font-normal text-[18px] leading-6 max-w-122.5 mx-auto mb-5">
              At Trē Wellness, <strong>integrative therapies</strong> help brides & their closest circle <strong>restore balance</strong> & well-being so you step into your celebrations <strong>feeling calm, confident & radiant.</strong>
            </p>
          </div>

          {/* Image Container: Changed md:w-1/2 to flex-1, removed max-w-140 and mx-auto */}
          <div className="w-full flex-1 flex justify-start"> 
            <Image
              src="/images/want-to-feel-your.png" 
              alt="Want to feel your best"
              width={620}
              height={572}
              /* Added max-w-[620px] to match your intrinsic image width without restricting it too early */
              className="w-full h-auto max-w-155 rounded-[15px]" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
