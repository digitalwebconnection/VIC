import BackMap from "./BackMap";
import BrandRauningBelt from "./BrandRauningBelt";
import CallSection from "./CallSection";
import FaqsHm from "./FaqsHm";
import Fetucher from "./Fetucher";
import HeroHm from "./HeroHm";
import PaymentPlan from "./PaymentPlan";
import SolarPanalSyatem from "./SolarPanalSyatem";
import WhyVic from "./WhyVic";

export default function HomeMain(){
    return(
        <>
        <HeroHm/>
        <CallSection/>
        {/* calculeter add */}
        <SolarPanalSyatem/>
        <WhyVic/>
        <PaymentPlan/>
        <BackMap/>
        <BrandRauningBelt/>
        <Fetucher/>
        <FaqsHm/>
        
        </>
    )
}0