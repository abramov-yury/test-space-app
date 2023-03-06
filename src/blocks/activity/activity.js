// styles
import "swiper/css/bundle";
import "./activity.scss";
// swiper
import Swiper from "swiper/bundle";

const slider = document.querySelector(".swiper");

new Swiper(slider, {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1290: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
