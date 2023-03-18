import Logo from "./media/logo.png";
import Chef from "./media/chef.PNG";

export default function aboutUsPage() {

  const navigationOptions = ["Home", "About Us", "Menu", "Contact Us"];
  const textBoxTitles = ["Our history", "Our mission"];
  const textBoxContent = ["Sed commodo consequat sem, nec scelerisque arcu malesuada vel. Maecenas scelerisque urna libero, a convallis nibh vehicula sit amet. Nam at viverra dolor. Proin feugiat molestie viverra. Praesent neque libero, porttitor et neque vel, placerat blandit felis.", "Sed lobortis lacus sit amet velit bibendum feugiat. Fusce pulvinar arcu consectetur felis convallis sagittis. Donec vitae interdum enim, et commodo orci. Vestibulum volutpat, metus fringilla hendrerit accumsan, erat lorem posuere lacus, eget rutrum elit orci nec odio.", "Mauris bibendum, enim sit amet pulvinar pulvinar, enim mi vehicula odio, sit amet porta nisi neque vitae dolor. Praesent augue arcu, interdum sed mi vel, imperdiet porta nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique at magna ac cursus. Phasellus lectus urna, semper id turpis sed, ornare finibus libero. Sed urna dui, auctor sit amet ultrices eget, dapibus eget libero.", "Quisque scelerisque condimentum odio non porta. Proin sed leo condimentum nibh eleifend mollis vel vitae magna. Donec suscipit semper lorem, eu molestie odio auctor sed."];

  // Cache the main "content" element, which will contain everything on the page
  const content = document.querySelector("#content");

  /******** HEADER ***********/

  // Create the main "header" element
  let header = document.createElement("div");
  header.setAttribute("id", "header");
  header.classList.add("centered-flex");
  header.classList.add("light-header-tabs");
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
    li.classList.add("navi");
    li.setAttribute("id", navigationOptions[i].toLowerCase().replace(" ", "-"));
    headerTabs.appendChild(li);
  }

  /******** Top content ***********/

  let topContent = document.createElement("div");
  topContent.setAttribute("id", "top-content");
  topContent.classList.add("centered-flex");
  content.appendChild(topContent);

  let textBoxLeft = document.createElement("div");
  textBoxLeft.setAttribute("id", "text-box-left");
  textBoxLeft.classList.add("textbox");
  textBoxLeft.classList.add("centered-flex");
  topContent.appendChild(textBoxLeft);

  let textBoxRight = document.createElement("div");
  textBoxRight.setAttribute("id", "text-box-right");
  textBoxRight.classList.add("textbox");
  textBoxRight.classList.add("centered-flex");
  topContent.appendChild(textBoxRight);

  for (let i in textBoxTitles) {
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.innerHTML = textBoxTitles[i];
    let containingDiv = (i % 2 == 0) ? textBoxLeft : textBoxRight;
    containingDiv.appendChild(titleDiv);
  }

  for (let i in textBoxContent) {
    let textContentDiv = document.createElement("div");
    textContentDiv.classList.add("text-content");
    textContentDiv.innerHTML = textBoxContent[i];
    let containingDiv = (i % 2 == 0) ? textBoxLeft : textBoxRight;
    containingDiv.appendChild(textContentDiv);
  }

}