import { styles } from "./styles";
import SvgSectionTestimonials from "../../assets/img/svgDesktop/sectionTestimonials.svg";

export const Section6TestimonialDesktop = () => {
  return (
    // For background SVG IMG
    <div className={styles.ContentBgSVG}>
      <div className="absolute pt-36 text-4xl flex flex-col justify-center items-center w-screen">
        Témoignages
        <div className="text-lg">
          Proin iaculis purus consequat sem cure digni ssim donec porttitora
          entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
          eget nibh et. Maecen aliquam, risus at semper.
        </div>
      </div>
      <div className="pl-52">
        <img src={SvgSectionTestimonials} alt="Background S" />
      </div>
    </div>
  );
};
