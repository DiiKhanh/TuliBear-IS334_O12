import React from "react";

import Router from "~/routes/routes";
import useScrollToTop from "./hooks/useScrollToTop.js";
import CssBaseline from "@mui/material/CssBaseline";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/zoom";


function App() {
  useScrollToTop();
  return (
    <React.Fragment>
      <CssBaseline />
      <Router />
    </React.Fragment>
  );
}

export default App;
