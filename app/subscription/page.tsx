"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PackageCheck, Crown, TrendingUp } from "lucide-react";

const plans = [
  {
    id: "basic",
    title: "Basic Plan",
    description: "Access to essential course materials and updates.",
    price: "$9/month",
    icon: <PackageCheck className="w-6 h-6 text-primary" />,
    badge: "Current Plan",
    features: ["Limited course access", "Community support", "Monthly updates"],
    isCurrent: true,
  },
  {
    id: "pro",
    title: "Pro Plan",
    description: "Unlock all course features and progress tracking.",
    price: "$19/month",
    icon: <TrendingUp className="w-6 h-6 text-primary" />,
    features: ["Full course access", "Progress tracking", "Priority support"],
    isCurrent: false,
  },
  {
    id: "premium",
    title: "Premium Plan",
    description: "Best for teams and institutions with advanced tools.",
    price: "$29/month",
    icon: <Crown className="w-6 h-6 text-primary" />,
    features: ["All Pro features", "Group management", "Analytics & reporting"],
    isCurrent: false,
  },
];

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex items-center gap-2">
        <PackageCheck className="w-6 h-6 text-primary" />
        <h1 className="text-xl font-semibold tracking-tight">
          Subscription Plans
        </h1>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.id} className="flex flex-col justify-between">
            <CardHeader className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                {plan.icon}
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                {plan.isCurrent && (
                  <Badge variant="default">{plan.badge}</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-xl font-bold">{plan.price}</p>
              <Separator />
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button
                disabled={plan.isCurrent}
                className="w-full"
                variant={plan.isCurrent ? "outline" : "default"}
              >
                {plan.isCurrent ? "Active Plan" : "Upgrade"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
