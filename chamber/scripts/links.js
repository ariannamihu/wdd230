const baseURL = "https://ariannamihu.github.io/wdd230/chamber/";
const linksURL = "https://ariannamihu.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.companies);
}
  
const displayLinks = (companies) => {
    const linksContainer = document.getElementById('links-container');

    companies.forEach((company) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let description = document.createElement('p')
        let image = document.createElement('img')

        // Build the h2 content out to show the company number
        title.textContent = `${company.name}`;
        description.textContent = `${company.address} \n${company.phone} \n${company.membership_level}`
         
        image.setAttribute('src', `images/${company.image}`);

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(image);
        linksContainer.appendChild(card);
    });
}

getLinks();