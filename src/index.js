import './style.css';
import createSite from "./pageContent";
import { setStartingPosition, moveCarousel } from './carousel';


let firstDiv = document.createElement("div");
firstDiv.setAttribute("id", "content");
firstDiv.classList.add("centered-flex");
document.body.appendChild(firstDiv);

createSite();

const slides = document.querySelectorAll(".slide");

setStartingPosition(slides);
moveCarousel(slides, 7000);
