import Box from "@mui/material/Box";
import StratButton from "../components/common/Button";
import mockup from "../assets/images/tubohMockup.png";
import freepik from "../assets/images/tubohFreepik.png";
import About from "../components/common/About";
import Services from "../components/common/Services";
import Partners from "../components/common/Partners";
import Footer from "../components/navigation/Footer";
import StudyCard from "../components/common/StudyCard";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import PageTransition from "../components/navigation/Transition";

const Homepage = () => {
  const navigate = useNavigate();
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  React.useEffect(() => {
    ScrollTrigger.batch(".studyCard", {
      interval: 0.1, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
      batchMax: 3, // maximum batch size (targets)
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
      onLeave: (batch) => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { autoAlpha: 0, overwrite: true }),
      // you can also define things like start, end, etc.
    });
  }, []);
  return (
    <PageTransition>
      <Box className="flex flex-col w-full">
        {/* Hero */}
        <Box className="w-full pt-28 sm:pt-48 pb-20 sm:pb-32 bg-gradientPrimary1 flex flex-col items-center">
          <Box className="max-w-[1440px] flex flex-col items-center">
            <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-16 text-center">
              <p className="text-5xl sm:text-8xl lg:text-9xl 2xl:text-[10rem] lg:leading-[8rem] font-semibold sm:font-medium text-center">
                Unlock Your Brand's Digital Potential
              </p>
              <p
                className="text-2xl md:text-3xl"
                data-aos="fade-up"
                data-aos-offset="500"
              >
                With a focus on innovation, creativity, and data-driven
                strategies, we're here to propel your brand to new heights in
                the digital realm.
              </p>
              <StratButton
                id={"button1"}
                onButton={() => navigate("/new-project")}
              >
                Start a project
              </StratButton>
            </Box>
          </Box>
        </Box>

        {/* About */}
        <About />

        {/* Case studies */}
        <Box className="max-w-[1440px] self-center py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-7xl font-medium">Case Studies</p>
            <p
              data-aos="fade-left"
              className="text-2xl sm:text-3xl text-textBody sm:px-20 leading-6 sm:leading-[2.75rem]"
            >
              Partnering with Purposeful Tech Innovators
            </p>
          </Box>

          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <StudyCard image={mockup} />
            <StudyCard image={freepik} />
          </Box>

          <StratButton
            id={"button2"}
            onButton={() => navigate("/case-studies")}
          >
            View all case studies
          </StratButton>
        </Box>

        {/* Our Services */}
        <Services />

        {/* Our Partners */}
        <Partners />

        <Footer />
      </Box>
    </PageTransition>
  );
};

export default Homepage;
