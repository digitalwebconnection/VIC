import FaqRs from "./FaqRs";
import HeroRs from "./HeroRs";
import SystemSolarCades from "./SysytemSolarCades";
import WhyVicSolar from "./WhyVicSolar";
import CusomerSays from "./CustomerSays";
import CompnyRuninBelt from "./CompnyRuninBelt";
import BackMap from "../MineHomepage/BackMap";

export default function Residancalsolar() {
    return (

        <>

            <HeroRs />
            {/* <Solar5kg /> */}
            <WhyVicSolar />
            <FaqRs/>
            <SystemSolarCades/>
            <BackMap />
            <CompnyRuninBelt/>
            <CusomerSays/>

        </>
    )
}
