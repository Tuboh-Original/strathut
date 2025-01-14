import Box from "@mui/material/Box";
import StratButton from "../common/Button";
import logo from "../../assets/icons/logoWhite.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  "web development",
  "app development",
  "brand development",
  "Product Development",
];
const contact = ["+234 813 516 5814", "hello@strathut.com"];
const connect = ["instagram", "facebook", "twitter"];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Box className="w-full">
      <Box className="max-w-[1440px] flex flex-col items-center mx-auto">
        <Box className="flex flex-col py-12 md:py-18 xl:py-24 px-4 md:px-12 gap-14">
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <Box className="flex flex-col gap-4">
              <p className="text-6xl sm:text-8xl leading-[3.75rem] sm:leading-[6rem] font-medium">
                Let's Create Magic
              </p>
              <p className="text-textBody text-3xl hover:text-secondary duration-500 transition-colors">
                hello@strathut.com
              </p>
            </Box>
            <Box className="flex flex-col gap-4 sm:gap-8">
              <p className="text-3xl leading-[2.75rem] font-medium">
                Got a project idea?
              </p>
              <StratButton
                id={"button3"}
                onButton={() => navigate("/contact")}
                className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px] capitalize"
              >
                Get In Touch
              </StratButton>
            </Box>
          </Box>

          <Box className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 sm:gap-y-0 justify-between">
            <Box className="flex flex-col gap-4 sm:gap-5">
              <p className="font-bold">Services</p>
              <Box className="flex flex-col gap-3 sm:gap-6">
                {services?.map((service, ind) => (
                  <motion.a
                    key={ind}
                    className="text-lg capitalize font-light ease-in-out w-fit cursor-none"
                    id={`services${ind}`}
                    initial={{
                      color: "#fff",
                    }}
                    whileHover={{
                      color: "#02C986",
                    }}
                    transition={{ duration: 0.5, type: "spring", damping: 8 }}
                  >
                    {service}
                  </motion.a>
                ))}
              </Box>
            </Box>
            <Box className="flex flex-col gap-4 sm:gap-5">
              <p className="font-bold">Contact</p>
              <Box className="flex flex-col gap-3 sm:gap-6">
                {contact?.map((service, ind) => (
                  <motion.a
                    key={ind}
                    href={ind === 1 ? `mailto:${service}` : `tel:${service}`}
                    className="text-lg font-light w-fit cursor-none"
                    id={`contacts${ind}`}
                    initial={{
                      color: "#fff",
                    }}
                    whileHover={{
                      color: "#02C986",
                    }}
                    transition={{ duration: 0.5, type: "spring", damping: 8 }}
                  >
                    {service}
                  </motion.a>
                ))}
              </Box>
            </Box>
            <Box className="flex flex-col gap-4 sm:gap-5">
              <p className="font-bold">Connect</p>
              <Box className="flex flex-col gap-3 sm:gap-6">
                {connect?.map((con, ind) => (
                  <motion.a
                    key={ind}
                    className="text-lg capitalize font-light w-fit cursor-none"
                    id={`connect${ind}`}
                    initial={{
                      color: "#fff",
                    }}
                    whileHover={{
                      color: "#02C986",
                    }}
                    transition={{ duration: 0.5, type: "spring", damping: 8 }}
                  >
                    {con}
                  </motion.a>
                ))}
              </Box>
            </Box>
          </Box>

          <Box className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-end sm:justify-between h-16 border-t border-t-[#414141] w-full">
            <span className="w-24">
              <img src={logo} alt="Strathub white logo" />
            </span>
            <p className="text-xs text-white uppercase">
              © 2024 STRATHUT.Agency All rights reserved.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
