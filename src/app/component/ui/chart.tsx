// inside a client component
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
} from "recharts"
import { Legend, Tooltip } from "recharts"
import ChartTooltipContent from "./chart"
import ChartLegendContent from "./chart"

// Implement ChartContainer component
export function ChartContainer({ children, className, config }: ChartContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

// Add ChartContainer props type if not already present
export type ChartContainerProps = {
  children: React.ReactNode
  className?: string
  config: {
    users: { label: string; color: string }
    signups: { label: string; color: string }
  }
}

const data = [
  { month: "Jan", users: 1200, signups: 200 },
  { month: "Feb", users: 1800, signups: 260 },
  { month: "Mar", users: 2200, signups: 320 },
]

const config = {
  users: { label: "Users", color: "hsl(var(--primary))" },
  signups: { label: "Signups", color: "hsl(var(--muted-foreground))" },
} as const

export default function Example() {
  return (
    <ChartContainer className="w-full" config={config}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend content={<ChartLegendContent />} />
        <Line type="monotone" dataKey="signups" stroke="var(--color-signups)" dot={false} />
      </LineChart>
    </ChartContainer>
  )
}
