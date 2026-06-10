import {
  advantagesTitles,
  advantagesMobile,
  advantagesDesktop
} from './advantages-data.js';

const isMobile = window.innerWidth <= 768;

const advantages = isMobile
  ? advantagesMobile
  : advantagesDesktop;

const title = isMobile
  ? advantagesTitles.mobile
  : advantagesTitles.desktop;

const titleElement = document.querySelector('.advantages__title');
const listElement = document.querySelector('.advantages__list');

titleElement.textContent = title;

listElement.innerHTML = advantages
  .map((item) => `
    <li class="advantages__item advantage">
      <h3 class="advantage__title advantage__title--${item.modifier}">${item.title}</h3>
      <p class="advantage__description">${item.text}</p>
    </li>
  `)
  .join('');
