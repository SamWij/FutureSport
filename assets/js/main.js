console.log("javascript connected!");


// image carousel

let slideIndex = 0;  // keeps track of the number of slides.
showSlides();  //calls the showSlides function

//main function
function showSlides() {
  // calls the divs that have a class element named slide
  let slides = document.getElementsByClassName("slide");

  // a for loop that iterates over the slide elements.  and hides the slides as they increment.
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  // once slides exceed number of slides revet the slideindex variable back to 1.
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

