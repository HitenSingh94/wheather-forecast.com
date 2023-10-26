document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "6df94fa14e550470b903cac390f05ebb"; // Get your API key from OpenWeatherMap

    const getWeatherButton = document.getElementById("getWeather");
    const cityNameInput = document.getElementById("cityInput");
    const cityNameDisplay = document.getElementById("cityName");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const weatherIconDisplay = document.getElementById("weatherIcon");

    getWeatherButton.addEventListener("click", () => {
        const city = cityNameInput.value;
        if (!city) return;

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                cityNameDisplay.textContent = data.name;
                temperatureDisplay.textContent = `Temperature: ${data.main.temp}°C`;
                descriptionDisplay.textContent = data.weather[0].description;
                weatherIconDisplay.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

                const weatherInfo = document.querySelector(".weather-info");
                weatherInfo.style.display = "block";
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
            });
    });
});
