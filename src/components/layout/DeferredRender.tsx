import { cloneElement, isValidElement } from "react";
import type { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DeferredRender({ children }: Props) {
  if (isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    const childClass = child.props.className
      ? `cv-auto ${child.props.className}`
      : "cv-auto";
    return cloneElement(child, { className: childClass });
  }
  return <>{children}</>;
}
