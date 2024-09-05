import React from "react";
import type { ParagraphProps } from "@/types/Typography";
import classNames from "classnames";

/**
 * Props for the Paragraph component.
 * @param {React.ReactNode} children
 * - The content of the component for the Paragraph component. - Required
 * @param {lg|base} [size='base']
 * - The level of the Paragraph component. Can be lg or base. Default is base. - Optional
 * @param {keyof JSX.IntrinsicElements} [as='p']
 * - The HTML tag to use for the component. Can be p, span, or small. Default is p. - Optional
 * @param {string} [className='']
 * - The className of the component for adding custom styles from TailwindCSS. - Optional
 * @returns {React.ReactElement} The Paragraph component with the appropriate HTML tag, styling, and content.
 */
export default function Paragraph({
  children,
  size = "base",
  as: Component = "p",
  className = "",
  ...props
}: ParagraphProps): React.ReactElement {
  const textSizeLevel = {
    lg: "text-lg",
    base: "text-base",
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
