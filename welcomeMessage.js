//import { weatherData, fetchWeatherData } from './weather/weather.js';
let weatherData = null;
let temp;
let condition;
let timeOfDay;
let wind;
let rain;

const apiKey = '0938517d1fb64c7895115002241709';
const url = 'http://api.weatherapi.com/v1/current.json';
const params = new URLSearchParams({
    key: apiKey,
    q: 'Buenos Aires'
});

const fetchCompleteEvent = new Event('fetchComplete');
let globalTemp;
let globalCondition;
let globalWinds;
let globalRain;

fetch(`${url}?${params}`)
  .then(response => response.json())
  .then(data => {
    globalTemp = data.current.temp_c;
    globalCondition = data.current.condition.text;
    globalWinds = data.current.wind_kph;
    globalRain = data.current.precip_mm;

    document.dispatchEvent(fetchCompleteEvent);
  })
  .catch(error => console.error('Error:', error));


document.addEventListener('fetchComplete', () => {
  console.log(`Fetch complete. Temperature: ${globalTemp}°C`);
  console.log(`Condition: ${globalCondition}`);
  temp = globalTemp
  // Use globalTemp here, guaranteed to be after fetch is complete
});

// Get current date and time
const timestamp = new Date().toLocaleTimeString();
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // getMonth() returns 0-11
const date = now.getDate();

const welcomeMessage = `<pre style="font-family:JetBrains Mono;font-size:13px;">
<span style="color:#ffffff">Welcome to the <span style="font-family:JetBrains Mono;font-size:16px;color:#00ff00">SPCRPNK</span> interface</span>

<span style="color:#ffffff">${timestamp}, ${month}.${date}.${year}</span>
<span style="color:#ffffff">Colegiales, Buenos Aires, Argentina</span>
<span style="color:#ffffff">${temp}° Celcius, Clear, Night</span>
<span style="color:#ffffff">-------------------------------------------</span>
<span style="color:#ffffff">Press the </span><span style="color:#00ff00">▶</span><span style="color:#ffffff"> on the right...</span>
<span style="color:#ffffff">-------------------------------------------</span>
<span style="color:#ffffff">Type</span> <span style="color:#00ff00">'help'</span> and press <span style="color:#00ff00">'ENTER'</span> to see available commands.
</pre>`;

// Export the welcome message so it can be imported in other files
const welcomeLog = `<pre style="font-family:JetBrains Mono;font-size:13px;">
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Version S1.00</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">64280 Tera Bytes free</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Copyright SPCRPNK Copr. 2024,2025,2026</span>
</pre>`;

export { welcomeMessage };
export { welcomeLog };
