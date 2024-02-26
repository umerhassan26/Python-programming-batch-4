const form = document.getElementById("form");

const API_KEY = '745c41598fe4760bd586e1009ecedc45';
const UNIT = 'metric';

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let city_name = document.getElementById("city_name").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=${UNIT}&appid=${API_KEY}` // template literals or string literal

    // Parameters Used
    // q = city_name/lahore
    // units = metric
    // appid = API_KEY

    if(city_name == '') {
        alert('Kindly enter a valid city name');
    }
    else {
        // fetch weather data
        let response = await fetch(url);
        let data = await response.json();

        // console.log(data);

        console.log(data.main.temp)
        get_temp(data);
    }
})

const get_temp = (data) => {
    const temp_element = document.getElementById("temp");

    temp_element.innerText = `Temp: ${data.main.temp} C`;
}

// synchronous function
// function getWeather () {
    // some code
// }

// asynchronous function
// async function getWeather () {
    // some code
// }


// asynchronous arrow function
// const getWeather = async () => {
//     // some code
// }