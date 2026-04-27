import type { ElementType, ReactNode } from "react";

type Props<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function DeferredRender<T extends ElementType = "div">({
  as,
  className,
  children,
  ...props
}: Props<T>) {
  const Component = (as ?? "div") as ElementType;
  const classes = className ? `cv-auto ${className}` : "cv-auto";
  return <Component {...props} className={classes}>{children}</Component>;
}
