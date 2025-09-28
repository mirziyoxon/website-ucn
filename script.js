// Sample posts (replace with your own)
const posts = [
  {
    title: "How Small Habits Change Your Life",
    description: "Big results come from small daily improvements. Here's why.",
    content: "Small habits are powerful because they build lasting change quietly. When you start with something small—like drinking more water, reading a few pages a day, or walking for ten minutes—you set the stage for bigger results. These actions may not feel significant at first, but over time they add up through consistency. The real magic is in the compounding effect: small efforts, repeated daily, grow into remarkable progress. They also shape your identity—every time you practice a habit, you reinforce the belief that you are the type of person who takes care of your health, learns, or stays disciplined. Slowly, one habit leads to another, creating a ripple effect across your life. In the end, it’s not one big change but many small, steady steps that transform us the most."
  },
  {
    title: "Why Simplicity Wins",
    description: "In design, business, and life — less is often more.",
    content: "Simplicity is powerful because it removes the unnecessary and directs our focus to what truly matters. Complex plans, cluttered spaces, and overthinking create stress and confusion. Simplicity cuts through the noise, bringing clarity and ease. A simple design communicates better, a simple plan is easier to follow, and a simple life leaves room for what is essential. Choosing simplicity doesn’t mean having less—it means making space for more of what brings value, joy, and impact. In the end, simplicity turns effort into effectiveness and chaos into calm."
  },
  {
    title: "The Power of Consistency",
    description: "Consistency beats intensity in the long run.",
    content: "Consistency is the bridge between goals and results. It’s not about working the hardest once, but about showing up again and again, even when progress feels slow. Small actions, repeated daily, create momentum and compound into lasting success. Whether it’s exercising, studying, or building a business, consistency builds trust—with yourself and with others—because it proves reliability. It also strengthens discipline: the more you repeat a habit, the easier it becomes. Great achievements rarely come from sudden bursts of effort; they come from steady, repeated steps taken over time. Consistency turns effort into growth, and growth into transformation."
  }
];

const container = document.getElementById("blog-container");

// Show all posts
function showPosts() {
  container.innerHTML = "";
  posts.forEach((post, i) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `<h2>${post.title}</h2><p>${post.description}</p>`;
    div.addEventListener("click", () => showPost(i));
    container.appendChild(div);
  });
}

// Init
showPosts();

// Fade-in observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Show single post (full view)
function showPost(i) {
  const post = posts[i];
  container.innerHTML = `
    <div class="post">
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button onclick="showPosts()">← Back</button>
    </div>
  `;
}






<script>
const FREEZE_KEY = 'unicorner_freeze';
const now = new Date().getTime();

// localStorage dan holatni olish
let freezeData = JSON.parse(localStorage.getItem(FREEZE_KEY));

if(freezeData){
  const freezeEnd = freezeData.freezeEnd;
  const freezeDone = freezeData.freezeDone;

  if(freezeDone && now < freezeEnd){
    // Sayt muzlatilgan
    document.body.innerHTML = `<h1 style="text-align:center;margin-top:20%;">Under Maintenance. Come back at ${new Date(freezeEnd).toLocaleTimeString()}</h1>`;
  } else if(freezeDone && now >= freezeEnd && !freezeData.secondRun){
    // 10 daqiqa ishlashga ruxsat
    const workEnd = now + 10*60*1000;
    freezeData.secondRun = true;
    freezeData.freezeEnd = workEnd;
    localStorage.setItem(FREEZE_KEY, JSON.stringify(freezeData));
    alert("You can work for 10 minutes!");
    
    // 10 daqiqa tugagach yana 1 soatga muzlatish
    setTimeout(() => {
      freezeData.freezeEnd = new Date().getTime() + 60*60*1000;
      localStorage.setItem(FREEZE_KEY, JSON.stringify(freezeData));
      location.reload();
    }, 10*60*1000);

  } else {
    // Ishlash davom etadi
  }

} else {
  // Foydalanuvchi birinchi marta kirdi
  const freezeStart = now + 1*60*1000; // 1 daqiqa ishlash
  freezeData = { freezeStart: freezeStart, freezeEnd: freezeStart + 60*60*1000, freezeDone: true, secondRun: false };
  localStorage.setItem(FREEZE_KEY, JSON.stringify(freezeData));

  // 1 daqiqa ishlashdan keyin reload
  setTimeout(() => location.reload(), 60*1000);
}
</script>
