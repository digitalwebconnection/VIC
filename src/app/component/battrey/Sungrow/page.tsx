import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutSungrow from "./AboutSungrow";
import HeroSungrow from "./HeroSungrow";
import WhySungrow from "./WhySungrow";







export default function Page() {
    return (
        <>
            <HeroSungrow />
            <AboutSungrow />
            <WhySungrow />
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}