import * as React from "react";
import East from "@mui/icons-material/East";
import { motion } from "framer-motion";

interface StratButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  id?: string;
  borderWidth?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
  onButton?: () => void;
}

const StratButton: React.FC<StratButtonProps> = ({
  className = "",
  children,
  type = "button",
  id,
  borderWidth = "6px",
  borderColor = "rgba(107, 114, 128, 0.4)",
  textColor = "#111111",
  onButton,
}) => {
  // React.useEffect(() => {
  //   gsap.to(".arrow", {
  //     motionPath: {
  //       path: "#path",
  //       align: "#path",
  //       alignOrigin: [0.5, 0.5],
  //       autoRotate: true,
  //     },
  //   });
  // }, []);

  // console.log(element);
  // console.log(element?.target?.lastChild?.clientWidth);
  return (
    <div className="relative">
      <motion.button
        onClick={onButton}
        type={type}
        id={id}
        className={`strathut-cursor z-10 relative text-[${textColor}] font-medium rounded-e-full rounded-s-full text-xl sm:text-2xl p-4 sm:py-4 sm:px-6 gap-2 flex items-center w-fit normal-case border-opacity-40 border-[${borderWidth}] border-[${borderColor}] ${className}`}
        initial="hidden"
        whileHover={"reveal"}
        variants={{
          hidden: {
            flexDirection: "row",
            backgroundColor: "rgba(255, 255, 255, 1)",
            borderWidth: "6px",
          },
          reveal: {
            flexDirection: "row-reverse",
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderWidth: "0px",
          },
        }}
        transition={{ duration: 0.05 }}
      >
        <motion.p
          variants={{
            hidden: {
              color: "#111111",
            },
            reveal: {
              color: "#02C986",
            },
          }}
          transition={{ duration: 0.5, type: "spring", damping: 8 }}
        >
          {children}
        </motion.p>
        <motion.svg
          width={"1.25rem"}
          height={"1.25rem"}
          variants={{
            hidden: {
              rotate: 0,
              color: "#111111",
              border: "none",
              borderRadius: "999px",
              width: "1.25rem",
              height: "1.25rem",
              padding: "0px",
            },
            reveal: {
              rotate: -45,
              color: "#02C986",
              border: `2px solid #02C986`,
              borderRadius: "999px",
              width: "2rem",
              height: "2rem",
              padding: "2px",
            },
          }}
          transition={{ duration: 0.5, type: "spring", damping: 8 }}
        >
          <East />
        </motion.svg>
      </motion.button>
      {/* <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        // x="0px"
        // y="0px"
        viewBox="0 0 869 3002"
        xmlSpace="preserve"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          border: ``,
          borderRadius: "999px",
        }}
      >
        <circle r={2} fill="#00f" className="arrow" />
        <rect
          id="path"
          width={"2000"}
          height={"100%"}
          stroke="#00f"
          // strokeWidth={"3"}
          fill="none"
          style={{
            position: "relative"
          }}
        />
      </svg> */}
    </div>
  );
};

export default StratButton;
