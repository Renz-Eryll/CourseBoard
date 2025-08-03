"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Search, Send, MailCheck, MailOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const dummyMessages = [
  {
    id: 1,
    sender: "Jane Doe",
    category: "Course Inquiry",
    message:
      "Hi! I have a question about the course materials. Can you help me understand Lesson 3?",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "2 mins ago",
    status: "Unread",
  },
  {
    id: 2,
    sender: "John Smith",
    category: "Technical Issue",
    message:
      "I can't access the next module after completing the quiz. It seems stuck. Please assist.",
    avatar:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "10 mins ago",
    status: "Responded",
  },
  {
    id: 3,
    sender: "Alex Rivera",
    category: "Feedback",
    message:
      "The video content is excellent. Great job to the instructors! I’d love to see more.",
    avatar:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "1 hour ago",
    status: "Unread",
  },
  {
    id: 4,
    sender: "Lily Adams",
    category: "Course Request",
    message: "Can you add a course on Docker and DevOps tools?",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    time: "Yesterday",
    status: "Responded",
  },
];

export default function MessagesPage() {
  const [expandedMessageId, setExpandedMessageId] = useState<number | null>(
    null
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-primary" />
          <h1 className="text-xl font-semibold tracking-tight">Messages</h1>
        </div>
        <Button>
          <Send className="w-4 h-4 mr-2" />
          New Message
        </Button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Search messages or senders..."
          className="max-w-sm"
        />
        <Button variant="outline" size="icon">
          <Search className="w-4 h-4" />
        </Button>
      </div>

      {/* Message Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {dummyMessages.map((msg) => (
          <Card key={msg.id} className="flex flex-col justify-between">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <Image
                src={msg.avatar}
                alt={msg.sender}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <CardTitle className="text-sm font-medium">
                  {msg.sender}
                </CardTitle>
                <p className="text-xs text-muted-foreground">{msg.time}</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge variant="secondary" className="text-[10px]">
                  {msg.category}
                </Badge>
                <Badge
                  variant={msg.status === "Unread" ? "destructive" : "outline"}
                  className="text-[10px]"
                >
                  {msg.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div className="bg-muted p-3 rounded-md">
                {expandedMessageId === msg.id
                  ? msg.message
                  : `${msg.message.slice(0, 60)}...`}
              </div>
              <div className="flex justify-between items-center">
                <Button
                  variant="link"
                  size="sm"
                  className="text-xs p-0"
                  onClick={() =>
                    setExpandedMessageId((prev) =>
                      prev === msg.id ? null : msg.id
                    )
                  }
                >
                  {expandedMessageId === msg.id ? "Show less" : "Read more"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs flex gap-1"
                >
                  <MailCheck className="w-4 h-4" />
                  Reply
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-6">
        <Button variant="outline" size="sm">
          Load More Messages
        </Button>
      </div>
    </div>
  );
}
