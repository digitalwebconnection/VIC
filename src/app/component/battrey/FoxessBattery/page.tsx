import BatteryProgram from "../BattreyProgram";
import FAQ from "../Faqs";
import Reviews from "../Review";
import SolarBattery from "../SolarBattery";
import AboutFoxBt from "./AboutFoxBT";

import HeroFox from "./HeroFox";
import WhyFoxBt from "./WhyFoxBt";




export default function Page() {
    return (
        <>
            <HeroFox />
           <AboutFoxBt/>
           <WhyFoxBt/>
            <BatteryProgram />
            <SolarBattery />
            <Reviews />
            <FAQ />
        </>
    )
}