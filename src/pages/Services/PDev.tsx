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
import { motion } from "framer-motion";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import PageTransition from "../../components/navigation/Transition";

const Processes = [
  {
    id: "01",
    title: "Idea Generation & Conceptualization",
    desc: "We collaborate with you to brainstorm and refine ideas, ensuring alignment with your business goals and user needs.",
  },
  {
    id: "02",
    title: "Market Research & Validation",
    desc: "We conduct market research and user testing to validate concepts, ensuring that the product addresses a genuine need and has a viable market.",
  },
  {
    id: "03",
    title: "Prototyping & MVP Development",
    desc: "We create prototypes and minimum viable products (MVPs) to test key features and functionalities, allowing for iterative development based on user feedback.",
  },
  {
    id: "04",
    title: "Full-scale Development",
    desc: "Our team of developers builds the product according to the finalized specifications, utilizing agile methodologies to ensure flexibility and adaptability throughout the development process.",
  },
  {
    id: "05",
    title: "Quality Assurance & Testing",
    desc: "We conduct comprehensive testing to identify and resolve any bugs or issues, ensuring the product meets high-quality standards and delivers a seamless user experience.",
  },
  {
    id: "06",
    title: "Launch & Iteration",
    desc: "We deploy the product to the market, closely monitoring user feedback and analytics to inform future iterations and enhancements, ensuring continuous improvement and optimization.",
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

const ProDev = () => {
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
      <Box className="flex flex-col w-screen items-center">
        {/* Hero */}
        <Box className="w-screen pt-28 sm:pt-48 pb-20 sm:pb-32 bg-gradientPrimary1 flex flex-col items-center">
          <Box className="max-w-[1440px] flex flex-col items-center">
            <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-16 text-center">
              <p className="text-5xl sm:text-8xl lg:text-[10rem] lg:leading-[8rem] font-medium text-center">
                Product Development
              </p>
              <img src={mockup} alt="web mockup" />
              <p data-aos="fade-up" className="text-2xl md:text-3xl">
                From concept to launch, we transform ideas into innovative
                products that resonate with your audience. Our streamlined
                approach ensures efficient development and exceptional quality,
                bringing your vision to reality.
              </p>
            </Box>
          </Box>
        </Box>
        <Box className="w-screen py-16 sm:py-28 2xl:py-36 flex flex-col gap-16 items-center">
          <Box className="max-w-[1440px] flex flex-col gap-16 items-center px-4 md:px-12 w-full">
            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-5xl sm:text-7xl font-medium">
                From Vision to Reality: Crafting Innovative Products for Your
                Success
              </p>
              <p
                data-aos="fade-left"
                className="text-2xl sm:text-3xl text-textBody leading-7 sm:leading-[2.75rem]"
              >
                Our process is designed for your success. It's designed for
                successful collaboration, transparency and efficiency.
              </p>
            </Box>
            <Box className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-24 w-full">
              {Processes?.map((serv, ind) => (
                <Box
                  key={ind}
                  className={`studyCard opacity-0 flex flex-col gap-3 sm:gap-5 sm:p-8`}
                >
                  <p
                    className={`text-secondary text-3xl sm:text-4xl font-bold`}
                  >
                    {serv?.id}
                  </p>
                  <p className={`font-medium text-4xl sm:text-6xl`}>
                    {serv?.title}
                  </p>
                  <p className={`text-lg font-light`}>{serv?.desc}</p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="w-screen py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
          <p className="max-w-[1440px] flex flex-col gap-16 text-5xl sm:text-7xl text-left w-full font-medium">
            Product Development <br />
            Portfolios
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
                className="flex gap-6 sm:gap-14 items-center overflow-visible"
              >
                {Slides?.map((slide, ind) => (
                  // <img key={ind} src={slide} width={"100%"} height={"auto"} />
                  <Box
                    key={ind}
                    className="min-w-64 sm:min-w-[35rem] h-64 sm:h-[35rem] rounded-xl sm:rounded-3xl"
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
                className="flex gap-6 sm:gap-14 items-center overflow-visible"
              >
                {Slides2?.map((slide, ind) => (
                  // <img key={ind} src={slide} width={"100%"} height={"auto"} />
                  <Box
                    key={ind}
                    className="min-w-64 sm:min-w-[35rem] h-64 sm:h-[35rem] rounded-xl sm:rounded-3xl"
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
    </PageTransition>
  );
};

export default ProDev;
