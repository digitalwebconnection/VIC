"use client";



export default function Solar10kwIntro() {

 const plans = [
    {
      title: "10kW Solar System",
      subtitle: "Medium to Big Family Home",
      savings: "Save Up To $2000 to $3500* Annually",
      features: [
        "24 X 440W High-Efficiency N-Type Tier 1 Listed Solar Panels",
        "8kW Smart Inbuilt Wi-Fi Inverter",
        "Installation by CEC Accredited licenced Electricians",
      ],
      highlight: false,
    },
    {
      title: "6.6kW Solar System",
      subtitle: "Standard Family Home",
      savings: "Save Up to $1000 - $2500* Annually",
      features: [
        "15 X 440W High-Efficiency N-Type Tier 1 Listed Solar Panels",
        "5kW Smart Inbuilt Wi-Fi Inverter",
        "Installation by CEC Accredited licenced Electricians",
      ],
      highlight: true,
    },
    {
      title: "13.2kW Solar System",
      subtitle: "Bigger Family Home",
      savings: "Save Up to $3000 - $4500* Annually",
      features: [
        "30 X 440W High-Efficiency N-Type Tier 1 Listed Solar Panels",
        "10kW Smart Inbuilt Wi-Fi Inverter",
        "Installation by CEC Accredited licenced Electricians",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-12 ">
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Let’s choose the most suitable & best solar panel system for your home.!!
        </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-14 px-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border-2 py-15 rounded-lg px-8 shadow-xl  bg-white cursor-pointer transform transition-transform duration-300 hover:scale-105  ${
              plan.highlight ? "border-blue-500" : "border-blue-300"
            }`}
          >
            {plan.highlight && (
              <div className="absolute left-8 -ms-2 md:-ms-0 -mt-15 w-full md:w-[382px] text-center   transform -translate-x-1/12 bg-blue-700 text-white px-4 py-2 text-xs font-semibold rounded-t-md ">
                AUSTRALIA’S MOST POPULAR.!!
              </div>
            )}

            <h3 className="text-xl font-bold text-center text-blue-600 mb-2">
              {plan.title}
            </h3>
            <p className="text-center text-gray-600 font-semibold">{plan.subtitle}</p>

            <div className="mt-4 bg-gray-100 text-black border border-amber-400  text-center py-2 text-xl font-semibold rounded">
              {plan.savings}
            </div>

            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="leading-relaxed">{feature}</li>
              ))}
            </ul>

            <button className="mt-6 w-full bg-amber-400 text-white font-semibold py-3 rounded hover:bg-blue-600 transition">
              <a href="/component/contact">Request a Quote</a> 
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-4xl mx-auto px-4 text-xs text-center text-gray-500">
        <p>
         Performance figures are provided as estimates based on Clean Energy Council guidelines and may differ from property to property. Actual energy generation and savings depend on several factors including your location, local climate and weather conditions, roof direction and pitch, shading or obstructions, as well as network export limitations. Please consult with a West Vic Energy representative to receive tailored advice and make a well-informed decision.
        </p>
      </div>
    </section>
  )

    // const plans = [
    //     {
    //         title: "10.5kW Solar System",
    //         subtitle: "Medium to Big Family Home",
    //         savings: "Save Up To $2000 to $3500* Annually",
    //         features: [
    //             "24 X 440W High-Efficiency N-Type Tier 1 Listed Solar Panels",
    //             "8kW Smart Inbuilt Wi-Fi Inverter",
    //             "Installation by CEC Accredited licenced Electricians",
    //         ],
    //         highlight: false,
    //     },
    //     {
    //         title: "6.6kw Solar System",
    //         subtitle: "Standard Family Home",
    //         savings: "Save Up to $1000 - $2500* Annually",
    //         features: [
    //             "15 X 440W High-Efficiency N-Type Tier 1 Listed Solar Panels",
    //             "5kW Smart Inbuilt Wi-Fi Inverter",
    //             "Installation by CEC Accredited licenced Electricians",
    //         ],
    //         highlight: true,
    //     },
    //     {
    //         title: "13.2kW Solar System",
    //         subtitle: "Bigger Family Home",
    //         savings: "Save Up to $3000 - $4500* Annually",
    //         features: [
    //             "30 X 440W High-Efficiency N-Type Tier 1 Listed Solar Panels",
    //             "10kW Smart Inbuilt Wi-Fi Inverter",
    //             "Installation by CEC Accredited licenced Electricians",
    //         ],
    //         highlight: false,
    //     },
    // ];

    // return (
    //     <>
    //         <section className="py-12 ">
    //             <div className="text-center mb-12 px-4">
    //                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
    //                     Let’s choose the most suitable & best solar panel system for your home.!!
    //                 </h2>
    //             </div>

    //             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
    //                 {plans.map((plan, index) => (
    //                     <div
    //                         key={index}
    //                         className={`relative border-2 py-12 rounded-lg p-8  shadow-md bg-white ${plan.highlight ? "border-green-500" : "border-green-300"
    //                             }`}
    //                     >
    //                         {plan.highlight && (
    //                             <div className="absolute -mt-12 w-79   ms-48  transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 text-xs font-semibold rounded">
    //                                 AUSTRALIA’S MOST POPULAR.!!
    //                             </div>
    //                         )}

    //                         <h3 className="text-xl font-bold text-center text-blue-600 mb-2">
    //                             {plan.title}
    //                         </h3>
    //                         <p className="text-center text-gray-600 font-semibold">{plan.subtitle}</p>

    //                         <div className="mt-4 bg-green-100 border border-green-400 text-green-800 text-center py-2 text-sm font-semibold rounded">
    //                             {plan.savings}
    //                         </div>

    //                         <ul className="mt-4 space-y-2 text-gray-700 text-sm">
    //                             {plan.features.map((feature, i) => (
    //                                 <li key={i} className="leading-relaxed">{feature}</li>
    //                             ))}
    //                         </ul>

    //                         <button className="mt-6 w-full bg-orange-500 text-white font-semibold py-3 rounded hover:bg-orange-600 transition">
    //                             Request A Free Quote
    //                         </button>
    //                     </div>
    //                 ))}
    //             </div>

    //             <div className="mt-8 max-w-4xl mx-auto px-4 text-xs text-center text-gray-500">
    //                 <p>
    //                     *Performance figures are just an estimation figures based on Clean Energy Council Guidelines and will vary from property to property.
    //                     Actual savings may vary according to your location, weather / climate conditions, the direction, pitch or angle of your roof,
    //                     or any shading or obstruction of your property as well as network export limitations. Speak to our consultant in order to make well-informed decision.
    //                 </p>
    //             </div>
    //         </section>

    //     </>
    // )
}