function toggleSubMenu() {
    var subMenu = document.getElementById("subMenu");
    if (subMenu.style.display === "block") {
      subMenu.style.display = "none";
    } else {
      subMenu.style.display = "block";
    }
  }

function selectSubMenu(index) {
    // Perform actions based on the selected sub-menu
    console.log("Sub-menu " + index + " selected.");
  }