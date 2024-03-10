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

        // Create a <ul> element to hold the links for this company
        // const linksList = document.createElement('ul');

        // // Loop through each link object in the company
        // company.links.forEach(link => {
        //     let linkItem = document.createElement('li');
        //     let linkElement = document.createElement('a');
        //     linkElement.textContent = link.title;
        //     linkElement.setAttribute('href', baseURL + link.url); // Set the link URL
        //     linkItem.appendChild(linkElement);
        //     linksList.appendChild(linkItem);
        // });

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(image);
        linksContainer.appendChild(card);
    });
}

getLinks();