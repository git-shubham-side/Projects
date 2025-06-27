const button = document.querySelector("button");
const inp = document.querySelector("input");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

button.addEventListener("click", async function Weather() {
  let query = inp.value;

  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=24cc63ad3d75c1ed70e1513ca2ef1332`
  );
  const responce = await data.json();
  let temperature = Math.round(responce.main.temp);
  let cityname = responce.name;
  let humidity1 = responce.main.humidity;
  let windspeed = responce.wind.speed;

  // DOM
  // const clouds = responce.weather[0].description;
  // console.log(clouds);
  // // if (r)
  temp.innerText = temperature + "℃";
  city.innerText = cityname;
  humidity.innerText = humidity1 + "%";
  wind.innerText = windspeed + " Km/h";

  // console.log(responce);
  // console.log(responce.main.temp);
  // console.log(responce.name);
  // console.log(responce.main.humidity);
  // console.log(responce.wind.speed);
  console.log(responce);
});
