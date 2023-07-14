
  // Sliding functionality
 var sliderIndex = 0;
 var sliderItems = document.getElementsByClassName("slide");

 function showSlide(index) {
   if (index >= sliderItems.length) {
     sliderIndex = 0;
   } else if (index < 0) {
     sliderIndex = sliderItems.length - 1;
   }

   // Hide all slides
   for (var i = 0; i < sliderItems.length; i++) {
     sliderItems[i].style.display = "none";
   }

   // Show the current slide
   sliderItems[sliderIndex].style.display = "block";

   // Increment index for the next slide
   sliderIndex++;

   // Set the timeout for next slide
   setTimeout(function() {
     showSlide(sliderIndex);
   }, 3000); // Change slide every 3 seconds (adjust as needed)
 }

 // Start the slideshow
 showSlide(sliderIndex);
