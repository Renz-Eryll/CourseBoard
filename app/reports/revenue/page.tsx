"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, DollarSign, CreditCard } from "lucide-react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";

const summary = [
  {
    icon: <DollarSign className="text-green-600" />,
    label: "Monthly Revenue",
    value: "$14,200",
  },
  {
    icon: <CreditCard className="text-blue-600" />,
    label: "New Subscriptions",
    value: "320",
  },
  {
    icon: <BarChart2 className="text-purple-600" />,
    label: "Active Plans",
    value: "1,024",
  },
];

const chartData = [
  { month: "Jan", revenue: 5200 },
  { month: "Feb", revenue: 6800 },
  { month: "Mar", revenue: 7200 },
  { month: "Apr", revenue: 6100 },
  { month: "May", revenue: 8900 },
  { month: "Jun", revenue: 9400 },
];

const transactions = [
  {
    id: "TXN-001",
    customer: "Jane Doe",
    amount: "$120.00",
    plan: "Pro Plan",
    date: "2025-07-10",
  },
  {
    id: "TXN-002",
    customer: "John Smith",
    amount: "$60.00",
    plan: "Basic Plan",
    date: "2025-07-09",
  },
  {
    id: "TXN-003",
    customer: "Alice Johnson",
    amount: "$180.00",
    plan: "Premium Plan",
    date: "2025-07-09",
  },
];

export default function RevenueReportPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <BarChart2 className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-semibold tracking-tight">Revenue Report</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {summary.map((item, i) => (
          <Card key={i}>
            <CardHeader className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-muted">{item.icon}</div>
              <div>
                <CardTitle className="text-sm text-muted-foreground">
                  {item.label}
                </CardTitle>
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer
            className="w-full min-h-[240px]"
            config={{
              revenue: {
                label: "Revenue",
                color: "var(--chart-1)",
              },
            }}
          >
            <BarChart width={600} height={250} data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} />
              <YAxis tickLine={false} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="revenue"
                fill="var(--chart-1)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Recent Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Transaction ID</th>
                  <th className="text-left py-2">Customer</th>
                  <th className="text-left py-2">Plan</th>
                  <th className="text-left py-2">Amount</th>
                  <th className="text-left py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id} className="border-b">
                    <td className="py-2">{txn.id}</td>
                    <td className="py-2">{txn.customer}</td>
                    <td className="py-2">{txn.plan}</td>
                    <td className="py-2">{txn.amount}</td>
                    <td className="py-2">{txn.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
