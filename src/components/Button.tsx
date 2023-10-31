import { type ReactNode } from "react";

interface ButtonProps {
  classes?: string;
  type: "primary" | "secondary";
  children: ReactNode;
  onClick: () => any;
}

const Button = ({ classes, children, type, onClick }: ButtonProps) => {
  const isPrimary = type === "primary";
  const primaryClasses =
    "bg-primary p-buttonPadding rounded-buttonRadius text-white text-buttonFont font-buttonWeight";
  const secondaryClasses = "";
  return (
    <button
      className={`${isPrimary ? primaryClasses : secondaryClasses} ${classes}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
