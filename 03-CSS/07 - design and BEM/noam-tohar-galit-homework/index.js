window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


document.addEventListener('DOMContentLoaded', (event) => {
  let slideIndex = 0;
  let autoSlideInterval;
  showSlides();

  function showSlides() {
      let i;
      let slides = document.getElementsByClassName("slider");
      let dots = document.getElementsByClassName("dot");
      if (slides.length === 0 || dots.length === 0) return;
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
          slides[i].classList.remove('slide');
      }
      
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex-1].style.display = "block";  
      slides[slideIndex-1].classList.add('slide');
      dots[slideIndex-1].className += " active";
      autoSlideInterval = setTimeout(showSlides, 5000);
  }

  function currentSlide(n) {
      clearTimeout(autoSlideInterval);
      slideIndex = n - 1;
      showSlides();
  }

  window.currentSlide = currentSlide;
});
