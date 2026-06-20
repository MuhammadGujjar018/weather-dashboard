

const API_KEY = "4d7807cc2ee7582091ecbe953671c846";

async function getWeather(city) {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}