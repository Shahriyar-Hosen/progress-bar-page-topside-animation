// progressBar main div
const progressBar = document.querySelector("#progress-bar");
//Whichever div will work based
const mainBlogSection = document.querySelector("main");

const animateProgressBar = () => {
  let scrollDistance = -mainBlogSection.getBoundingClientRect().top;
  let progressWidth =
    (scrollDistance /
      (mainBlogSection.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  let value = Math.floor(progressWidth);
  progressBar.style.width = value + "%";

  if (value < 0) {
    progressBar.style.width = "0%";
  }
};

window.addEventListener("scroll", animateProgressBar);
