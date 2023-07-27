<h1 align="center">Reading Progress Bar Animation <br/> with <br/> HTML CSS JavaScript</h1>

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

<hr/>

## Video Preview
https://github.com/Shahriyar-Hosen/progress-bar-page-topside-animation/assets/96829173/49e81bac-ff96-4fc4-a31e-d79d1e3d29f1
