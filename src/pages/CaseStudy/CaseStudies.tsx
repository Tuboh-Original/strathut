import Box from "@mui/material/Box";
import mockup from "../../assets/images/tubohMockup.png";
import freepik from "../../assets/images/tubohFreepik.png";
import StudyCard from "../../components/common/StudyCard";
import Partners from "../../components/common/Partners";
import Footer from "../../components/navigation/Footer";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import PageTransition from "../../components/navigation/Transition";

const CaseStudies = () => {
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
          <Box className="max-w-[1440px] flex flex-col items-center w-full">
            <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-16 text-center">
              <p className="text-5xl sm:text-8xl lg:text-[10rem] leading-[8rem] font-medium text-center">
                Case Studies
              </p>
              <p className="text-2xl md:text-3xl">
                With a focus on innovation, creativity, and data-driven
                strategies, we're here to propel your brand to new heights in
                the digital realm.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="w-full flex flex-col items-center">
          <Box className="max-w-[1440px] flex flex-col items-center w-full">
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-24 py-28 2xl:py-36 px-4 md:px-12 w-full">
              {[0, 1, 2].map((ind) => (
                <React.Fragment key={ind}>
                  <StudyCard image={mockup} />
                  <StudyCard image={freepik} />
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Box>
        {/* Our Partners */}
        <Partners />

        <Footer />
      </Box>
    </PageTransition>
  );
};

export default CaseStudies;
