import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";

// interface IButtonProps {
//   children: GenericElements;
//   className: string;
//   size?: "sm" | "md" | "lg";
//   variant?:
//     | "solid"
//     | "bordered"
//     | "light"
//     | "flat"
//     | "faded"
//     | "shadow"
//     | "ghost";
//   color?:
//     | "default"
//     | "primary"
//     | "secondary"
//     | "success"
//     | "warning"
//     | "danger";
//   radius?: "none" | "sm" | "md" | "lg" | "full";
//   startContent?: GenericElements;
//   endContent?: GenericElements;
//   spinner?: GenericElements;
//   fullWidth?: boolean;
//   isIconOnly?: boolean;
//   isisDisabled?: boolean;
//   isLoading?: boolean;
//   disableAnimation?: boolean;
//   onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
// }

const BugButton = ({ children, ...props }: ButtonProps) => {
  return <Button {...props}>{children}</Button>;
};

export default BugButton;
