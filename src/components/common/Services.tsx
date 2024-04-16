import Box from "@mui/material/Box";
import mockup from "../../assets/images/tubohMockup.png";
import freepik from "../../assets/images/tubohFreepik.png";
import React from "react";
import { useTimer } from "react-timer-hook";
import Collapse from "@mui/material/Collapse";
import quote from "../../assets/icons/quotes.svg";

const services = [
  {
    id: "01",
    text: "Web Design",
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

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(0);

  const time = new Date();
  time.setSeconds(time.getSeconds() + 5);
  const { restart } = useTimer({
    time,
    onExpire: () => {
      restartTimer();
    },
  });

  function restartTimer() {
    let newService = selectedService + 1;
    console.log(newService);
    if (newService > 3) newService = 0;
    setSelectedService(-1);
    setSelectedService(newService);
    const time = new Date();
    time.setSeconds(time.getSeconds() + 5);
    restart(time, true);
  }

  React.useEffect(()=>{
    restartTimer()
  }, [])

  return (
    <Box className="py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-24 items-center bg-gradientPrimary2">
      <p className="text-7xl font-medium w-full">Our Services</p>
      <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full items-center">
        <Box className={`flex flex-col gap-16`}>
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
                } duration-700 ease-in-out transition-all hover:cursor-pointer ${
                  selectedService !== ind && "hover:text-secondary"
                }`}
              >
                <p
                  className={`text-secondary text-4xl font-bold transition-all duration-700 ease-in-out ${
                    selectedService === ind
                      ? "inline-block opacity-1"
                      : "opacity-0 hidden"
                  }`}
                >{`0${ind + 1}`}</p>
                <p
                  className={`font-semibold text-6xl transition-all duration-700 ease-in-out ${
                    selectedService === ind ? "text-secondary" : "text-textBody"
                  }`}
                >
                  {serv?.text}
                </p>
              </Box>
              <Collapse
                in={selectedService === ind}
                timeout={500}
                easing={"cubic-bezier(0.4, 0, 0.2, 1)"}
              >
                <p
                  className={`text-lg transition-all duration-700 ease-in-out ${
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
          className="w-full h-[48rem] rounded-lg transition-all duration-1000"
          style={{
            backgroundImage: `url(${services[selectedService]?.image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>
      </Box>
      <Box className="flex flex-col w-full">
        <Box className="w-full">
          <img src={quote} alt="Quote" width={"30rem"} height={"auto"} />
        </Box>
        <p className="text-8xl leading-[6rem]">
          The team's dedication, creativity, and attention to detail have
          surpassed our expectations, and we couldn't be happier with the
          results.
        </p>

        <Box className="w-full flex items-center justify-between">
          <Box className="flex flex-col">
            <p className="text-secondary font-medium text-[0.9rem] uppercase">
              TEMITOPE FAMUYIWA
            </p>
            <p className="text-textBody text-[0.9rem] uppercase">
              FOUNDER, PROTON
            </p>
          </Box>
          <img src={quote} alt="Quote" width={"30rem"} height={"auto"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
