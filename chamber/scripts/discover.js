document.addEventListener("DOMContentLoaded", function() {
    // Check for localStorage support
    if (typeof(Storage) !== "undefined") {
        // Check if this is the first visit
        if (!localStorage.getItem("lastVisit")) {
            localStorage.setItem("lastVisit", Date.now());
            document.getElementById("visit-message").textContent = "Welcome! Let us know if you have any questions.";
        } else {
            // Retrieve last visit date from localStorage
            var lastVisit = new Date(parseInt(localStorage.getItem("lastVisit")));
            var currentDate = Date.now();
            var daysDifference = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
            
            var message = "";
            if (daysDifference === 0) {
                message = "Back so soon! Awesome!";
            } else {
                message = "You last visited " + daysDifference + " day" + (daysDifference === 1 ? "" : "s") + " ago.";
            }
            
            // Create a new paragraph element for the message
            var messageElement = document.createElement("p");
            messageElement.textContent = message;
            
            // Append the message to the sidebar
            document.querySelector(".sidebar").appendChild(messageElement);
            
            // Update localStorage with current visit date
            localStorage.setItem("lastVisit", currentDate);
        }
    } else {
        // If localStorage is not supported
        document.getElementById("visit-message").textContent = "Local storage is not supported in your browser.";
    }
});