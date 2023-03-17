import Logo from "./media/logo.png";
import Chef from "./media/chef.PNG";

export default function createSite() {

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
  for (let i in navigationOptions) {
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
    slide.classList.add("slide");
    slide.setAttribute("id", `pic${i+1}`);
    slider.appendChild(slide);
  }
  // Add the "first-pic" id to the top picture, which sets its "z-index" to be on top, and cover the initial transition of the slides

  /******** Logo container ***********/

  // Create the logo container element
  let logoContainer = document.createElement("div");
  logoContainer.setAttribute("id", "logo-container");
  logoContainer.classList.add("centered-flex");
  content.appendChild(logoContainer);

  // Create the logo element for the logo image
  let logo = document.createElement("img");
  logo.setAttribute("id", "logo");
  logo.src = Logo;
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
  chefImg.src = Chef;
  middleBottom.appendChild(chefImg);

  // Add the element containing the middle content "chef text" elements

  let chefText = document.createElement("div");
  chefText.setAttribute("id", "chef-text");
  middleBottom.appendChild(chefText);

  for (let i in chefTextContent) {
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