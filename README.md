<div align="center">
<p align="center" style="font-size: 40px; margin: 0; padding: 0;">
    Reading Progress Bar Animation
</p>
<p style="font-size: 30px; margin: 0; padding: 0;">with</p>
<p align="center" style="font-size: 35px; margin: 0; padding: 0;">HTML CSS JavaScript</p>
</div>

### JavaScript

```js
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
```
