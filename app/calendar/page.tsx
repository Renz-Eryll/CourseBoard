"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Plus } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* Main Calendar */}
      <Card className="lg:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            Calendar View
          </CardTitle>
          <Button variant="default" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </CardHeader>
        <CardContent className="h-[600px] flex items-center justify-center border rounded-lg bg-muted">
          {/* Placeholder for Calendar Component */}
          <p className="text-muted-foreground text-sm">
            Calendar goes here (e.g. FullCalendar)
          </p>
        </CardContent>
      </Card>

      {/* Upcoming Events */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-semibold">
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-medium">🗓️ Course Planning Meeting</p>
              <p className="text-muted-foreground">Aug 6, 10:00 AM</p>
            </li>
            <li>
              <p className="font-medium">🎯 Subscription Metrics Review</p>
              <p className="text-muted-foreground">Aug 8, 2:30 PM</p>
            </li>
            <li>
              <p className="font-medium">📚 Curriculum Team Sync</p>
              <p className="text-muted-foreground">Aug 10, 4:00 PM</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
