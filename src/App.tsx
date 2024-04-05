import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css'
import AppLayout from "./Layouts/AppLayout";
import Homepage from "./pages/Homepage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E007C",
    },
    secondary: {
      main: "#02C986",
    },
  },
  typography: {
    fontFamily: "'GT Walsheim', sans-serif;",
  },
});

function App() {

  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
