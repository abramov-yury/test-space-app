const trigger = document.querySelector(".menu__menu-trigger");
const menuSecondLayer = document.querySelector(".menu__second-layer");

const onTriggerClick = () => {

  menuSecondLayer.classList.toggle("menu__second-layer--hidden");

};

const init = () => {

  trigger.addEventListener("click", onTriggerClick);

};

init();
