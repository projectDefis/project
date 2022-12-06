import { Section1HeaderMobile } from "../headerMobile";
import { Section2Skills } from "../globalDesktop/sectionSkills";
import { Section3Portfolio } from "../globalDesktop/sectionPortfolio"
import { Section4Timeline } from "../globalDesktop/sectionTimeline";
import { Section6TestimonialsMobile } from "../testimonialsMobile";
import { Section8ContactMobile } from "../contactMobile";
import { Section7NewsMobile } from "../newsMobile";

export const GlobalContentMobile = () => {
  return (
    <div className="lg:hidden">
      <Section1HeaderMobile />
      <Section2Skills />
      <Section3Portfolio />
      <Section4Timeline />
      <Section6TestimonialsMobile />
      <Section7NewsMobile />
      <Section8ContactMobile />
    </div>
  );
};
