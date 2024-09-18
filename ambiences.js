import { getWeatherData } from './weather/weather.js';

let audioIsInit = false;
const now = new Date();
const reverb = new Tone.Reverb();
reverb.wet.value = 0.8;
const lpf = new Tone.Filter(400, 'lowpass');
const gainNode = new Tone.Gain(0.5);

const granularSynth = new Tone.GrainPlayer({
    url: './sound/samples/untitled.wav',
    loop: true,
    grainSize: 0.1,
    overlap: 0.2,
    playbackRate: 0.5
}).connect(reverb);

const samples = {
    morning: {
        sunny: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
        cloudy: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
    },
    day: {
        sunny: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
        cloudy: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
    },
    afternoon: {
        sunny: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
        cloudy: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
    },
    night: {
        sunny: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
        cloudy: new Tone.Player("./sound/samples/test.mp3").connect(reverb),
    }
};

function playSample(category, type) {
    const sample = samples[category][type];
    sample.autostart = true;
}

function startSoundscape() {
    return getWeatherData('Buenos Aires')
      .then(weatherData => {
        const condition = weatherData.condition;
        const rain = weatherData.rain;
        const wind = weatherData.windSpeed;
        const timeOfDay = now.getHours();

        console.log(timeOfDay);
        
        if (timeOfDay > 5 && timeOfDay <= 11) {
            console.log('Morning');
            switch(condition) {
                case 'Sunny':
                    //playSample('morning', 'sunny');
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    //playSample('morning', 'cloudy');  
                    console.log('Cloudy');
                    break;
            }
        } else if (timeOfDay > 11 && timeOfDay <= 14) {
            console.log('Day');
            switch(condition) {
                case 'Sunny':
                    //playSample('day', 'sunny');
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    //playSample('day', 'cloudy');  
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
                    //playSample('afternoon', 'cloudy');  
                    console.log('Cloudy');
                    break;
            }
        } else if (timeOfDay > 20 || timeOfDay <= 5) {
            console.log('Night');
            switch(condition) {
                case 'Sunny':
                    //playSample('night', 'sunny');
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    //playSample('night', 'cloudy');  
                    console.log('Cloudy');
                    break;
            }
        }
    });
}
document.getElementById('initAudio').addEventListener('click', async () => {
  if (!audioIsInit) {
      try {
          //await Tone.start();
          reverb.connect(lpf);
          lpf.connect(gainNode);
          gainNode.toDestination();
          //await startSoundscape();
          audioIsInit = true;
          granularSynth.start();
          console.log('STARTED SOUNDSCAPE');
      } catch (error) {
          console.log('Error:', error);
          granularSynth.stop();
      }
  } else {
      Tone.Transport.stop();
  }
});


export { startSoundscape };

