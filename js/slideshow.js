let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  const slides = document.getElementsByClassName("banner-slide");
  const dots = document.getElementsByClassName("dot");
  let i;
  if (n > slides.length) {
      slideIndex = 1
    }
  if (n < 1) {
      slideIndex = slides.length
    }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000); 
}
