import { styles } from "./styles";
import border from "../../assets/img/ico/borderOrange.svg";
import astronaut from "../../assets/img/gallery/astronaut.svg";
import paint from "../../assets/img/gallery/paint.svg";
import bottle from "../../assets/img/gallery/bottle.svg";
import work from "../../assets/img/gallery/work.svg";
import write from "../../assets/img/gallery/write.svg";
import orange from "../../assets/img/gallery/orange.svg";
import gallery from "../../assets/img/gallery/gallery.png";

const Portfolio = () => {
  return (
    <section className={styles.bg}>
      <div className={styles.divPortfolio}>
        <h2 className={styles.title}>Portfolio</h2>
        <img src={border} alt="border" className={styles.img} />
        <p className={styles.textP}>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem, It doesn’t
          matter how great your product or service is if your copy does not
          captivate your audience.
        </p>
      </div>
      <div className={styles.divGallery}>
        <img src={astronaut} className={styles.imgGallery} alt="astronaut" />
        <img src={work} className={styles.imgGallery} alt="work" />
        <img src={paint} className={styles.imgGallery} alt="paint" />
        <img src={bottle} className={styles.imgGallery} alt="bottle" />
        <img src={write} className={styles.imgGallery} alt="write" />
        <img src={orange} className={styles.imgGallery} alt="write" />
      </div>
      <div className="hidden lg:block lg:scale-110 lg:ml-40">
        <img src={gallery} alt="gal" />
      </div>
    </section>
  );
};

export default Portfolio;
