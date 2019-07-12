let width;
let count;

if (window.matchMedia("screen and (max-width: 555px)").matches) {
  width = 260;
  count = 1;
} else
if (window.matchMedia("screen and (max-width: 739px)").matches) {
  width = 260;
  count = 2;
} else
if (window.matchMedia("screen and (max-width: 1023px)").matches) {
  width = 110;
  count = 4;
} else
if (window.matchMedia("screen and (min-width: 1024px)").matches) {
  width = 110;
  count = 8;
};

const slider = document.getElementsByClassName('speakers__slider')[0];
const list = slider.querySelector('ul');
const listElems = slider.querySelectorAll('li');

let position = 0;

document.getElementsByClassName('speakers__slider-leftArrow')[0].onclick = function() {
  position = Math.min(position + width * count, 0)
  list.style.transform = 'translateX(' + position + 'px)';
};

document.getElementsByClassName('speakers__slider-rightArrow')[0].onclick = function() {
  position = Math.max(position - width * count, -width * (listElems.length - count));
  list.style.transform = 'translateX(' + position + 'px)';
};
