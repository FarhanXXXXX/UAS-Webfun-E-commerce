var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // Hide all slides and remove active class
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Increment slide index
    slideIndex++;
    
    // Reset slide index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the current slide and add active class
    slides[slideIndex - 1].style.display = "block";
    
    // Update active dot
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    dots[slideIndex - 1].classList.add("active");
    
    // Call showSlides() again after 2 seconds
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
