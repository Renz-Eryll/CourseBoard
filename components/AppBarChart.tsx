"use client";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { barChartData } from "@/constants";
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
            data={barChartData}
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
