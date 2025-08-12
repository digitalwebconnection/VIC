"use client";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";

export default function CallSection() {
    const [hover, setHover] = useState(false);

    const handleCallClick = () => {
        console.log("Call button clicked!");
        // window.location.href = "tel:1300650747"; // optional if you want to trigger call manually
    };

    return (
        <>
            <p className="max-w-7xl mx-auto text-sm pt-5">
                *Pricing displayed is for a standard 10.1kWh Solar Battery Package with installation in metropolitan areas of Victoria. 
                Additional costs may apply for regional or complex installations, including but not limited to double-storey homes, 
                non-standard roof types, meter box upgrades, or three-phase power. Pricing is calculated after applying 
                eligible federal and state government solar rebates and Small-scale Technology Certificates (STCs), 
                which are subject to government policy, eligibility criteria, and change without notice. West VIC Energy 
                reserves the right to adjust prices if rebate amounts or eligibility requirements change. 
                Additional freight charges may apply for regional deliveries.
            </p>

            <div className="flex items-center justify-center my-5 py-5 bg-black">
                <a
                    href="tel:1300650747"
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
                        1300 650 747
                    </span>
                </a>
            </div>
        </>
    );
}
