import Box from "@mui/material/Box";
import logo from "../../assets/icons/logoWhite.svg";
import East from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { motion, AnimatePresence } from "framer-motion";
import { SvgIconComponent } from "@mui/icons-material";
import WebIcon from "@mui/icons-material/Web";
import AppsIcon from "@mui/icons-material/Apps";
import MarginIcon from "@mui/icons-material/Margin";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CategoryIcon from "@mui/icons-material/Category";
import { useClickAway } from "react-use";
import { Squash as Hamburger } from "hamburger-react";

const links: { title: string; link: string }[] = [
  { title: "Work", link: "" },
  { title: "About", link: "/about" },
];

const serviceLinks: { title: string; link: string; icon: SvgIconComponent }[] =
  [
    { title: "Web Development", link: "/web-development", icon: WebIcon },
    { title: "UI/UX design", link: "/ui-ux-design", icon: MarginIcon },
    {
      title: "Product Development",
      link: "/product-development",
      icon: CategoryIcon,
    },
    {
      title: "Brand Development",
      link: "/brand-development",
      icon: BrandingWatermarkIcon,
    },
    { title: "App Development", link: "/app-development", icon: AppsIcon },
  ];

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

const Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const [isOpen, toggleOpen] = React.useState(false);
  const containerRef = React.useRef(null);
  const servicesRef = React.useRef(null);

  useClickAway(containerRef, () => setOpen(false));
  useClickAway(servicesRef, () => setOpen(false));

  const Option = ({
    text,
    Icon,
    link,
  }: {
    text?: string;
    Icon: SvgIconComponent;
    link: string;
  }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => {
          setOpen(false);
          toggleOpen(false);
          navigate(link);
        }}
        className={`flex items-center gap-2 w-full p-2 text-sm font-medium whitespace-nowrap rounded-md hover:bg-secondary10 ${
          isOpen ? "text-white" : "text-slate-700"
        } hover:text-secondary transition-colors`}
      >
        <motion.span className="text-xs" variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <span>{text}</span>
      </motion.li>
    );
  };

  const iconVariants = {
    open: { rotate: isOpen ? -90 : 90 },
    closed: { rotate: 0 },
  };

  return (
    <Box className="absolute left-0 right-0 top-0 text-white w-full flex justify-center bg-[#111111]">
      <nav className="max-w-[1440px] px-4 md:px-10 py-6 w-full flex items-center justify-between">
        <Box className="flex justify-between sm:justify-normal sm:gap-16 items-center w-full">
          <div
            onClick={() => {
              setOpen(false);
              toggleOpen(false);
              navigate("/");
            }}
            className="strathut-cursor h-fit w-full max-w-32"
          >
            <motion.img
              src={logo}
              alt="Strathut white logo"
              width={"90%"}
              height={"auto"}
              initial={{
                filter: "hue-rotate(0deg)",
              }}
              whileHover={{
                filter: "hue-rotate(95deg)",
              }}
              whileTap={{
                filter: "hue-rotate(90deg)",
              }}
              transition={{ duration: 1, type: "tween" }}
            />
          </div>
          <div className="items-center gap-4 mt-2 hidden sm:flex">
            <motion.div
              animate={open ? "open" : "closed"}
              whileHover={"reveal"}
              className="relative "
            >
              <motion.button
                onClick={() => setOpen((pv) => !pv)}
                className="flex items-center gap-2rounded-md text-white text-xl hover:text-secondary transition-colors"
              >
                <span>Services</span>
                <motion.span
                  className="h-[24px] flex items-center"
                  variants={iconVariants}
                >
                  <KeyboardArrowRightIcon />
                </motion.span>

                <motion.div
                  className="border-b-2 border-b-secondary w-0 absolute bottom-0 left-0 h-[calc(100%+6px)]"
                  variants={{
                    hidden: { width: "0%" },
                    reveal: { width: "100%" },
                    exit: { width: "-100%" },
                  }}
                  transition={{ duration: 0.5, type: "spring", damping: 8 }}
                ></motion.div>
              </motion.button>

              <motion.ul
                initial={wrapperVariants.closed}
                variants={wrapperVariants}
                style={{ originY: "top", translateX: "-50%" }}
                className="flex flex-col gap-2 p-2 rounded-lg bg-[#fff] shadow-xl absolute top-[120%] left-[52%] w-48 overflow-hidden"
              >
                {serviceLinks?.map((link, ind) => (
                  <Option
                    key={ind}
                    link={link?.link}
                    Icon={link.icon}
                    text={link?.title}
                  />
                ))}
              </motion.ul>
            </motion.div>
            {links?.map((link, ind) => (
              <motion.div
                key={ind}
                initial="hidden"
                animate="hidden"
                exit={"exit"}
                whileHover={"reveal"}
                className="w-full h-fit relative py-1"
                onClick={() => navigate(link?.link)}
              >
                <motion.a
                  id={`link${ind}`}
                  className={`strathut-cursor !text-xl mx-1 flex flex-col w-full relative ${
                    window.location.pathname === link?.link
                      ? "text-secondary"
                      : "text-white"
                  }`}
                  variants={{
                    hidden: {
                      color:
                        window.location.pathname === link?.link
                          ? "#02C986"
                          : "#fff",
                    },
                    reveal: { color: "#02C986" },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {link?.title}
                </motion.a>
                <motion.div
                  id={`linkUnderline${ind}`}
                  className="border-b-2 border-b-secondary w-0 absolute bottom-0 left-0 h-[calc(100%+6px)]"
                  variants={{
                    hidden: { width: "0%" },
                    reveal: { width: "100%" },
                    exit: { width: "-100%" },
                  }}
                  transition={{ duration: 0.5, type: "spring", damping: 8 }}
                ></motion.div>
              </motion.div>
            ))}
          </div>
          <div ref={containerRef} className="sm:hidden">
            <Hamburger
              toggled={isOpen}
              size={20}
              toggle={() => {
                if (isOpen) {
                  document.body.classList.remove("overflow-hidden");
                  document.body.classList.add("overflow-auto");
                } else {
                  document.body.classList.remove("overflow-auto");
                  document.body.classList.add("overflow-hidden");
                }
                toggleOpen(!isOpen);
              }}
            />
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed left-0 shadow-4xl right-0 top-[5rem] p-5 pt-0 bg-gradientPrimary2 h-[100%] z-20 overflow-clip"
                >
                  <div className="flex gap-4 justify-end flex-col h-full pb-24">
                    <motion.div
                      animate={open ? "open" : "closed"}
                      whileHover={"reveal"}
                      className="relative "
                    >
                      <motion.button
                        onClick={() => setOpen((pv) => !pv)}
                        className="flex items-center gap-2rounded-md text-white text-6xl hover:text-secondary transition-colors w-fit"
                      >
                        <span>Services</span>
                        <motion.span
                          className="h-[60px] flex items-center"
                          variants={iconVariants}
                        >
                          <KeyboardArrowRightIcon />
                        </motion.span>

                        <motion.div
                          className="border-b-2 border-b-secondary w-0 absolute bottom-0 left-0 h-[calc(100%+6px)]"
                          variants={{
                            hidden: { width: "0%" },
                            reveal: { width: "100%" },
                            exit: { width: "-100%" },
                          }}
                          transition={{
                            duration: 0.5,
                            type: "spring",
                            damping: 8,
                          }}
                        ></motion.div>
                      </motion.button>

                      <motion.ul
                        initial={wrapperVariants.closed}
                        variants={wrapperVariants}
                        style={{ originY: "top", translateX: "-50%" }}
                        className="flex flex-col gap-2 rounded-lg bg-[#111111] shadow-xl absolute bottom-[120%] left-[50%] w-full overflow-hidden"
                      >
                        {serviceLinks?.map((link, ind) => (
                          <Option
                            key={ind}
                            link={link?.link}
                            Icon={link.icon}
                            text={link?.title}
                          />
                        ))}
                      </motion.ul>
                    </motion.div>
                    {links?.map((link, ind) => (
                      <motion.div
                        key={ind}
                        initial="hidden"
                        animate="hidden"
                        exit={"exit"}
                        whileHover={"reveal"}
                        className="w-fit h-fit relative py-1"
                        onClick={() => {
                          setOpen(false);
                          toggleOpen(false);
                          navigate(link?.link);
                        }}
                      >
                        <motion.a
                          id={`link${ind}`}
                          className={`strathut-cursor text-6xl mx-1 flex flex-col w-fit relative ${
                            window.location.pathname === link?.link
                              ? "text-secondary"
                              : "text-white"
                          }`}
                          variants={{
                            hidden: {
                              color:
                                window.location.pathname === link?.link
                                  ? "#02C986"
                                  : "#fff",
                            },
                            reveal: { color: "#02C986" },
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {link?.title}
                        </motion.a>
                        <motion.div
                          id={`linkUnderline${ind}`}
                          className="border-b-2 border-b-secondary w-0 absolute bottom-0 left-0 h-[calc(100%+6px)]"
                          variants={{
                            hidden: { width: "0%" },
                            reveal: { width: "100%" },
                            exit: { width: "-100%" },
                          }}
                          transition={{
                            duration: 0.5,
                            type: "spring",
                            damping: 8,
                          }}
                        ></motion.div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Box>
        <motion.button
          className="bg-gradientPrimary3 strathut-cursor rounded-e-full rounded-s-full !text-2xl p-4 sm:py-4 sm:px-6 gap-2 !hidden sm:!flex text-nowrap w-fit sm:items-center"
          onClick={() => navigate("/new-project")}
          initial="hidden"
          whileHover={"reveal"}
          variants={{
            hidden: {
              flexDirection: "row",
              backgroundImage:
                "linear-gradient(90deg, rgb(46, 21, 87) 0%, rgb(84, 0, 226) 100%)",
            },
            reveal: {
              flexDirection: "row-reverse",
              backgroundImage:
                "linear-gradient(90deg, rgb(46, 21, 87, 0) 0%, rgba(84, 0, 226, 0) 100%)",
            },
          }}
          transition={{ duration: 0.05 }}
        >
          <motion.p
            variants={{
              hidden: {
                color: "#FFFFFF",
              },
              reveal: {
                color: "#02C986",
              },
            }}
            transition={{ duration: 0.5, type: "spring", damping: 8 }}
          >
            Start a project
          </motion.p>
          <motion.svg
            width={"1.25rem"}
            height={"1.25rem"}
            variants={{
              hidden: {
                rotate: 0,
                color: "#FFFFFF",
                border: "none",
                borderRadius: "0px",
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
      </nav>
    </Box>
  );
};

export default Header;
