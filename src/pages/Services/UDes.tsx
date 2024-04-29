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
    <Box className="flex flex-col w-full items-center">
      {/* Hero */}
      <Box className="w-full pt-28 sm:pt-48 pb-20 sm:pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center">
          <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-16 text-center">
            <p className="text-5xl sm:text-8xl lg:text-[10rem] lg:leading-[8rem] font-medium text-center">
              UI/UX Design
            </p>
            <img src={mockup} alt="web mockup" />
            <p data-aos="fade-up" className="text-2xl md:text-3xl">
              We design intuitive interfaces that prioritize user experience,
              ensuring seamless interaction and engagement. Let our UI/UX
              expertise elevate your digital products to the next level.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="w-full  py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
        <Box className="max-w-[1440px] flex flex-col gap-16 items-center">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-5xl sm:text-7xl font-medium">
              Designing Delight: Elevating User Experiences with Expert UI/UX
              Solutions
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
                className={`studyCard opacity-0 flex flex-col gap-3 sm:gap-5 p-2 sm:p-8`}
              >
                <p className={`text-secondary text-3xl sm:text-4xl font-bold`}>
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
      <Box className="w-full py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
        <p className="max-w-[1440px] flex flex-col gap-16 text-5xl sm:text-7xl text-left w-full font-medium">
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
  );
};

export default UDesign;
