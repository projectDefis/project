import AngularIco from "../../assets/img/ico/angular.svg";
import ReactIco from "../../assets/img/ico/react.svg";
import NodeIco from "../../assets/img/ico/node.svg";
import ManagementIco from "../../assets/img/ico/management.svg";
import AnalitycsIco from "../../assets/img/ico/analytics.svg";
import BrainIco from "../../assets/img/ico/brainstorming.svg";
import ExecutionIco from "../../assets/img/ico/management.svg";
import BorderOrange from "../../assets/img/ico/borderOrange.svg";
import { styles } from "./styles";

export const SkillsDesktop = () => {
  return (
    <>
      {/* background brown */}
      <div className={styles.bgSkills}>
        {/* div for 2 box skills */}
        <div className={styles.grid.gridCols2}>
          {/* cols 1 */}
          <div className="ml-40 mt-64">
            <div className="flex pb-6 ">
              {/* div skills angular */}
              <div className={`w-72 ${styles.bgBoxContent}`} >
                <div className={styles.iconBox}>
                  <img
                    src={AngularIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Angular</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>80%</p>
                  </div>
                </div>
              </div>
              {/* div skills React */}
              <div className={`w-80 ml-6 ${styles.bgBoxContent}`}>
                <div className={styles.iconBox}>
                  <img
                    src={ReactIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>React</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>90%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* div for 2 box skills */}
            <div className="flex pb-6">
              {/* div skills Node JS */}
              <div className={`w-56  ${styles.bgBoxContent}`}>
                <div className={styles.iconBox}>
                  <img
                    src={NodeIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Node JS</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>60%</p>
                  </div>
                </div>
              </div>
              {/* div skills Management */}
              <div className={`w-72 ml-6 ${styles.bgBoxContent}`}>
                <div className={styles.iconBox}>
                  <img
                    src={ManagementIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Management</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>70%</p>
                  </div>
                </div>
              </div>
            </div>
            {/* div for 2 box skills */}
            <div className="flex pb-6">
              {/* div skills Analitycs */}
              <div className={`w-72 ${styles.bgBoxContent}`}>
                <div className={styles.iconBox}>
                  <img
                    src={AnalitycsIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Analitycs</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>90%</p>
                  </div>
                </div>
              </div>
              {/* div skills Brainstorming */}
              <div className={`w-72 ml-6 ${styles.bgBoxContent}`}>
                <div className={styles.iconBox}>
                  <img
                    src={BrainIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Brainstroming</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>60%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-6">
              {/* div skills Execution */}
              <div className={`w-[30rem] ${styles.bgBoxContent}`}>
                <div className={styles.iconBox}>
                  <img
                    src={ExecutionIco}
                    height="auto"
                    width="auto"
                    alt="Angular ico"
                  />
                  <p className={styles.textBoxSkills}>Execution</p>
                  <div className={styles.justifyEndBoxOrange}>
                    <p className={styles.boxRoundedOrange}>100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* cols-2 */}
          <div>
            {/* div content text Skills */}
            <div className="ml-20 mt-72">
              <h2 className={styles.h2Skills}>Compétences</h2>
              <img
                className="pt-4 pb-10"
                src={BorderOrange}
                height="auto"
                width="auto"
                alt="Bordure orange"
              />
              <p className={styles.paragraphSkills}>
                Necessitatibus eius consequatur ex aliquid fuga <br /> eum
                quidem, It doesn’t matter how great your <br /> product or
                service is if your copy does not <br /> captivate your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
