import React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export function Timeline({ children, className }: TimelineProps) {
  return <div className={cn("space-y-6", className)}>{children}</div>;
}

interface TimelineItemProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function TimelineItem({
  children,
  active = false,
  onClick,
}: TimelineItemProps) {
  return (
    <div
      className={cn(
        "relative pl-8 pb-6 cursor-pointer transition-all duration-200 ease-in-out",
        active ? "opacity-100" : "opacity-70 hover:opacity-100"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute left-0 top-2 w-4 h-4 rounded-full border-2",
          active ? "bg-blue-500 border-blue-300" : "bg-blue-300 border-blue-200"
        )}
      />
      <div
        className={cn(
          "absolute left-2 top-6 w-0.5 h-full -translate-x-1/2",
          active ? "bg-blue-500" : "bg-blue-300"
        )}
      />
      {children}
    </div>
  );
}
