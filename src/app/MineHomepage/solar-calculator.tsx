"use client"

import { useState, useEffect } from "react"
import { calculateSolarBenefits, SolarCalculationInputs, SolarCalculationResults } from "../../../lib/solar-calculator-utils"

export default function SolarCalculator() {
  const [inputs, setInputs] = useState<SolarCalculationInputs>({
    dailyConsumptionKWh: 15, // Average Australian household daily consumption
    electricityCostPerKWh: 0.30, // Average electricity cost in AUD
    systemSizeKW: 6.6, // Common residential system size in Australia
    systemCostAUD: 8000, // Example cost for a 6.6kW system
    feedInTariffAUDPerKWh: 0.08, // Example FiT in AUD
    peakSunHours: 4.5, // Average peak sun hours for many Australian regions
    systemEfficiency: 0.8, // 80% system efficiency
  })

  const [results, setResults] = useState<SolarCalculationResults | null>(null) // Changed 'any' to 'SolarCalculationResults | null'

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
    <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center mb-8">Australian Solar Calculator</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card: Your Energy Profile */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Energy Profile</h3>
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
                aria-labelledby="dailyConsumptionKWh" // Added for accessibility
              />
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
                aria-labelledby="electricityCostPerKWh" // Added for accessibility
              />
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
                aria-labelledby="feedInTariffAUDPerKWh" // Added for accessibility
              />
            </div>
          </div>
        </div>

        {/* Card: Solar System Details */}
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Solar System Details</h3>
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
                aria-labelledby="systemSizeKW" // Added for accessibility
              />
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
                aria-labelledby="systemCostAUD" // Added for accessibility
              />
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
                aria-labelledby="peakSunHours" // Added for accessibility
              />
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
                aria-labelledby="systemEfficiency" // Added for accessibility
              />
            </div>
          </div>
        </div>
      </div>

      {results && (
        <div className="mt-8 rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Solar Benefits</h3>
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
        </div>
      )}
    </div>
  )
}
