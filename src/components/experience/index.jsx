import styles from "./styles";
import border from "../../assets/img/ico/borderOrange.svg";
import exp1 from "../../assets/img/ico/experience1.svg";
import exp2 from "../../assets/img/ico/experience2.svg";
import exp3 from "../../assets/img/ico/experience3.svg";

const Experience = () => {
  return (
    <>
      <section className={styles.bg}>
        <div className={styles.divSkills}>
          <h2 className={styles.title}>Experience</h2>
          <img src={border} alt="border" className={styles.img} />
          <p className={styles.textP}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem, It
            doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
        </div>
        <div className={styles.divExp1}>
          <img src={exp1} alt="exp1" />
          <h6 className={styles.expH6}>AUJOURD’HUI</h6>
        </div>
        <div className="w-56 flex justify-end">
          <h3 className="text-white font-inter font-bold text-lg pt-3">Web Developper</h3>
        </div>
        <div className={styles.divExp2}>
          <img src={exp2} alt="exp2" />
          <h6 className={styles.expH6}>MAI 2010 - AVRIL 2021</h6>
        </div>
        <div className="w-[17.8rem] flex justify-end">
          <h3 className="text-white font-inter font-bold text-lg pt-3">Directeur de projet Web</h3>
        </div>
        <div className={styles.divExp3}>
          <img src={exp3} alt="exp3" />
          <h6 className={styles.expH6}>SEPT 2008 - MAI 2009</h6>
        </div>
        <div className="w-56 flex justify-end">
          <h3 className="text-white font-inter font-bold text-lg pt-3">Web Developper</h3>
        </div>
        <div className="h-40 flex items-center pl-10">
          <p className="bg-[#BB2323] font-inter rounded-full text-white text-sm px-8 py-3">Download Resume</p>
        </div>
      </section>
    </>
  );
};

export default Experience;
