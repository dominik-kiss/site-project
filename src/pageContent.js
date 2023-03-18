import createNode from "./nodeGenerator";

import Logo from "./media/logo.png";
import Chef from "./media/chef.PNG";
import gal1 from "./media/gal1.jpg";
import gal2 from "./media/gal2.jpg";
import gal3 from "./media/gal3.jpg";
import gal4 from "./media/gal4.jpg";
import gal5 from "./media/gal5.jpg";
import gal6 from "./media/gal6.jpg";
import restaurant1 from "./media/restaurant1.jpg";
import restaurant2 from "./media/restaurant2.jpg";
import restaurant3 from "./media/restaurant3.jpg";
import restaurant4 from "./media/restaurant4.jpg";
import thumbnail2 from "./media/thumbnail2.jpg";

import addLogo from "./addLogo";


export default function homePage() {

  const navigationOptions = ["Home", "About Us", "Menu", "Gallery", "Contact Us"];
  const middleTextContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sem at ipsum consequat hendrerit quis at tortor. Duis nec dignissim ex.";
  const chefTextContent = ["OUR CHEF", "Randall Rishi", "Proin facilisis tempus accumsan. Cras sed volutpat arcu. Maecenas ut sollicitudin mauris. Morbi elementum nibh sit amet nibh vestibulum, congue porta massa laoreet. <br> Sed accumsan egestas magna, nec euismod est tincidunt ullamcorper. Cras porta ipsum dapibus, cursus metus nec, venenatis nunc. Proin molestie, lectus a auctor varius, magna nulla pellentesque odio, ac eleifend sapien magna et metus. <br><br>Aliquam sed augue libero. Fusce eget pulvinar massa, eu fermentum sem. Nam pellentesque, nisi et scelerisque pretium, nisl metus elementum nibh, eu accumsan metus erat eget ante. Donec in vestibulum nisi. Duis vitae felis non mauris scelerisque auctor quis eget dolor. In a dignissim lacus, eu auctor ex."];
  const menuTextContent = "Donec scelerisque, dolor eget iaculis commodo, ante magna pretium massa, non egestas nulla magna ac lectus. Ut blandit neque vitae tortor rhoncus ultricies.";
  const menuButtonContent = ["Menu", "Chef's offer", "Drinks", "Wines"];
  const galleryImages = [gal1, gal2, gal3, gal4, gal5, gal6];
  const restaurantImages = [restaurant1, restaurant2, restaurant3, restaurant4];

  const address = "07365 Boitumelo Glen Street 766";
  const phoneNumber = "056-985-4358";
  const emailAddress = "restaurant@kinghill.com";
  
  // Cache the main "content" element, which will contain everything on the page
  const content = document.querySelector("#content");

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
    slide.style.background = `url(${restaurantImages[i]})`
    slide.style.backgroundRepeat = "no-repeat";
    slide.style.backgroundSize = "cover";
    slide.style.backgroundPosition = "center";
    // document.body.style.background = "url('[INSERT HTTPS IMAGE URL HERE]')";
    slider.appendChild(slide);
  }

  /******** HEADER ***********/

  // Create the main "header" element
/*   let header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("centered-flex");
  header.classList.add("light-header-tabs");
  slider.appendChild(header); */

  let header = createNode("div", slider, "header", ["centered-flex", "light-header-tabs"])

  // Create the "ul" element for the Site Navigation Menu
  let headerTabs = document.createElement("ul");
  headerTabs.setAttribute("id", "header-tabs");
  headerTabs.classList.add("centered-flex");
  header.appendChild(headerTabs);

  // Create list elements of the Site Navigation Menu
  for (let i in navigationOptions) {
    let li = document.createElement("li");
    li.innerHTML = navigationOptions[i];
    li.classList.add("navi");
    li.setAttribute("id", navigationOptions[i].toLowerCase().replace(" ", "-"));
    headerTabs.appendChild(li);
  }

  /******** Logo container ***********/

  // Create the logo container element
  let logoContainer = document.createElement("div");
  logoContainer.setAttribute("id", "logo-container");
  logoContainer.classList.add("centered-flex");
  slider.appendChild(logoContainer);

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
  reservationButton.classList.add("navi");
  reservationButton.innerHTML = "Reservation";
  logoContainer.appendChild(reservationButton);


  /******** Midle content ***********/

  // Create main container for the middle content, and the two containers within

  let middleContent = document.createElement("div");
  middleContent.setAttribute("id", "middle-content");
  middleContent.classList.add("column-container");
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

  /******** Menu content ***********/
  
  // Create the container for the whole "Menu" section

  let menuContainer = createNode("div", content, "menu-container", ["column-container"]);

  // Menu title
  let menuTitle = createNode("div", menuContainer, "menu-title", ["title"]);
  menuTitle.innerHTML = "MENU"

  // Creat the container for the "Menu" section's buttons
  let menuButtons = createNode("div", menuContainer, "menu-buttons-container");

  for (let i in menuButtonContent) {
    let btn = createNode("div", menuButtons, `menu-btn${parseInt(i)+1}`,["btn", "from-top"]);
    btn.innerHTML = menuButtonContent[i];
  }

  // Text in the "Menu" section
  let menuText = createNode("div", menuContainer, "menu-text");
  menuText.innerHTML = menuTextContent;

  /******** Gallery ***********/

  let galleryContainer = createNode("div", content, "gallery-container", ["column-container"]);

  let galleryTitle = createNode("div", galleryContainer, "gallery-title", ["title"]);
  galleryTitle.innerHTML = "Gallery";

  let galleryImgContainer = createNode("div", galleryContainer, "gallery-img-container");
  for (let i in galleryImages) {
    let img = createNode("img", galleryImgContainer, `gal-img${parseInt(i)+1}`, ["gal"]);
    img.src = galleryImages[i];
  }

  /******** Contact Us ***********/

  let contactContainer = createNode("div", content, "contact-container", ["column-container"]);

  let contactTitle = createNode("div", contactContainer, "contact-title", ["title"]);
  contactTitle.innerHTML = "Contact Us";

  let contactAddress = createNode("div", contactContainer, "contact-address");
  contactAddress.innerHTML = address;

  let contactPhone = createNode("div", contactContainer, "contact-phone");
  contactPhone.innerHTML = phoneNumber;

  let contactEmail = createNode("div", contactContainer, "contact-email");
  contactEmail.innerHTML = emailAddress;

  let brandLogoContainer = createNode("div", contactContainer, "brand-logo-container");

  addLogo(brandLogoContainer, "fb-logo", "brands", "facebook");
  addLogo(brandLogoContainer, "twitter-logo", "brands", "twitter");
  addLogo(brandLogoContainer, "insta-logo", "brands", "instagram");

  /******** Footer ***********/
  
  let footer = createNode("div", content, "footer", ["column-container"]);

  let footerText = createNode("div", footer, "footer-text");
  footerText.innerHTML = `Copyright © ${new Date().getFullYear()} dominik-kiss`
  let footerLink = createNode("a", footer, "footer-link");
  footerLink.href = "https://github.com/dominik-kiss";
  addLogo(footerLink, "github-logo", "brands", "github");

}

/* <i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-github"></i> */