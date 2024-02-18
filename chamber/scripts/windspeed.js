document.addEventListener('DOMContentLoaded', function() {
    var calculateButton = document.getElementById('calculate');

    calculateButton.addEventListener('click', function() {
        var temperatureInput = document.getElementById('temp');
        var windspeedInput = document.getElementById('windspeed');

        var temperature = parseFloat(temperatureInput.value);
        var windspeed = parseFloat(windspeedInput.value);

        // Check if temperature is <= 50°F and windspeed is > 3.0 mph
        if (temperature <= 50 && windspeed > 3.0) {
            var windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);

            var windchillspan = document.getElementById('windchill');
            windchillspan.textContent = "Wind Chill: " + windchill.toFixed(2); // Rounding to 2 decimal places
        } else {
            var windchillspan = document.getElementById('windchill');
            windchillspan.textContent = "N/A";
        }
    });
});
