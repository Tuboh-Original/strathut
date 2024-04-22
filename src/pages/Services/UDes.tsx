import Box from "@mui/material/Box";
import mockup from "../../assets/images/mockup.png";
import Services from "../../components/common/Services";
import Partners from "../../components/common/Partners";
import Footer from "../../components/navigation/Footer";
import Port1 from "../../assets/images/portfolio1.png";
import Port2 from "../../assets/images/portfolio2.png";
import Port3 from "../../assets/images/portfolio3.png";
import Port4 from "../../assets/images/portfolio4.png";
import Port5 from "../../assets/images/portfolio5.png";
import Port6 from "../../assets/images/portfolio6.png";
import Port7 from "../../assets/images/portfolio7.png";
import { motion } from 'framer-motion';

const Processes = [
  {
    id: "01",
    title: "Understanding User Needs",
    desc: "We conduct thorough research to understand your target audience, their behaviors, and preferences, ensuring our designs meet their needs effectively.",
  },
  {
    id: "02",
    title: "Wireframing & Prototyping",
    desc: "We create wireframes and interactive prototypes to visualize the user flow and interface design, allowing for early feedback and iteration.",
  },
  {
    id: "03",
    title: "Visual Design",
    desc: "Our designers craft visually appealing interfaces that align with your brand identity while prioritizing usability and accessibility.",
  },
  {
    id: "04",
    title: "User Testing & Iteration",
    desc: "We conduct usability testing to gather feedback from real users, iterating on designs to optimize user experience and interface usability.",
  },
  {
    id: "05",
    title: "Implementation & Development",
    desc: "Working closely with developers, we ensure the seamless implementation of design elements, maintaining fidelity to the approved UI/UX designs.",
  },
  {
    id: "06",
    title: "Continuous Improvement",
    desc: "Even after launch, we monitor user feedback and analytics to identify areas for improvement, ensuring your digital products evolve to meet changing user needs and industry trends.",
  },
];

const Slides = [
  Port1,
  Port2,
  Port3,
  Port4,
  Port1,
  Port2,
  Port3,
  Port4,
  Port1,
  Port2,
  Port3,
  Port4,
];
const Slides2 = [
  Port4,
  Port5,
  Port6,
  Port7,
  Port4,
  Port5,
  Port6,
  Port7,
  Port4,
  Port5,
  Port6,
  Port7,
];

const UDesign = () => {
  return (
    <Box className="flex flex-col w-full items-center">
      {/* Hero */}
      <Box className="w-full pt-48 pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center">
          <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-24 text-center">
            <p className="text-4xl sm:text-8xl lg:text-[10rem] lg:leading-[8rem] font-medium text-center">
              UI/UX Design
            </p>
            <img src={mockup} alt="web mockup" />
            <p className="text-sm sm:text-xl lg:text-3xl">
              We design intuitive interfaces that prioritize user experience,
              ensuring seamless interaction and engagement. Let our UI/UX
              expertise elevate your digital products to the next level.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="w-full py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-24 items-center">
        <Box className="max-w-[1440px] flex flex-col gap-24 items-center">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-7xl font-medium">
              Designing Delight: Elevating User Experiences with Expert UI/UX
              Solutions
            </p>
            <p className="text-3xl text-textBody leading-[2.75rem]">
              Our process is designed for your success. It's designed for
              successful collaboration, transparency and efficiency.
            </p>
          </Box>
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-24 w-full">
            {Processes?.map((serv, ind) => (
              <Box key={ind} className={`flex flex-col gap-5 p-8`}>
                <p className={`text-secondary text-4xl font-bold`}>
                  {serv?.id}
                </p>
                <p className={`font-medium text-6xl`}>{serv?.title}</p>
                <p className={`text-lg font-light`}>{serv?.desc}</p>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="w-full py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-24 items-center">
        <p className="max-w-[1440px] flex flex-col gap-24 text-7xl text-left w-full font-medium">
          UI/UX Design Portfolios
        </p>
        <Box className="flex flex-col gap-8">
          <Box className="w-screen overflow-clip">
            <motion.div
              animate={{
                x: ["0%", "-100%"],
                transition: {
                  ease: "linear",
                  duration: 15,
                  repeat: Infinity,
                },
              }}
              className="flex gap-14 items-center overflow-visible"
            >
              {Slides?.map((slide, ind) => (
                // <img key={ind} src={slide} width={"100%"} height={"auto"} />
                <Box
                  key={ind}
                  className="min-w-[35rem] h-[35rem] rounded-3xl"
                  style={{
                    backgroundImage: `url(${slide})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></Box>
              ))}
            </motion.div>
          </Box>
          <Box className="w-screen overflow-clip">
            <motion.div
              animate={{
                x: ["-100%", "0%"],
                transition: {
                  ease: "linear",
                  duration: 15,
                  repeat: Infinity,
                },
              }}
              className="flex gap-14 items-center overflow-visible"
            >
              {Slides2?.map((slide, ind) => (
                // <img key={ind} src={slide} width={"100%"} height={"auto"} />
                <Box
                  key={ind}
                  className="min-w-[35rem] h-[35rem] rounded-3xl"
                  style={{
                    backgroundImage: `url(${slide})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></Box>
              ))}
            </motion.div>
          </Box>
        </Box>
      </Box>
      <Services />
      <Partners />
      <Footer />
    </Box>
  );
};

export default UDesign;
