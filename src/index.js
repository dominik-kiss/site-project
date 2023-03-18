import './style.css';
import homePage from "./pageContent";
import aboutUsPage from './aboutUs';
import { setStartingPosition, moveCarousel } from './carousel';

const firstLoad = (() => {
  let firstDiv = document.createElement("div");
  firstDiv.setAttribute("id", "content");
  firstDiv.classList.add("centered-flex");
  document.body.appendChild(firstDiv);

  siteControl();
})();

function siteControl(tab) {
  switch (tab) {
    case "about-us":
      aboutUsPage();
      break;
    case "menu":
      break;
    case "contact-us":
    case "reservation-button":
      break;
    default:
      homePage();
      const slides = document.querySelectorAll(".slide");
      setStartingPosition(slides);
      moveCarousel(slides, 7000);
  }
  
  handleTabSwitch();
};

function handleTabSwitch() {
  // Set up event listeners for the site navigation tabs
  const naviTabs = document.querySelectorAll(".navi");
  naviTabs.forEach(tab => tab.addEventListener("click", (event) => {
  // When one of the tabs is clicked...
    // Store the id of the clicked tab for later reference
    let tabClicked = event.target.id;

    // Clear all child nodes from under the "content" div
    document.getElementById("content").textContent = "";

    // Populate the page with the HTML content and styles of the tab that was clicked
    siteControl(tabClicked);
  }));
}