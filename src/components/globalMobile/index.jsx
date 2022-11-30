import { Section8ContactMobile } from "../contactMobile";
import { Section1HeaderMobile } from "../headerMobile";
import { Section7NewsMobile } from "../newsMobile";
import { Section6TestimonialsMobile } from "../testimonialsMobile";

export const GlobalContentMobile = () => {
  return (
    <div className="lg:hidden">
      <Section1HeaderMobile />
      <Section6TestimonialsMobile />
      <Section7NewsMobile />
      <Section8ContactMobile />
    </div>
  );
};
