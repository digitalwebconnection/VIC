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
import PopupLeadForm from "./component/PopupLeadForm"; // <-- path as per your structure

export default function Page() {
  return (
    <>
      <HeroHm />
      <CallSection />
      {/* calculeter add */}
      <SolarPanalSyatem />
      <WhyVic />
      <PaymentPlan />
      <BackMap />
      <BrandRauningBelt />
      <Fetucher />
      <FaqsHm />

      {/* 3s delayed popup */}
      <PopupLeadForm delayMs={3000} />
    </>
  );
}
