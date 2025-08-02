"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";

const tasks = [
  { id: "task1", label: "Review submitted assignments", checked: true },
  { id: "task2", label: "Publish new course material", checked: false },
  { id: "task3", label: "Schedule live session", checked: false },
  { id: "task4", label: "Update course pricing", checked: true },
  { id: "task5", label: "Reply to student inquiries", checked: false },
  { id: "task6", label: "Check subscription analytics", checked: true },
  { id: "task7", label: "Upload weekly quiz", checked: false },
  { id: "task8", label: "Approve course certificates", checked: true },
  { id: "task9", label: "Backup course content", checked: false },
  { id: "task10", label: "Review platform feedback", checked: true },
];

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Instructor Task List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {tasks.map((task) => (
            <Card key={task.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={task.id} defaultChecked={task.checked} />
                <label
                  htmlFor={task.id}
                  className="text-sm text-muted-foreground"
                >
                  {task.label}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
