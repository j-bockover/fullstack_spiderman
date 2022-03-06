import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Story from "./routes/story";
import Media from "./routes/media";
import Characters from "./routes/characters";
import News from "./routes/news";
import Credits from "./routes/credits";
import Suits from "./routes/suits";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="story" element={<Story />} />
      <Route path="characters" element={<Characters />} />
      <Route path="media" element={<Media />} />
      <Route path="news" element={<News />} />
      <Route path="credits" element={<Credits />} />
      <Route path="suits" element={<Suits />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
