export default function createNode(nodeType, parent, id = "", classArray = []) {
    let newNode = document.createElement(nodeType);
    newNode.setAttribute("id", id);
    for (let someClass of classArray) {
      newNode.classList.add(someClass);
    }
    parent.appendChild(newNode);
    return newNode;
}