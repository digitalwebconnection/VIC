"use client";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";

export default function     CallSection() {
    const [hover, setHover] = useState(false);

    // onClick handler
    const handleCallClick = () => {
        console.log("Call button clicked!");
        // You can perform additional actions here, e.g., analytics
        // window.location.href = "tel:1300650747"; // optional if you want to trigger call manually
    };

    return (
        <>
            <p className=" max-w-7xl mx-auto text-sm pt-5">*Estimated battery pricing is for Neovolt 10.1kWh AC Coupled Battery Package and for Metropolitan areas only, regional freight cost extra will be applicable and the battery prices includes the proposed federal battery rebate expected from 1st July 2025. Rebates are not guranteed and subject to change depending upon government rebate policy, eligibility and other program changes. Battery pricing will be changed or adjusted according to the government rebates. *This Solar System Promotion is available for standard Metropolitan area installations only. Regional areas may attracts additional cost. Price is after Small Scale Technology Certificates (STCs) have been assigned to SMART HOUSE SOLAR PTY LTD or its agents. Any additional extras including but not limited to double story, roof type, meter box upgrades or three phase power, may attract additional charges. *Additional state government rebates are subject to approval from state government and the it&apos;s policy, eligibility criteria.</p>
            <div className="flex items-center justify-center my-5 py-5 bg-black">

                <a
                    href="tel:  +61 497 358 063"
                    onClick={handleCallClick}
                    className="inline-flex items-center text-2xl sm:text-8xl font-bold gap-1 md:gap-2 relative"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    <span className="text-orange-700">CALL NOW</span>
                    <span className="relative text-gray-400">
                        <FiPhone
                            style={{
                                position: "absolute",
                                left: "-2rem",
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "#00BFFF",
                                opacity: hover ? 1 : 0,
                                transition: "opacity 0.8s",
                            }}
                        />
                      +61 497 358 063
                    </span>
                </a>
            </div>
        </>
    );
}
