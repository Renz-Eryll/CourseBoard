"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", desktop: 4200, mobile: 1800 },
  { month: "February", desktop: 5800, mobile: 3100 },
  { month: "March", desktop: 4900, mobile: 2400 },
  { month: "April", desktop: 2300, mobile: 3900 },
  { month: "May", desktop: 5100, mobile: 3000 },
  { month: "June", desktop: 5200, mobile: 3400 },
];

const AppBarChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6 text-center">
        Monthly Revenue by Platform
      </h1>

      {/* Flexbox wrapper to center */}
      <div className="flex justify-center ">
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] w-full max-w-3xl"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            width={600}
            height={300}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis tickLine={false} tickMargin={10} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="desktop" fill="var(--chart-1)" radius={4} />
            <Bar dataKey="mobile" fill="var(--chart-4)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default AppBarChart;
