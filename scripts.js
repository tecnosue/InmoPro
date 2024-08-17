// Funcionalidad para el modal de contacto
var modal = document.getElementById("contactModal");
var btn = document.getElementById("ctaButton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Manejo del formulario de contacto
document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    modal.style.display = "none";
}

// Funcionalidad para el slider de propiedades
var slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Cambio automático de slides cada 5 segundos
setInterval(function() {
    changeSlide(1);
}, 5000);
