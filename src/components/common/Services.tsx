import Box from "@mui/material/Box";
import mockup from "../../assets/images/tubohMockup.png";
import freepik from "../../assets/images/tubohFreepik.png";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef } from "react";
import quote from "../../assets/icons/quotes.svg";
import splitStringUsingRegex from "../../utils/splitStringUsingRegex";

const services = [
  {
    id: "01",
    text: "Web Development",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "At Strathut, we specialize in creating world-class websites using modern design practices. We understand the importance of mobile-first websites and web experiences in today's digital landscape. Our team is dedicated to maintaining bespoke originality while focusing on responsive design to ensure your website looks stunning and functions seamlessly on any device and interface. With our expertly crafted websites, you'll attract desirable target audiences, boost engagement, drive sales, and elevate the brand value of your business",
    image: mockup,
  },
  {
    id: "02",
    text: "UI/UX Design",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "At Strathut, we specialize in creating world-class websites using modern design practices. We understand the importance of mobile-first websites and web experiences in today's digital landscape. Our team is dedicated to maintaining bespoke originality while focusing on responsive design to ensure your website looks stunning and functions seamlessly on any device and interface. With our expertly crafted websites, you'll attract desirable target audiences, boost engagement, drive sales, and elevate the brand value of your business",
    image: freepik,
  },
  {
    id: "03",
    text: "Product Development",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "At Strathut, we specialize in creating world-class websites using modern design practices. We understand the importance of mobile-first websites and web experiences in today's digital landscape. Our team is dedicated to maintaining bespoke originality while focusing on responsive design to ensure your website looks stunning and functions seamlessly on any device and interface. With our expertly crafted websites, you'll attract desirable target audiences, boost engagement, drive sales, and elevate the brand value of your business",
    image: mockup,
  },
  {
    id: "04",
    text: "Brand Development",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "At Strathut, we specialize in creating world-class websites using modern design practices. We understand the importance of mobile-first websites and web experiences in today's digital landscape. Our team is dedicated to maintaining bespoke originality while focusing on responsive design to ensure your website looks stunning and functions seamlessly on any device and interface. With our expertly crafted websites, you'll attract desirable target audiences, boost engagement, drive sales, and elevate the brand value of your business",
    image: freepik,
  },
  {
    id: "05",
    text: "App Development",
    tags: ["travel", "health", "landing", "web design", "SaaS"],
    description:
      "At Strathut, we specialize in creating world-class websites using modern design practices. We understand the importance of mobile-first websites and web experiences in today's digital landscape. Our team is dedicated to maintaining bespoke originality while focusing on responsive design to ensure your website looks stunning and functions seamlessly on any device and interface. With our expertly crafted websites, you'll attract desirable target audiences, boost engagement, drive sales, and elevate the brand value of your business",
    image: freepik,
  },
];

