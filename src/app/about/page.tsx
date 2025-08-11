// import Image from "next/image"
// import { Users, Target, Award } from "lucide-react"
import CircalAb from "./CircalAb"
import EnereyAb from "./EnereyAb"
import HeroAb from "./HeroAb"
import ProsessAb from "./ProsessAb"
// import SolustionAb from "./SolustionAb"
import TeemExpoertAb from "./TeemExpoertAb"

export default function AboutPage() {
  return (
   <>
        <HeroAb />
            <EnereyAb/>
            <ProsessAb/>
            {/* <SolustionAb/> */}
            <TeemExpoertAb/>
            <CircalAb/>
   </>
  )
}
