const weatherForm = document.querySelector(".weatherForm");
const inputCity = document.querySelector("#inputCity");
const card = document.querySelector(".card");
const apiKey = "95b4ee1264e2a6a55958e6724e821678";

weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const city = inputCity.value;

    if (city) {
        try {
            const weatherData = await getWeather(city);
            displayWeatherInfo(weatherData);
        }
        catch(error) {
            console.error(error);
            displayError(error.message);

        }
    }
    else {
        displayError("Please enter a valid city");
    }
});


async function getWeather(city) {

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Couldn't fetch weather data. Please try again later.");
    }

    return await response.json();


}

function displayWeatherInfo(data) {
    console.log(data);
    const{name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const emojiDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)} °C`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);
    
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);
    emojiDisplay.textContent = getWeatherEmoji(id);
    emojiDisplay.classList.add("emojiDisplay");
    card.appendChild(emojiDisplay);

}

function getWeatherEmoji(weatherId){
    switch(true){
        case(weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case(weatherId >= 300 && weatherId < 400):
            return "🌦️";   
        case(weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case(weatherId >= 600 && weatherId < 700):
            return "❄️";
        case(weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case(weatherId === 800):
            return "☀️";
        case(weatherId >= 801 && weatherId < 810):
            return "☁️";
        
        default:
            return "🤔⁉️";
           
        

    }


}

function displayError(message) {

    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "block";
    card.appendChild(errorDisplay);
}