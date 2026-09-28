const texts = [
  "Student & CTF Player",
  "Cybersecurity Enthusiast",
  "Reverse Engineering Learner",
  "Quiet Builder"
];

let index = 0;
let char = 0;
let currentText = "";
let isDeleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
  if (!isDeleting && char < texts[index].length) {
    currentText += texts[index][char];
    char++;
  } else if (isDeleting && char > 0) {
    currentText = currentText.slice(0, -1);
    char--;
  } else if (!isDeleting && char === texts[index].length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  } else {
    isDeleting = false;
    index = (index + 1) % texts.length;
  }

  typing.textContent = currentText;
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});