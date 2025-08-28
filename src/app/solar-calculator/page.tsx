"use client";
import { useState } from "react";

export default function SolarCalculator() {
  const [usage, setUsage] = useState(20); // daily kWh
  const [tariff, setTariff] = useState(0.30); // $/kWh
  const [size, setSize] = useState(6.6); // kW
  const [battery] = useState(false);

  // Constants (approx AU values)
  const solarYield = 4.5; // kWh per kW per day
  const systemCostPerKW = 1300; // AUD
  const stcRebatePerKW = 550; // AUD
  const batteryCost = 8000; // AUD flat example

  // Calculations
  const dailyGen = size * solarYield;
  const annualGen = dailyGen * 365;
  const selfConsumption = Math.min(annualGen, usage * 365);

  const grossSavings = selfConsumption * tariff;
  const sysCostBefore = size * systemCostPerKW;
  const rebate = size * stcRebatePerKW;
  const sysCostAfter = sysCostBefore - rebate + (battery ? batteryCost : 0);
  const payback = grossSavings > 0 ? sysCostAfter / grossSavings : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
            Find Your Solar Savings
        </h1>
        <p className="text-sm text-gray-600">
          Estimate your solar system generation, costs, savings, and payback period.
        </p>

        {/* Form */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            Daily Electricity Usage (kWh/day)
            <input
              type="number"
              value={usage}
              onChange={(e) => setUsage(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            Electricity Tariff ($/kWh)
            <input
              type="number"
              step="0.01"
              value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            System Size (kW)
            <input
              type="number"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </label>

         
        </div>

        {/* Results */}
        <div className="border-t pt-4 space-y-3">
          <h2 className="text-lg font-semibold text-gray-700">Your Results</h2>
          <p>
            🌞 Annual Solar Generation:{" "}
            <span className="font-semibold">{annualGen.toFixed(0)} kWh</span>
          </p>
          <p>
            💰 Annual Savings:{" "}
            <span className="font-semibold">
              ${grossSavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </p>
          <p>
            ⚡ System Cost (after rebate):{" "}
            <span className="font-semibold">
              ${sysCostAfter.toLocaleString(undefined, { maximumFractionDigits: 0 })}
            </span>
          </p>
          <p>
            ⏳ Payback Period:{" "}
            <span className="font-semibold">
              {payback.toFixed(1)} years
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
