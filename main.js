const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function() {
    this.style.display = 'none';
    closeBtn.style.display = 'flex';
    nav.style.display = "flex";
});
closeBtn.addEventListener("click", function() {
    this.style.display = 'none';
    menu.style.display = 'flex';
    nav.style.display = "none";
});

const up = document.querySelector(".up");
window.addEventListener("scroll", function() {
    if (this.scrollY > 200) {
        up.classList.remove("hide");
    } else {
        up.classList.add("hide");
    }
});