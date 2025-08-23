import BackMap from "./component/MineHomepage/BackMap";
import BrandRauningBelt from "./component/MineHomepage/BrandRauningBelt";
import CallSection from "./component/MineHomepage/CallSection";
import FaqsHm from "./component/MineHomepage/FaqsHm";
import Fetucher from "./component/MineHomepage/Fetucher";
import HeroHm from "./component/MineHomepage/HeroHm";
import PaymentPlan from "./component/MineHomepage/PaymentPlan";
import SolarPanalSyatem from "./component/MineHomepage/SolarPanalSyatem";
import WhyVic from "./component/MineHomepage/WhyVic";

export default function Page() {
  return (
  <>
        <HeroHm/>
          <CallSection/>
          {/* calculeter add */}
          <SolarPanalSyatem/>
          <WhyVic/>
          <PaymentPlan/>
          <BackMap/>
          <BrandRauningBelt/>
          <Fetucher/>
          <FaqsHm/>
  </>
  );
}
