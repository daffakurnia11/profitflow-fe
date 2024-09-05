export interface TypographyProps {
  /**
   * The content of the component for the Heading component. - Required
   */
  children: React.ReactNode;
  /**
   * The HTML tag to use for the component. Can be h1, h2, h3, h4, h5, or h6. Default is h1. - Optional
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles. - Optional
   */
  style?: React.CSSProperties;
}

export interface HeadingProps extends TypographyProps {
  /**
   * The level of the Heading component. Can be 1, 2, 3, 4, 5, or 6. Default is 1 - Optional
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface ParagraphProps extends TypographyProps {
  /**
   * The size of the Paragraph component. Can be lg or base. Default is base. - Optional
   */
  size?: "lg" | "base";
}

export interface SmallProps extends TypographyProps {
  /**
   * The size of the Paragraph component. Can be base or sm. Default is base. - Optional
   */
  size?: "base" | "sm";
}