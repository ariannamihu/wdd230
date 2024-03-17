const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const description = document.querySelector('#weatherDescription');
const weatherForecast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.41&lon=-111.76&units=imperial&appid=3e898b1a3d900cf3626d5cfd87a6d130';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.41&lon=-111.76&units=imperial&appid=3e898b1a3d900cf3626d5cfd87a6d130&cnt=24';

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

async function fetchForecast() {
  try {
    const response = await fetch(forecastURL);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayForecast(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchForecast();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const today = new Date();
    for (let i = 0; i < 24; i += 8) { // Display forecast for the next 3 days
      const forecastData = data.list[i];
      const forecastTime = new Date(today);
      forecastTime.setDate(today.getDate() + Math.floor(i / 8)); // Calculate date for each forecast item
      const forecastDay = forecastTime.toLocaleDateString('en-US', { weekday: 'long' });
      const forecastTempHigh = forecastData.main.temp_max;
      const forecastTempLow = forecastData.main.temp_min;
  
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      forecastItem.innerHTML = `
        <p>${forecastDay}</p>
        <p>High: ${forecastTempHigh}&deg;F</p>
        <p>Low: ${forecastTempLow}&deg;F</p>
      `;
      weatherForecast.appendChild(forecastItem);
    }
  }
  
  
  
