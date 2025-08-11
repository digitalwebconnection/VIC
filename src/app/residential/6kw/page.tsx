import BackMap from "../../MineHomepage/BackMap";
// import CompnyRuninBelt from "../CompnyRuninBelt";
import CusomerSays from "../CustomerSays";
import FaqRs from "../FaqRs";
import HeroRs from "../HeroRs";
import Solar6kwintro from "./Solar6kwintro";
import System6Kwcardes from "./System6Kwcardes";
import WhyVicSolar6Kw from "./WhyVicSolar6Kw";


export default function Residential6kwPage() {
  return (
  <>
            <HeroRs />
            <Solar6kwintro />
            <WhyVicSolar6Kw />
            <FaqRs />
            <System6Kwcardes/>
            <BackMap />
            {/* <CompnyRuninBelt /> */}
            <CusomerSays />
        </>
  )
}
