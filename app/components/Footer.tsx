import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-blue pt-20">
      <div className="container mx-auto px-4">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          
          {/* Logo Section */}
          <div className="w-full md:w-[13%]">
            <a href="https://trewellness.in/">
              <Image 
                src="/images/tre_logo.webp" 
                alt="TreWellness Logo" 
                width={200} height={100}
                className="max-w-full h-auto"
              />
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-white text-[28px] font-semibold capitalize border-b border-white pb-1.25 mb-7.5">
              quick links
            </h3>
            <ul>
              <li className="mb-1.25"><a href="https://trewellness.in/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Home</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Packages</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/therapies/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Therapies</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/nutrition-dining/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Nutrition & Dining</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/accommodation/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Accommodation</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/frequently-asked-question/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Frequently Asked Question</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/contact/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Contact</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/about/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">About Us</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/offers/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Offers</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/blog/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Blog</a></li>
              <li className="mb-1.25"><a href="#" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Events & Collaborators</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/features-publication/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Features & Publication</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/gallery/" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Gallery</a></li>
            </ul>
          </div>

          {/* Packages Section */}
          <div className="w-full md:w-[20%]">
            <h3 className="text-white text-[28px] font-semibold capitalize border-b border-white pb-1.25 mb-7.5">
              packages
            </h3>
            <ul>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Wellness Experience</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Mini Detox</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Major Detox</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Preventive Care</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Ailment Management</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Lifestyle Management</a></li>
              <li className="mb-1.25"><a href="https://trewellness.in/packages/#package-tabs" className="text-white py-0.75 text-[16px] font-light block hover:opacity-80">Holistic Healing</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-[35%]">
            <h3 className="text-white text-[28px] font-semibold capitalize border-b border-white pb-1.25 mb-7.5">
              contact Us
            </h3>
            
            <div className="flex items-center gap-2.5 mb-2.5">
              <Image src="/images/location.png" alt="Footer Address Icon" width={20} height={20} className="shrink-0" />
              <a href="#" className="text-white py-0.75 text-[16px] font-light hover:opacity-80">
                Survey number 121A, Kolkunda, Telangana 501202​
              </a>
            </div>
            
            <div className="flex items-center gap-2.5 mb-2.5">
              <Image src="/images/email.png" alt="Footer Email Icon" width={16} height={16} className="shrink-0" />
              <a href="mailto:hello@trewellness.in" className="text-white py-0.75 text-[16px] font-light hover:opacity-80">
                hello@trewellness.in
              </a>
            </div>
            
            <div className="flex items-center gap-2.5 mb-2.5">
              <Image src="/images/phone-call.png" alt="Footer Call Icon" width={16} height={16} className="shrink-0" />
              <a href="tel:+918712623060" className="text-white py-0.75 text-[16px] font-light hover:opacity-80">
                +91 87126 23060
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-2.5 mt-7.5">
              <a href="https://www.facebook.com/tre.wellness" target="_blank" rel="noopener noreferrer" className="p-3 border border-white hover:bg-white/10 transition-colors">
                <Image src="/images/facebook.png" alt="Facebook" width={16} height={16} />
              </a>
              <a href="https://www.instagram.com/tre.wellness/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white hover:bg-white/10 transition-colors">
                <Image src="/images/instagram.png" alt="Instagram" width={16} height={16} />
              </a>
              <a href="https://www.youtube.com/@tre.wellness" target="_blank" rel="noopener noreferrer" className="p-3 border border-white hover:bg-white/10 transition-colors">
                <Image src="/images/youtube.png" alt="YouTube" width={16} height={16} />
              </a>
              <a href="https://in.pinterest.com/trewellness/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white hover:bg-white/10 transition-colors">
                <Image src="/images/pinterest.png" alt="Pinterest" width={16} height={16} />
              </a>
              <a href="https://www.linkedin.com/company/tr%C4%93wellness/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white hover:bg-white/10 transition-colors">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={16} height={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-7.5 border-t border-white mt-10 gap-4 md:gap-0 text-center md:text-left">
          <p className="text-white text-[18px]">
            <a href="https://trewellness.in/" className="text-white text-[18px] font-bold no-underline">TreWellness </a> 
            © 2026. All rights reserved.
          </p>
          <a href="https://trewellness.in/privacy-policy/" className="text-white underline hover:no-underline">
            Privacy Policy
          </a>
        </div>

      </div>
    </footer>
  );
}
