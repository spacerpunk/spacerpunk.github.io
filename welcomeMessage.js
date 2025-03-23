import { getWeatherData } from './weather/weather.js';

let weatherString = '';
let locationString = '';
let windString = '';
let rainString = '';
let humidityString = '';

// Fetch weather data and create the messages
function createMessages() {
  return getWeatherData('Buenos Aires').then((weatherData) => {
    const timestamp = new Date().toLocaleTimeString();
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();

    weatherString = `${weatherData.temperature}° Celsius, ${weatherData.condition}`;
    locationString = `Colegiales, ${weatherData.location}, ${weatherData.country}`;
    windString = `Winds are ${weatherData.windSpeed}mph ${weatherData.windDirection}`;
    (rainString = `${weatherData.rain}mm of rain`),
      (humidityString = `${weatherData.humidity}% Humidity `);

    const welcomeMessage = `<pre style="font-family:JetBrains Mono;font-size:13px;">
<span style="color:#ffffff">Welcome to the <span style="font-family:JetBrains Mono;font-size:16px;color:#00ff00">SPCRPNK</span> interface - Alpha v0.1</span>

<span style="color:#ffffff">${timestamp}, ${month}.${date}.${year}</span>
<span style="color:#ffffff">${locationString}</span>
<span style="color:#ffffff">${weatherString}, ${humidityString}, ${rainString}</span>
<span style="color:#ffffff">-------------------------------------------</span>
<span style="color:#ffffff">Press the </span><span style="color:#00ff00">▶</span><span style="color:#ffffff"> on the right...</span>
<span style="color:#ffffff">-------------------------------------------</span>
<span style="color:#ffffff">Type</span> <span style="color:#00ff00">'help'</span> and press <span style="color:#00ff00">'ENTER'</span> to see available commands.
<span style="font-family:JetBrains Mono;font-size:18px;color:#ffffff">TYPE 'portfolio', 'page' or 'newpage' to redirect to NEW PORTFOLIO</span>
</pre>`;

    const welcomeLog = `<pre style="font-family:JetBrains Mono;font-size:12px;">
<span style="font-family:JetBrains Mono;font-size:11px;color:#ffffff">Version S1.00</span>
<span style="font-family:JetBrains Mono;font-size:11px;color:#ffffff">64280 Tera Bytes free</span>
<span style="font-family:JetBrains Mono;font-size:11px;color:#ffffff">Copyright SPCRPNK Copr. 2024,2025,2026</span>
</pre>`;

    return { welcomeMessage, welcomeLog };
  });
}

export { createMessages };

//<span style="font-family:JetBrains Mono;font-size:11px;color:#ffffff">${weatherString}</span>
//<span style="font-family:JetBrains Mono;font-size:11px;color:#ffffff">${windString}</span>
//<span style="font-family:JetBrains Mono;font-size:11px;color:#ffffff">${rainString}</span>

// // Get current date and time
// const timestamp = new Date().toLocaleTimeString();
// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth() + 1; // getMonth() returns 0-11
// const date = now.getDate();

// const welcomeMessage = `<pre style="font-family:JetBrains Mono;font-size:13px;">
// <span style="color:#ffffff">Welcome to the <span style="font-family:JetBrains Mono;font-size:16px;color:#00ff00">SPCRPNK</span> interface</span>

// <span style="color:#ffffff">${timestamp}, ${month}.${date}.${year}</span>
// <span style="color:#ffffff">Colegiales, Buenos Aires, Argentina</span>
// <span style="color:#ffffff">24° Celcius, Clear, Night</span>
// <span style="color:#ffffff">-------------------------------------------</span>
// <span style="color:#ffffff">Press the </span><span style="color:#00ff00">▶</span><span style="color:#ffffff"> on the right...</span>
// <span style="color:#ffffff">-------------------------------------------</span>
// <span style="color:#ffffff">Type</span> <span style="color:#00ff00">'help'</span> and press <span style="color:#00ff00">'ENTER'</span> to see available commands.
// </pre>`;

// // Export the welcome message so it can be imported in other files
// const welcomeLog = `<pre style="font-family:JetBrains Mono;font-size:13px;">
// <span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Version S1.00</span>
// <span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">64280 Tera Bytes free</span>
// <span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Copyright SPCRPNK Copr. 2024,2025,2026</span>
// </pre>`;

// export { welcomeMessage };
// export { welcomeLog };
