 // Get the search query from the URL parameter
 var searchQuery = new URLSearchParams(window.location.search).get("q");

 // Perform the search and display the results
 // Replace the code below with your own search logic

 // Example search results
// var searchResults = [
   { title: "Page 1", url: "page1.html" },
   { title: "Page 2", url: "page2.html" },
   { title: "Page 3", url: "page3.html" },
 ];//

 var searchResultsList = document.querySelector(".search-results ul");

 if (searchResults.length === 0) {
   var listItem = document.createElement("li");
   listItem.textContent = "No results found.";
   searchResultsList.appendChild(listItem);
 } else {
   searchResults.forEach(function(result) {
     var listItem = document.createElement("li");
     var link = document.createElement("a");
     link.href = result.url;
     link.textContent = result.title;
     listItem.appendChild(link);
     searchResultsList.appendChild(listItem);
   });
 }



 function openSearchResults() {
    var searchQuery = document.getElementById("searchInput").value;
    var searchUrl = "search.html?q=" + encodeURIComponent(searchQuery);
    window.open(searchUrl, "Search Results", "width=600,height=400");
  }