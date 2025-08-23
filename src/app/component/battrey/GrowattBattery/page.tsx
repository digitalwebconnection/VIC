import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutGroBt from "./AbourGroBT";
import HeroGro from "./HeroGro";
import WhyGroBt from "./WhyGroBt";


export default function Page() {
    return (
        <>
            <HeroGro />
            <AboutGroBt />
            <WhyGroBt/>
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}