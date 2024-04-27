import { Box } from "@mui/material";
import Header from "../components/navigation/Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <Box className="font-GTWalsheim h-full w-full flex flex-col items-center download">
      {/* <div id="follower">
        <div id="circle1"></div>
        <div id="circle2"></div>
      </div> */}
      <Header />
      <Outlet />
    </Box>
  );
};

export default AppLayout;
