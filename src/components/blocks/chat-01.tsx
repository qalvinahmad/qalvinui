"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Smile,
  Paperclip,
  Check,
  CheckCheck,
  Clock,
  AlertCircle,
  CornerUpLeft,
  Trash2,
  ChevronDown,
  ArrowDown,
  Users,
  Shield,
  MoreVertical,
  Forward,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type MemberId = "maya" | "jordan" | "alex" | "you";

export interface ChatMember {
  role: "host" | "co-host" | "guest";
  name: string;
  handle: string;
  initials: string;
  avatarColor: string;
}

export const CHAT_MEMBERS: Record<MemberId, ChatMember> = {
  maya: {
    role: "host",
    name: "Maya Chen",
    handle: "Maya",
    initials: "MC",
    avatarColor: "bg-orange-500/20 text-orange-600 dark:text-orange-400 border border-orange-500/30",
  },
  jordan: {
    role: "co-host",
    name: "Jordan Lee",
    handle: "Jordan",
    initials: "JL",
    avatarColor: "bg-violet-500/20 text-violet-600 dark:text-violet-400 border border-violet-500/30",
  },
  alex: {
    role: "guest",
    name: "Alex Morgan",
    handle: "Alex",
    initials: "AM",
    avatarColor: "bg-sky-500/20 text-sky-600 dark:text-sky-400 border border-sky-500/30",
  },
  you: {
    role: "co-host",
    name: "Sam Rivera",
    handle: "You",
    initials: "SR",
    avatarColor: "bg-primary text-primary-foreground",
  },
};

export const CHAT_EMOJIS = [
  { emoji: "👍", label: "Thumbs up" },
  { emoji: "❤️", label: "Heart" },
  { emoji: "😂", label: "Laugh" },
  { emoji: "😮", label: "Surprised" },
  { emoji: "🙏", label: "Thanks" },
];

export interface ChatReaction {
  emoji: string;
  members: MemberId[];
}

export interface ChatMessage {
  id: number;
  author: MemberId;
  text: string;
  dateLabel: string;
  time: string;
  replyTo?: number;
  reactions: ChatReaction[];
  deletedReason?: "sender" | "moderator";
  forwarded?: boolean;
  delivery?: "sending" | "sent" | "delivered" | "read" | "failed";
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    author: "maya",
    text: "The new design direction is ready for our first look.",
    dateLabel: "Today",
    time: "10:42",
    reactions: [],
    forwarded: true,
  },
  {
    id: 2,
    author: "maya",
    text: "Would love your eyes on the component micro-interactions before we share it with the team.",
    dateLabel: "Today",
    time: "10:42",
    reactions: [],
  },
  {
    id: 3,
    author: "jordan",
    text: "Much calmer. The spacing and subtle borders make all the difference ✨",
    dateLabel: "Today",
    time: "10:44",
    reactions: [{ emoji: "❤️", members: ["maya", "alex"] }],
  },
  {
    id: 4,
    author: "you",
    text: "Agreed. Everything has a lot more room to breathe.",
    dateLabel: "Today",
    time: "10:46",
    reactions: [],
    delivery: "read",
  },
  {
    id: 5,
    author: "alex",
    text: "Quick walkthrough at 2? @You would love your take on the final autocomplete and sheet flow.",
    dateLabel: "Today",
    time: "10:48",
    reactions: [],
  },
  {
    id: 6,
    author: "you",
    text: "Sounds great — see you then. I'll test the keyboard navigation beforehand.",
    dateLabel: "Today",
    time: "10:49",
    replyTo: 5,
    reactions: [{ emoji: "👍", members: ["jordan", "maya"] }],
    delivery: "read",
  },
  {
    id: 7,
    author: "maya",
    text: "Perfect. I’ll bring the coffee ☕",
    dateLabel: "Today",
    time: "10:50",
    reactions: [],
  },
];

