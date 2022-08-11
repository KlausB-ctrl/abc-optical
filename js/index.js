var activeSlide = 1;
showSlides(activeSlide);

function currentSlide(slide) {
    showSlides(activeSlide = slide);
}

function showSlides(slide) {
    let slides = document.getElementsByClassName("testimonial-slide");
    let dots = document.getElementsByClassName("dot");

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[activeSlide - 1].style.display = "block";
    dots[activeSlide - 1].className += " active";
}

function menuDisplay() {
    let menuEl = document.getElementById("nav-text");
    let menuStyles = window.getComputedStyle(menuEl);
    let menuDisplay = menuStyles.getPropertyValue("display");
    if(menuDisplay === "flex") {
        menuEl.style.display = "none";
    }

    else {
        menuEl.style.display = "flex";
    }
}