const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const description = document.querySelector('#weatherDescription');
const weatherForecast = document.querySelector('#forecast');
const humidity = document.querySelector('#humidity');
const tom_forecast = document.querySelector('#tom_forecast')
const highTemp = document.querySelector('#temp-max')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.51&lon=-86.96&units=imperial&appid=3e898b1a3d900cf3626d5cfd87a6d130';
const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.51&lon=-86.96&units=imperial&appid=3e898b1a3d900cf3626d5cfd87a6d130&cnt=24';

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
  humidity.innerHTML = `${data.main.humidity}`;
  highTemp.innerHTML = `${data.main.temp_max}&deg;F`
  tom_forecast.innerHTML = `${data.main.humidity}`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const tomorrowForecast = data.list.find(item => {
      const forecastTime = new Date(item.dt * 1000); // Convert timestamp to milliseconds
      const forecastDate = forecastTime.getDate();
      const forecastHour = forecastTime.getHours();
      return forecastDate === (new Date().getDate() + 1) && forecastHour === 15; // Tomorrow at 3 PM
    });
  
    if (tomorrowForecast) {
      const forecastTemp = tomorrowForecast.main.temp;
      const forecastItem = document.createElement('div');
      forecastItem.classList.add('forecast-item');
      forecastItem.innerHTML = `
        <p>Tomorrow at 3 PM</p>
        <p>Temperature: ${forecastTemp}&deg;F</p>
      `;
      weatherForecast.appendChild(forecastItem);
    } else {
      console.log("No forecast available for tomorrow at 3 PM");
    }
  }
  
  
  
