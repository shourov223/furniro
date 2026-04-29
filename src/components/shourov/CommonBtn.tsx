
import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type CommonBtnProps<T extends ElementType> = {
  TagName?: T;
  children: ReactNode;
}

  & ComponentPropsWithoutRef<T>;

const CommonBtn = <T extends ElementType = "button">({
  children,
  TagName,
  ...props
}: CommonBtnProps<T>) => {
  const Component = TagName || "button";

  return <Component {...props}>{children}</Component>;
};


export default CommonBtn;