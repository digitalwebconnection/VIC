import BackMapCs from "../BackMapCs";
import CompnyRuninBeltCs from "../CompanyRUningbeltCs";
// import CompnyRuninBeltCs from "../CompanyRUningbeltCs";
import FaqCs from "../FaqCs";
import HeroCs from "../HeroCs";
import ReviewCs from "../ReviewCs";
import Contain20Kw from "./Contain20Kw";
import System20Kw from "./System20Kw";
import WhyVic20Kw from "./WhyVic20Kw";


export default function Page() {
  return (
          <>
          <HeroCs />
          <Contain20Kw />
          <WhyVic20Kw />
          <FaqCs />
          <System20Kw />
          <BackMapCs />
          <CompnyRuninBeltCs />
          <ReviewCs />
          </>
  )
}
