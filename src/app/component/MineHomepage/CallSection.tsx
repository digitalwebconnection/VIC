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
            <p className=" max-w-7xl mx-auto text-sm pt-5">*Estimated battery pricing is based on the West Vic Energy 10.1kWh AC Coupled Battery Package and applies to standard metropolitan areas only. Additional freight costs may apply for regional installations. Prices shown include the anticipated Federal Battery Rebate expected to commence from 1st July 2025. Please note that rebates are not guaranteed and are subject to change in line with government policy, eligibility criteria, and program updates. Final battery pricing will be adjusted according to the applicable rebate at the time of installation.
            </p>
             <p className=" max-w-7xl mx-auto text-sm pt-5">This promotion is available for standard metropolitan installations only. Regional and non-standard installations may attract additional costs. Pricing is calculated after the Small-Scale Technology Certificates (STCs) have been assigned to West Vic Energy Pty Ltd or its authorised agents. Additional charges may apply for factors such as double-storey properties, complex roof types, meter box upgrades, or three-phase power connections.</p>
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
