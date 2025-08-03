"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Search, BookOpen } from "lucide-react";
import Image from "next/image";
import { dummyCourses } from "@/constants";

export default function CoursesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">Courses</h1>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Course
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <Input placeholder="Search courses..." className="max-w-sm" />
        <Button variant="outline" size="icon">
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {dummyCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            />
            <CardHeader>
              <CardTitle className="text-base">{course.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>
                <span className="font-medium">Instructor:</span>{" "}
                {course.instructor}
              </p>
              <p>
                <span className="font-medium">Enrolled:</span> {course.enrolled}{" "}
                students
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
