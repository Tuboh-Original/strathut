import Box from "@mui/material/Box";
import StratButton from "../components/common/Button";
import mockup from "../assets/images/tubohMockup.png";
import freepik from "../assets/images/tubohFreepik.png";
import East from "@mui/icons-material/East";
import React from "react";
import About from "../components/common/About";
import Services from "../components/common/Services";
import Partners from "../components/common/Partners";
import Footer from "../components/navigation/Footer";


const Homepage = () => {
  React.useEffect(() => {
    // gsap.to(".about", {
    //   // x: 10,
    //   // y: 10,
    //   z: 10,
    //   duration: 2,
    //   repeat: -1,
    // });
  }, []);
  return (
    <Box className="max-w-[1440px] flex flex-col w-full">
      {/* Hero */}
      <Box className="w-full pt-48 pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-24 text-center">
          <p className="text-[10rem] leading-[8rem] font-medium text-center">
            Unlock Your Brand's Digital Potential
          </p>
          <p className="text-3xl">
            With a focus on innovation, creativity, and data-driven strategies,
            we're here to propel your brand to new heights in the digital realm.
          </p>
          <StratButton className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px]">
            Start a project
          </StratButton>
        </Box>
      </Box>

      {/* About */}
      <About />
      

      {/* Case studies */}
      <Box className="py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-24 items-center">
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-7xl font-medium">Case Studies</p>
          <p className="text-3xl text-textBody px-20 leading-[2.75rem]">
            Partnering with Purposeful Tech Innovators
          </p>
        </Box>

        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <Box className="p-8 border rounded-3xl border-white30">
            <Box
              className="w-full h-[36rem] rounded-2xl duration-500"
              style={{
                backgroundImage: `url(${mockup})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box className="mt-8 flex justify-between">
              <p className="font-bold text-3xl">Tuboh</p>
              <p className="text-xl">Health Tech</p>
            </Box>
            <Box className="mt-8 flex gap-2 items-center hover:cursor-pointer hover:gap-6 duration-500 ease-in-out">
              <p className="text-2xl capitalize">view case study</p>
              <East />
            </Box>
          </Box>
          <Box className="p-8 border rounded-3xl border-white30">
            <Box
              className="w-full h-[36rem] rounded-2xl duration-500"
              style={{
                backgroundImage: `url(${freepik})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>
            <Box className="mt-8 flex justify-between">
              <p className="font-bold text-3xl">Tuboh</p>
              <p className="text-xl">Health Tech</p>
            </Box>
            <Box className="mt-8 flex gap-2 items-center hover:cursor-pointer hover:gap-6 duration-500 ease-in-out">
              <p className="text-2xl capitalize">view case study</p>
              <East />
            </Box>
          </Box>
        </Box>

        <StratButton className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px]">
          View all case studies
        </StratButton>
      </Box>

      {/* Our Services */}
      <Services />

      {/* Our Partners */}
      {/* <Partners /> */}

      <Footer />
    </Box>
  );
};

export default Homepage;
