import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutTesla from "./AboutTesla";
import HeroTesla from "./HeroTesla";
import WhyTesla from "./WhyTesla";
// import Page from './../../../page';







export default function Page() {
    return (
        <>
            <HeroTesla/>
            <AboutTesla/>
            <WhyTesla/>
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}