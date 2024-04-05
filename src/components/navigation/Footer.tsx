import Box from "@mui/material/Box";
import StratButton from "../common/Button";
import logo from "../../assets/icons/logoWhite.svg";

const services = [
  "web design",
  "mobile app development",
  "branding",
  "Product Development",
];
const contact = ["+234 813 516 5814", "hello@strathut.com"];
const connect = ["instagram", "facebook", "twitter"];

const Footer = () => {
  return (
    <Box className="flex flex-col py-28 2xl:py-36 px-4 md:px-12 gap-14">
      <Box className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <Box className="flex flex-col gap-4">
          <p className="text-8xl leading-[6rem] font-medium">
            Let's Create Magic
          </p>
          <p className="text-textBody text-3xl">hello@strathut.com</p>
        </Box>
        <Box className="flex flex-col gap-8">
          <p className="text-3xl leading-[2.75rem] font-medium">
            Got a project idea
          </p>
          <StratButton className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px] capitalize">
            Get In Touch
          </StratButton>
        </Box>
      </Box>

      <Box className="grid grid-cols-3 gap-12">
        <Box className="flex flex-col gap-5">
          <p className="font-bold">Services</p>
          <Box className="flex flex-col gap-6">
            {services?.map((service, ind) => (
              <p key={ind} className="text-lg capitalize">
                {service}
              </p>
            ))}
          </Box>
        </Box>
        <Box className="flex flex-col gap-5">
          <p className="font-bold">Contact</p>
          <Box className="flex flex-col gap-6">
            {contact?.map((service, ind) => (
              <p key={ind} className="text-lg">
                {service}
              </p>
            ))}
          </Box>
        </Box>
        <Box className="flex flex-col gap-5">
          <p className="font-bold">Connect</p>
          <Box className="flex flex-col gap-6">
            {connect?.map((con, ind) => (
              <p key={ind} className="text-lg capitalize">
                {con}
              </p>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className="flex items-end justify-between h-16 border-t border-t-[#414141] w-full">
        <span className="w-24">
          <img src={logo} alt="Strathub white logo" />
        </span>
        <p className="text-xs text-white">© 2024 STRATHUT.Agency All rights reserved.</p>
      </Box>
    </Box>
  );
};

export default Footer;
