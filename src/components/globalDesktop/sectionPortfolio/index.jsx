import { styles } from "./styles";
import astronaut from "../../../assets/img/gallery/astronaut.webp";
import paint from "../../../assets/img/gallery/paint.webp";
import bottle from "../../../assets/img/gallery/bottle.webp";
import work from "../../../assets/img/gallery/work.webp";
import write from "../../../assets/img/gallery/write.webp";
import orange from "../../../assets/img/gallery/orange.webp";
import BorderOrange from "../../../assets/img/ico/borderOrange.svg";

export const Section3Portfolio = () => {
  return (
    <section className={`${styles.bg}`}>
      <div className={styles.divPortfolio}>
        <div className="">
          <h2 className={styles.title}>Portfolio</h2>
          <div>
            <img
              className="lg:hidden pb-4"
              src={BorderOrange}
              alt="Border"
              width={"20%"}
              height={"20%"}
            />
          </div>
          <p className={styles.textP}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem, It
            doesn’t matter how great your product or service is if your copy
            does not captivate your audience.
          </p>
        </div>
      </div>
      <div className="hidden lg:grid lg:grid-rows-3 lg:ml-[-10rem]">
        <div className="flex flex-row">
          <div
            className="lg:bg-[url('../../assets/img/gallery/astronaut.webp')] bg-cover"
            style={{ width: "480px", height: "265px", borderRadius: "20px" }}
          ></div>
          <div
            className="ml-8 lg:bg-[url('../../assets/img/gallery/work.webp')] bg-cover"
            style={{ width: "225px", height: "265px", borderRadius: "20px" }}
          ></div>
        </div>
        <div className="flex flex-row mt-4">
          <div
            className="lg:bg-[url('../../assets/img/gallery/paint.webp')] bg-cover bg-bottom"
            style={{ width: "225px", height: "265px", borderRadius: "20px" }}
          ></div>
          <div
            className="ml-8 lg:bg-[url('../../assets/img/gallery/bottle.webp')] bg-cover bg-center"
            style={{ width: "480px", height: "265px", borderRadius: "20px" }}
          ></div>
        </div>
        <div className="flex flex-row mt-4">
          <div
            className="lg:bg-[url('../../assets/img/gallery/write.webp')] bg-cover"
            style={{ width: "350px", height: "265px", borderRadius: "20px" }}
          ></div>
          <div
            className="ml-8 lg:bg-[url('../../assets/img/gallery/orange.webp')] bg-cover"
            style={{ width: "350px", height: "265px", borderRadius: "20px" }}
          ></div>
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-10 lg:hidden">
        <div style={{ width: "315px", height: "170px" }}>
          <img
            src={astronaut}
            alt="astronaut"
            style={{ width: "315px", height: "170px" }}
          />
        </div>
      </div>
      <div className="grid grid-rows-5 justify-center lg:hidden">
        <div style={{ width: "315px", height: "265px" }}>
          <img
            src={work}
            alt="work"
            style={{ width: "315px", height: "265px" }}
          />
        </div>
        <div className="my-4" style={{ width: "315px", height: "265px" }}>
          <img
            src={paint}
            alt="paint"
            style={{ width: "315px", height: "265px" }}
          />
        </div>
        <div className="mt-8" style={{ width: "315px", height: "265px" }}>
          <img
            src={bottle}
            alt="bottle"
            style={{ width: "315px", height: "265px" }}
          />
        </div>
        <div className="mt-8">
          <img
            src={write}
            alt="write"
            style={{ width: "315px", height: "265px" }}
          />
        </div>
        <div className="mt-8" style={{ width: "315px", height: "265px" }}>
          <img
            src={orange}
            alt="orange"
            style={{ width: "315px", height: "265px" }}
          />
        </div>
      </div>
    </section>
  );
};
