import { getWeatherData } from './weather/weather.js';

let audioIsInit = false;
const now = new Date();
const reverb = new Tone.Reverb();
reverb.wet.value = 0.7;
const lpf = new Tone.Filter(250, 'lowpass');
const gainNode = new Tone.Gain(0.7);
const bpm = 20;
Tone.Transport.bpm.value = bpm;

const droneArray = []

const morningDrones = {
    Gmaj1: './sound/drones/Gmaj_Loop_01.wav',    
    Gmaj2: './sound/drones/Gmaj_Loop_02.wav',    
    Gmaj3: './sound/drones/Gmaj_Loop_03.wav',    
}

const dayDrones = {
    Cmaj1: './sound/drones/Cmaj_Loop_1.mp3',
    Cmaj2: './sound/drones/Cmaj_Loop_2.mp3',
    Cmaj3: './sound/drones/Cmaj_Loop_3.mp3',
}
const afternoonDrones = {
    Amin1: './sound/drones/Amin_Loop_01.mp3',
    Amin2: './sound/drones/Amin_Loop_02.mp3',
    Amin3: './sound/drones/Amin_Loop_03.mp3',
}

const nightDrones = {
    Dmin1: './sound/drones/Dmin_Loop_01.mp3',
    Dmin2: './sound/drones/Dmin_Loop_02.mp3',
    Dmin3: './sound/drones/Dmin_Loop_03.mp3',
}

const dayGrainSynth = new Tone.GrainPlayer({
    url: dayDrones.Cmaj1,
    loop: true,
    grainSize: 0.1,
    overlap: 0.8,
    playbackRate: 1
}).connect(reverb);

const nightGrainSynth = new Tone.GrainPlayer({
    url: nightDrones.Dmin1,
    loop: true,
    loopStart: 0,
    loopEnd: 1,
    reverse: false,
    grainSize: 0.2,
    overlap: 0.05,
    playbackRate: 1
}).connect(reverb);

const afternoonGrainSynth = new Tone.GrainPlayer({
    url: afternoonDrones.Amin1,
    loop: true,
    grainSize: 0.1,
    overlap: 0.3,
    playbackRate: 0.5
}).connect(reverb);

const morningGrainSynth = new Tone.GrainPlayer({
    url: morningDrones.Gmaj1,
    loop: true,
    grainSize: 0.5,
    overlap: 0.5,
    playbackRate: 0.1
}).connect(reverb);

// Define some chords
const chords = {
    Dmin: ["D1", "F2", "A3", "C3"],
    Amin: ['A1', 'A2', 'E3', 'F3'],
    Gmaj: ["G1", "D2", "A2", "B2"],
    Cmaj: ["C1", "C2", "G2", "F3"]
};

const padSynth = new Tone.PolySynth(Tone.Synth, {
    volume: -24,
    plyphony: 6,
    oscillator: {
        type: 'triangle'
    },
    envelope: {
        attack: 1.8,
        decay: 0.5,
        sustain: 0.8,
        release: 0.7
    },
}).connect(reverb);

const subSynth = new Tone.Synth({
    oscillator: {
        type: 'sine',
      },
      envelope: {
        attack: 0.8,
        decay: 0.6,
        sustain: 0.6,
        release: 1,
      },
}).connect(reverb);

const afternoonSeq = new Tone.Sequence(
    (time, note) => {
      subSynth.triggerAttackRelease(note, '1n', time);
    },
    ['D1'],
    '1n'
    );

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
                default:
                    console.log('WHAT');    
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
                default:
                    console.log('WHAT');

            }
        } else if (timeOfDay > 14 && timeOfDay <= 20) {
            console.log('Afternoon');
            switch(condition) {
                case 'Clear':
                    //playSample('afternoon', 'sunny');
                    //afternoonGrainSynth.start();
                    //afternoonSeq.start(0);
                    subSynth.triggerAttackRelease('D1', "2m");
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    //playSample('afternoon', 'cloudy');  
                    console.log('Cloudy');
                    break;
                default:
                    console.log('WHAT');    
            }
        } else if (timeOfDay > 20 || timeOfDay <= 5) {
            console.log('Night');
            switch(condition) {
                case 'Clear':
                    //playSample('night', 'sunny');
                    nightGrainSynth.start();
                    console.log('Clear');
                    break;
                case 'Cloudy':
                    //playSample('night', 'cloudy');  
                    console.log('Cloudy');
                    break;
                default:
                    console.log('WHAT');
            }
        }
    });
}
document.getElementById('initAudio').addEventListener('click', async () => {
  if (!audioIsInit) {
      try {
          await Tone.start();
          reverb.connect(lpf);
          lpf.connect(gainNode);
          gainNode.toDestination();
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

