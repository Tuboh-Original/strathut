import Box from "@mui/material/Box";
import mockup from "../../assets/images/tubohMockup.png";
import freepik from "../../assets/images/tubohFreepik.png";
import React from "react";
import Collapse from "@mui/material/Collapse";
import { motion } from "framer-motion";
import quote from "../../assets/icons/quotes.svg";
import splitStringUsingRegex from "../../utils/splitStringUsingRegex";

const services = [
  {
    id: "01",
    text: "Web Design",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "We create world-class websites using modern design practices. Mobile-\
    first websites and web experiences are essential to the success of your \
    web project. While maintaining bespoke originality, our team will focus on \
    responsive design and optimize your website for any device and \
    interface. Your new website will attract desirable target audiences, boost \
    engagement, drive sales, and increase the brand value of your business.",
    image: mockup,
  },
  {
    id: "02",
    text: "Branding",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "We create world-class websites using modern design practices. Mobile-\
    first websites and web experiences are essential to the success of your \
    web project. While maintaining bespoke originality, our team will focus on \
    responsive design and optimize your website for any device and \
    interface. Your new website will attract desirable target audiences, boost \
    engagement, drive sales, and increase the brand value of your business.",
    image: freepik,
  },
  {
    id: "03",
    text: "UI/UX Design",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "We create world-class websites using modern design practices. Mobile-\
    first websites and web experiences are essential to the success of your \
    web project. While maintaining bespoke originality, our team will focus on \
    responsive design and optimize your website for any device and \
    interface. Your new website will attract desirable target audiences, boost \
    engagement, drive sales, and increase the brand value of your business.",
    image: mockup,
  },
  {
    id: "04",
    text: "Product Design",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "We create world-class websites using modern design practices. Mobile-\
    first websites and web experiences are essential to the success of your \
    web project. While maintaining bespoke originality, our team will focus on \
    responsive design and optimize your website for any device and \
    interface. Your new website will attract desirable target audiences, boost \
    engagement, drive sales, and increase the brand value of your business.",
    image: freepik,
  },
];

// function handleMouseMove(event: React.MouseEvent) {
//   // 👇️ Get the mouse position relative to the element
//   const element = event.target as HTMLInputElement;
//   return {
//     x: event?.clientX - element?.offsetLeft,
//     y: event?.pageY - element.offsetTop,
//   };
// }

const quoteText =
  "Our unparalleled technical expertise, commitment to cutting-edge solutions, and attention to detail ensure results that exceed expectations, empowering your business to thrive digitally.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(0);
  const quoteChars = splitStringUsingRegex(quoteText);

  return (
    <Box className="py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col items-center bg-gradientPrimary2 w-full">
      <Box className="max-w-[1440px] flex flex-col gap-10 sm:gap-16 items-center w-full">
        <p className="text-5xl sm:text-7xl font-medium w-full">Our Services</p>
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 w-full items-center">
          <Box className={`flex flex-col gap-10 sm:gap-16`}>
            {services?.map((serv, ind) => (
              <Box key={ind} className={`flex flex-col gap-4`}>
                <Box
                  component={"button"}
                  onClick={() => {
                    setSelectedService(-1);
                    setSelectedService(ind);
                  }}
                  className={`flex ${
                    selectedService === ind && "gap-2 items-center"
                  } duration-700 ease-in-out transition-all strathut-cursor ${
                    selectedService !== ind && "hover:text-secondary"
                  }`}
                >
                  <p
                    className={`text-secondary text-2xl sm:text-4xl font-bold transition-all duration-700 ease-in-out ${
                      selectedService === ind
                        ? "inline-block opacity-1"
                        : "opacity-0 hidden"
                    }`}
                  >{`0${ind + 1}`}</p>
                  <p
                    className={`font-semibold text-4xl sm:text-6xl transition-all duration-700 ease-in-out ${
                      selectedService === ind
                        ? "text-secondary"
                        : "text-textBody"
                    }`}
                  >
                    {serv?.text}
                  </p>
                </Box>
                <Collapse
                  in={selectedService === ind}
                  timeout={500}
                  easing={"cubic-bezier(0.4, 0, 0.2, 1)"}
                  className="flex flex-col gap-6"
                >
                  <div className="flex gap-4">
                    {serv?.tags?.map((tag, ind) => (
                      <div
                        key={ind}
                        className="studyCard py-2 px-5 border border-white40 rounded-s-full rounded-e-full bg-transparent capitalize text-white hover:border-secondary hover:text-secondary"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                  <p
                    className={`text-lg transition-all duration-700 ease-in-out mt-5 ${
                      selectedService === ind
                        ? "block opacity-1"
                        : "opacity-0 hidden"
                    }`}
                  >
                    {serv?.description}
                  </p>
                </Collapse>
              </Box>
            ))}
          </Box>
          <Box
            className={`w-full h-fit rounded-xl sm:rounded-3xl transition-all duration-700 flex items-center ease-in-out hover:border hover:border-white30 hover:p-2 hover:sm:p-8`}
          >
            <Box
              className="w-full h-[24rem] md:h-[45rem] rounded-lg sm:rounded-2xl duration-500"
              style={{
                backgroundImage: `url(${services[selectedService]?.image})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
          </Box>
        </Box>
        <Box className="flex flex-col w-full mt-24">
          <Box className="w-full">
            <img src={quote} alt="Quote" width={"30rem"} height={"auto"} />
          </Box>
          <Box className="w-full relative">
            <p className="text-3xl sm:text-8xl leading-10 sm:leading-[6rem] w-full relative text-textBody">
              {quoteText}
            </p>
            <motion.p
              initial="hidden"
              whileInView={"reveal"}
              transition={{ staggerChildren: 0.01 }}
              className="absolute left-0 top-0 text-3xl sm:text-8xl leading-10 sm:leading-[6rem] w-full text-secondary"
            >
              {quoteChars?.map((char, ind) => (
                <motion.span
                  key={ind}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </Box>

          <Box className="w-full flex items-center justify-between">
            <Box className="flex flex-col">
              <p className="text-secondary font-medium text-[0.9rem] uppercase">
                AKINWUNMI ESO
              </p>
              <p className="text-textBody text-[0.9rem] uppercase">
                FOUNDER, STRATHUT
              </p>
            </Box>
            <img src={quote} alt="Quote" width={"30rem"} height={"auto"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
