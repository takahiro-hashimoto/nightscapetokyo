import { cloneElement, isValidElement } from "react";
import type { ElementType, ReactNode, ReactElement } from "react";

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
  // When "as" is provided, render as that element with cv-auto (original behavior)
  if (as) {
    const Component = as as ElementType;
    const classes = className ? `cv-auto ${className}` : "cv-auto";
    return <Component {...props} className={classes}>{children}</Component>;
  }

  // Otherwise inject cv-auto directly into the single child — no wrapper div
  if (isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    const childClass = child.props.className
      ? `cv-auto ${child.props.className}`
      : "cv-auto";
    return cloneElement(child, { className: childClass });
  }

  return <>{children}</>;
}
