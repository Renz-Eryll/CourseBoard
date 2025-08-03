"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Search, Send, MailCheck, MailOpen } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { dummyMessages } from "@/constants";

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
