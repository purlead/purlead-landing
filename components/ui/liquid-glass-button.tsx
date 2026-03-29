"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center uppercase tracking-wider font-bold rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-[#3B82F6] text-white shadow-[0_4px_14px_0_rgba(59,130,246,0.4)] hover:bg-[#2563EB] hover:shadow-[0_6px_20px_0_rgba(59,130,246,0.5)]",
        secondary:
          "bg-white/[0.05] text-[#F0F0F5] border border-white/[0.1] hover:bg-white/[0.1]",
        ghost:
          "bg-transparent text-[#94A3B8] hover:bg-white/[0.05]",
        danger:
          "bg-[#EF4444] text-white shadow-[0_4px_14px_0_rgba(239,68,68,0.4)] hover:bg-[#DC2626]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface LiquidGlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const LiquidGlassButton = forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "primary" && (
          <span className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        )}
      </button>
    );
  }
);
LiquidGlassButton.displayName = "LiquidGlassButton";

export { LiquidGlassButton, buttonVariants };
