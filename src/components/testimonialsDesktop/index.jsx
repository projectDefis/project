import { styles } from "./styles";
import BgTestimonials from "../../assets/img/svgDesktop/BgTestimonials.svg";
import PicsProfilContact from "../../assets/img/gallery/profiltémoignages.svg"


export const Section6TestimonialDesktop = () => {
  return (
    // For background SVG IMG
    <div className={styles.ContentBgSVG}>
      <div className="absolute">
        <h2 className=" pt-32 text-4xl flex  justify-center  w-screen">
          Témoignages
        </h2>
        {/* div for pics profil & text */}
        <div className="flex w-screen justify-center pt-20">
          <img src={PicsProfilContact} alt="" />
          <p className="w-200 flex justify-center  text-xl italic font-normal">
            Proin iaculis purus consequat sem cure digni ssim donec porttitora
            entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam
            eget nibh et. Maecen aliquam, risus at semper.
          </p>
        </div>
      </div>
      <div className="">
        <img src={BgTestimonials} alt="Background SVG" />
      </div>
    </div>
  );
};
