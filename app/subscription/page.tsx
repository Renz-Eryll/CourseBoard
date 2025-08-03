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
import { PackageCheck, Pencil, Trash2, Plus } from "lucide-react";

const plans = [
  {
    id: "basic",
    title: "Basic Plan",
    description: "Access to essential course materials and updates.",
    price: "$9/month",
    status: "Active",
    features: ["Limited course access", "Community support", "Monthly updates"],
  },
  {
    id: "pro",
    title: "Pro Plan",
    description: "Unlock all course features and progress tracking.",
    price: "$19/month",
    status: "Inactive",
    features: ["Full course access", "Progress tracking", "Priority support"],
  },
  {
    id: "premium",
    title: "Premium Plan",
    description: "Best for teams and institutions with advanced tools.",
    price: "$29/month",
    status: "Active",
    features: ["All Pro features", "Group management", "Analytics & reporting"],
  },
];

export default function AdminSubscriptionPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PackageCheck className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">
            Manage Subscription Plans
          </h1>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Plan
        </Button>
      </div>

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <Card key={plan.id} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
                <Badge
                  variant={plan.status === "Active" ? "default" : "outline"}
                >
                  {plan.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
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

            <CardFooter className="flex gap-2 justify-end mt-4">
              <Button variant="outline" size="sm">
                <Pencil className="w-4 h-4 mr-1" />
                Edit
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="w-4 h-4 mr-1" />
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
