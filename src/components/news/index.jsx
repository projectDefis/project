import { styles } from "./styles";
import borderOrange from "../../assets/img/ico/borderOrange.svg";

export const Section7 = () => {
  return (
    // div section 7
    <div className={`${styles.divSectionContent} `}>
      {/* title */}
      <h2 className={styles.text.h2}>Actualités</h2>
      {/* img border orange */}
      <img src={borderOrange} className={styles.borderOrange} />
      {/* date */}
      <span className={styles.text.spanDate}>19 Août 2014</span>
      {/* subtitle */}
      <h3 className={`${styles.text.h3} ${styles.text.uppercase}`}>
        Omote / real-time face tracking & projection mapping
      </h3>
      {/* paragraph2 */}
      <p className={styles.text.paragraph2}>
        {/* span uppercase */}
        <span className={styles.text.uppercase}> Live installation on </span>
        2014/8/28connpass.com/event /8112/
        <span className={styles.text.uppercase}>
          project members nobumichi asai (planner / producer / technical...{" "}
        </span>
      </p>
      {/* date */}
      <span className={styles.text.spanDate}>08 Novembre 2013</span>
      {/* subtitle */}
      <h3 className={styles.text.h3}>Forest</h3>
      {/* paragraph */}
      <p className={styles.text.paragraph2}>
        Movie : Takeshi Tsunehashi d-apartment.net - The post Forest first
        appeared on Yop Concept.
      </p>
      {/* date */}
      <span className={styles.text.spanDate}>18 Octobre 2013</span>
      {/* subtitle */}
      <h3 className={styles.text.h3}>
        Atoms For Peace – Before Your Very Eyes
      </h3>
      {/* paragraph */}
      <p className={styles.text.paragraphYoutube}>
        Vous trouverez ici le making-of :
        http://www.youtube.com/watch?v=mfWNvh gHV3A...
      </p>
    </div>
  );
};
