document.addEventListener('DOMContentLoaded', function() {
    // Initial slide index
    let slideIndex = 1;
    showSlides(slideIndex);

    // Function to increment/decrement the slide index and show the slides
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // Function to set the current slide based on the clicked dot
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Function to show the current slide and hide the others
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        // Reset slide index if it exceeds the number of slides
        if (n > slides.length) { slideIndex = 1 }
        // Reset slide index if it is less than 1
        if (n < 1) { slideIndex = slides.length }
        // Hide all slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // Remove active class from all dots
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        // Show the current slide and add active class to the corresponding dot
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    // Attach event handler for the previous button
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    // Attach event handler for the next button
    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    // Attach event handlers for the dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top when the back to top button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

   

    // Section animations
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    // Intersection observer callback to add/remove active class based on visibility
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
