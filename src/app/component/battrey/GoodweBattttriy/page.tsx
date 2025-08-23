import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutGoodBt from "./AboutGoodBT";
import HeroGoodWE from "./HeroGood";
import WhyGoodBt from "./WhyGoodBt";





export default function Page() {
    return (
        <>
            <HeroGoodWE/>
            <AboutGoodBt/>
            <WhyGoodBt/>
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}