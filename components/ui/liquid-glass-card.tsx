"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "transition-all duration-500",
  {
    variants: {
      variant: {
        primary:
          "bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_30px_rgb(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:bg-white/[0.06]",
        secondary:
          "bg-[#151520]/80 backdrop-blur-md border border-[#3B82F6]/10",
      },
      size: {
        sm: "rounded-2xl p-4",
        md: "rounded-3xl p-6",
        lg: "rounded-[2rem] p-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface LiquidGlassCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const LiquidGlassCard = forwardRef<HTMLDivElement, LiquidGlassCardProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
LiquidGlassCard.displayName = "LiquidGlassCard";

export { LiquidGlassCard, cardVariants };
