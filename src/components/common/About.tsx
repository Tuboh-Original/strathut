import Box from "@mui/material/Box";
import PlayArrow from "@mui/icons-material/PlayArrow";
import vidPH from "../../assets/images/videoPlaceholder.png";

const links = [
  "UX DESIGN",
  "BRAND DESIGN",
  "WEB DEVELOPMENT",
  "LOGO DESIGN",
  "APP DEVELOPMENT",
  "UI DESIGN",
  "UX DESIGN",
  "BRAND DESIGN",
  "WEB DEVELOPMENT",
  "LOGO DESIGN",
  "APP DEVELOPMENT",
  "UI DESIGN",
  "UI DESIGN",
  "UX DESIGN",
  "BRAND DESIGN",
  "WEB DEVELOPMENT",
  "LOGO DESIGN",
  "APP DEVELOPMENT",
  "UI DESIGN",
  "UI DESIGN",
  "UX DESIGN",
  "BRAND DESIGN",
  "WEB DEVELOPMENT",
  "LOGO DESIGN",
  // "APP DEVELOPMENT",
  "UX DESIGN",
];

const About = () => {
  return (
    <Box className="w-full">
      <Box className="max-w-[1440px] flex flex-col items-center mx-auto">
        <Box className="py-28 2xl:py-36 px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative overflow-clip">
          <Box className="flex flex-col gap-10">
            <p className="text-7xl font-medium">About Strathut</p>
            <p data-aos="fade-up" className="text-lg text-textBody">
              At Strathut, we're more than just a digital marketing agency;
              we're your strategic partner in navigating the ever-evolving
              digital landscape. With a focus on innovation, creativity, and
              data-driven strategies, we're here to propel your brand to new
              heights in the digital realm.
            </p>
          </Box>
          <Box className="rounded-2xl backdrop-blur-lg h-96 bg-white/30 p-6 relative z-10">
            <Box
              className="w-full h-full rounded-2xl flex items-center justify-center   "
              style={{
                backgroundImage: `url(${vidPH})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <Box className="m-auto h-36 w-36 bg-primary rounded-full flex items-center justify-center">
                <PlayArrow className="!text-7xl" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="absolute bottom-40 right-0 left-0 bg-secondary py-2 overflow-clip -rotate-12 backdrop-blur">
        <Box className="about flex gap-8 text-clip text-nowrap overflow-visible">
          {links?.map((link, ind) => (
            <p
              key={ind}
              className="uppercase font-medium text-[#111111] text-2xl"
            >
              {link}
            </p>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
