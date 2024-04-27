import Box from "@mui/material/Box";
import { motion } from "framer-motion";

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

const Processes = [
  {
    id: "01",
    title: "Conceptualization & Planning",
    desc: "We work closely with you to define the app's goals, target audience, and features, outlining the project scope, objectives, and timelines.",
  },
  {
    id: "02",
    title: "Design & Prototyping",
    desc: "Our designers create wireframes and interactive prototypes to visualize the app's user interface and experience, allowing for early feedback and iteration.",
  },
  {
    id: "03",
    title: "Development",
    desc: "Our expert developers bring the app to life using the latest technologies and coding practices, ensuring scalability, security, and performance across different platforms.",
  },
  {
    id: "04",
    title: "Testing & Quality Assurance",
    desc: "We conduct rigorous testing to identify and resolve any bugs or usability issues, ensuring the app meets high-quality standards and delivers a seamless user experience.",
  },
  {
    id: "05",
    title: "Deployment & Launch",
    desc: "We deploy the app to the respective app stores, guiding you through the submission process and ensuring a smooth launch to the market.",
  },
  {
    id: "06",
    title: "Post-Launch Support & Maintenance",
    desc: "Our support extends beyond launch day, as we provide ongoing maintenance and updates to keep the app secure, up-to-date, and optimized for performance. We also monitor user feedback and analytics to inform future enhancements and iterations, ensuring your app remains competitive and meets evolving user needs.",
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

const AppDev = () => {
  return (
    <Box className="flex flex-col w-full items-center">
      {/* Hero */}
      <Box className="w-full pt-28 sm:pt-48 pb-20 sm:pb-32 bg-gradientPrimary1 flex flex-col items-center">
        <Box className="max-w-[1440px] flex flex-col items-center">
          <Box className="w-11/12 md:w-4/5 flex flex-col items-center gap-4 sm:gap-6 lg:gap-16 2xl:gap-16 text-center">
            <p className="text-5xl sm:text-8xl lg:text-[10rem] lg:leading-[8rem] font-medium text-center">
              App Development
            </p>
            <img src={mockup} alt="web mockup" />
            <p data-aos="fade-up" className="text-2xl md:text-3xl">
              We create captivating mobile experiences that captivate users and
              drive results. Let our expert team turn your app idea into a
              reality, tailored to meet your unique needs and objectives.
            </p>
          </Box>
        </Box>
      </Box>
      <Box className="w-full py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
        <Box className="max-w-[1440px] flex flex-col gap-16 items-center">
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-5xl sm:text-7xl font-medium">
              Innovation in Your Palm: Crafting Apps That Transform Ideas into
              Reality.
            </p>
            <p data-aos="fade-left" className="text-2xl sm:text-3xl text-textBody leading-7 sm:leading-[2.75rem]">
              Our process is designed for your success. It's designed for
              successful collaboration, transparency and efficiency.
            </p>
          </Box>
          <Box className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12 sm:gap-y-24 w-full">
            {Processes?.map((serv, ind) => (
              <Box key={ind} className={`flex flex-col gap-3 sm:gap-5 p-2 sm:p-8 w-full`}>
                <p className={`text-secondary text-3xl sm:text-4xl font-bold`}>
                  {serv?.id}
                </p>
                <p className={`font-medium text-4xl sm:text-6xl`}>{serv?.title}</p>
                <p className={`text-lg font-light`}>{serv?.desc}</p>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box className="w-full py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
        <p className="max-w-[1440px] flex flex-col gap-16 text-5xl sm:text-7xl text-left w-full font-medium">
          App Development <br />
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
  );
};

export default AppDev;
