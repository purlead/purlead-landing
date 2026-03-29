
"use client";

import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl",
};

interface SiteLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SiteLogo({ size = "md", className }: SiteLogoProps) {
  return (
    <span className={cn("font-bold tracking-tight", sizeClasses[size], className)}>
      <span className="text-[#F0F0F5]">Pur</span>
      <span className="text-[#3B82F6]">lead</span>
    </span>
  );
}
