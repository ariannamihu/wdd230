document.addEventListener('DOMContentLoaded', function() {
    // Get the last modified date of the current document
    var lastModifiedDate = document.lastModified;
  
    // Display the last modified date in the span element
    var lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = lastModifiedDate;
  });