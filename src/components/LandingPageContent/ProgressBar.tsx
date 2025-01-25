"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Dummy data for monthly visitors
const chartData = [
  { month: "January", desktop: 1200, mobile: 800 },
  { month: "February", desktop: 1500, mobile: 1000 },
  { month: "March", desktop: 1350, mobile: 950 },
  { month: "April", desktop: 1700, mobile: 1100 },
  { month: "May", desktop: 1800, mobile: 1300 },
  { month: "June", desktop: 2000, mobile: 1500 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))", // Adjust this color if necessary
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))", // Adjust this color if necessary
  },
} satisfies ChartConfig

export default function ProgressBar() {
  return (
    <Card>
      <CardHeader className="dark:text-gray-200 text-gray-900">
        <CardTitle>Monthly Visitor</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="dark:text-gray-200 text-gray-900">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} // Abbreviates month name
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)" // Ensure color is defined in your styles
              strokeWidth={2}
              dot={{
                fill: "var(--color-desktop)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="dark:fill-white fill-black" // White in dark mode, black in light mode
                fontSize={12}
              />
            </Line>
            <Line
              dataKey="mobile"
              type="natural"
              stroke="var(--color-mobile)" // Ensure color is defined in your styles
              strokeWidth={2}
              dot={{
                fill: "var(--color-mobile)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="dark:fill-white fill-black" // White in dark mode, black in light mode
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm dark:text-gray-400 text-gray-700">
        <div className="flex gap-2 font-medium leading-none ">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
