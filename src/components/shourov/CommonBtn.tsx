import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

const BUTTON_VARIANTS = {
  variant: {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
    outline: "text-black hover:bg-[#B88E2F] hover:text-white border-transparent ",
    danger: "bg-red-600 text-white hover:bg-red-700",
  },
  size: {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "py-[17px] px-[47px] text-[20px] border-2  border-[#9F9F9F]  ",
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
        "flex items-center justify-center rounded-lg cursor-pointer",
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