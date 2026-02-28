// MOBILE MENU TOGGLE
const menuToggle = document.createElement("div");
menuToggle.classList.add("menu-toggle");
menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
document.querySelector(".nav").appendChild(menuToggle);

const navLinks = document.querySelector(".nav ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FAQ TOGGLE
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    const p = item.querySelector("p");
    p.style.display = p.style.display === "block" ? "none" : "block";
  });
});

// SCROLL ANIMATION FOR CARDS
const cards = document.querySelectorAll(".card");
window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if(position < screenHeight - 100){
      card.classList.add("show");
    }
  });
});

// ACHIEVEMENT COUNTER
const counters = document.querySelectorAll(".stat h3");
counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText.replace("+","");
    const increment = target / 200;
    if(c < target){
      counter.innerText = Math.ceil(c + increment);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target + "+";
    }
  };
  updateCounter();
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});
