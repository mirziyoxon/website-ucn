const dotsContainer = document.querySelector('.dots');
const numberOfDots = 40;

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.x = Math.random() * window.innerWidth;
  dot.y = Math.random() * window.innerHeight;
  dotsContainer.appendChild(dot);
}

function animateDots() {
  const dots = document.querySelectorAll('.dot');
  
  dots.forEach(dot => {
    const dx = (mouseX - dot.x) * 0.02; // speed factor
    const dy = (mouseY - dot.y) * 0.02;
    
    dot.x += dx;
    dot.y += dy;
    
    dot.style.transform = `translate(${dot.x}px, ${dot.y}px)`;
  });
  
  requestAnimationFrame(animateDots);
}

animateDots();

// Create canvas dynamically
const canvas = document.createElement("canvas");
canvas.id = "particles-bg";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const mouse = { x: null, y: null };

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 3 + 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 40 + 10;
  }
  draw() {
    ctx.fillStyle = "rgba(180, 180, 180, 0.5)"; // soft gray
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDirectionX = dx / distance;
    let forceDirectionY = dy / distance;
    let maxDistance = 150;
    let force = (maxDistance - distance) / maxDistance;
    let directionX = forceDirectionX * force * this.density;
    let directionY = forceDirectionY * force * this.density;

    if (distance < maxDistance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  particlesArray = [];
  for (let y = 0; y < canvas.height; y += 30) {
    for (let x = 0; x < canvas.width; x += 30) {
      particlesArray.push(new Particle(x, y));
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.draw();
    particle.update();
  });
  requestAnimationFrame(animate);
}

init();
animate();

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

document.addEventListener("DOMContentLoaded", () => {
      setTimeout(() => {
        document.getElementById("splash").style.display = "none";
        document.getElementById("content").style.display = "block";
      }, 1200); // 1.2 second
    });

