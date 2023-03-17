(self["webpackChunksite_project"] = self["webpackChunksite_project"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

/* import createSite from "./pageContent"; */

/* import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

library.add(faCheck);
dom.watch();
 */

// Create the main "header" element
let firstDiv = document.createElement("div");
firstDiv.setAttribute("id", "content");
firstDiv.classList.add("centered-flex");
document.appendChild(firstDiv);


function createSite() {

  const navigationOptions = ["Home", "About Us", "Menu", "Contact Us"];
  const middleTextContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sem at ipsum consequat hendrerit quis at tortor. Duis nec dignissim ex.";
  const chefTextContent = ["OUR CHEF", "Randall Rishi", "Phasellus rutrum odio vel mattis semper. Etiam dignissim ante arcu, vel fermentum dolor vulputate vel. Proin facilisis tempus accumsan. Cras sed volutpat arcu. Maecenas ut sollicitudin mauris. Morbi elementum nibh sit amet nibh vestibulum, congue porta massa laoreet. Sed accumsan egestas magna, nec euismod est tincidunt ullamcorper. Cras porta ipsum dapibus, cursus metus nec, venenatis nunc. Proin molestie, lectus a auctor varius, magna nulla pellentesque odio, ac eleifend sapien magna et metus. Aliquam sed augue libero. Fusce eget pulvinar massa, eu fermentum sem. Nam pellentesque, nisi et scelerisque pretium, nisl metus elementum nibh, eu accumsan metus erat eget ante. Donec in vestibulum nisi. Duis vitae felis non mauris scelerisque auctor quis eget dolor. In a dignissim lacus, eu auctor ex."];

  // Cache the main "content" element, which will contain everything on the page
  const content = document.querySelector("#content");

  /******** HEADER ***********/

  // Create the main "header" element
  let header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("centered-flex");
  content.appendChild(header);

  // Create the "ul" element for the Site Navigation Menu
  let headerTabs = document.createElement("ul");
  headerTabs.setAttribute("id", "header-tabs");
  headerTabs.classList.add("centered-flex");
  header.appendChild(headerTabs);

  // Create list elements of the Site Navigation Menu
  for (i in navigationOptions) {
    let li = document.createElement("li");
    li.innerHTML = navigationOptions[i];
    headerTabs.appendChild(li);
  }

  /******** Carousel ***********/

  // Create the main "slider" element
  let slider = document.createElement("div");
  slider.setAttribute("id", "slider");
  content.appendChild(slider);


  // Create the four slides of the carousel with the bg images added
  for (let i = 0; i < 4; i++) {
    let slide = document.createElement("div");
    slide.style.backgroundImage = `url('../src/media/restaurant${i+1}.jpg')`;
    slide.classList.add("slide");
    slider.appendChild(slide);
  }
  // Add the "first-pic" id to the top picture, which sets its "z-index" to be on top, and cover the initial transition of the slides
  slider.firstChild.setAttribute("id", "first-pic");

  /******** Logo container ***********/

  // Create the logo container element
  let logoContainer = document.createElement("div");
  logoContainer.setAttribute("id", "logo-container");
  logoContainer.classList.add("centered-flex");
  content.appendChild(logoContainer);

  // Create the logo element for the logo image
  let logo = document.createElement("img");
  logo.setAttribute("id", "logo");
  logo.src = "../src/media/logo.png";
  logoContainer.appendChild(logo);

  // Create the logotext element for the "motto"
  let logoText = document.createElement("div");
  logoText.setAttribute("id", "logo-text");
  logoText.innerHTML = "Above the city...";
  logoContainer.appendChild(logoText);

  // Create the reservation button element
  let reservationButton = document.createElement("div");
  reservationButton.setAttribute("id", "reservation-button");
  reservationButton.innerHTML = "Reservation";
  logoContainer.appendChild(reservationButton);


  /******** Carousel dots ***********/

  // Add three dots to the bottom of the carousel, to display at what stage the carousel is

  let carouselDots = document.createElement("div");
  carouselDots.setAttribute("id", "carousel-dots");
  carouselDots.classList.add("centered-flex");
  content.appendChild(carouselDots);

  for (let i = 0; i < 3; i++) {
    let dot = document.createElement("p");
    dot.innerHTML = ".";
    carouselDots.appendChild(dot);
  }

  /******** Midle content ***********/

  // Create main container for the middle content, and the two containers within

  let middleContent = document.createElement("div");
  middleContent.setAttribute("id", "middle-content");
  content.appendChild(middleContent);

  let middleTop = document.createElement("div");
  middleTop.setAttribute("id", "middle-top");
  middleTop.innerHTML = middleTextContent;
  middleTop.style.textAlign = "center";
  middleContent.appendChild(middleTop);

  let middleBottom = document.createElement("div");
  middleBottom.setAttribute("id", "middle-bottom");
  middleContent.appendChild(middleBottom);


  // Add the "chef" image to the middle content

  let chefImg = document.createElement("img");
  chefImg.setAttribute("id", "chef-img");
  chefImg.src = "../src/media/chef.PNG";
  middleBottom.appendChild(chefImg);

  // Add the element containing the middle content "chef text" elements

  let chefText = document.createElement("div");
  chefText.setAttribute("id", "chef-text");
  middleBottom.appendChild(chefText);

  for (i in chefTextContent) {
    let text = document.createElement("div");
    text.setAttribute("id", `text${parseInt(i) + 1}`);
    text.innerHTML = chefTextContent[i];
    chefText.appendChild(text);
  }

  chefText.firstChild.style.fontWeight = "800"

  /******** Footer ***********/

  let footer = document.createElement("div");
  footer.setAttribute("id", "footer");
  content.appendChild(footer);


  let copyrightText = document.createElement("div");
  let currentYear = new Date().getFullYear();
  copyrightText.innerHTML = `Copyright © ${currentYear} dominik-kiss`;
  footer.appendChild(copyrightText);

  let gitHubLink = document.createElement("a");
  gitHubLink.href = "https://github.com/dominik-kiss";
  footer.appendChild(gitHubLink);

  let gitHubLogo = document.createElement("i");
  gitHubLogo.classList.add("fab");
  gitHubLogo.classList.add("fa-github");
  gitHubLink.appendChild(gitHubLogo);


}

createSite();

// Select all pictures in the carousel
const slides = document.querySelectorAll(".slide");

// loop through carousel pictures and set each picture's translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


const moveCarousel = (images, timer, current = 0) => {
    const maxSlides = images.length - 1;
    images.forEach((image, index) => {
        image.style.transform = `translateX(${100 * (index - current)}%)`;
    });
    current = (current !== maxSlides) ? current + 1 : 0;
    setTimeout(moveCarousel, timer, images, timer, current);
};

moveCarousel(slides, 200000);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFNBQVMsVUFBVTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBLGlFQUFpRSxJQUFJO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxnQkFBZ0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGFBQWE7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVc7QUFDbkQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0JBQXdCO0FBQ3RFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2l0ZS1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCBjcmVhdGVTaXRlIGZyb20gXCIuL3BhZ2VDb250ZW50XCI7ICovXHJcblxyXG4vKiBpbXBvcnQgeyBsaWJyYXJ5LCBkb20gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlXCI7XHJcbmltcG9ydCB7IGZhQ2hlY2sgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zL2ZhQ2hlY2tcIjtcclxuXHJcbmxpYnJhcnkuYWRkKGZhQ2hlY2spO1xyXG5kb20ud2F0Y2goKTtcclxuICovXHJcblxyXG4vLyBDcmVhdGUgdGhlIG1haW4gXCJoZWFkZXJcIiBlbGVtZW50XHJcbmxldCBmaXJzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmZpcnN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGVudFwiKTtcclxuZmlyc3REaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlcmVkLWZsZXhcIik7XHJcbmRvY3VtZW50LmFwcGVuZENoaWxkKGZpcnN0RGl2KTtcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaXRlKCkge1xyXG5cclxuICBjb25zdCBuYXZpZ2F0aW9uT3B0aW9ucyA9IFtcIkhvbWVcIiwgXCJBYm91dCBVc1wiLCBcIk1lbnVcIiwgXCJDb250YWN0IFVzXCJdO1xyXG4gIGNvbnN0IG1pZGRsZVRleHRDb250ZW50ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTdXNwZW5kaXNzZSBhIHNlbSBhdCBpcHN1bSBjb25zZXF1YXQgaGVuZHJlcml0IHF1aXMgYXQgdG9ydG9yLiBEdWlzIG5lYyBkaWduaXNzaW0gZXguXCI7XHJcbiAgY29uc3QgY2hlZlRleHRDb250ZW50ID0gW1wiT1VSIENIRUZcIiwgXCJSYW5kYWxsIFJpc2hpXCIsIFwiUGhhc2VsbHVzIHJ1dHJ1bSBvZGlvIHZlbCBtYXR0aXMgc2VtcGVyLiBFdGlhbSBkaWduaXNzaW0gYW50ZSBhcmN1LCB2ZWwgZmVybWVudHVtIGRvbG9yIHZ1bHB1dGF0ZSB2ZWwuIFByb2luIGZhY2lsaXNpcyB0ZW1wdXMgYWNjdW1zYW4uIENyYXMgc2VkIHZvbHV0cGF0IGFyY3UuIE1hZWNlbmFzIHV0IHNvbGxpY2l0dWRpbiBtYXVyaXMuIE1vcmJpIGVsZW1lbnR1bSBuaWJoIHNpdCBhbWV0IG5pYmggdmVzdGlidWx1bSwgY29uZ3VlIHBvcnRhIG1hc3NhIGxhb3JlZXQuIFNlZCBhY2N1bXNhbiBlZ2VzdGFzIG1hZ25hLCBuZWMgZXVpc21vZCBlc3QgdGluY2lkdW50IHVsbGFtY29ycGVyLiBDcmFzIHBvcnRhIGlwc3VtIGRhcGlidXMsIGN1cnN1cyBtZXR1cyBuZWMsIHZlbmVuYXRpcyBudW5jLiBQcm9pbiBtb2xlc3RpZSwgbGVjdHVzIGEgYXVjdG9yIHZhcml1cywgbWFnbmEgbnVsbGEgcGVsbGVudGVzcXVlIG9kaW8sIGFjIGVsZWlmZW5kIHNhcGllbiBtYWduYSBldCBtZXR1cy4gQWxpcXVhbSBzZWQgYXVndWUgbGliZXJvLiBGdXNjZSBlZ2V0IHB1bHZpbmFyIG1hc3NhLCBldSBmZXJtZW50dW0gc2VtLiBOYW0gcGVsbGVudGVzcXVlLCBuaXNpIGV0IHNjZWxlcmlzcXVlIHByZXRpdW0sIG5pc2wgbWV0dXMgZWxlbWVudHVtIG5pYmgsIGV1IGFjY3Vtc2FuIG1ldHVzIGVyYXQgZWdldCBhbnRlLiBEb25lYyBpbiB2ZXN0aWJ1bHVtIG5pc2kuIER1aXMgdml0YWUgZmVsaXMgbm9uIG1hdXJpcyBzY2VsZXJpc3F1ZSBhdWN0b3IgcXVpcyBlZ2V0IGRvbG9yLiBJbiBhIGRpZ25pc3NpbSBsYWN1cywgZXUgYXVjdG9yIGV4LlwiXTtcclxuXHJcbiAgLy8gQ2FjaGUgdGhlIG1haW4gXCJjb250ZW50XCIgZWxlbWVudCwgd2hpY2ggd2lsbCBjb250YWluIGV2ZXJ5dGhpbmcgb24gdGhlIHBhZ2VcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG5cclxuICAvKioqKioqKiogSEVBREVSICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIG1haW4gXCJoZWFkZXJcIiBlbGVtZW50XHJcbiAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyXCIpO1xyXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWQtZmxleFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgXCJ1bFwiIGVsZW1lbnQgZm9yIHRoZSBTaXRlIE5hdmlnYXRpb24gTWVudVxyXG4gIGxldCBoZWFkZXJUYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGhlYWRlclRhYnMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItdGFic1wiKTtcclxuICBoZWFkZXJUYWJzLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUYWJzKTtcclxuXHJcbiAgLy8gQ3JlYXRlIGxpc3QgZWxlbWVudHMgb2YgdGhlIFNpdGUgTmF2aWdhdGlvbiBNZW51XHJcbiAgZm9yIChpIGluIG5hdmlnYXRpb25PcHRpb25zKSB7XHJcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS5pbm5lckhUTUwgPSBuYXZpZ2F0aW9uT3B0aW9uc1tpXTtcclxuICAgIGhlYWRlclRhYnMuYXBwZW5kQ2hpbGQobGkpO1xyXG4gIH1cclxuXHJcbiAgLyoqKioqKioqIENhcm91c2VsICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIG1haW4gXCJzbGlkZXJcIiBlbGVtZW50XHJcbiAgbGV0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2xpZGVyXCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2xpZGVyKTtcclxuXHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgZm91ciBzbGlkZXMgb2YgdGhlIGNhcm91c2VsIHdpdGggdGhlIGJnIGltYWdlcyBhZGRlZFxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICBsZXQgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgc2xpZGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi4vc3JjL21lZGlhL3Jlc3RhdXJhbnQke2krMX0uanBnJylgO1xyXG4gICAgc2xpZGUuY2xhc3NMaXN0LmFkZChcInNsaWRlXCIpO1xyXG4gICAgc2xpZGVyLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICB9XHJcbiAgLy8gQWRkIHRoZSBcImZpcnN0LXBpY1wiIGlkIHRvIHRoZSB0b3AgcGljdHVyZSwgd2hpY2ggc2V0cyBpdHMgXCJ6LWluZGV4XCIgdG8gYmUgb24gdG9wLCBhbmQgY292ZXIgdGhlIGluaXRpYWwgdHJhbnNpdGlvbiBvZiB0aGUgc2xpZGVzXHJcbiAgc2xpZGVyLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmaXJzdC1waWNcIik7XHJcblxyXG4gIC8qKioqKioqKiBMb2dvIGNvbnRhaW5lciAqKioqKioqKioqKi9cclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBsb2dvIGNvbnRhaW5lciBlbGVtZW50XHJcbiAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGxvZ29Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsb2dvLWNvbnRhaW5lclwiKTtcclxuICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjZW50ZXJlZC1mbGV4XCIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgbG9nbyBlbGVtZW50IGZvciB0aGUgbG9nbyBpbWFnZVxyXG4gIGxldCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBsb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nb1wiKTtcclxuICBsb2dvLnNyYyA9IFwiLi4vc3JjL21lZGlhL2xvZ28ucG5nXCI7XHJcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBsb2dvdGV4dCBlbGVtZW50IGZvciB0aGUgXCJtb3R0b1wiXHJcbiAgbGV0IGxvZ29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxvZ28tdGV4dFwiKTtcclxuICBsb2dvVGV4dC5pbm5lckhUTUwgPSBcIkFib3ZlIHRoZSBjaXR5Li4uXCI7XHJcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvVGV4dCk7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgcmVzZXJ2YXRpb24gYnV0dG9uIGVsZW1lbnRcclxuICBsZXQgcmVzZXJ2YXRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlc2VydmF0aW9uQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmVzZXJ2YXRpb24tYnV0dG9uXCIpO1xyXG4gIHJlc2VydmF0aW9uQnV0dG9uLmlubmVySFRNTCA9IFwiUmVzZXJ2YXRpb25cIjtcclxuICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQnV0dG9uKTtcclxuXHJcblxyXG4gIC8qKioqKioqKiBDYXJvdXNlbCBkb3RzICoqKioqKioqKioqL1xyXG5cclxuICAvLyBBZGQgdGhyZWUgZG90cyB0byB0aGUgYm90dG9tIG9mIHRoZSBjYXJvdXNlbCwgdG8gZGlzcGxheSBhdCB3aGF0IHN0YWdlIHRoZSBjYXJvdXNlbCBpc1xyXG5cclxuICBsZXQgY2Fyb3VzZWxEb3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjYXJvdXNlbERvdHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjYXJvdXNlbC1kb3RzXCIpO1xyXG4gIGNhcm91c2VsRG90cy5jbGFzc0xpc3QuYWRkKFwiY2VudGVyZWQtZmxleFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNhcm91c2VsRG90cyk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICBsZXQgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBkb3QuaW5uZXJIVE1MID0gXCIuXCI7XHJcbiAgICBjYXJvdXNlbERvdHMuYXBwZW5kQ2hpbGQoZG90KTtcclxuICB9XHJcblxyXG4gIC8qKioqKioqKiBNaWRsZSBjb250ZW50ICoqKioqKioqKioqL1xyXG5cclxuICAvLyBDcmVhdGUgbWFpbiBjb250YWluZXIgZm9yIHRoZSBtaWRkbGUgY29udGVudCwgYW5kIHRoZSB0d28gY29udGFpbmVycyB3aXRoaW5cclxuXHJcbiAgbGV0IG1pZGRsZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1pZGRsZUNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtaWRkbGUtY29udGVudFwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZUNvbnRlbnQpO1xyXG5cclxuICBsZXQgbWlkZGxlVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtaWRkbGVUb3Auc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtaWRkbGUtdG9wXCIpO1xyXG4gIG1pZGRsZVRvcC5pbm5lckhUTUwgPSBtaWRkbGVUZXh0Q29udGVudDtcclxuICBtaWRkbGVUb3Auc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICBtaWRkbGVDb250ZW50LmFwcGVuZENoaWxkKG1pZGRsZVRvcCk7XHJcblxyXG4gIGxldCBtaWRkbGVCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1pZGRsZUJvdHRvbS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1pZGRsZS1ib3R0b21cIik7XHJcbiAgbWlkZGxlQ29udGVudC5hcHBlbmRDaGlsZChtaWRkbGVCb3R0b20pO1xyXG5cclxuXHJcbiAgLy8gQWRkIHRoZSBcImNoZWZcIiBpbWFnZSB0byB0aGUgbWlkZGxlIGNvbnRlbnRcclxuXHJcbiAgbGV0IGNoZWZJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNoZWZJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVmLWltZ1wiKTtcclxuICBjaGVmSW1nLnNyYyA9IFwiLi4vc3JjL21lZGlhL2NoZWYuUE5HXCI7XHJcbiAgbWlkZGxlQm90dG9tLmFwcGVuZENoaWxkKGNoZWZJbWcpO1xyXG5cclxuICAvLyBBZGQgdGhlIGVsZW1lbnQgY29udGFpbmluZyB0aGUgbWlkZGxlIGNvbnRlbnQgXCJjaGVmIHRleHRcIiBlbGVtZW50c1xyXG5cclxuICBsZXQgY2hlZlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNoZWZUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY2hlZi10ZXh0XCIpO1xyXG4gIG1pZGRsZUJvdHRvbS5hcHBlbmRDaGlsZChjaGVmVGV4dCk7XHJcblxyXG4gIGZvciAoaSBpbiBjaGVmVGV4dENvbnRlbnQpIHtcclxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRleHQke3BhcnNlSW50KGkpICsgMX1gKTtcclxuICAgIHRleHQuaW5uZXJIVE1MID0gY2hlZlRleHRDb250ZW50W2ldO1xyXG4gICAgY2hlZlRleHQuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgfVxyXG5cclxuICBjaGVmVGV4dC5maXJzdENoaWxkLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjgwMFwiXHJcblxyXG4gIC8qKioqKioqKiBGb290ZXIgKioqKioqKioqKiovXHJcblxyXG4gIGxldCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3Rlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb3RlclwiKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG5cclxuICBsZXQgY29weXJpZ2h0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbGV0IGN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvcHlyaWdodFRleHQuaW5uZXJIVE1MID0gYENvcHlyaWdodCDCqSAke2N1cnJlbnRZZWFyfSBkb21pbmlrLWtpc3NgO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRUZXh0KTtcclxuXHJcbiAgbGV0IGdpdEh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBnaXRIdWJMaW5rLmhyZWYgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9kb21pbmlrLWtpc3NcIjtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0SHViTGluayk7XHJcblxyXG4gIGxldCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKFwiZmFiXCIpO1xyXG4gIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZhLWdpdGh1YlwiKTtcclxuICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xyXG5cclxuXHJcbn1cclxuXHJcbmNyZWF0ZVNpdGUoKTtcclxuXHJcbi8vIFNlbGVjdCBhbGwgcGljdHVyZXMgaW4gdGhlIGNhcm91c2VsXHJcbmNvbnN0IHNsaWRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2xpZGVcIik7XHJcblxyXG4vLyBsb29wIHRocm91Z2ggY2Fyb3VzZWwgcGljdHVyZXMgYW5kIHNldCBlYWNoIHBpY3R1cmUncyB0cmFuc2xhdGVYIHByb3BlcnR5IHRvIGluZGV4ICogMTAwJSBcclxuc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmR4KSA9PiB7XHJcbiAgc2xpZGUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtpbmR4ICogMTAwfSUpYDtcclxufSk7XHJcblxyXG5cclxuY29uc3QgbW92ZUNhcm91c2VsID0gKGltYWdlcywgdGltZXIsIGN1cnJlbnQgPSAwKSA9PiB7XHJcbiAgICBjb25zdCBtYXhTbGlkZXMgPSBpbWFnZXMubGVuZ3RoIC0gMTtcclxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcclxuICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezEwMCAqIChpbmRleCAtIGN1cnJlbnQpfSUpYDtcclxuICAgIH0pO1xyXG4gICAgY3VycmVudCA9IChjdXJyZW50ICE9PSBtYXhTbGlkZXMpID8gY3VycmVudCArIDEgOiAwO1xyXG4gICAgc2V0VGltZW91dChtb3ZlQ2Fyb3VzZWwsIHRpbWVyLCBpbWFnZXMsIHRpbWVyLCBjdXJyZW50KTtcclxufTtcclxuXHJcbm1vdmVDYXJvdXNlbChzbGlkZXMsIDIwMDAwMCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==