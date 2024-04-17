import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import "react-phone-number-input/style.css";
import AppLayout from "./Layouts/AppLayout";
import Homepage from "./pages/Homepage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutPage from "./pages/About";
import CaseStudies from "./pages/CaseStudy/CaseStudies";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Contact from "./pages/Contact";

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
  components: {
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       "& label.MuiFocused": {
    //         color: "#FFFFFF"
    //       },
    //       "&::before": {
    //         color: "rgba(255, 255, 255, 0.50)",
    //         borderBottom: "1px solid rgba(255, 255, 255, 0.50)",
    //       },
    //       "&:hover:not(.Mui-disabled, .Mui-error):before": {
    //         color: "rgba(255, 255, 255, 0.50)",
    //         borderBottom: "1px solid rgb(255, 255, 255)",
    //       },
    //       "&.Mui-focused:after": {
    //         color: "rgb(255, 255, 255)",
    //         borderBottom: "2px solid rgb(255, 255, 255)",
    //       },
    //     },
    //   },
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-study" element={<CaseStudy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
