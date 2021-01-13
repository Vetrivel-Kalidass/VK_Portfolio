window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("shrink", window.scrollY > 0);
})