export function ChatBlock() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState("");
  const [replyingTo, setReplyingTo] = useState<ChatMessage | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [activeScenario, setActiveScenario] = useState<string>("active");
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
    setShowScrollBottom(!isAtBottom);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage: ChatMessage = {
      id: Date.now(),
      author: "you",
      text: inputText.trim(),
      dateLabel: "Today",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      replyTo: replyingTo ? replyingTo.id : undefined,
      reactions: [],
      delivery: "sent",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputText("");
    setReplyingTo(null);

    // Simulate delivery receipts update & reply simulation
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newMessage.id ? { ...msg, delivery: "delivered" } : msg))
      );
    }, 1000);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) => (msg.id === newMessage.id ? { ...msg, delivery: "read" } : msg))
      );
    }, 2200);

    // Occasional simulated reply
    setTimeout(() => {
      setIsTyping(true);
    }, 2800);

    setTimeout(() => {
      setIsTyping(false);
      const simulatedReply: ChatMessage = {
        id: Date.now() + 1,
        author: "jordan",
        text: "Got it! Looking sharp on my screen too.",
        dateLabel: "Today",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        reactions: [{ emoji: "👍", members: ["you"] }],
      };
      setMessages((prev) => [...prev, simulatedReply]);
    }, 4500);
  };

  const handleToggleReaction = (messageId: number, emoji: string) => {
    setMessages((prev) =>
      prev.map((msg) => {
        if (msg.id !== messageId) return msg;
        const existing = msg.reactions.find((r) => r.emoji === emoji);
        let updatedReactions: ChatReaction[];

        if (!existing) {
          updatedReactions = [...msg.reactions, { emoji, members: ["you"] }];
        } else {
          const hasReacted = existing.members.includes("you");
          if (hasReacted) {
            const nextMembers = existing.members.filter((m) => m !== "you");
            if (nextMembers.length === 0) {
              updatedReactions = msg.reactions.filter((r) => r.emoji !== emoji);
            } else {
              updatedReactions = msg.reactions.map((r) =>
                r.emoji === emoji ? { ...r, members: nextMembers } : r
              );
            }
          } else {
            updatedReactions = msg.reactions.map((r) =>
              r.emoji === emoji ? { ...r, members: [...r.members, "you"] } : r
            );
          }
        }
        return { ...msg, reactions: updatedReactions };
      })
    );
  };

  const handleDeleteMessage = (messageId: number) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, text: "", reactions: [], deletedReason: "sender" }
          : msg
      )
    );
  };

  const switchScenario = (scenario: string) => {
    setActiveScenario(scenario);
    if (scenario === "active") {
      setMessages(INITIAL_MESSAGES);
      setIsTyping(false);
    } else if (scenario === "typing") {
      setMessages(INITIAL_MESSAGES);
      setIsTyping(true);
    } else if (scenario === "receipts") {
      setMessages([
        ...INITIAL_MESSAGES.slice(0, 2),
        {
          id: 21,
          author: "you",
          text: "Sending the latest update to production…",
          dateLabel: "Today",
          time: "10:50",
          reactions: [],
          delivery: "sending",
        },
        {
          id: 22,
          author: "you",
          text: "The release notes have been dispatched to staging.",
          dateLabel: "Today",
          time: "10:51",
          reactions: [],
          delivery: "sent",
        },
        {
          id: 23,
          author: "you",
          text: "Delivered to all reviewers on Slack and Github.",
          dateLabel: "Today",
          time: "10:52",
          reactions: [],
          delivery: "delivered",
        },
        {
          id: 24,
          author: "you",
          text: "Confirmed read by engineering leads.",
          dateLabel: "Today",
          time: "10:53",
          reactions: [],
          delivery: "read",
        },
      ]);
      setIsTyping(false);
    } else if (scenario === "empty") {
      setMessages([]);
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl border border-border bg-card text-card-foreground shadow-xl overflow-hidden flex flex-col h-[680px]">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/30">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className="size-10 border border-border/80">
              <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">
                DS
              </AvatarFallback>
            </Avatar>
            <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-500 border-2 border-background" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-sm text-foreground">Design System Sync</h2>
              <Badge variant="outline" className="text-[10px] px-1.5 py-0 h-4">
                4 members
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground truncate max-w-xs">
              Maya, Jordan, Alex, and You
            </p>
          </div>
        </div>

        {/* Scenarios Switcher */}
        <div className="flex items-center gap-1.5 bg-muted/60 p-1 rounded-xl border border-border/60">
          {[
            { id: "active", label: "Active" },
            { id: "typing", label: "Typing" },
            { id: "receipts", label: "Receipts" },
            { id: "empty", label: "Empty" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => switchScenario(item.id)}
              className={cn(
                "px-2.5 py-1 text-xs rounded-lg font-medium transition-all",
                activeScenario === item.id
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 relative bg-zinc-50/40 dark:bg-zinc-950/40"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-3">
            <div className="size-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
              <Users className="size-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">No messages yet</h3>
              <p className="text-xs text-muted-foreground max-w-sm">
                Be the first to start the sync. Send a message below to kick off the conversation!
              </p>
            </div>
          </div>
        ) : (
          messages.map((msg, index) => {
            const isMe = msg.author === "you";
            const member = CHAT_MEMBERS[msg.author];
            const repliedMessage = msg.replyTo
              ? messages.find((m) => m.id === msg.replyTo)
              : undefined;

            return (
              <div
                key={msg.id}
                className={cn(
                  "group relative flex gap-3 max-w-[85%] sm:max-w-[75%]",
                  isMe ? "ml-auto flex-row-reverse" : "mr-auto"
                )}
              >
                {/* Author Avatar */}
                {!isMe && (
                  <Avatar className="size-8 shrink-0 mt-0.5 border border-border">
                    <AvatarFallback className={cn("text-xs font-semibold", member.avatarColor)}>
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                )}

                <div className={cn("space-y-1", isMe && "items-end flex flex-col")}>
                  {/* Author Name and Timestamp */}
                  <div
                    className={cn(
                      "flex items-center gap-2 text-[11px] text-muted-foreground px-1",
                      isMe && "flex-row-reverse"
                    )}
                  >
                    <span className="font-medium text-foreground">{member.name}</span>
                    {member.role !== "guest" && (
                      <span className="text-[9px] uppercase tracking-wider px-1 py-0.2 rounded bg-muted text-muted-foreground font-semibold">
                        {member.role}
                      </span>
                    )}
                    <span>{msg.time}</span>
                  </div>

                  {/* Quoted Reply Reference */}
                  {repliedMessage && (
                    <div
                      className={cn(
                        "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs bg-muted/60 border border-border/60 text-muted-foreground mb-1",
                        isMe ? "border-r-2 border-r-primary" : "border-l-2 border-l-primary"
                      )}
                    >
                      <CornerUpLeft className="size-3 text-primary shrink-0" />
                      <span className="font-semibold text-foreground">
                        {CHAT_MEMBERS[repliedMessage.author].handle}:
                      </span>
                      <span className="truncate">{repliedMessage.text}</span>
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={cn(
                      "relative rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-xs transition-colors",
                      isMe
                        ? "bg-primary text-primary-foreground rounded-tr-xs"
                        : "bg-card border border-border/80 text-foreground rounded-tl-xs",
                      msg.deletedReason && "italic text-muted-foreground bg-muted/40 border-dashed"
                    )}
                  >
                    {msg.deletedReason ? (
                      <span>Message deleted</span>
                    ) : (
                      <div>
                        {msg.forwarded && (
                          <div className="flex items-center gap-1 text-[10px] opacity-75 font-medium mb-1">
                            <Forward className="size-3" />
                            <span>Forwarded</span>
                          </div>
                        )}
                        <p>{msg.text}</p>
                      </div>
                    )}

                    {/* Delivery Receipts Status Indicator */}
                    {isMe && msg.delivery && (
                      <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-primary-foreground/80">
                        {msg.delivery === "sending" && <Clock className="size-3 animate-spin" />}
                        {msg.delivery === "sent" && <Check className="size-3" />}
                        {msg.delivery === "delivered" && <CheckCheck className="size-3" />}
                        {msg.delivery === "read" && (
                          <CheckCheck className="size-3 text-cyan-200" />
                        )}
                        {msg.delivery === "failed" && (
                          <AlertCircle className="size-3 text-rose-300" />
                        )}
                      </div>
                    )}
                  </div>

                  {/* Reaction Chips */}
                  {msg.reactions.length > 0 && (
                    <div
                      className={cn(
                        "flex flex-wrap items-center gap-1 pt-0.5",
                        isMe && "justify-end"
                      )}
                    >
                      {msg.reactions.map((r) => {
                        const hasReacted = r.members.includes("you");
                        return (
                          <button
                            key={r.emoji}
                            onClick={() => handleToggleReaction(msg.id, r.emoji)}
                            className={cn(
                              "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border transition-all",
                              hasReacted
                                ? "bg-primary/10 border-primary text-primary font-medium"
                                : "bg-muted/70 border-border hover:bg-muted text-muted-foreground"
                            )}
                          >
                            <span>{r.emoji}</span>
                            <span className="text-[10px]">{r.members.length}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Hover Quick Actions (Reply, React, Delete) */}
                <div
                  className={cn(
                    "absolute -top-3.5 hidden group-hover:flex items-center gap-0.5 bg-background border border-border rounded-full p-0.5 shadow-md z-10",
                    isMe ? "left-0" : "right-0"
                  )}
                >
                  {CHAT_EMOJIS.slice(0, 3).map((e) => (
                    <button
                      key={e.emoji}
                      onClick={() => handleToggleReaction(msg.id, e.emoji)}
                      className="size-6 flex items-center justify-center rounded-full hover:bg-muted text-xs transition-colors"
                      title={e.label}
                    >
                      {e.emoji}
                    </button>
                  ))}
                  <button
                    onClick={() => setReplyingTo(msg)}
                    className="size-6 flex items-center justify-center rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    title="Reply"
                  >
                    <CornerUpLeft className="size-3.5" />
                  </button>
                  {isMe && !msg.deletedReason && (
                    <button
                      onClick={() => handleDeleteMessage(msg.id)}
                      className="size-6 flex items-center justify-center rounded-full hover:bg-rose-500/10 text-muted-foreground hover:text-rose-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="size-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-3 mr-auto animate-fade-in">
            <Avatar className="size-8 shrink-0 border border-border">
              <AvatarFallback className="bg-violet-500/20 text-violet-600 text-xs font-semibold">
                JL
              </AvatarFallback>
            </Avatar>
            <div className="rounded-2xl rounded-tl-xs px-3.5 py-2 bg-card border border-border/80 shadow-xs flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-muted-foreground animate-bounce" />
              <span className="size-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.2s]" />
              <span className="size-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0.4s]" />
              <span className="text-xs text-muted-foreground ml-1.5 font-medium">
                Jordan Lee is typing...
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Scroll to Bottom Button */}
      {showScrollBottom && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-24 right-8 size-9 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-all"
        >
          <ArrowDown className="size-4" />
        </button>
      )}

      {/* Bottom Composer Area */}
      <div className="p-3 sm:p-4 border-t border-border bg-card">
        {/* Reply preview bar */}
        {replyingTo && (
          <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-muted/60 border border-border mb-2 text-xs">
            <div className="flex items-center gap-2 truncate">
              <CornerUpLeft className="size-3.5 text-primary shrink-0" />
              <span className="font-medium text-foreground">
                Replying to {CHAT_MEMBERS[replyingTo.author].name}:
              </span>
              <span className="text-muted-foreground truncate max-w-sm">
                {replyingTo.text}
              </span>
            </div>
            <button
              onClick={() => setReplyingTo(null)}
              className="text-muted-foreground hover:text-foreground text-xs px-1"
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
          {/* Attachment button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-9 rounded-xl text-muted-foreground hover:text-foreground shrink-0"
            title="Attach file"
          >
            <Paperclip className="size-4" />
          </Button>

          {/* Text Input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={replyingTo ? "Write your reply..." : "Write a message..."}
              className="w-full h-10 rounded-xl border border-input bg-background px-3.5 text-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
            />
            {/* Quick emoji pop button */}
            <button
              type="button"
              onClick={() => setInputText((prev) => prev + " ✨")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              title="Add sparkles"
            >
              <Smile className="size-4" />
            </button>
          </div>

          {/* Send Button */}
          <Button
            type="submit"
            disabled={!inputText.trim()}
            className="size-10 rounded-xl px-0 shrink-0 gap-1.5"
          >
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
