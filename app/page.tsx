import BeginYour from "./components/BeginYour";
import BridalJourney from "./components/BridalJourney";
import CanJoin from "./components/CanJoin";
import FAQs from "./components/FAQs";
import FeelYourBest from "./components/FeelYourBest";
import InquiryForm from "./components/InquiryForm";
import Testimonial from "./components/Testimonial";
import WhyTre from "./components/WhyTre";

export default function Home() {
  return (
    <>
      <InquiryForm heading="PLAN YOUR RETREAT" />
      <WhyTre />
      <FeelYourBest />
      <BridalJourney />
      <CanJoin />
      <section
        className="h-116 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/join_under_section_image.jpg')" }}
      />
      <Testimonial />
      <BeginYour />
      <InquiryForm heading="ENQUIRE NOW" />
      <FAQs />
    </>
  );
}
