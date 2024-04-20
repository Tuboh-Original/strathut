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
    <Box className="p-8 border rounded-3xl border-white30">
      <Box
        className="w-full h-[42rem] rounded-2xl duration-500"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></Box>
      <Box className="mt-8 flex justify-between">
        <p className="font-bold text-3xl">Tuboh</p>
        <p className="text-xl">Health Tech</p>
      </Box>
      <Box
        onClick={() => navigate("/case-study")}
        className="mt-8 flex gap-2 items-center hover:cursor-pointer hover:gap-6 duration-500 ease-in-out"
      >
        <p className="text-2xl capitalize">view case study</p>
        <East />
      </Box>
    </Box>
  );
};

export default StudyCard;
