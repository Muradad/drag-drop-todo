const cityInput = document.querySelector('.inputText');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    getData(cityInput.value); 
});
function getData(name) {
    const API = "02e7d8ce20a4dd58a43857d9bb9bdd6b"
    const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API}&units=metric&lang=AZ`;

    fetch(baseURL)
        .then(res => res.json())
        .then(data => {
            const { name, sys: { country }, main: { temp, feels_like }, weather: [{ description }] } = data;

            const city = document.querySelector('#seher');
            const temprature = document.querySelector('#istilik');
            const weatherDec = document.querySelector('#havaVeziyyeti');
            const fell = document.querySelector('#hissedilen');

            city.textContent = `${name}, ${country}`;
            weatherDec.textContent = `${description}`;
            temprature.textContent = `${temp}`;
            fell.textContent = `${feels_like}`;
        })
        .catch(err => console.log(err));
}
