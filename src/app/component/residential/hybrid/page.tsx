import BackMap from "../../MineHomepage/BackMap";
// import CompnyRuninBelt from "../CompnyRuninBelt";
import CusomerSays from "../CustomerSays";
import FaqRs from "../FaqRs";
import HeroRs from "../HeroRs";
import Hyberidsolarcades from "./Hyberidsolarcades";
import SolarResidensalintro from "./SolarResidensalIntro";
import WhyHybride from "./WhyHybride";


export default function ResidentialHybridPage() {
  return (
  <>
            <HeroRs />
            <SolarResidensalintro />
            <WhyHybride />
            <FaqRs />
            <Hyberidsolarcades />
            <BackMap/>
            {/* <CompnyRuninBelt/> */}
            <CusomerSays />
        </>
  )
}
