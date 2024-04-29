import Box from "@mui/material/Box";
import logo from "../../assets/icons/logoWhite.svg";
import East from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import React from "react";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuItem from "@mui/material/MenuItem";
import { motion } from "framer-motion";

const links: { title: string; link: string }[] = [
  { title: "Work", link: "" },
  { title: "About", link: "/about" },
];

const serviceLinks: { title: string; link: string }[] = [
  { title: "Web Development", link: "/web-development" },
  { title: "UI/UX design", link: "/ui-ux-design" },
  { title: "Product Development", link: "/product-development" },
  { title: "Brand Development", link: "/brand-development" },
  { title: "App Development", link: "/app-development" },
];

const Header = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="absolute left-0 right-0 top-0 text-white w-full flex justify-center bg-[#111111]">
      <nav className="max-w-[1440px] px-4 md:px-10 py-6 w-full flex items-center justify-between">
        <Box className="flex gap-16 items-center">
          <div
            onClick={() => navigate("/")}
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
            <motion.button
              id={"button10"}
              className={`strathut-cursor !text-xl !capitalize flex gap-1 items-center ${
                open ? "text-secondary" : "text-white"
              }`}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              initial="hidden"
              animate="hidden"
              whileHover={"reveal"}
              whileTap={"click"}
            >
              <motion.p
                variants={{
                  hidden: {
                    color: open ? "02C986" : "#fff",
                  },
                  reveal: {
                    color: "#02C986",
                  },
                  click: {
                    color: "#02C986",
                  },
                }}
                transition={{ duration: 0.5 }}
              >
                Services
              </motion.p>
              <motion.svg
                width={"1.25rem"}
                height={"1.25rem"}
                variants={{
                  hidden: {
                    color: open ? "02C986" : "#fff",
                    rotate: 0,
                  },
                  reveal: {
                    color: "#02C986",
                    rotate: 90,
                  },
                  click: {
                    color: "#02C986",
                    rotate: 90,
                  },
                }}
                transition={{ duration: 0.5, type: "spring", damping: 8 }}
              >
                {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
              </motion.svg>
            </motion.button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  backgroundColor: "#111111",
                  "&::before": {
                    color: "#fff",
                  },
                },
              }}
              // transformOrigin={{ horizontal: "left", vertical: "top" }}
              // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {serviceLinks?.map((link, ind) => (
                <MenuItem key={ind} className="hover:!text-secondary">
                  <div
                    onClick={() => navigate(link?.link)}
                    className={`strathut-cursor !text-xl hover:!text-secondary ${
                      window.location.pathname === link?.link
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    {link?.title}
                  </div>
                </MenuItem>
              ))}
            </Menu>
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
