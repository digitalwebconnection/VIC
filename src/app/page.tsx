"use client";

import BackMap from "./component/MineHomepage/BackMap";
import BrandRauningBelt from "./component/MineHomepage/BrandRauningBelt";
import CallSection from "./component/MineHomepage/CallSection";
import FaqsHm from "./component/MineHomepage/FaqsHm";
import Fetucher from "./component/MineHomepage/Fetucher";
import HeroHm from "./component/MineHomepage/HeroHm";
import PaymentPlan from "./component/MineHomepage/PaymentPlan";
import SolarPanalSyatem from "./component/MineHomepage/SolarPanalSyatem";
import WhyVic from "./component/MineHomepage/WhyVic";
import SolarCalculator from "./solar-calculator/page";
import LeadPopup from "./popup/LeadPopup";

export default function Page() {
  return (
    <>
            <LeadPopup delayMs={3000} snoozeDays={1} debug={true} />

      <HeroHm />
      <CallSection />
      <SolarPanalSyatem />
      <WhyVic />
      <SolarCalculator />
      <PaymentPlan />
      <BackMap />
      <BrandRauningBelt />
      <Fetucher />
      <FaqsHm />
    </>
  );
}
