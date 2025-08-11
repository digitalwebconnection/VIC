export interface SolarCalculationInputs {
  dailyConsumptionKWh: number; // Average daily electricity consumption in kWh
  electricityCostPerKWh: number; // Average electricity cost per kWh in AUD
  systemSizeKW: number; // Desired solar system size in kW
  systemCostAUD: number; // Total cost of the solar system in AUD
  feedInTariffAUDPerKWh: number; // Feed-in tariff in AUD per kWh for exported energy
  peakSunHours: number; // Average daily peak sun hours (e.g., 4.5 for many parts of Australia)
  systemEfficiency: number; // System efficiency factor (e.g., 0.8 for 80% efficiency)
}

export interface SolarCalculationResults {
  annualProductionKWh: number;
  annualSavingsAUD: number;
  paybackPeriodYears: number;
  dailyProductionKWh: number;
}

export function calculateSolarBenefits(
  inputs: SolarCalculationInputs
): SolarCalculationResults {
  const {
    dailyConsumptionKWh,
    electricityCostPerKWh,
    systemSizeKW,
    systemCostAUD,
    feedInTariffAUDPerKWh,
    peakSunHours,
    systemEfficiency,
  } = inputs;

  // 1. Calculate daily and annual solar production
  const dailyProductionKWh = systemSizeKW * peakSunHours * systemEfficiency;
  const annualProductionKWh = dailyProductionKWh * 365;

  // 2. Calculate annual electricity bill without solar
  const annualConsumptionKWh = dailyConsumptionKWh * 365;

  // 3. Calculate annual savings
  let annualSavingsAUD = 0;

  // Energy consumed directly (self-consumption)
  const selfConsumedKWh = Math.min(annualProductionKWh, annualConsumptionKWh);
  annualSavingsAUD += selfConsumedKWh * electricityCostPerKWh;

  // Excess energy exported to the grid (feed-in tariff)
  const exportedKWh = Math.max(0, annualProductionKWh - annualConsumptionKWh);
  annualSavingsAUD += exportedKWh * feedInTariffAUDPerKWh;

  // 4. Calculate payback period
  const paybackPeriodYears = annualSavingsAUD > 0 ? systemCostAUD / annualSavingsAUD : Infinity;

  return {
    annualProductionKWh,
    annualSavingsAUD,
    paybackPeriodYears,
    dailyProductionKWh,
  };
}
