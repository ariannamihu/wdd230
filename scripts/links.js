const baseURL = "https://ariannamihu.github.io/wdd230/";
const linksURL = "https://ariannamihu.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
}
  
const displayLinks = (lessons) => {
    const linksContainer = document.getElementById('links-container');

    lessons.forEach((lesson) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');

        // Build the h2 content out to show the lesson number
        title.textContent = `Lesson ${lesson.lesson}`;

        // Create a <ul> element to hold the links for this lesson
        const linksList = document.createElement('ul');

        // Loop through each link object in the lesson
        lesson.links.forEach(link => {
            let linkItem = document.createElement('li');
            let linkElement = document.createElement('a');
            linkElement.textContent = link.title;
            linkElement.setAttribute('href', baseURL + link.url); // Set the link URL
            linkItem.appendChild(linkElement);
            linksList.appendChild(linkItem);
        });

        card.appendChild(title);
        card.appendChild(linksList);
        linksContainer.appendChild(card);
    });
}

getLinks();