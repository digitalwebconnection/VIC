"use client"

import { useState, useEffect } from "react"
import { calculateSolarBenefits, SolarCalculationInputs, SolarCalculationResults } from "../../../lib/solar-calculator-utils"

export default function SolarCalculator() {
  const [inputs, setInputs] = useState<SolarCalculationInputs>({
    dailyConsumptionKWh: 15,             // Typical VIC home daily usage
    electricityCostPerKWh: 0.30,         // Avg retail tariff in AUD (editable)
    systemSizeKW: 6.6,                   // Popular residential size
    systemCostAUD: 8000,                 // Example turnkey price
    feedInTariffAUDPerKWh: 0.08,         // Example FiT in VIC
    peakSunHours: 4.5,                   // Avg VIC peak sun hours
    systemEfficiency: 0.8,               // 80% system efficiency
  })

  const [results, setResults] = useState<SolarCalculationResults | null>(null)

  useEffect(() => {
    const calculatedResults = calculateSolarBenefits(inputs)
    setResults(calculatedResults)
  }, [inputs])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target
    setInputs((prev) => ({
      ...prev,
      [name]: type === "number" ? parseFloat(value) : value,
    }))
  }

  const handleSliderChange = (name: keyof SolarCalculationInputs, value: number) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="container max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-2">
        West VIC Energy — Solar Savings Calculator
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-8">
        Estimate your solar production, bill savings, and payback based on typical Victorian conditions.
        Adjust the sliders to match your home and tariff.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card: Your Energy Profile */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Energy Profile (VIC)</h3>
            <p className="text-sm text-muted-foreground">
              Enter your average usage and tariff to personalise the estimate.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label htmlFor="dailyConsumptionKWh" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Average Daily Electricity Consumption (kWh)
              </label>
              <input
                id="dailyConsumptionKWh"
                name="dailyConsumptionKWh"
                type="number"
                value={inputs.dailyConsumptionKWh}
                onChange={handleInputChange}
                min="0"
                step="0.1"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="0"
                max="50"
                step="0.1"
                value={inputs.dailyConsumptionKWh}
                onChange={(e) => handleSliderChange("dailyConsumptionKWh", parseFloat(e.target.value))}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="dailyConsumptionKWh"
              />
              <p className="mt-1 text-xs text-muted-foreground">Tip: Check your bill for “Average daily usage”.</p>
            </div>

            <div>
              <label htmlFor="electricityCostPerKWh" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Electricity Cost per kWh (AUD)
              </label>
              <input
                id="electricityCostPerKWh"
                name="electricityCostPerKWh"
                type="number"
                value={inputs.electricityCostPerKWh}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={inputs.electricityCostPerKWh}
                onChange={(e) => handleSliderChange("electricityCostPerKWh", parseFloat(e.target.value))}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="electricityCostPerKWh"
              />
              <p className="mt-1 text-xs text-muted-foreground">Use your current retailer’s usage rate (excl. supply charge).</p>
            </div>

            <div>
              <label htmlFor="feedInTariffAUDPerKWh" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Feed-in Tariff per kWh (AUD)
              </label>
              <input
                id="feedInTariffAUDPerKWh"
                name="feedInTariffAUDPerKWh"
                type="number"
                value={inputs.feedInTariffAUDPerKWh}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="0"
                max="0.2"
                step="0.01"
                value={inputs.feedInTariffAUDPerKWh}
                onChange={(e) => handleSliderChange("feedInTariffAUDPerKWh", parseFloat(e.target.value))}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="feedInTariffAUDPerKWh"
              />
              <p className="mt-1 text-xs text-muted-foreground">Your export credit rate from the retailer (c/kWh).</p>
            </div>
          </div>
        </div>

        {/* Card: Solar System Details */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Solar System Details</h3>
            <p className="text-sm text-muted-foreground">
              Tweak system size, cost and local sun hours to see how payback changes.
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <label htmlFor="systemSizeKW" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Solar System Size (kW)
              </label>
              <input
                id="systemSizeKW"
                name="systemSizeKW"
                type="number"
                value={inputs.systemSizeKW}
                onChange={handleInputChange}
                min="1"
                step="0.1"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="1"
                max="20"
                step="0.1"
                value={inputs.systemSizeKW}
                onChange={(e) => handleSliderChange("systemSizeKW", parseFloat(e.target.value))}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="systemSizeKW"
              />
              <p className="mt-1 text-xs text-muted-foreground">Example: 6.6kW ≈ 15–16 panels (depending on wattage).</p>
            </div>

            <div>
              <label htmlFor="systemCostAUD" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                System Cost (AUD)
              </label>
              <input
                id="systemCostAUD"
                name="systemCostAUD"
                type="number"
                value={inputs.systemCostAUD}
                onChange={handleInputChange}
                min="0"
                step="100"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="0"
                max="30000"
                step="100"
                value={inputs.systemCostAUD}
                onChange={(e) => handleSliderChange("systemCostAUD", parseFloat(e.target.value))}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="systemCostAUD"
              />
              <p className="mt-1 text-xs text-muted-foreground">Indicative post-rebate price for a quality install.</p>
            </div>

            <div>
              <label htmlFor="peakSunHours" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Average Daily Peak Sun Hours
              </label>
              <input
                id="peakSunHours"
                name="peakSunHours"
                type="number"
                value={inputs.peakSunHours}
                onChange={handleInputChange}
                min="1"
                max="8"
                step="0.1"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="1"
                max="8"
                step="0.1"
                value={inputs.peakSunHours}
                onChange={(e) => handleSliderChange("peakSunHours", parseFloat(e.target.value))}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="peakSunHours"
              />
              <p className="mt-1 text-xs text-muted-foreground">VIC average varies by location and season.</p>
            </div>

            <div>
              <label htmlFor="systemEfficiency" className="mb-2 block text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                System Efficiency (%)
              </label>
              <input
                id="systemEfficiency"
                name="systemEfficiency"
                type="number"
                value={inputs.systemEfficiency * 100}
                onChange={(e) => setInputs(prev => ({ ...prev, systemEfficiency: parseFloat(e.target.value) / 100 }))}
                min="50"
                max="100"
                step="1"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <input
                type="range"
                min="50"
                max="100"
                step="1"
                value={inputs.systemEfficiency * 100}
                onChange={(e) => handleSliderChange("systemEfficiency", parseFloat(e.target.value) / 100)}
                className="mt-2 w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-200 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(var(--color-primary))] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[hsl(var(--color-primary))]]"
                aria-labelledby="systemEfficiency"
              />
              <p className="mt-1 text-xs text-muted-foreground">Accounts for losses (inverter, temperature, wiring, shading).</p>
            </div>
          </div>
        </div>
      </div>

      {/* {results && (
        <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Solar Benefits (Estimate)</h3>
            <p className="text-sm text-muted-foreground">
              Calculations are indicative only. For a site-specific quote, speak with West VIC Energy.
            </p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Daily Production</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                {results.dailyProductionKWh.toFixed(2)} kWh
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Annual Production</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                {results.annualProductionKWh.toFixed(2)} kWh
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Annual Savings</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                ${results.annualSavingsAUD.toFixed(2)} AUD
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg col-span-full">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Payback Period</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                {results.paybackPeriodYears === Infinity
                  ? "N/A (No Savings)"
                  : `${results.paybackPeriodYears.toFixed(1)} Years`}
              </p>
            </div>
          </div>

          <div className="px-6 pb-6 text-xs text-muted-foreground">
            *Assumptions: Typical Victorian irradiance, no major shading, north-facing roof, and stable tariffs/FiT. Actual outcomes vary by roof, usage pattern, and retailer rates.
          </div>
        </div>
      )} */}
      {results && (
        <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Solar Benefits (Estimate)</h3>
            <p className="text-sm text-muted-foreground">
              Calculations are indicative only. For a site-specific quote, speak with West VIC Energy.
            </p>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Daily Production</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                {results.dailyProductionKWh.toFixed(2)} kWh
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Annual Production</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                {results.annualProductionKWh.toFixed(2)} kWh
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Annual Savings</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                ${results.annualSavingsAUD.toFixed(2)} AUD
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg col-span-full">
              <h3 className="text-lg font-semibold text-muted-foreground">Estimated Payback Period</h3>
              <p className="text-3xl font-bold text-[hsl(var(--color-primary))]">
                {results.paybackPeriodYears === Infinity
                  ? "N/A (No Savings)"
                  : `${results.paybackPeriodYears.toFixed(1)} Years`}
              </p>
            </div>
          </div>

          <div className="px-6 pb-6 text-xs text-muted-foreground">
            *Assumptions: Typical Victorian irradiance, no major shading, north-facing roof, and stable tariffs/FiT.
            Actual outcomes vary by roof, usage pattern, and retailer rates.
          </div>

          {/* CTA Section */}
          {/* <div className="bg-orange-500 text-white px-6 py-6 flex flex-col md:flex-row items-center justify-between rounded-b-lg">
            <p className="text-lg font-semibold mb-4 md:mb-0">
              Ready to turn your savings into reality? Get your free personalised solar quote today!
            </p>
            <div className="flex gap-3">
              <a
                href="tel:1300650747"
                className="bg-white text-orange-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Call 1300 650 747
              </a>
              <a
                href="/quote"
                className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Request a Quote
              </a>
            </div>
          </div> */}
          {/* CTA Section */}
          <div className="bg-blue-900 text-white px-6 py-6 flex flex-col md:flex-row items-center justify-between rounded-b-lg">
            <p className="text-lg font-semibold mb-4 md:mb-0">
              Ready to turn your savings into reality? Get your free personalised solar quote today!
            </p>
            <div className="flex gap-3">
              <a
                href="tel:1300650747"
                className="bg-white text-orange-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition animate-call-glow"
              >
                📞 Call +61 497 358 063
              </a>
              <a
                href="/quote"
                className="bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Request a Quote
              </a>
            </div>
          </div>

          <style jsx global>{`
  @keyframes call-glow {
    0% {
      transform: scale(1);
      background-color: #ffffff;
      color: #ff6600;
      box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.6);
    }
    50% {
      transform: scale(1.08);
      background-color: #ffd700; /* Yellow */
      color: #000;
      box-shadow: 0 0 20px 5px rgba(255, 215, 0, 0.7);
    }
    100% {
      transform: scale(1);
      background-color: #ffffff;
      color: #ff6600;
      box-shadow: 0 0 0 0 rgba(255, 165, 0, 0.6);
    }
  }
  .animate-call-glow {
    animation: call-glow 2s infinite ease-in-out;
  }
`}</style>


        </div>
      )}

    </div>
  )
}
