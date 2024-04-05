import Box from "@mui/material/Box";
import { ReactComponent as Nyt } from "../../assets/icons/NYT.svg";
import { ReactComponent as Ideo } from "../../assets/icons/ideo.svg";
import { ReactComponent as Upwork } from "../../assets/icons/upwork.svg";
import { ReactComponent as Pwc } from "../../assets/icons/pwc.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Monday } from "../../assets/icons/monday.svg";
import { ReactComponent as Ncr } from "../../assets/icons/ncr.svg";
import { ReactComponent as Ted } from "../../assets/icons/ted.svg";

const partners = [Nyt, Ideo, Upwork, Pwc, Discord, Monday, Ncr, Ted];

const Partners = () => {
  return (
    <Box className="py-28 2xl:py-36 flex flex-col items-center gap-12">
      <Box className="px-4 md:px-12 flex flex-col items-center text-center gap-12">
        <p className="text-textBody uppercase text-lg">our partners</p>
        <p className="text-2rem md:text-[3rem] lg:text-[4rem] max-w-[90%] md:max-w-[50%] leading-2.5rem md:leading-[4rem] lg:leading-[4.5rem] font-medium">
          Businesses we have supported
        </p>
        <p className="text-textBody text-3xl max-w-[95%] md:max-w-[90%]">
          At Strathut, we've empowered diverse clients – from startups to
          established enterprises – with tailored digital solutions, driving
          tangible results and surpassing their goals.
        </p>
      </Box>
      <Box className="about flex gap-4 justify-between items-center text-xl w-full overflow-hidden">
        {partners?.map((Partner, ind) => (
          <Partner key={ind} className="backdrop-blur-sm" />
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
