const url = 'https://api.openweathermap.org/data/2.5/'
const key = '2f47ff0ca248aa8b3c84c70c989da7ef'


const setQuery = (e) => {
    if(e.keyCode == "13")
    getResult(searchBar.value)
}


const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}


const displayResult = (result) => {
    let city = document.querySelector('.city')
    city.innerText = `${result.name}`
    let temp = document.querySelector('.temp')
    temp.innerText = `${Math.round(result.main.temp)}°C`
    let minmax = document.querySelector('.minmax')
    minmax.innerText = `${Math.round(result.main.temp_max)}°/${Math.round(result.main.temp_min)}°`
    console.log(result);
    let desc = document.querySelector('.desc')
    desc.innerText = `${result.weather[0].description}`
    let ic = document.getElementById('ic')
    ic.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keyup',setQuery)

