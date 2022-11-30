import { styles } from "./styles";
import BgHeader from "../../assets/img/svgDesktop/BgHeader.svg";
import IcoTelHeader from "../../assets/img/svgDesktop/IcoTelHeader.svg";
import IcoMailHeader from "../../assets/img/svgDesktop/IcoMail.svg";

import ProfilPics from "../../assets/img/svgDesktop/ProfilPics.svg";
import Partnaire from "../../assets/img/svgDesktop/Partnaire.svg";

export const Section1HeaderDesktop = () => {
  return (
    <>
      <div className={styles.ContentBgSVG}>
        {/* div for content text */}
        <div>
          <div className="absolute ">
            <div className="flex pl-96 pt-8">
              <h2 className="font-roboto font-black pl-6 pr-20 text-3xl">
                Olivier.
              </h2>
              <img className="px-4 pb-2" src={IcoTelHeader} alt="Ico Tel" />
              <p className="pr-20">+98 76-54-1423</p>
              <img className="pb-4" src={IcoMailHeader} alt="" />
              <p className="pl-4">olivier.depiesse@gmail.com</p>
            </div>
            {/* grid col 2 */}
            <div className="grid grid-cols-5 w-screen">
              {/* col 1 */}
              <div className="flex flex-col col-span-2  col-start-2 pl-56">
                <p className="pt-20 pb-10 text-custom-gray-100 uppercase tracking-widest font-roboto">
                  Je suis Fullstack Designer
                </p>
                <h2 className="text-7xl pb-6">Hola, mi nombre es</h2>
                <h2 className="text-custom-orange font-bold text-7xl">
                  Olivier.
                </h2>
                <p className="pt-10">
                  Développement : Environnement LAMP, Zend Framework, <br />
                  ExtJS, Webservices, <br /> AMFPHP, API Google Maps, Facebook
                  <br />
                  Open Graph, API Twitter
                </p>
                <p className="pt-10">Directeur technique Webedia Madrid</p>

                <div className="pt-12">
                  <button className="bg-custom-red font-roboto font-normal rounded-3xl text-sm w-32 h-12 mr-8">
                    Portfolio
                  </button>
                  <button className="border-custom-orange border-2 text-custom-orange py-2.5 px-8 rounded-3xl font-roboto">
                    Contact
                  </button>
                </div>
              </div>
              {/* cols 2 */}
              <div className="col-start-4 col-span-2">
                <img className="-ml-24 pt-14" src={ProfilPics} alt="" />
              </div>
            </div>
            <div className="flex justify-center pt-60">
              <img src={Partnaire} alt="" />
            </div>
          </div>
          <div className="justify-center flex">
            <img src={BgHeader} alt="Background SVG" />
          </div>
        </div>
      </div>
    </>
  );
};
