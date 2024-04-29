import Box from "@mui/material/Box";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Processes = [
  {
    id: "01",
    title: "Discovery",
    desc: "We begin by thoroughly understanding our clients' objectives, target audience, and industry landscape. Through collaborative discussions and research, we identify key project goals and requirements.",
  },
  {
    id: "02",
    title: "Strategy",
    desc: "Based on the insights gathered during the discovery phase, we develop a tailored strategy that aligns with our clients' business objectives. This strategy serves as a roadmap, outlining project timelines, deliverables, and milestones.",
  },
  {
    id: "03",
    title: "Design",
    desc: "Our team of experienced designers creates visually stunning and intuitive solutions that reflect our clients' brand identity. Through iterative design processes and client feedback, we refine the visual elements to ensure they meet and exceed expectations.",
  },
  {
    id: "04",
    title: "Development",
    desc: "Using the latest technologies and best practices, our skilled developers bring the design to life. We prioritize clean code, performance optimization, and cross-platform compatibility to ensure a seamless user experience.",
  },
  {
    id: "05",
    title: "Deployment",
    desc: "Once development is complete, we rigorously test the solution to identify and address any issues. We work closely with our clients to deploy the solution, providing guidance and support throughout the launch process.",
  },
  {
    id: "06",
    title: "Iteration",
    desc: "We believe in continuous improvement, which is why we monitor the performance of the solution post-launch. By gathering user feedback and analyzing data, we identify areas for enhancement and iterate on the solution to ensure ongoing success.",
  },
];

const Process = () => {
  
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
    <Box className="w-full py-16 sm:py-28 2xl:py-36 px-4 md:px-12 flex flex-col gap-16 items-center">
      <Box className="max-w-[1440px] flex flex-col gap-16 items-center">
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <p className="text-7xl font-medium">Our Process</p>
          <p
            data-aos="fade-left"
            className="text-2xl sm:text-3xl text-textBody sm:px-20 leading-6 sm:leading-[2.75rem]"
          >
            At Strathut, we follow a streamlined process to ensure the success
            of every client project
          </p>
        </Box>
        <Box className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-24 w-full">
          {Processes?.map((serv, ind) => (
            <Box
              key={ind}
              className={`studyCard opacity-0 flex flex-col gap-3`}
            >
              <Box
                className={`flex gap-2 items-center hover:cursor-pointer hover:text-secondary`}
              >
                <p className={`text-secondary text-2xl sm:text-4xl font-bold`}>
                  {serv?.id}
                </p>
                <p
                  className={`font-semibold text-4xl sm:text-6xl text-secondary`}
                >
                  {serv?.title}
                </p>
              </Box>
              <p className={`text`}>{serv?.desc}</p>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Process;
