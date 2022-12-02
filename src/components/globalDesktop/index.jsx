import { Section1HeaderDesktop } from "../headerDesktop";
import { Section2Skills } from "./sectionSkills";
import { Section3Portfolio } from "./sectionPortfolio";
import { Section4Timeline } from "./sectionTimeline";
import { Section5Skills } from "./sectionSkills2";
import { Section6TestimonialDesktop } from "../testimonialsDesktop";
import { Section7NewsDesktop } from "../newsDesktop";
import { Section8ContactDesktop } from "../contactDesktop";

export const GlobalContentDesktop = () => {
  return (
    <>
      <div className="hidden lg:block">
        <Section1HeaderDesktop />
        <Section2Skills />
        <Section3Portfolio />
        <Section4Timeline />
        <Section5Skills />
        <Section6TestimonialDesktop />
        <Section7NewsDesktop />
        <Section8ContactDesktop />
      </div>
    </>
  );
};
