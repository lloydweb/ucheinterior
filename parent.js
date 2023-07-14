// Get all container elements
var containers = document.getElementsByClassName("parent-container");
            
// Add click event listeners to each child image within each container
for (var i = 0; i < containers.length; i++) {
  var container = containers[i];

  // Get the parent image within the current container
  var parentImage = container.querySelector(".mainImage");

  // Get all child images within the current container
  var childImages = container.getElementsByClassName("child-image");

  // Add click event listeners to each child image within the current container
  for (var j = 0; j < childImages.length; j++) {
    childImages[j].addEventListener("click", function() {
      // Get the source of the clicked child image
      var src = this.getAttribute("src");

      // Set the source of the parent image within the current container to the clicked child image source
      this.parentNode.parentNode.querySelector(".mainImage").setAttribute("src", src);
    });
  }
}