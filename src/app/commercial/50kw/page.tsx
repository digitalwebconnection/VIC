import BackMapCs from "../BackMapCs";
// import CompnyRuninBeltCs from "../CompanyRUningbeltCs";
import FaqCs from "../FaqCs";
import HeroCs from "../HeroCs";
import ReviewCs from "../ReviewCs";
import Contain50Kw from "./Contain50Kw";
import System50Kw from "./System50Kw";
import WhyVic50Kw from "./WhyVic50Kw";


export default function Commercial50kwPage() {
  return (
      <>
            <HeroCs />
            <Contain50Kw />
            <WhyVic50Kw />
            <FaqCs />
            <System50Kw />
            <BackMapCs />
            {/* <CompnyRuninBeltCs /> */}
            <ReviewCs />
        </>
  )
}
