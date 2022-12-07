import { styles } from "./styles";
import skill1 from "../../../assets/img/ico/skill1.svg";
import skill2 from "../../../assets/img/ico/skill2.svg";
import skill3 from "../../../assets/img/ico/skill3.svg";
import skill4 from "../../../assets/img/ico/skill4.svg";
import BorderOrange from "../../../assets/img/ico/borderOrange.svg";

export const Section2Skills = () => {
  return (
    <>
      <section className={styles.bg}>
        <div className={styles.divSkills}>
          <h2 className={styles.title}>Compétences</h2>
          <div>
            <img
              className="lg:hidden pb-4"
              src={BorderOrange}
              alt={"orange"}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <p className={styles.textP}>
            It doesn’t matter how great your product or service <br /> is if
            your copy does not captivate your audience.
          </p>
        </div>
        <section className="lg:mx-80">
          <section className={styles.sectionLg}>
            <div className={styles.divSkills2}>
              <img className="hidden lg:block" src={skill1} alt="border" width={"60%"} height={"60%"} />
              <img className="lg:hidden" src={skill1} alt="border" width={"30%"} height={"60%"} />
              <h1 className={styles.h4}>Technique</h1>
              <p className={styles.p}>
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi
              </p>
            </div>
            <div className={styles.divSkills2}>
              <img className="hidden lg:block" src={skill2} alt="border" width={"60%"} height={"60%"} />
              <img className="lg:hidden" src={skill2} alt="border" width={"30%"} height={"60%"} />
              <h1 className={styles.h4}>Gestion de projet</h1>
              <p className={styles.p}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
            </div>
            <div className={styles.divSkills2}>
              <img className="hidden lg:block" src={skill3} alt="border" width={"60%"} height={"60%"} />
              <img className="lg:hidden" src={skill3} alt="border" width={"30%"} height={"60%"} />
              <h1 className={styles.h4}>Management</h1>
              <p className={styles.p}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia
              </p>
            </div>
            <div className={styles.divSkills2}>
              <img className="hidden lg:block" src={skill4} alt="border" width={"60%"} height={"60%"} />
              <img className="lg:hidden" src={skill4} alt="border" width={"30%"} height={"60%"} />
              <h1 className={styles.h4}>Langues</h1>
              <p className={styles.p}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
              </p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};
