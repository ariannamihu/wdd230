const baseURL = "https://ariannamihu.github.io/wdd230/final_project/";
const linksURL = "https://ariannamihu.github.io/wdd230/final_project/data/rentals.json";

async function getInfo() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayInfo(data.rentals);
}
  
const displayInfo = (rentals) => {
    const infoContainer = document.getElementById('info-container');

    rentals.forEach((rental) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let description = document.createElement('p');

        // Populate the content of the card
        title.textContent = rental.type;
        description.textContent = `Max: ${rental.max}, Half Day (Reservation): $${rental.half_day_res}, Full Day (Reservation): $${rental.full_day_res}, Half Day (Walk-in): $${rental.half_day_walk}, Full Day (Walk-in): $${rental.full_day_walk}`;

        // Append elements to the card
        card.appendChild(title);
        card.appendChild(description);
        infoContainer.appendChild(card);
    });
}


// displayInfo();

getInfo();