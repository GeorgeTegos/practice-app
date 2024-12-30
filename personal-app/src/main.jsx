import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import MainArticle from "./components/MainArticle";

createRoot(document.getElementById("root")).render(
  <>
    <div id="header-section">
      <NavBar />
    </div>
    <div id="main-section">
      <div id="container-one">
        {/* BannersSection */}
        <div id="banners-section"></div>
        <MainArticle />
      </div>
      <div id="container-two"></div>
    </div>
    <div id="footer-section"></div>
  </>
);
