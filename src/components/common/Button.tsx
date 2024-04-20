import * as React from "react";
import East from "@mui/icons-material/East";

interface StratButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onButton?: () => void;
}

const StratButton: React.FC<StratButtonProps> = ({
  className = "",
  children,
  type = "button",
  onButton,
}) => (
  <button
    onClick={onButton}
    type={type}
    className={`bg-white text-[#111111] font-medium rounded-e-full rounded-s-full text-2xl py-4 px-6 gap-2 flex items-center w-fit normal-case ${className}`}
  >
    <span>{children}</span>
    <East />
  </button>
);

export default StratButton;
