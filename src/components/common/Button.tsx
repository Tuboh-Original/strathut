import * as React from "react";
import East from "@mui/icons-material/East";

interface StratButtonProps {
  className?: string;
  children?: React.ReactNode;
}

const StratButton: React.FC<StratButtonProps> = ({
  className = "",
  children,
}) => (
  <button
    className={`bg-white text-[#111111] font-medium rounded-e-full rounded-s-full text-2xl p-4 flex items-center gap-1 w-fit normal-case ${className}`}
  >
    <span>{children}</span>
    <East />
  </button>
);

export default StratButton;
