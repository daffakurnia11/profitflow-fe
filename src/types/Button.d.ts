export interface ButtonProps {
  /**
   * The content of the component for the Button component. - Required
   */
  children: React.ReactNode;
  /**
   * The className of the component for adding custom styles from TailwindCSS. - Optional
   */
  className?: string;
  /**
   * The style of the component for adding custom styles using inline CSS. - Optional
   */
  style?: React.CSSProperties;
  /**
   * The HTML type of the button. Can be submit, reset, or button. Default is button. - Optional
   */
  buttonType?: "submit" | "reset" | "button";
  /**
   * The tabIndex of the button. Default is 0. - Optional
   */
  tabIndex?: number;
  /**
   * Whether the Button component should be disabled. Default is false. - Optional
   */
  disabled?: boolean;
  /**
   * Whether the Button component should be full width. Default is false. - Optional
   */
  fullWidth?: boolean;
  /**
   * The HTML tag to use for the component. Can be button, a, or span. Default is button. - Optional
   */
  as?: "button" | "a" | "span";
  /**
   * The function to be called when the button is clicked. - Optional
   * @returns {void}
   */
  onClick?: () => void;
}
