getWeatherData = (city) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2df833ec19mshb98b0d174246d64p1d5543jsnc26cd07f1590",
      "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
    },
  };

  return fetch(
    `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}`,
    options
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};

const searchCity = async () => {
  const city = document.getElementById("city-input").value;
  console.log(city);
  const data = await getWeatherData(city);
  showWeatherData(data);
};

const showWeatherData = (weatherData) => {
  document.getElementById("city-name").innerText = weatherData.location.city;
  document.getElementById("weather-type").innerText =
    weatherData.current_observation.condition.text;
  document.getElementById("temp").innerText = Math.floor(
    (Number(weatherData.current_observation.condition.temperature) - 32) / 1.8
  );
  document.getElementById("sunrise").innerText =
    weatherData.current_observation.astronomy.sunrise;
  document.getElementById("sunset").innerText =
    weatherData.current_observation.astronomy.sunset;
};
