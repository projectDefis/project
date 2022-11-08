import { styles } from "./styles";
import borderOrange from "../../assets/img/ico/borderOrange.svg";

export let Competences = () => {
  return (
    <div className={`${styles.divSectionContent} `}>
      <h2 className={styles.text.h2}>Compétences</h2>
      <img src={borderOrange} className={styles.borderOrange} />
      <p className={styles.text.spanDate}>It doesn’t matter how great your product or service is if your copy does not captivate your audience.</p>
      <h3 className={`${styles.text.h3} ${styles.text.uppercase}`}>
        Omote / real-time face tracking & projection mapping
      </h3>
      <p className={styles.text.paragraph2}>
        <span className={styles.text.uppercase}> Live installation on </span>
        2014/8/28connpass.com/event /8112/
        <span className={styles.text.uppercase}>
          project members nobumichi asai (planner / producer / technical...{" "}
        </span>
      </p>
      <span className={styles.text.spanDate}>08 Novembre 2013</span>
      <h3 className={styles.text.h3}>Forest</h3>
      <p className={styles.text.paragraph2}>
        Movie : Takeshi Tsunehashi d-apartment.net - The post Forest first
        appeared on Yop Concept.
      </p>
      <span className={styles.text.spanDate}>18 Octobre 2013</span>
      <h3 className={styles.text.h3}>
        Atoms For Peace – Before Your Very Eyes
      </h3>
      <p className={styles.text.paragraphYoutube}>
        Vous trouverez ici le making-of :
        http://www.youtube.com/watch?v=mfWNvh gHV3A...
      </p>
    </div>
  );
};