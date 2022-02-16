import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home.js";
import Story from "./routes/story";
// import Characters from "./routes/Characters";
// import Spells from "./routes/Spells.js";
// import Potions from "./routes/Potions.js";
// import Credits from "./routes/Credits.js";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="story" element={<Story />} />
      {/* <Route path="characters" element={<Characters />} /> */}
      {/* <Route path="media" element={<Media />} /> */}
      {/* <Route path="news" element={<News />} /> */}
      {/* <Route path="credits" element={<Credits />} /> */}
    </Routes>
  </BrowserRouter>,
  rootElement
);
