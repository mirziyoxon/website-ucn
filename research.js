document.addEventListener("DOMContentLoaded", function () {
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("dots");
  document.body.appendChild(dotsContainer);

  const numDots = 50;

  for (let i = 0; i < numDots; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.style.left = Math.random() * 100 + "vw";

    const duration = 5 + Math.random() * 5;
    const delay = Math.random() * 10;

    dot.style.animationDuration = duration + "s";
    dot.style.animationDelay = delay + "s";

    const size = 3 + Math.random() * 5;
    dot.style.width = size + "px";
    dot.style.height = size + "px";

    dotsContainer.appendChild(dot);
  }
});


setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("content").style.display = "flex";
}, 2000); //  2,5 seconds

