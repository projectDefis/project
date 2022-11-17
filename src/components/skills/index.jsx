import { stylesSkills, stylesPortfolio, stylesExperience } from "./styles"
import border from "../../assets/img/ico/borderOrange.svg";
import skill1 from "../../assets/img/ico/skill1.svg"
import skill2 from "../../assets/img/ico/skill2.svg"
import skill3 from "../../assets/img/ico/skill3.svg"
import skill4 from "../../assets/img/ico/skill4.svg"

const Competences = () => {
  return (
    <>
      <section className={stylesSkills.bg}>
        <div className={stylesSkills.divSkills}>
          <h2 className={stylesSkills.title}>Compétences</h2>
          <img src={border} alt="border" className={stylesSkills.img} />
          <p className={stylesSkills.textP}>It doesn’t matter how great your product or service is if your copy does not captivate your audience.</p>
        </div>
        <div className={stylesSkills.divSkills2}>
          <img src={skill1} alt="border" />
          <h4 className={stylesSkills.h4}>Technique</h4>
          <p className={stylesSkills.p}>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
        </div>
        <div className={stylesSkills.divSkills2}>
          <img src={skill2} alt="border" />
          <h4 className={stylesSkills.h4}>Gestion de projet</h4>
          <p className={stylesSkills.p}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        </div>
        <div className={stylesSkills.divSkills2}>
          <img src={skill3} alt="border" />
          <h4 className={stylesSkills.h4}>Management</h4>
          <p className={stylesSkills.p}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
        </div>
        <div className={stylesSkills.divSkills2}>
          <img src={skill4} alt="border" />
          <h4 className={stylesSkills.h4}>Langues</h4>
          <p className={stylesSkills.p}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
        </div>
      </section>
    </>
  );
};

export default Competences;