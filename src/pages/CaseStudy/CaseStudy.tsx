import Box from "@mui/material/Box";
import product from "../../assets/images/product.png";
import StratButton from "../../components/common/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/navigation/Footer";
import bg from "../../assets/images/studyBg.png";

const CaseStudy = () => {
  const navigate = useNavigate();
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
              <p className="text-5xl sm:text-7xl font-medium">Accessible Health Care</p>
              <p className="text-2xl sm:text-3xl leading-7 text-textBody sm:leading-[2.75rem]">
                Lorem ipsum dolor sit amet consectetur. Elementum scelerisque
                volutpat sem non justo est nisi in.
              </p>
            </Box>
            <Box className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[0, 1, 2, 3].map((ind) => (
                <Box key={ind} className="py-3 border-t border-t-secondary">
                  <p>20% Lorem ipsum dolor sit amet consectetur.</p>
                </Box>
              ))}
            </Box>
            <Box className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {[0, 1, 2].map((ind) => (
                <Box
                  key={ind}
                  className="p-2 sm:p-8 border rounded-xl sm:rounded-3xl border-white30"
                >
                  <Box
                    className="w-full h-[36rem] rounded-lg sm:rounded-2xl duration-500"
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
                <p className="font-medium text-5xl sm:text-6xl">The Challenge</p>
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
                  className="p-2 sm:p-8 border rounded-xl sm:rounded-3xl border-white30 w-full"
                >
                  <Box
                    className="w-full h-[36rem] rounded-lg sm:rounded-2xl duration-500"
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
                <p className="font-medium text-5xl sm:text-6xl">Insights & Learning</p>
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
              onButton={() => navigate("/case-studies")}
              className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px] hover:cursor-pointer"
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
          // onButton={() => navigate("/case-studies")}
          className="border-[6px] border-opacity-40 border-gray-500 backdrop-blur-[15px] hover:cursor-pointer"
        >
          View Case Study
        </StratButton>
      </Box>
      <Footer />
    </Box>
  );
};

export default CaseStudy;
