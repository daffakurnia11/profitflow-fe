import * as React from "react";
import { ButtonProps } from "@/types/Button";
import classNames from "classnames";

export default function Button({
  as = "button",
  buttonType = "button",
  disabled = false,
  fullWidth = false,
  className = "",
  children,
  ...props
}: ButtonProps): React.ReactElement {
  const Component = as;
  return (
    <Component
      {...props}
      disabled={disabled}
      type={buttonType}
      className={classNames("button", className, { "w-full": fullWidth })}
    >
      {children}
    </Component>
  );
}
