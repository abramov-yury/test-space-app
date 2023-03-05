const button = document.querySelector(".menu-trigger");

const onButtonClick = (evt) => {

  if (evt.currentTarget.classList.contains("menu-trigger--burger")) {

    evt.currentTarget.classList.remove("menu-trigger--burger");
    evt.currentTarget.classList.add("menu-trigger--cross");
    return;

  }

  if (evt.currentTarget.classList.contains("menu-trigger--cross")) {

    evt.currentTarget.classList.remove("menu-trigger--cross");
    evt.currentTarget.classList.add("menu-trigger--burger");
    return;

  }

  evt.currentTarget.classList.toggle("menu-trigger--cross");

};

const init = () => {

  button.addEventListener("click", onButtonClick);

};

init();
