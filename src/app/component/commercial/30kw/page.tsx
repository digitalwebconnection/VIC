import BackMapCs from "../BackMapCs";
// import CompnyRuninBeltCs from "../CompanyRUningbeltCs";
import FaqCs from "../FaqCs";
import HeroCs from "../HeroCs";
import ReviewCs from "../ReviewCs";
import Contain30Kw from "./Contain30Kw";
import System30Kw from "./Syatem30Kw";
import WhyVic30Kw from "./WhyVic30Kw";

export default function Page() {
  return (
      <>
            <HeroCs />
            <Contain30Kw />
            <WhyVic30Kw />
            <FaqCs />
            <System30Kw />
            <BackMapCs />
            {/* <CompnyRuninBeltCs /> */}
            <ReviewCs />
        </>
  )
}
