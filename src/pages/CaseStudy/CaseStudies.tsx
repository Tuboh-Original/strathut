import Box from "@mui/material/Box";
import mockup from "../../assets/images/tubohMockup.png";
import freepik from "../../assets/images/tubohFreepik.png";
import StudyCard from "../../components/common/StudyCard";
import Partners from "../../components/common/Partners";
import Footer from "../../components/navigation/Footer";
import React from "react";

const CaseStudies = () => {
  return (
    <Box className="flex flex-col w-full">
      {/* Hero */}
      <Box className="w-full pt-48 pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center">
          <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-24 text-center">
            <p className="text-[10rem] leading-[8rem] font-medium text-center">
              Case Studies
            </p>
            <p className="text-3xl">
              With a focus on innovation, creativity, and data-driven
              strategies, we're here to propel your brand to new heights in the
              digital realm.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="w-full flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center w-full">
          <Box className="grid grid-cols-2 gap-x-4 gap-y-24 py-28 2xl:py-36 px-4 md:px-12 w-full">
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
  );
};

export default CaseStudies;
