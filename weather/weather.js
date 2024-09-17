let weatherData = null;

function fetchWeatherData() {
    const apiKey = '0938517d1fb64c7895115002241709';
    const url = 'http://api.weatherapi.com/v1/current.json';
    const params = new URLSearchParams({
        key: apiKey,
        q: 'Buenos Aires'
    });

    return fetch(`${url}?${params}`)
        .then(response => response.json())
        .then(data => {
            weatherData = data;
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

export { weatherData, fetchWeatherData };
