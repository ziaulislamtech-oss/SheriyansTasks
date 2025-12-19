// --------Question No :1;

function getWeather(city){
// let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
let apiKey=`57a412c18e3fa9889a1cc9cba63e40ea`
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((raw)=> raw.json())
    .then((result)=> {
        console.log(result)
    } )
}
getWeather('London')