import { styles } from "./styles";
import borderOrange from "../../assets/img/ico/borderOrange.svg";

export const Section7NewsMobile = () => {
  return (
    // div section 7
    <div className={`${styles.divSectionContent} `}>
      {/* title */}
      <h2 className={styles.text.h2}>Actualités</h2>
      {/* img border orange */}
      <img
        src={borderOrange}
        height={"100%"}
        width={"25%"}
        alt="border orange"
        className={styles.borderOrange}
      />
      {/* date */}
      <h1 className={styles.text.spanDate}>19 Août 2014</h1>
      {/* subtitle */}
      <h2 className={`${styles.text.h3} ${styles.text.uppercase}`}>
        Omote / real-time face <br /> tracking & projection <br /> mapping
      </h2>
      {/* paragraph2 */}
      <p className={styles.text.paragraph2}>
        {/* span uppercase */}
        <span className={styles.text.uppercase}>
          Live installation <br /> on
        </span>
        2014/8/28connpass.com/event <br /> /8112/
        <span className={styles.text.uppercase}>
          project members <br /> nobumichi asai (planner / <br /> producer /
          technical...
        </span>
      </p>
      {/* date */}
      <h1 className={styles.text.spanDate}>08 Novembre 2013</h1>
      {/* subtitle */}
      <h2 className={styles.text.h3}>Forest</h2>
      {/* paragraph */}
      <p className={styles.text.paragraph2}>
        Movie : Takeshi Tsunehashi <br /> d-apartment.net - The post <br />{" "}
        Forest first appeared on Yop <br /> Concept.
      </p>
      {/* date */}
      <h1 className={styles.text.spanDate}>18 Octobre 2013</h1>
      {/* subtitle */}
      <h2 className={styles.text.h3}>
        Atoms For Peace – Before Your <br /> Very Eyes
      </h2>
      {/* paragraph */}
      <p className={styles.text.paragraphYoutube}>
        Vous trouverez ici le making-of : http://www.youtube.com/watch?v=mfWNvh
        gHV3A...
      </p>
    </div>
  );
};
