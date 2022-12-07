import { styles } from "./styles";
import locationIco from "../../assets/img/ico/adress.svg";
import mailIco from "../../assets/img/ico/mail.svg";
import telIco from "../../assets/img/ico/tel.svg";

export const Section8ContactMobile = () => {
  return (
    // div for contact section 8
    <div className={styles.divSectionContent}>
      {/* title */}
      <h2 className={styles.text.h2Contact}>Contact.</h2>
      {/* icon adress */}
      <div className={styles.itemsCenter}>
        <img
          src={locationIco}
          width={"10%"}
          height={"10%"}
          alt="icone localisation"
          className={styles.locationIco}
        />
        {/* div for content adress text */}
        <div>
          <p className={styles.text.subTitleIco}>Adresse</p>
          <p className={styles.text.resultContact}>
            36 rue des Peupliers <br /> Paris (75018) France
          </p>
        </div>
      </div>
      {/* icon mail */}
      <div className={styles.itemsCenter}>
        <img
          src={mailIco}
          width={"10%"}
          height={"10%"}
          alt="icone mail"
          className={styles.mailIco}
        />
        {/* div for content mail text */}
        <div>
          <p className={styles.text.subTitleIco}>Mail</p>
          <p className={styles.text.resultContact}>
            olivier.depiesse@gmail.com
          </p>
        </div>
      </div>
      {/* icon tel */}
      <div className={styles.itemsCenter}>
        <img
          width={"10%"}
          height={"10%"}
          src={telIco}
          alt="icone tel"
          className={styles.telIco}
        />
        {/* div for content tel text */}
        <div>
          <p className={styles.text.subTitleIco}>Téléphone</p>
          <p className={styles.text.resultContact}>06 54 84 54 75</p>
        </div>
      </div>
      <h1 className={styles.text.titleForm}>
        Utilisez le formulaire <br /> ci-dessous pour me <br /> contacter
      </h1>
      <p className={styles.text.paragraph2}>
        Cras fermentum odio eu feugiat. Justo <br /> eget magna fermentum
        iaculis eu non <br /> diam phasellus. Scelerisque felis imperdiet <br />{" "}
        proin fermentum leo. Amet volutpat <br /> consequat mauris nunc congue..
      </p>
      <form action="">
        {/* label & input name */}
        <label htmlFor="name" className={styles.contactLabel}>
          Votre nom :
        </label>
        <input type="text" id="name" className={styles.contactInput} />
        {/* label & input email */}
        <label htmlFor="email" className={styles.contactLabel}>
          Votre Email :
        </label>
        <input type="text" id="email" className={styles.contactInput} />
        {/* label & input message */}
        <label htmlFor="message" className={styles.contactLabel}>
          Message :
        </label>
        <input
          type="text"
          id="message"
          className={styles.contactInputMessage}
        />
        <div className="pb-10">
          <button className={styles.contactBtn}>Envoyer</button>
        </div>
      </form>
    </div>
  );
};
