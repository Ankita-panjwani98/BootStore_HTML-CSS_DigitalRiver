var currentSlide = 1;

function showSlide(slideIndex) {
  console.log("slide number default..", slideIndex);  //currentslide=1
  const slides = document.getElementsByClassName("carousel_images");
  console.log("Slides length", slides.length); // array of 4 images =4 
  const indicators = document.getElementsByClassName("indicators");
  console.log("indicator 1 class", indicators.length); //4


  for (var i = 0; i < slides.length && indicators.length; i++) {
    slides[i].style.display = "none";
    indicators[i].style.display = "none";
  }
  if (slideIndex > slides.length && slideIndex > indicators.length) {
    currentSlide = 1;
  }
  
  if (slideIndex < 1) {
    currentSlide = slides.length;
    currentSlide = indicators.length;


  }
  
  slides[currentSlide - 1].style.display = "flex";
  indicators[currentSlide -1].style.display ='block';
 
}
function nextSlide() {
  showSlide((currentSlide += 1));
}

function previousSlide() {
  showSlide((currentSlide -= 1));
}
window.onload = function () {


  showSlide(currentSlide);
 
  document.getElementById("left-arrow").addEventListener("click", function () {
    console.log("LEFT ARROW CLICKED");
    previousSlide();
  });
  document.getElementById("right-arrow").addEventListener("click", function () {
    nextSlide();
    console.log("RIGHT ARROW CLICKED");
  });
};
