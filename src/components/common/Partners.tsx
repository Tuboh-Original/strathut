import Box from "@mui/material/Box";
import Nyt from "../../assets/icons/NYT.svg";
import Ideo from "../../assets/icons/ideo.svg";
import Upwork from "../../assets/icons/upwork.svg";
import Pwc from "../../assets/icons/pwc.svg";
import Discord from "../../assets/icons/discord.svg";
import Monday from "../../assets/icons/monday.svg";
import Ncr from "../../assets/icons/ncr.svg";
import Ted from "../../assets/icons/ted.svg";

const partners = [
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
  Nyt,
  Ideo,
  Upwork,
  Pwc,
  Discord,
  Monday,
  Ncr,
  Ted,
];

const Partners = () => {
  return (
    <Box className="w-full overflow-clip">
      <Box className="max-w-[1440px] flex flex-col items-center mx-auto">
        <Box className="py-28 2xl:py-36 flex flex-col items-center gap-12 overflow-clip">
          <Box className="px-4 md:px-12 flex flex-col items-center text-center gap-12">
            <p className="text-textBody uppercase text-lg">our partners</p>
            <p className="text-2rem md:text-[3rem] lg:text-[4rem] max-w-[80%] md:max-w-[30%] leading-2.5rem md:leading-[4rem] lg:leading-[4.5rem] font-medium">
              Businesses we have supported
            </p>
            <p className="text-textBody text-3xl max-w-[95%] md:max-w-[45%]">
              At Strathut, we've empowered diverse clients – from startups to
              established enterprises – with tailored digital solutions, driving
              tangible results and surpassing their goals.
            </p>
          </Box>
          <Box className="w-screen overflow-clip">
            <Box className="about flex gap-14 items-center overflow-visible">
              {partners?.map((partner, ind) => (
                <img key={ind} src={partner} width={"100%"} height={"auto"} />
                // <Box
                //   key={ind}
                //   className="w-24 h-12"
                //   style={{
                //     backgroundImage: `url(${partner})`,
                //     backgroundSize: "auto",
                //     backgroundRepeat: "no-repeat",
                //     backgroundPosition: "center",
                //   }}
                // ></Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
