import Box from "@mui/material/Box";
import East from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import React from "react";

type StudyCardProps = {
  image: string;
};

const StudyCard: React.FC<StudyCardProps> = ({ image }) => {
  const navigate = useNavigate();
  return (
    <Box className="studyCard opacity-0 p-2 sm:p-8 border rounded-xl sm:rounded-3xl border-white30 hover:p-0 hover:border-none transition-all flex flex-col gap-12 md:gap-16 hover:gap-18 hover:sm:gap-24 duration-700 ease-in-out relative bottom-0 h-fit">
      <Box
        className="w-full h-[24rem] md:h-[42rem] rounded-lg sm:rounded-2xl duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>

      <Box className="flex flex-col gap">
        <Box className="mt-8 flex justify-between">
          <p className="font-bold text-3xl">Tuboh</p>
          <p className="text-xl">Health Tech</p>
        </Box>
        <Box
          onClick={() => navigate("/case-study")}
          className="mt-8 flex gap-2 items-center hover:gap-6 strathut-cursor duration-500 ease-in-out"
        >
          <p className="text-2xl capitalize">view case study</p>
          <East />
        </Box>
      </Box>
    </Box>
  );
};

export default StudyCard;
