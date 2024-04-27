import { render } from "@czechitas/render";
import "../global.css";
import "./index.css";
import { Gallery } from "../components/Gallery/Gallery";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Banner } from "../components/Banner/Banner";
import { Menu } from "../components/Menu/Menu";

document.querySelector("#root").innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);

const navBtn = document.querySelector(".nav-btn");
const rollOutElm = document.querySelector(".rollout-nav");

const menuOpen = () => {
  rollOutElm.classList.toggle("nav-closed");
};

navBtn.addEventListener("click", menuOpen);
