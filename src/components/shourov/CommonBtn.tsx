import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

 const BUTTON_VARIANTS = {
  variant: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 ",
    danger: "bg-red-600 text-white hover:bg-red-700",
  },
  size: {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  },
} as const; 


type CommonBtnProps<T extends ElementType> = {
  TagName?: T;
  children: ReactNode;
  variant?: keyof typeof BUTTON_VARIANTS.variant; 
  size?: keyof typeof BUTTON_VARIANTS.size;      
} & ComponentPropsWithoutRef<T>;


const CommonBtn = <T extends ElementType = "button">({
  children,
  TagName,
  variant = "primary",
  size = "md",
  className,
  ...props
}: CommonBtnProps<T>) => {
  const Component = TagName || "button";

  return (
    <Component
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        BUTTON_VARIANTS.variant[variant],
        BUTTON_VARIANTS.size[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default CommonBtn;