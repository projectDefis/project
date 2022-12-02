import { styles } from "./styles";
import astronaut from "../../../assets/img/gallery/astronaut.png";
import paint from "../../../assets/img/gallery/paint.png";
import bottle from "../../../assets/img/gallery/bottle.png";
import work from "../../../assets/img/gallery/work.png";
import write from "../../../assets/img/gallery/write.png";
import orange from "../../../assets/img/gallery/orange.png";

export const Section3Portfolio = () => {
  return (
    <section className={`${styles.bg}`}>
      <div className={styles.divPortfolio}>
        <div>
          <h2 className={styles.title}>Portfolio</h2>
          <p className={styles.textP} style={{marginLeft: "22.3rem"}}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem, It
            doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-rows-3">
        <div className="flex flex-row">
          <div
            className="lg:bg-[url('../../assets/img/gallery/astronaut.png')] bg-cover"
            style={{ width: "480px", height: "265px", borderRadius: "20px" }}
          ></div>
          <div
            className="ml-8 lg:bg-[url('../../assets/img/gallery/work.png')] bg-cover"
            style={{ width: "225px", height: "265px", borderRadius: "20px" }}
          ></div>
        </div>
        <div className="flex flex-row mt-4">
          <div
            className="lg:bg-[url('../../assets/img/gallery/paint.png')] bg-cover bg-bottom"
            style={{ width: "225px", height: "265px", borderRadius: "20px" }}
          ></div>
          <div
            className="ml-8 lg:bg-[url('../../assets/img/gallery/bottle.png')] bg-cover bg-center"
            style={{ width: "480px", height: "265px", borderRadius: "20px" }}
          ></div>
        </div>
        <div className="flex flex-row mt-4">
          <div
            className="lg:bg-[url('../../assets/img/gallery/write.png')] bg-cover"
            style={{ width: "350px", height: "265px", borderRadius: "20px" }}
          ></div>
          <div
            className="ml-8 lg:bg-[url('../../assets/img/gallery/orange.png')] bg-cover"
            style={{ width: "350px", height: "265px", borderRadius: "20px" }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-10 lg:hidden">
        <div style={{ width: "315px", height: "170px" }}>
          <img src={astronaut} alt="astronaut" />
        </div>
      </div>
      <div className="grid grid-rows-5 justify-center lg:hidden">
        <div style={{ width: "315px", height: "265px" }}>
          <img src={work} alt="astronaut" style={{ width: "315px" }} />
        </div>
        <div className="my-4" style={{ width: "315px", height: "265px" }}>
          <img src={paint} alt="astronaut" style={{ width: "315px" }} />
        </div>
        <div className="mt-8" style={{ width: "315px", height: "265px" }}>
          <img src={bottle} alt="astronaut" style={{ width: "315px" }} />
        </div>
        <div className="mt-8">
          <img src={write} alt="astronaut" style={{ width: "315px" }} />
        </div>
        <div className="mt-8" style={{ width: "315px", height: "265px" }}>
          <img src={orange} alt="astronaut" style={{ width: "315px" }} />
        </div>
      </div>
    </section>
  );
};
