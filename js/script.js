const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const heroStart = document.querySelector(".hero-start");
const heroHeading = document.querySelector(".hero-heading");
const heroPara = document.querySelector(".hero-para");
const homeBtn = document.querySelector(".btn");

window.addEventListener("load", revealAnime);

function revealAnime() {
  const TLFADE = gsap.timeline();

  TLFADE.from(logo, { autoAlpha: 0, y: -50, delay: 0.3 })
    .from(
      menu,
      {
        autoAlpha: 0,
        y: -50,
        delay: 0,
        stagger: 0.1,
      },
      "-=0.2"
    )
    .from(heroStart, { autoAlpha: 0, y: -50, delay: 0 })
    .from(heroHeading, { autoAlpha: 0, y: -50, delay: 0 })
    .from(heroPara, { autoAlpha: 0, y: -50, delay: 0 })
    .from(homeBtn, { autoAlpha: 0, y: -50, delay: 0 });
}
