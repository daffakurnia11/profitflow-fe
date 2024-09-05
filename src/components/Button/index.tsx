import { ButtonProps } from "@/types/Button";
import classNames from "classnames";
import React from "react";

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
