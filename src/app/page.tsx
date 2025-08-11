import BackMap from "./MineHomepage/BackMap";
// import BrandRunningBelt from "./MineHomepage/BrandRauningBelt";
import CallSection from "./MineHomepage/CallSection";
import FaqsHm from "./MineHomepage/FaqsHm";
import HeroHm from "./MineHomepage/HeroHm";
import PaymentPlan from "./MineHomepage/PaymentPlan";
import SolarCalculator from "./MineHomepage/solar-calculator";
import SolarPanalSyatem from "./MineHomepage/SolarPanalSyatem";
import WhyVic from "./MineHomepage/WhyVic";


// app/test/page.tsx
export default function TestPage() {
  return (
    <>
   <HeroHm/>
        <CallSection/>
        <SolarCalculator/>
        {/* calculeter add */}
        <SolarPanalSyatem/>
        <WhyVic/>
        <PaymentPlan/>
        <BackMap/>
{/* <BrandRunningBelt/> */}
        <FaqsHm/>
    </>
  )
}