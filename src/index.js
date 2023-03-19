import './style.css';
import createHomePage from "./pageContent";
import { setStartingPosition, moveCarousel } from './carousel';

const firstLoad = (() => {
  createHomePage();
  const slides = document.querySelectorAll(".slide");
  setStartingPosition(slides);
  moveCarousel(slides, 7000);
  siteControl();
})();

function siteControl() {
  const naviTabs = document.querySelectorAll(".navi");

  naviTabs.forEach(tab => tab.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "about-us":
        window.scrollTo({ top: 940, behavior: 'smooth' });
        break;
      case "menu":
        window.scrollTo({ top: 1750, behavior: 'smooth' });
        break;
      case "gallery":
        window.scrollTo({ top: 2050, behavior: 'smooth' });
        break;
      case "reservation-button":
      case "contact-us":
        window.scrollTo({ top: 2150, behavior: 'smooth' });
        break;
    }
  }));

};
