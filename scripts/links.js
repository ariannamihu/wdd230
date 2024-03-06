const baseURL = "https://ariannamihu.github.io/wdd230/";
const linksURL = "https://ariannamihu.github.io/wdd230/data/links.json"

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}
  
async function displayLinks(weeks) {
    
}

getLinks();