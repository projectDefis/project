import { styles } from "./styles";
import menuBurger from "../../assets/img/ico/menuBurger.svg";
import croix from "../../assets/img/ico/croix.svg";
import partnairemobile from "../../assets/img/partners/partnairMobile.svg"

export const Section1HeaderMobile = () => {
  return (
    <>
      <div className="bg-custom-black-500">
        <div className="flex">
          <h2 className="font-roboto font-black text-white pt-4 pl-8 text-3xl">
            Olivier.
          </h2>
          <div className="flex justify-end w-full absolute">
            <img src={menuBurger} alt="" />
          </div>
        </div>
        <p className="pt-20 pb-10 pl-8 text-custom-gray-100 uppercase tracking-widest font-roboto">
          Je suis Fullstack Designer
        </p>
        <h2 className="text-4xl pb-6 pl-8 text-white">Hola, mi nombre es</h2>
        <h2 className="text-custom-orange text-7xl font-bold pl-8">Olivier.</h2>
        <img className="pl-20 pt-2" src={croix} alt="" />
        <p className="pt-4 text-white font-inter pl-8">
          Développement : Environnement LAMP, <br /> Zend Framework, ExtJS,
          Webservices, <br /> AMFPHP, API Google Maps, <br /> Facebook Open
          Graph, API Twitter
        </p>
        <p className="pt-10 pl-8 text-white font-inter">
          Directeur technique Webedia Madrid
        </p>
        <div className="pt-12 pl-8">
          <button className="bg-custom-red font-roboto text-white font-normal rounded-3xl text-sm w-32 h-12 mr-8">
            Portfolio
          </button>
          <button className="border-custom-orange border-2 text-custom-orange py-2.5 px-8 rounded-3xl font-roboto">
            Contact
          </button>
        </div>
        <div className="pt-16 pb-16">

        <img src={partnairemobile} alt="icone des partenaires" />
        </div>
      </div>
    </>
  );
};
