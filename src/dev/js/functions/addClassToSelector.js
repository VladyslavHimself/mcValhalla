export default function addClassToSelector(element, className) {
  const elem = document.querySelector(element);
  elem.classList.add(className);
}