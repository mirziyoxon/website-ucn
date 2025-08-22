// Sample posts (replace with your own)
const posts = [
  {
    title: "How Small Habits Change Your Life",
    description: "Big results come from small daily improvements. Here's why.",
    content: "ø"
  },
  {
    title: "Why Simplicity Wins",
    description: "In design, business, and life — less is often more.",
    content: "Simplicity removes distractions. It forces you to focus on what matters most..."
  },
  {
    title: "The Power of Consistency",
    description: "Consistency beats intensity in the long run.",
    content: "Anyone can do something once. The real change comes from doing it repeatedly..."
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
// Existing blog post script...
// (keep your posts array, showPosts, showPost functions here)
// MENU TOGGLE
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// Init blog posts
showPosts();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
     });
});
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("content").style.display = "flex";
}, 3000); //  3 seconds

