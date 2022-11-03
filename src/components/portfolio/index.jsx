import { styles } from "./styles";
import locationIco from "../../assets/img/ico/adress.svg";
import mailIco from "../../assets/img/ico/mail.svg";
import telIco from "../../assets/img/ico/tel.svg";

export const Portfolio = () => {
  return (
    <div className={styles.divSectionContent}>
      <h2 className={styles.text.h2Contact}>Contact.</h2>
      <div className={styles.itemsCenter}>
        <img src={locationIco} className={styles.locationIco} />
        <div>
          <p className={styles.text.subTitleIco}>Adresse</p>
          <p className={styles.text.resultContact}>
            36 rue des Peupliers Paris (75018) France
          </p>
        </div>
      </div>
      <div className={styles.itemsCenter}>
        <img src={mailIco} className={styles.mailIco} />
        <div>
          <p className={styles.text.subTitleIco}>Mail</p>
          <p className={styles.text.resultContact}>
            olivier.depiesse@gmail.com
          </p>
        </div>
      </div>
      <div className={styles.itemsCenter}>
        <img src={telIco} className={styles.telIco} />
        <div>
          <p className={styles.text.subTitleIco}>Téléphone</p>
          <p className={styles.text.resultContact}>06 54 84 54 75</p>
        </div>
      </div>
      <h5 className={styles.text.titleForm}>
        Utilisez le formulaire ci-dessous pour me contacter
      </h5>
      <p className={styles.text.paragraph2}>
        Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu
        non diam phasellus. Scelerisque felis imperdiet proin fermentum leo.
        Amet volutpat consequat mauris nunc congue..
      </p>
    </div>
  );
};
