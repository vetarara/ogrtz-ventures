// source/scripts/advantages-data.js
var advantagesTitles = {
  mobile: "Ways we help you excel",
  desktop: "Ideology strategy"
};
var advantagesMobile = [
  {
    title: "Advising",
    text: "We help at all stages of the marketing process and aid in project management by forming relationships with investors, media, and government.",
    modifier: "advising"
  },
  {
    title: "Diversity",
    text: "Our diversified crypto community, made up of both small retail investors and big fish with limited allocation, helps to ensure a smooth and healthy project launch",
    modifier: "diversity"
  },
  {
    title: "Community",
    text: "We provide access not only to great VCs but also a large number of holders and supporters that will help facilitate a smooth launch and ensure your steady growth.",
    modifier: "community-mobile"
  },
  {
    title: "Influence Marketing",
    text: "We help build channels of communication with your audience and quickly reach both local and global markets due to a proven base of effective KOL's.",
    modifier: "marketing"
  }
];
var advantagesDesktop = [
  {
    title: "Value",
    text: "OGRTZ Ventures has laid its emphasis on offering services after investments, aiming to support the project in enhancing its long-term value.",
    modifier: "value"
  },
  {
    title: "Professional team",
    text: "OGRTZ Ventures is a leading crypto fund in investment in primary markets with a highly professional team.",
    modifier: "team"
  },
  {
    title: "Research",
    text: "OGRTZ Ventures invests across the blockchain ecosystem, encompassing public chains, protocols, applications, and crypto finance providers. We combine fundamental research with an active involvement approach.",
    modifier: "research"
  },
  {
    title: "Community",
    text: "Also, we have a serious community, which can be accessed with different capital",
    modifier: "community-desktop"
  }
];

// source/scripts/advantages-render.js
var isMobile = window.innerWidth <= 768;
var advantages = isMobile ? advantagesMobile : advantagesDesktop;
var title = isMobile ? advantagesTitles.mobile : advantagesTitles.desktop;
var titleElement = document.querySelector(".advantages__title");
var listElement = document.querySelector(".advantages__list");
titleElement.textContent = title;
listElement.innerHTML = advantages.map((item) => `
    <li class="advantages__item advantage">
      <h3 class="advantage__title advantage__title--${item.modifier}">${item.title}</h3>
      <p class="advantage__description">${item.text}</p>
    </li>
  `).join("");

// source/scripts/menu.js
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var body = document.body;
navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener("click", () => {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    body.classList.add("no-scroll");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    body.classList.remove("no-scroll");
  }
});
var navLinks = document.querySelectorAll(".main-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navMain.classList.contains("main-nav--opened")) {
      navMain.classList.remove("main-nav--opened");
      navMain.classList.add("main-nav--closed");
      body.classList.remove("no-scroll");
    }
  });
});
//# sourceMappingURL=index.js.map
