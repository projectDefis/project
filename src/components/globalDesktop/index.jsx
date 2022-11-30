import { Section8ContactDesktop } from "../contactDesktop";
import { Section1HeaderDesktop } from "../headerDesktop";
import { Section7NewsDesktop } from "../newsDesktop";
import { Section6TestimonialDesktop } from "../testimonialsDesktop";

export const GlobalContentDesktop = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Section1HeaderDesktop />
        <Section6TestimonialDesktop />
        <Section7NewsDesktop />
        <Section8ContactDesktop />
      </div>
    </>
   
  );
};
