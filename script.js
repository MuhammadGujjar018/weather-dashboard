

// const searchButton = document.getElementById("search-button");
// const cityInput = document.getElementById("city-input");
// const weatherDisplay = document.getElementById("weather-display");


// searchButton.addEventListener("click", async()=>{

//     const city = cityInput.value.trim();

//     if(city === ""){
//         showError("Please enter city name");
//         return;
//     }


//     weatherDisplay.style.display="block";

//     weatherDisplay.innerHTML = `
//         <h2>Loading...</h2>
//     `;


//     try{

//         const weather = await getWeather(city);

//         displayWeather(weather);

//     }
//     catch(error){

//         showError(error.message);

//     }

// });



// function displayWeather(data){

//     weatherDisplay.innerHTML = `

//     <h2>${data.name}</h2>

//     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

//     <h1>${data.main.temp}°C</h1>

//     <p>${data.weather[0].description}</p>

//     <p>💧 Humidity: ${data.main.humidity}%</p>

//     <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>

//     `;

// }



// function showError(message){

//     weatherDisplay.style.display="block";

//     weatherDisplay.innerHTML = `
//         <h3>❌ ${message}</h3>
//     `;

// }

// // const API_KEY = "4d7807cc2ee7582091ecbe953671c846";

// // const searchButton = document.getElementById("search-button");
// // const cityInput = document.getElementById("city-input");
// // const weatherDisplay = document.getElementById("weather-display");


// // // click button
// // searchButton.addEventListener("click", () => {
// //     searchWeather();
// // });


// // // ENTER key support
// // cityInput.addEventListener("keypress", (event) => {
// //     if (event.key === "Enter") {
// //         event.preventDefault();
// //         searchWeather();
// //     }
// // });


// // // main function
// // async function searchWeather() {

// //     let city = cityInput.value.trim();

// //     if (city === "") {
// //         showError("Please enter city name");
// //         return;
// //     }

// //     weatherDisplay.style.display = "block";
// //     weatherDisplay.innerHTML = `<h2 class="loading">Loading...</h2>`;

// //     try {
// //         const data = await getWeather(city); // send raw city
// //         displayWeather(data);
// //     }
// //     catch (error) {
// //         showError(error.message);
// //     }
// // }


// // // API call
// // async function getWeather(city) {

// //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// //     const response = await fetch(url);
// //     const data = await response.json();

// //    if (!response.ok) {
// //     throw new Error("City not found or API error");
// // }

// //     return data;
// // }


// // // show result
// // function displayWeather(data) {

// //     weatherDisplay.innerHTML = `
// //         <h2>${data.name}</h2>
// //         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
// //         <h1>${data.main.temp}°C</h1>
// //         <p>${data.weather[0].description}</p>
// //         <p>💧 Humidity: ${data.main.humidity}%</p>
// //         <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
// //     `;
// // }


// // // error
// // function showError(message) {
// //     weatherDisplay.style.display = "block";
// //     weatherDisplay.innerHTML = `<h3>❌ ${message}</h3>`;
// // }


// // // fix city format (basic smart correction)
// // function formatCity(city) {

// //     return city
// //         .toLowerCase()
// //         .split(" ")
// //         .map(word =>
// //             word.charAt(0).toUpperCase() + word.slice(1)
// //         )
// //         .join(" ");
// // }

const searchButton = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const weatherDisplay = document.getElementById("weather-display");
const loader = document.querySelector(".loader");


// Search button click
searchButton.addEventListener("click", searchWeather);


// Enter key support
cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchWeather();
    }
});


// Main weather function
async function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        showError("Please enter city name");
        return;
    }


    // Show loader
    weatherDisplay.style.display = "none";
    loader.style.display = "block";

    searchButton.disabled = true;


    try {

        const weather = await getWeather(city);

        displayWeather(weather);

    }

    catch(error) {

        showError(error.message);

    }

    finally {

        // Hide loader
        loader.style.display = "none";

        searchButton.disabled = false;

    }

}




// Display weather
function displayWeather(data) {

    weatherDisplay.style.display = "block";

    weatherDisplay.innerHTML = `

        <h2>${data.name}</h2>

        <img 
        src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
        alt="weather icon">

        <h1>${data.main.temp}°C</h1>

        <p>${data.weather[0].description}</p>

        <p>💧 Humidity: ${data.main.humidity}%</p>

        <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>

    `;
}




// Error display
function showError(message) {

    loader.style.display = "none";

    weatherDisplay.style.display = "block";

    weatherDisplay.innerHTML = `

        <h3>❌ ${message}</h3>

    `;
}