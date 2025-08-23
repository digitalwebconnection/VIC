import BackMap from "../../MineHomepage/BackMap";
// import CompnyRuninBelt from "../CompnyRuninBelt";
import CusomerSays from "../CustomerSays";
import FaqRs from "../FaqRs";
import HeroRs from "../HeroRs";
import Solaer10kwIntro from "./Solar10kwIntro";
import SystemsolarCades10Kw from "./SystemsolarCades10Kw";
import WhyVic10Kw from "./WhyVic10Kw";


export default function Residential7kwPage() {
  return (
      <><HeroRs />
      <Solaer10kwIntro />
      <WhyVic10Kw />
      <FaqRs />
      <SystemsolarCades10Kw />
      <BackMap />
      {/* <CompnyRuninBelt /> */}
      <CusomerSays />
      </>

  )
}
