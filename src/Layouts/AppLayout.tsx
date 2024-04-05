import { Box } from "@mui/material"
import Header from "../components/navigation/Header"
import { Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
        <Box className="font-GTWalsheim h-full w-full flex flex-col items-center">
            <Header />
            <Outlet />
        </Box>
    )
}

export default AppLayout