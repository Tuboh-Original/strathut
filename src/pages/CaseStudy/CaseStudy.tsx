import Box from "@mui/material/Box";
import product from "../../assets/images/product.png";
import StratButton from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/navigation/Footer";
import bg from "../../assets/images/studyBg.png";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const CaseStudy = () => {
  const navigate = useNavigate();
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
    <Box className="flex flex-col w-full mt-12 gap-8 md:gap-20">
      {/* Hero */}
      <Box className="w-full pt-28 sm:pt-48 pb-20 sm:pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center">
          <Box className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-16 text-center">
            <p className="text-5xl sm:text-8xl lg:text-[10rem] lg:leading-[8rem] font-medium text-center">
              Tuboh Case Study
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="w-full flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center">
          <Box className="py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-5xl sm:text-7xl font-medium">
                Accessible Health Care
              </p>
              <p
                data-aos="fade-left"
                className="text-2xl sm:text-3xl leading-7 text-textBody sm:leading-[2.75rem]"
              >
                Lorem ipsum dolor sit amet consectetur. Elementum scelerisque
                volutpat sem non justo est nisi in.
              </p>
            </Box>
            <Box className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[0, 1, 2, 3].map((ind) => (
                <Box
                  key={ind}
                  className="studyCard opacity-0 py-3 border-t border-t-secondary"
                >
                  <p>20% Lorem ipsum dolor sit amet consectetur.</p>
                </Box>
              ))}
            </Box>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[0, 1, 2].map((ind) => (
                <Box
                  key={ind}
                  className="studyCard  h-[38rem] p-2 sm:p-8 border rounded-xl sm:rounded-3xl border-white30 hover:p-0 hover:border-none transition-all duration-700 ease-in-out"
                >
                  <Box
                    className="w-full h-full rounded-lg sm:rounded-2xl duration-500"
                    style={{
                      backgroundImage: `url(${product})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Box className="flex flex-col gap-2">
                <p className="font-medium text-5xl sm:text-6xl">
                  The Challenge
                </p>
                <p className="font-light text-lg">
                  The Design stage is a meticulous process during which we apply
                  the selected Concept for your digital product across all the
                  expanded elements of your company - brand assets for your
                  marketing department, inner pages of your website, materials
                  for your business development, and more. Once the details are
                  complete - we deliver a prototype of the work for a final
                  signoff before any development begins.
                </p>
              </Box>
              <Box className="flex flex-col gap-2">
                <p className="font-medium text-5xl sm:text-6xl">The Solution</p>
                <p className="font-light text-lg">
                  The Design stage is a meticulous process during which we apply
                  the selected Concept for your digital product across all the
                  expanded elements of your company - brand assets for your
                  marketing department, inner pages of your website, materials
                  for your business development, and more. Once the details are
                  complete - we deliver a prototype of the work for a final
                  signoff before any development begins.
                </p>
              </Box>
            </Box>
            <Box className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-24 w-full">
              {[0, 1, 2, 3].map((ind) => (
                <Box
                  key={ind}
                  className="studyCard h-[40rem] p-2 sm:p-8 border rounded-xl sm:rounded-3xl border-white30 w-full hover:p-0 hover:border-none transition-all duration-700 ease-in-out"
                >
                  <Box
                    className="w-full h-full rounded-lg sm:rounded-2xl duration-500"
                    style={{
                      backgroundImage: `url(${product})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  ></Box>
                </Box>
              ))}
            </Box>
            <Box className="flex flex-col gap-8">
              <Box className="flex flex-col gap-2">
                <p className="font-medium text-5xl sm:text-6xl">The Goal</p>
                <p className="font-light text-lg">
                  The Design stage is a meticulous process during which we apply
                  the selected Concept for your digital product across all the
                  expanded elements of your company - brand assets for your
                  marketing department, inner pages of your website, materials
                  for your business development, and more. Once the details are
                  complete - we deliver a prototype of the work for a final
                  signoff before any development begins.
                </p>
              </Box>
              <Box className="flex flex-col gap-2">
                <p className="font-medium text-5xl sm:text-6xl">
                  Insights & Learning
                </p>
                <p className="font-light text-lg">
                  The Design stage is a meticulous process during which we apply
                  the selected Concept for your digital product across all the
                  expanded elements of your company - brand assets for your
                  marketing department, inner pages of your website, materials
                  for your business development, and more. Once the details are
                  complete - we deliver a prototype of the work for a final
                  signoff before any development begins.
                </p>
              </Box>
            </Box>
            <StratButton
              id={"button7"}
              onButton={() => navigate("/case-studies")}
            >
              View all case studies
            </StratButton>
          </Box>
        </Box>
      </Box>
      <Box
        className="flex flex-col gap-8 h-[36rem] relative items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.50) 100%), url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <p className="uppercase font-light text-lg text-white">
          NEXT CASE STUDY
        </p>
        <p className="font-medium text-6xl">Tuboh</p>
        <StratButton
          id={"button8"}
          // onButton={() => navigate("/case-studies")}
        >
          View Case Study
        </StratButton>
      </Box>
      <Footer />
    </Box>
  );
};

export default CaseStudy;
