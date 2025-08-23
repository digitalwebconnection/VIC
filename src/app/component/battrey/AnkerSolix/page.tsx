import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutAnker from "./AboutAnker";
import HeroAnker from "./HeroAnker";
import WhyAnker from "./WhyAnker";







export default function Page() {
    return (
        <>
            <HeroAnker/>
            <AboutAnker/>
            <WhyAnker/>
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}