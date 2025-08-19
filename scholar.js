// Search functionality
const searchInput = document.getElementById("searchInput");
const articlesContainer = document.getElementById("articles-container");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  const items = articlesContainer.getElementsByClassName("article-item");
  for(let i=0;i<items.length;i++){
    const title = items[i].querySelector(".title").innerText.toLowerCase();
    const meta = items[i].querySelector(".article-meta").innerText.toLowerCase();
    items[i].style.display = (title + meta).includes(filter) ? "" : "none";
  }
});

const canvas = document.getElementById('dots-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];
const DOT_COUNT = 80;

// Create dots
for(let i=0;i<DOT_COUNT;i++){
  dots.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    radius: Math.random()*3+1,
    speedY: Math.random()*0.5+0.1,
    speedX: (Math.random()-0.5)*0.2
  });
}

// Draw dots
function drawDots() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(0,0,0,0.05)'; // light gray dots
  dots.forEach(dot=>{
    ctx.beginPath();
    ctx.arc(dot.x,dot.y,dot.radius,0,Math.PI*2);
    ctx.fill();
    dot.y -= dot.speedY;
    dot.x += dot.speedX;

    if(dot.y<0) dot.y = canvas.height;
    if(dot.x<0) dot.x = canvas.width;
    if(dot.x>canvas.width) dot.x = 0;
  });
  requestAnimationFrame(drawDots);
}

drawDots();

// Resize
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 1000); // 1 second
    });

