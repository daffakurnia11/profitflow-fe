import React from "react";
import type { SmallProps } from "@/types/Typography";
import classNames from "classnames";

/**
 * Props for the Small component.
 * @param {React.ReactNode} children
 * - The content of the component for the Small component. - Required
 * @param {base|sm} [size='base']
 * - The level of the Small component. Can be base or sm. Default is base - Optional
 * @param {keyof JSX.IntrinsicElements} [as='small']
 * - The HTML tag to use for the component. Can be p, span, or small. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Small component with the appropriate HTML tag, styling, and content.
 */
export default function Small({
  size,
  as: Component = "small",
  children,
  className = "",
  ...props
}: SmallProps): React.ReactElement {
  const textSizeLevel = {
    base: "text-sm",
    sm: "text-xs",
  };
  const textSizeClass = textSizeLevel[size ?? "base"];
  return (
    <Component
      {...props}
      className={classNames("typography-text", textSizeClass, className)}
    >
      {children}
    </Component>
  );
}
