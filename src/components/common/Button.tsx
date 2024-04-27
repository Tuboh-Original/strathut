import * as React from "react";
import East from "@mui/icons-material/East";
import { motion } from "framer-motion";
import gsap from "gsap";

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
  bgColor,
  textColor = "#111111",
  onButton,
}) => {
  const [element, setElement] = React.useState<null | React.BaseSyntheticEvent>(
    null
  );

  React.useEffect(() => {
    gsap.to(".arrow", {
      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
  }, []);

  console.log(element);
  return (
    <div className="relative">
      <motion.button
        onClick={onButton}
        type={type}
        id={id}
        className={`strathut-cursor z-10 relative text-[${textColor}] font-medium rounded-e-full rounded-s-full text-xl sm:text-2xl p-4 sm:py-4 sm:px-6 gap-2 flex items-center w-fit normal-case border-opacity-40 border-[${borderWidth}] border-[${borderColor}] ${
          bgColor ? `bg-[${bgColor}]` : "bg-white"
        } ${className}`}
        // onMouseOver={(e) => setElement(e)}
        initial="hidden"
        animate="hidden"
        whileHover={"reveal"}
        onHoverEnd={() => setElement(null)}
        whileTap={"hidden"}
        exit={"exit"}
        variants={{
          hidden: {
            // flexDirection: "row",
            backgroundColor: bgColor ? bgColor : "#fff",
            border: `${borderWidth} solid ${borderColor}`,
            padding: "1rem 1.25rem",
            // borderColor: borderColor ? borderColor : "rgb(107, 114, 128/0.4)",
            // borderWidth: borderWidth ? borderWidth : "6px",
            // color: textColor ? textColor : "#111111",
          },
          reveal: {
            // flexDirection: "row-reverse",
            backgroundColor: "transparent",
            border: `none`,
            padding: "1.25rem 1.5rem",
            // borderColor: "transparent",
            // borderWidth: borderWidth,
            // color: "#02C986",
          },
        }}
        transition={{ duration: 0.15 }}
        onMouseEnter={(e) => {
          setElement(e);
        }}
      >
        <motion.p
          variants={{
            hidden: {
              x: 0,
              color: textColor,
            },
            reveal: {
              x: element?.target?.lastChild?.clientWidth + 8,
              color: "#02C986",
            },
          }}
          transition={{ duration: 0.5, type: "spring", damping: 8 }}
          id={`child${id}`}
        >
          {children}
        </motion.p>
        <motion.svg
          width={"1.25rem"}
          height={"1.25rem"}
          variants={{
            hidden: {
              color: textColor,
              rotate: 0,
              border: "none",
              borderRadius: 0,
              x: 0,
            },
            reveal: {
              color: "#02C986",
              rotate: -45,
              border: "2px solid #02C986",
              borderRadius: "999px",
              x: -(element?.target?.firstChild?.clientWidth + 8),
            },
          }}
          transition={{ duration: 0.5, type: "spring", damping: 8 }}
        >
          <East id={`icon${id}`} />
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
