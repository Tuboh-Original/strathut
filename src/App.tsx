import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layouts/AppLayout";
import Homepage from "./pages/Homepage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

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
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";

gsap.registerPlugin(useGSAP, MotionPathPlugin, ScrollTrigger);

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
  const location = useLocation();
  // const cursorBall = document.querySelector("#cursor-ball");
  // const cursorOutline = document.querySelector("#cursor-outline");

  // document.addEventListener("mousemove", (e) => {
  //   cursorBall.style.top = e.pageY + "px";
  //   cursorBall.style.left = e.pageX + "px";

  //   cursorOutline.style.top = e.pageY + "px";
  //   cursorOutline.style.left = e.pageX + "px";
  // });

  // document.addEventListener("mouseover", (e) => {
  //   if (e?.target?.id?.toLowerCase().includes("button")) {
  //     cursorOutline?.classList?.add("cursor-outline-hover");
  //     cursorBall?.classList?.add("cursor-ball-hover");
  //   } else {
  //     cursorOutline?.classList?.remove("cursor-outline-hover");
  //     cursorBall?.classList?.remove("cursor-ball-hover");
  //   }
  // });
  // document.addEventListener("mouseout", (e) => {
  //   cursorOutline?.classList?.remove("cursor-outline-hover");
  //   cursorBall?.classList?.remove("cursor-ball-hover");
  // });

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true,
      duration: 1000,
    });
    AOS.refresh();

    const cursorBall = document.querySelector<HTMLElement>("#cursor-ball");
    const cursorOutline =
      document.querySelector<HTMLElement>("#cursor-outline");

    document.addEventListener("mousemove", (e) => {
      cursorBall!.style.top = e.pageY + "px";
      cursorBall!.style.left = e.pageX + "px";

      cursorOutline!.style.top = e.pageY + "px";
      cursorOutline!.style.left = e.pageX + "px";
    });
  }, []);
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <div id="cursor-ball" className="cursor-ball hidden sm:block"></div>
      <div id="cursor-outline" className="cursor-outline hidden sm:block"></div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
