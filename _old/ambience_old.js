import { getWeatherData } from './weather/weather.js';

const now = new Date();



const samples = {
    morning: {
        sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
        cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
        //windy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
       //rainy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
        //thunderstorm: new Tone.Player("./sound/samples/test.mp3").toDestination()
    },
    day: {
        sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
        cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),

    },
    afternoon: {
        sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
        cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),

    },
    night: {
        sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
        cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),

    }

}

function playSample(category, type) {
    const sample = samples[category][type];
    sample.start();
}

// Fetch weather data and create the messages
function startSoundscape() {
    return getWeatherData('Buenos Aires')
      .then(weatherData => {
        const condition = weatherData.condition;
        const rain = weatherData.rain;
        const wind = weatherData.windSpeed;
        const timeOfDay = now.getHours();
        
        function startAmbience() {
            if (timeOfDay > 5 && timeOfDay <= 11){
                console.log('Morning');
                //IF STATEMENT FOR CONDITIONS
                switch(condition) {
                    case 'Sunny':
                        playSample(morning, sunny);
                        console.log('Sunny');
                    case 'Cloudy':
                        playSample(morning, cloudy);  
                        console.log('Cloudy');
                }
            } else if (timeOfDay > 11 && timeOfDay <= 15) {
                console.log('Day');
                switch(condition) {
                    case 'Sunny':
                        playSample(day, sunny);
                        console.log('Sunny');
                    case 'Cloudy':
                        playSample(day, cloudy);  
                        console.log('Cloudy');
                }
            } else if (timeOfDay > 15 && timeOfDay <= 20) {
                console.log('Afternoon');
                switch(condition) {
                    case 'Sunny':
                        playSample(afternoon, sunny);
                        console.log('Sunny');
                        case 'Cloudy':
                        playSample(afternoon, cloudy);  
                        console.log('Cloudy');
                }
            } else if (timeOfDay > 20 && timeOfDay <= 5) {
                console.log('Night');
                switch(condition) {
                    case 'Sunny':
                        playSample(night, sunny);
                        console.log('Sunny');
                        
                    case 'Cloudy':
                        playSample(night, cloudy);  
                        console.log('Cloudy');
                }
            }
        } 

        function stopAmbience() {
            Tone.Transport.stop();
            //STOPPED TONE JS
        }
        
        document.getElementById('initAudio').addEventListener('click', async () => {
            if (!audioIsInit) {
                try {
                    console.log
                }
            }
        })

        return { startAmbience, stopAmbience };
      });
  } export { startSoundscape };




  ______________________

  import { getWeatherData } from './weather/weather.js';

let audioIsInit = false;
const now = new Date();

// Fetch weather data and create the messages
function startSoundscape() {
    return loadSamples()
      .then(() => getWeatherData('Buenos Aires'))
      .then(weatherData => {
        const condition = weatherData.condition;
        const rain = weatherData.rain;
        const wind = weatherData.windSpeed;
        const timeOfDay = now.getHours();

        const samples = {
            morning: {
                sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
                cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
                //windy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
               //rainy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
                //thunderstorm: new Tone.Player("./sound/samples/test.mp3").toDestination()
            },
            day: {
                sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
                cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
            
            },
            afternoon: {
                sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
                cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
            
            },
            night: {
                sunny: new Tone.Player("./sound/samples/test.mp3").toDestination(),
                cloudy: new Tone.Player("./sound/samples/test.mp3").toDestination(),
            
            }
        
        }

        function loadSamples() {
            const loadPromises = [];
            for (const timeOfDay in samples) {
                for (const weather in samples[timeOfDay]) {
                    loadPromises.push(samples[timeOfDay][weather].load());
                }
            }
            return Promise.all(loadPromises);
        }

        function playSample(category, type) {
            const sample = samples[category][type];
            if (sample.loaded) {
                sample.start();
            } else {
                console.log(`Sample ${category} ${type} not loaded yet`);
            }
        }

        console.log(timeOfDay)
            
        if (timeOfDay > 5 && timeOfDay <= 11){
            console.log('Morning');
            //IF STATEMENT FOR CONDITIONS
            switch(condition) {
                case 'Sunny':
                    playSample(morning, sunny);
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    playSample(morning, cloudy);  
                    console.log('Cloudy');
                    break;
            }
        } else if (timeOfDay > 11 && timeOfDay <= 14) {
            console.log('Day');
            switch(condition) {
                case 'Sunny':
                    //playSample(day, sunny);
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    //playSample(day, cloudy);  
                    console.log('Cloudy');
                    break;
            }
        } else if (timeOfDay > 14 && timeOfDay <= 20) {
            console.log('Afternoon');
            switch(condition) {
                case 'Sunny':
                    playSample('afternoon', 'sunny');
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    //playSample(afternoon, cloudy);  
                    console.log('Cloudy');
                    break;
            }
        } else if (timeOfDay > 20 && timeOfDay <= 5) {
            console.log('Night');
            switch(condition) {
                case 'Sunny':
                    playSample(night, sunny);
                    console.log('Sunny');
                    break;
                    
                case 'Cloudy':
                    playSample(night, cloudy);  
                    console.log('Cloudy');
                    break;
            }
        }
      });

      
  }
  

document.getElementById('initAudio').addEventListener('click', async () => {
  if (!audioIsInit) {
      try {
          await Tone.start();
          await startSoundscape();
          audioIsInit = true;
          console.log('STARTED SOUNDSCAPE');
      } catch (error) {
          console.log('Error:', error);
      }
  } else {
      Tone.Transport.stop();
  }
});


export { startSoundscape };

