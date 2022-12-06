import { GlobalContentDesktop } from "../../components/globalDesktop";
import { GlobalContentMobile } from "../../components/globalMobile";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <GlobalContentMobile />
        <GlobalContentDesktop />
      </div>
    </>
  );
};

export default Home;
