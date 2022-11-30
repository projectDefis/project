import { styles } from "./styles";
import SvgSectionTestimonials from "../../assets/img/svgDesktop/BgTestimonials.svg";
import PicsProfil from "../../assets/img/gallery/profiltémoignages.svg";
import BorderOrange from "../../assets/img/ico/borderOrange.svg";
import LitleBorderOrange from "../../assets/img/ico/litleBorderOrange.svg";

export const Section6TestimonialDesktop = () => {
  return (
    // For background SVG IMG
    <div className={styles.ContentBgSVG}>
      {/* div for content text */}
      <div>
        <div className="absolute pt-36 text-4xl flex flex-col justify-center items-center w-screen">
          
          <h2 className="">Témoignages</h2>
          <img className="pt-4" src={BorderOrange} alt="Border Orange" />
          <div className="flex pt-20 pl-20">
            <img className="pr-8 -mt-12" src={PicsProfil} alt="Pics Profil" />
            <div>
              <div className="text-xl w-200  pt-2 italic">
                Proin iaculis purus consequat sem cure digni ssim donec
                porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              </div>
              <img
                className="pt-4"
                src={LitleBorderOrange}
                alt="Border Orange"
              />
              <div>
                <p className=" pt-4 text-lg font-bold">Saul Goodman</p>
                <p className="pt-1 text-sm">Ceo And Founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center flex">
          <img src={SvgSectionTestimonials} alt="Background S" />
        </div>
      </div>
    </div>
  );
};
