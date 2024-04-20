import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layouts/AppLayout";
import Homepage from "./pages/Homepage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AboutPage from "./pages/About";
import CaseStudies from "./pages/CaseStudy/CaseStudies";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import Contact from "./pages/Contact";
import NewProject from "./pages/NewProject";
import WebDev from "./pages/Services/WDev";
import UDesign from "./pages/Services/UDes";
import AppDev from "./pages/Services/ADev";
import ProDev from "./pages/Services/PDev";
import BrandDev from "./pages/Services/BDev";

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
            <Route index path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/app-development" element={<AppDev />} />
            <Route path="/product-development" element={<ProDev />} />
            <Route path="/brand-development" element={<BrandDev />} />
            <Route path="/ui-ux-design" element={<UDesign />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
