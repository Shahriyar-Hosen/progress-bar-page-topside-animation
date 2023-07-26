const progressBarTs: HTMLElement | null =
  document.querySelector("#progress-bar");
const mainBlogSectionTs: HTMLElement | null = document.querySelector("main");

const animateProgressBarTs = (): void => {
  if (!mainBlogSectionTs || !progressBarTs) return; // Guard clause for null elements

  const scrollDistance: number = -mainBlogSectionTs.getBoundingClientRect().top;
  const progressWidth: number =
    (scrollDistance /
      (mainBlogSectionTs.getBoundingClientRect().height -
        document.documentElement.clientHeight)) *
    100;
  const value: number = Math.floor(progressWidth);
  progressBarTs.style.width = value + "%";

  if (value < 0) {
    progressBarTs.style.width = "0%";
  }
};

window.addEventListener("scroll", animateProgressBarTs);
