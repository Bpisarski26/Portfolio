const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');
const weatherInfo = document.getElementById('weather-info');

const apiKey = "4ac11e22ccc7895f265b6b37d3d78e9a";

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    setBackground(data.weather[0].description.toLowerCase());
                    weatherInfo.innerHTML = `
                        <h2>${data.name}, ${data.sys.country}</h2>
                        <p class="temp">${Math.round(data.main.temp)}°F</p>
                        <p class="condition">Feels like: ${Math.round(data.main.feels_like)}°F</p>
                        <p class="details">Condition: ${data.weather[0].description}</p>
                        <p class="details">Humidity: ${data.main.humidity}%</p>
                    `;
                } else {
                    weatherInfo.innerHTML = "<p>City not found. Try again.</p>";
                }
            });
    }
});


function setBackground(condition) {
    const body = document.body;
    if (condition.includes("clear")) {
        body.style.background = "linear-gradient(135deg, #f7971e, #ccef1b)";
        body.style.color = "#1a1a1a";
    } else if (condition.includes("cloudy")) {
        body.style.background = "linear-gradient(135deg, #f3caca, #2479d3)";
        body.style.color = "white";
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
        body.style.background = "linear-gradient(135deg, #ffffff, #4286f4)";
        body.style.color = "white";
    } else if (condition.includes("snow")) {
        body.style.background = "linear-gradient(135deg, #e0eafc, #cfdef3)";
        body.style.color = "#1a1a1a";
    } else if (condition.includes("thunder")) {
        body.style.background = "linear-gradient(135deg, #040214, #302b63)";
        body.style.color = "white";
    } else if (condition.includes("broken")) {
        body.style.background = "linear-gradient(135deg, #828687, #494747)";
        body.style.color = "white";
    } else if (condition.includes("mist")) {
        body.style.background = "linear-gradient(135deg, #c0c0c093, #89a9b3)";
        body.style.color = "white";

    } else {
        body.style.background = "linear-gradient(135deg, #0a0a2e, #1a1a4e)";
        body.style.color = "white";
    }
}