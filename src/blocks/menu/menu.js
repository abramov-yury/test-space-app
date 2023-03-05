const trigger = document.querySelector(".menu__menu-trigger");
const menuSecondLayer = document.querySelector(".menu__second-layer");

const onTriggerClick = () => {

  menuSecondLayer.classList.toggle("menu__second-layer--hidden");
  document.body.classList.toggle("show-menu");

};

const init = () => {

  trigger.addEventListener("click", onTriggerClick);

};

init();
