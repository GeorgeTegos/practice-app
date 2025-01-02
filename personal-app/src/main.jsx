import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./components/NavBar";
import MainArticle from "./components/MainArticle";
import HouseBanners from "./components/HouseBanners";
import MainCharImages from "./components/MainCharImages";

createRoot(document.getElementById("root")).render(
  <>
    <div id="header-section">
      <NavBar />
    </div>
    <div id="main-section">
      <div id="container-one">
        <HouseBanners />
        <MainArticle />
      </div>
      <div id="container-two">
        <MainCharImages />
      </div>
    </div>
    <div id="footer-section"></div>
  </>
);
