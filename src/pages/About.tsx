import Box from "@mui/material/Box";
import About from "../components/common/About";
import Process from "../components/common/Process";
import Services from "../components/common/Services";
import Partners from "../components/common/Partners";
import Footer from "../components/navigation/Footer";

const AboutPage = () => {
  return (
    <Box className="max-w-[1440px] flex flex-col w-full">
      {/* Hero */}
      <Box className="w-full pt-48 pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-24 text-center">
          <p className="text-6xl sm:text-8xl lg:text-[10rem] lg:leading-[8rem] font-medium text-center">
            We Are Your Digital Transformation Partner
          </p>
          <p className="text-3xl">
            With a focus on innovation, creativity, and data-driven strategies,
            we're here to propel your brand to new heights in the digital realm.
          </p>
        </Box>
      </Box>

      {/* About */}
      <About />

      {/* Process */}
      <Process />

      {/* Our Services */}
      <Services />

      {/* Our Partners */}
      <Partners />

      <Footer />
    </Box>
  );
};

export default AboutPage;
