import BackMap from "../../MineHomepage/BackMap";
import CusomerSays from "../CustomerSays";
import FaqRs from "../FaqRs";
import HeroRs from "../HeroRs";
import Solar5kwintro from "./Solar5kwintro";
import System5Kwcardes from "./System5Kwcardes";
import WhyVicSolar5Kw from "./WhyVicSolar5Kw";



export default function Residential5kwPage() {
    return (
        <>


            <HeroRs />
            <Solar5kwintro />
             <WhyVicSolar5Kw />
             <FaqRs/>
            <System5Kwcardes />
            <BackMap/>
              <CusomerSays />
        </>
    )
}
