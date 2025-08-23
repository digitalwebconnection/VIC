import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutAlpha from "./AboutAlpha";
import HeroAlphaESS from "./HeroAlpha";
import WhyAlpha from "./WhyAlpha";






export default function Page() {
    return (
        <>
            <HeroAlphaESS />
            <AboutAlpha/>
            <WhyAlpha/>
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}