const quoteText =
  "Our unparalleled technical expertise, commitment to cutting-edge solutions, and attention to detail ensure results that exceed expectations, empowering your business to thrive digitally.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Services = () => {
  // const [selectedService, setSelectedService] = React.useState(0);
  const quoteChars = splitStringUsingRegex(quoteText);

  const containerRef = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);
  const container4Ref = useRef(null);
  const container5Ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2Ref,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: container3Ref,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgress4 } = useScroll({
    target: container4Ref,
    offset: ["start end", "end end"],
  });
  const { scrollYProgress: scrollYProgress5 } = useScroll({
    target: container5Ref,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-100%", "0%"]
  );
  const topShadowValue = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25%", "100%"]
  );

  const bottomShadowValue2 = useTransform(
    scrollYProgress2,
    [0, 1],
    ["-100%", "0%"]
  );
  const topShadowValue2 = useTransform(
    scrollYProgress2,
    [0, 1],
    ["-25%", "100%"]
  );

  const bottomShadowValue3 = useTransform(
    scrollYProgress3,
    [0, 1],
    ["-100%", "0%"]
  );
  const topShadowValue3 = useTransform(
    scrollYProgress3,
    [0, 1],
    ["-25%", "100%"]
  );

  const bottomShadowValue4 = useTransform(
    scrollYProgress4,
    [0, 1],
    ["-100%", "0%"]
  );
  const topShadowValue4 = useTransform(
    scrollYProgress4,
    [0, 1],
    ["-25%", "100%"]
  );

  const bottomShadowValue5 = useTransform(
    scrollYProgress5,
    [0, 1],
    ["-100%", "0%"]
  );
  const topShadowValue5 = useTransform(
    scrollYProgress5,
    [0, 1],
    ["-25%", "100%"]
  );
  const imageValue = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const imageValue2 = useTransform(scrollYProgress2, [0, 1], ["-100%", "0%"]);
  const imageValue3 = useTransform(scrollYProgress3, [0, 1], ["-100%", "0%"]);
  const imageValue4 = useTransform(scrollYProgress4, [0, 1], ["-100%", "0%"]);
  const imageValue5 = useTransform(scrollYProgress5, [0, 1], ["-100%", "0%"]);
  const shouldUseReducedMotion = useReducedMotion();

  return (
    <Box className="py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col items-center bg-gradientPrimary2 w-full">
      <Box className="max-w-[1440px] flex flex-col gap-10 sm:gap-16 items-center w-full">
        <p className="text-5xl sm:text-7xl font-medium w-full">Our Services</p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-4 lg:gap-16 items-center min-h-screen overflow-hidden"
          ref={containerRef}
          style={{ margin: "20vh auto" }}
        >
          <div className={`flex flex-col gap-4`}>
            <Box
              className={`flex gap-2 items-center duration-700 ease-in-out transition-all strathut-cursor text-secondary`}
            >
              <p
                className={`text-secondary text-2xl sm:text-4xl font-bold transition-all duration-700 ease-in-out`}
              >
                {services[0]?.id}
              </p>
              <p
                className={`font-semibold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl transition-all duration-700 ease-in-out text-left `}
              >
                {services[0]?.text}
              </p>
            </Box>
            <div data-aos="fade-up" className="flex flex-col gap-6">
              <div className="flex gap-4 flex-wrap">
                {services[0]?.tags?.map((tag, ind) => (
                  <div
                    key={ind}
                    className="md:studyCard py-2 px-5 border border-white40 rounded-s-full rounded-e-full bg-transparent capitalize text-white hover:border-secondary hover:text-secondary"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p
                className={`text-lg transition-all duration-700 ease-in-out mt-5`}
              >
                {services[0]?.description}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-fit mt-4 rounded-xl sm:rounded-3xl transition-all duration-700 relative flex items-center justify-center ease-in-out hover:border hover:border-white30 hover:p-2 hover:md:p-4`}
          >
            <motion.div
              className="img-inner"
              style={{ translateX: shouldUseReducedMotion ? 0 : imageValue }}
            >
              {!shouldUseReducedMotion && (
                <motion.div
                  className="bottom-shadow"
                  style={{ translateX: bottomShadowValue }}
                />
              )}
              <motion.img
                className="w-fit lg:w-full h-[36rem] lg:h-auto rounded-lg sm:rounded-2xl duration-500 hover:cursor-grabbing relative z-[1]"
                src={services[0]?.image}
                drag
                dragConstraints={{
                  top: -10,
                  right: 10,
                  left: -10,
                  bottom: 10,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
              />
              {!shouldUseReducedMotion && (
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue }}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen overflow-hidden"
          ref={container2Ref}
          style={{ margin: "20vh auto" }}
        >
          <div className={`flex flex-col gap-4`}>
            <Box
              className={`flex gap-2 items-center duration-700 ease-in-out transition-all strathut-cursor text-secondary`}
            >
              <p
                className={`text-secondary text-2xl sm:text-4xl font-bold transition-all duration-700 ease-in-out`}
              >
                {services[1]?.id}
              </p>
              <p
                className={`font-semibold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl transition-all duration-700 ease-in-out text-left `}
              >
                {services[1]?.text}
              </p>
            </Box>
            <div data-aos="fade-up" className="flex flex-col gap-6">
              <div className="flex gap-4 flex-wrap">
                {services[1]?.tags?.map((tag, ind) => (
                  <div
                    key={ind}
                    className="md:studyCard py-2 px-5 border border-white40 rounded-s-full rounded-e-full bg-transparent capitalize text-white hover:border-secondary hover:text-secondary"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p
                className={`text-lg transition-all duration-700 ease-in-out mt-5`}
              >
                {services[1]?.description}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-fit mt-4 rounded-xl sm:rounded-3xl transition-all duration-700 relative flex items-center justify-center ease-in-out hover:border hover:border-white30 hover:p-2 hover:md:p-4`}
          >
            <motion.div
              className="img-inner"
              style={{ translateX: shouldUseReducedMotion ? 0 : imageValue2 }}
            >
              {!shouldUseReducedMotion && (
                <motion.div
                  className="bottom-shadow"
                  style={{ translateX: bottomShadowValue2 }}
                />
              )}
              <motion.img
                className="w-fit lg:w-full h-[36rem] lg:h-auto rounded-lg sm:rounded-2xl duration-500 hover:cursor-grabbing relative z-[1]"
                src={services[1]?.image}
                drag
                dragConstraints={{
                  top: -10,
                  right: 10,
                  left: -10,
                  bottom: 10,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
              />
              {!shouldUseReducedMotion && (
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue2 }}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen overflow-hidden"
          ref={container3Ref}
          style={{ margin: "20vh auto" }}
        >
          <div className={`flex flex-col gap-4`}>
            <Box
              className={`flex gap-2 items-center duration-700 ease-in-out transition-all strathut-cursor text-secondary`}
            >
              <p
                className={`text-secondary text-2xl sm:text-4xl font-bold transition-all duration-700 ease-in-out`}
              >
                {services[2]?.id}
              </p>
              <p
                className={`font-semibold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl transition-all duration-700 ease-in-out text-left `}
              >
                {services[2]?.text}
              </p>
            </Box>
            <div data-aos="fade-up" className="flex flex-col gap-6">
              <div className="flex gap-4 flex-wrap">
                {services[2]?.tags?.map((tag, ind) => (
                  <div
                    key={ind}
                    className="md:studyCard py-2 px-5 border border-white40 rounded-s-full rounded-e-full bg-transparent capitalize text-white hover:border-secondary hover:text-secondary"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p
                className={`text-lg transition-all duration-700 ease-in-out mt-5`}
              >
                {services[2]?.description}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-fit mt-4 rounded-xl sm:rounded-3xl transition-all duration-700 relative flex items-center justify-center ease-in-out hover:border hover:border-white30 hover:p-2 hover:md:p-4`}
          >
            <motion.div
              className="img-inner"
              style={{ translateX: shouldUseReducedMotion ? 0 : imageValue3 }}
            >
              {!shouldUseReducedMotion && (
                <motion.div
                  className="bottom-shadow"
                  style={{ translateX: bottomShadowValue3 }}
                />
              )}
              <motion.img
                className="w-fit lg:w-full h-[36rem] lg:h-auto rounded-lg sm:rounded-2xl duration-500 hover:cursor-grabbing relative z-[1]"
                src={services[2]?.image}
                drag
                dragConstraints={{
                  top: -10,
                  right: 10,
                  left: -10,
                  bottom: 10,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
              />
              {!shouldUseReducedMotion && (
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue3 }}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen overflow-hidden"
          ref={container4Ref}
          style={{ margin: "20vh auto" }}
        >
          <div className={`flex flex-col gap-4`}>
            <Box
              className={`flex gap-2 items-center duration-700 ease-in-out transition-all strathut-cursor text-secondary`}
            >
              <p
                className={`text-secondary text-2xl sm:text-4xl font-bold transition-all duration-700 ease-in-out`}
              >
                {services[3]?.id}
              </p>
              <p
                className={`font-semibold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl transition-all duration-700 ease-in-out text-left `}
              >
                {services[3]?.text}
              </p>
            </Box>
            <div data-aos="fade-up" className="flex flex-col gap-6">
              <div className="flex gap-4 flex-wrap">
                {services[3]?.tags?.map((tag, ind) => (
                  <div
                    key={ind}
                    className="md:studyCard py-2 px-5 border border-white40 rounded-s-full rounded-e-full bg-transparent capitalize text-white hover:border-secondary hover:text-secondary"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p
                className={`text-lg transition-all duration-700 ease-in-out mt-5`}
              >
                {services[3]?.description}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-fit mt-4 rounded-xl sm:rounded-3xl transition-all duration-700 relative flex items-center justify-center ease-in-out hover:border hover:border-white30 hover:p-2 hover:md:p-4`}
          >
            <motion.div
              className="img-inner"
              style={{ translateX: shouldUseReducedMotion ? 0 : imageValue4 }}
            >
              {!shouldUseReducedMotion && (
                <motion.div
                  className="bottom-shadow"
                  style={{ translateX: bottomShadowValue4 }}
                />
              )}
              <motion.img
                className="w-fit lg:w-full h-[36rem] lg:h-auto rounded-lg sm:rounded-2xl duration-500 hover:cursor-grabbing relative z-[1]"
                src={services[3]?.image}
                drag
                dragConstraints={{
                  top: -10,
                  right: 10,
                  left: -10,
                  bottom: 10,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
              />
              {!shouldUseReducedMotion && (
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue4 }}
                />
              )}
            </motion.div>
          </div>
        </div>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen overflow-hidden"
          ref={container5Ref}
          style={{ margin: "20vh auto" }}
        >
          <div className={`flex flex-col gap-4`}>
            <Box
              className={`flex gap-2 items-center duration-700 ease-in-out transition-all strathut-cursor text-secondary`}
            >
              <p
                className={`text-secondary text-2xl sm:text-4xl font-bold transition-all duration-700 ease-in-out`}
              >
                {services[4]?.id}
              </p>
              <p
                className={`font-semibold text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl transition-all duration-700 ease-in-out text-left `}
              >
                {services[4]?.text}
              </p>
            </Box>
            <div data-aos="fade-up" className="flex flex-col gap-6">
              <div className="flex gap-4 flex-wrap">
                {services[4]?.tags?.map((tag, ind) => (
                  <div
                    key={ind}
                    className="md:studyCard py-2 px-5 border border-white40 rounded-s-full rounded-e-full bg-transparent capitalize text-white hover:border-secondary hover:text-secondary"
                  >
                    {tag}
                  </div>
                ))}
              </div>
              <p
                className={`text-lg transition-all duration-700 ease-in-out mt-5`}
              >
                {services[4]?.description}
              </p>
            </div>
          </div>
          <div
            className={`w-full h-fit mt-4 rounded-xl sm:rounded-3xl transition-all duration-700 relative flex items-center justify-center ease-in-out hover:border hover:border-white30 hover:p-2 hover:md:p-4`}
          >
            <motion.div
              className="img-inner"
              style={{ translateX: shouldUseReducedMotion ? 0 : imageValue5 }}
            >
              {!shouldUseReducedMotion && (
                <motion.div
                  className="bottom-shadow"
                  style={{ translateX: bottomShadowValue5 }}
                />
              )}
              <motion.img
                className="w-fit lg:w-full h-[36rem] lg:h-auto rounded-lg sm:rounded-2xl duration-500 hover:cursor-grabbing relative z-[1]"
                src={services[4]?.image}
                drag
                dragConstraints={{
                  top: -10,
                  right: 10,
                  left: -10,
                  bottom: 10,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
              />
              {!shouldUseReducedMotion && (
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue5 }}
                />
              )}
            </motion.div>
          </div>
        </div>
        <Box className="flex flex-col w-full mt-24">
          <Box className="w-full">
            <img src={quote} alt="Quote" width={"30rem"} height={"auto"} />
          </Box>
          <Box className="w-full relative">
            <p className="text-3xl sm:text-8xl leading-10 sm:leading-[6rem] w-full relative text-textBody">
              {quoteText}
            </p>
            <motion.p
              initial="hidden"
              whileInView={"reveal"}
              transition={{ staggerChildren: 0.01 }}
              className="absolute left-0 top-0 text-3xl sm:text-8xl leading-10 sm:leading-[6rem] w-full text-secondary"
            >
              {quoteChars?.map((char, ind) => (
                <motion.span
                  key={ind}
                  transition={{ duration: 0.5 }}
                  variants={charVariants}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </Box>

          <Box className="w-full flex items-center justify-between">
            <Box className="flex flex-col">
              <p className="text-secondary font-medium text-[0.9rem] uppercase">
                AKINWUNMI ESO
              </p>
              <p className="text-textBody text-[0.9rem] uppercase">
                FOUNDER, STRATHUT
              </p>
            </Box>
            <img src={quote} alt="Quote" width={"30rem"} height={"auto"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Services;
