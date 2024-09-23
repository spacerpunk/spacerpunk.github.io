import { getWeatherData } from './weather/weather.js';

let audioIsInit = false;
const now = new Date();
const reverb = new Tone.Reverb();
reverb.wet.value = 0.5;
const wideRev = new Tone.Reverb();
wideRev.wet.value = 0.95;
const delay = new Tone.PingPongDelay({
    delayTime : 0.25 ,
    maxDelayTime : 1
    });
const widener = new Tone.StereoWidener();
widener.width.value = 0.5;
const lpf = new Tone.Filter(250, 'lowpass');
const gainNode = new Tone.Gain(0.7);
const bpm = 20;
Tone.Transport.bpm.value = bpm;

// Define some chords
// const chords = {
//     Dmin: ["D1", "F2", "A3", "C3"],
//     Amin: ['A1', 'A2', 'E3', 'F3'],
//     Gmaj: ["G1", "D2", "A2", "B2"],
//     Cmaj: ["C1", "C2", "G2", "F3"]
// };

// const samples = {
//     morning: {
//         sunny: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//         cloudy: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//     },
//     day: {
//         sunny: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//         cloudy: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//     },
//     afternoon: {
//         sunny: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//         cloudy: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//     },
//     night: {
//         sunny: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//         cloudy: new Tone.Player("./sound/samples/test.mp3").connect(lpf),
//     }
// };

let Cmaj = new Tone.Buffer('./sound/drones/Cmaj_Loop_01.mp3')

const morningDrones = {
    Gmaj1: './sound/drones/Gmaj_Loop_01.mp3',    
    Gmaj2: './sound/drones/Gmaj_Loop_02.mp3',    
    Gmaj3: './sound/drones/Gmaj_Loop_03.mp3',    
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
                
        const morningGrainSynth = new Tone.GrainPlayer({
            url: morningDrones.Gmaj1,
            loop: true,
            grainSize: 0.5,
            overlap: 0.1,
            reverse: false,
            playbackRate: 0.1
        }).connect(wideRev);
        
        const dayGrainSynth = new Tone.GrainPlayer({
            url: afternoonDrones.Amin1,
            loop: true,
            grainSize: 0.5,
            overlap: 0.1,
            playbackRate: 0.1
        }).connect(wideRev);
        
        const afternoonGrainSynth = new Tone.GrainPlayer({
            url: afternoonDrones.Amin1,
            loop: true,
            grainSize: 0.1,
            overlap: 0.3,
            playbackRate: 0.5
        }).connect(wideRev);
        
        const nightGrainSynth = new Tone.GrainPlayer({
            url: nightDrones.Dmin1,
            loop: true,
            loopStart: 0,
            loopEnd: 1,
            reverse: false,
            grainSize: 0.2,
            overlap: 0.05,
            playbackRate: 1
        }).connect(wideRev);
        
        const subSynth = new Tone.Synth({
            oscillator: {
                type: 'sine',
              },
              envelope: {
                attack: 1,
                decay: 0.3,
                sustain: 0.3,
                release: 1,
              },
        }).connect(reverb);
        
        var morningSeq = new Tone.Sequence(function(time, note){
            console.log(note);
            subSynth.triggerAttackRelease(note, '4m', time);

        //straight quater notes
        }, ["G1", "G2", "G1", "G2"], "4m");

        var daySeq = new Tone.Sequence(function(time, note){
            console.log(note);
            subSynth.triggerAttackRelease(note, '4m', time);

        //straight quater notes
        }, ["C1", "C2", "C1", "C2"], "4m");


        if (timeOfDay > 5 && timeOfDay <= 11) {
            console.log('Morning');
            switch(condition) {
                case 'Sunny':
                    Tone.Transport.start();
                    morningGrainSynth.start();
                    morningSeq.start(0);
                    playSample('morning','sunny');
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    console.log('Cloudy');
                    break;
                default:
                    console.log('DEFAULT');    
            }
        } else if (timeOfDay > 11 && timeOfDay <= 14) {
            console.log('Day');
            switch(condition) {
                case 'Sunny':
                    Tone.Transport.start();
                    dayGrainSynth.start();
                    daySeq.start(0);
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    console.log('Cloudy');
                    break;
                default:
                    console.log('DEFAULT');

            }
        } else if (timeOfDay > 14 && timeOfDay <= 20) {
            console.log('Afternoon');
            switch(condition) {
                case 'Clear':
                    console.log('Clear');
                    break;
                case 'Cloudy':
                    console.log('Cloudy');
                    break;
                default:
                    console.log('DEFAULT');    
            }
        } else if (timeOfDay > 20 || timeOfDay <= 5) {
            console.log('Night');
            switch(condition) {
                case 'Clear':
                    console.log('Clear');
                    break;
                case 'Cloudy':
                    console.log('Cloudy');
                    break;
                default:
                    console.log('DEFAULT');
            }
        }
    });
}
document.getElementById('initAudio').addEventListener('click', async () => {
  if (!audioIsInit) {
      try {
          await Tone.start();
          reverb.connect(lpf);
          wideRev.connect(delay);
          delay.connect(lpf);
          lpf.connect(widener);
          widener.connect(gainNode);

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

