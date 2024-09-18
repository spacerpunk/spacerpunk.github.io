const apiKey = '0938517d1fb64c7895115002241709';
const url = 'http://api.weatherapi.com/v1/current.json';

const now = new Date();
const hour = now.getHours();

function getWeatherData(location) {
  const params = new URLSearchParams({
    key: apiKey,
    q: location
  });

  return fetch(`${url}?${params}`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
      return {
        temperature: data.current.temp_c,
        condition: data.current.condition.text,
        location: data.location.name,
        country: data.location.country,
        windSpeed: data.current.wind_mph,
        windDirection: data.current.wind_dir,
        rain: data.current.precip_mm,
      };
    });
}

export { getWeatherData };
