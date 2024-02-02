document.addEventListener('DOMContentLoaded', function() {
    // Get the last modified date of the current document
    var lastModifiedDate = document.lastModified;
  
    // Display the last modified date in the span element
    var lastModifiedSpan = document.getElementById('lastModified');
    lastModifiedSpan.textContent = lastModifiedDate;

      // Get the current year
    var currentYear = new Date().getFullYear();

     // Display the current year in the span element
    var currentYearSpan = document.getElementById('currentYear');
    currentYearSpan.textContent = currentYear;
  });