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
const samplesGain = new Tone.Gain(0.5).toDestination();

const gainNode = new Tone.Gain(0.6);
const bpm = 20;
Tone.Transport.bpm.value = bpm;

//MODULATION
const lfo = new Tone.LFO(0.1, 0, 1).start();
const lfoStereo = new Tone.LFO(0.1, 0, 1).start();
lfo.frequency.value = 0.05; // Oscillation speed (Hz)
lfo.min = 150; // Minimum wet value
lfo.max = 1500; // Maximum wet value

lfoStereo.frequency.value = 0.1
lfoStereo.min = 0.6
lfoStereo.max = 1



// Define some chords
// const chords = {
//     Dmin: ["D1", "F2", "A3", "C3"],
//     Amin: ['A1', 'A2', 'E3', 'F3'],
//     Gmaj: ["G1", "D2", "A2", "B2"],
//     Cmaj: ["C1", "C2", "G2", "F3"]
// };


const morningDrones = {
    Gmaj1: new Tone.ToneAudioBuffer('./sound/drones/Gmaj_Loop_01.mp3'),    
    Gmaj2: new Tone.ToneAudioBuffer('./sound/drones/Gmaj_Loop_02.mp3'),    
    Gmaj3: new Tone.ToneAudioBuffer('./sound/drones/Gmaj_Loop_03.mp3'),    
    Gmaj4: new Tone.ToneAudioBuffer('./sound/drones/Gmaj_Loop_04.mp3'),    
    Gmaj5: new Tone.ToneAudioBuffer('./sound/drones/Gmaj_Loop_05.mp3'),    
    Gmaj6: new Tone.ToneAudioBuffer('./sound/drones/Gmaj_Loop_06.mp3'),    
}

const dayDrones = {
    Cmaj1: new Tone.ToneAudioBuffer('./sound/drones/Cmaj_Loop_01.mp3'),
    Cmaj2: new Tone.ToneAudioBuffer('./sound/drones/Cmaj_Loop_02.mp3'),
    Cmaj3: new Tone.ToneAudioBuffer('./sound/drones/Cmaj_Loop_03.mp3'),
    Cmaj4: new Tone.ToneAudioBuffer('./sound/drones/Cmaj_Loop_04.mp3'),
    Cmaj5: new Tone.ToneAudioBuffer('./sound/drones/Cmaj_Loop_05.mp3'),
    Cmaj6: new Tone.ToneAudioBuffer('./sound/drones/Cmaj_Loop_06.mp3'),
}
const afternoonDrones = {
    Amin2: new Tone.ToneAudioBuffer('./sound/drones/Amin_Loop_02.mp3'),
    Amin1: new Tone.ToneAudioBuffer('./sound/drones/Amin_Loop_01.mp3'),
    Amin3: new Tone.ToneAudioBuffer('./sound/drones/Amin_Loop_03.mp3'),
    Amin4: new Tone.ToneAudioBuffer('./sound/drones/Amin_Loop_04.mp3'),
    Amin5: new Tone.ToneAudioBuffer('./sound/drones/Amin_Loop_05.mp3'),
    Amin6: new Tone.ToneAudioBuffer('./sound/drones/Amin_Loop_06.mp3'),
}

const nightDrones = {
    Dmin1: new Tone.ToneAudioBuffer('./sound/drones/Dmin_Loop_01.mp3'),
    Dmin2: new Tone.ToneAudioBuffer('./sound/drones/Dmin_Loop_02.mp3'),
    Dmin3: new Tone.ToneAudioBuffer('./sound/drones/Dmin_Loop_03.mp3'),
    Dmin4: new Tone.ToneAudioBuffer('./sound/drones/Dmin_Loop_04.mp3'),
    Dmin5: new Tone.ToneAudioBuffer('./sound/drones/Dmin_Loop_05.mp3'),
    Dmin6: new Tone.ToneAudioBuffer('./sound/drones/Dmin_Loop_06.mp3'),
}

function getRandomDrone(drones) {
  const keys = Object.keys(drones);
  console.log(keys)
  return drones[keys[Math.floor(Math.random() * keys.length)]];
}

function updateGrainSynth(synth, drones) {
    setInterval(() => {
      synth.buffer = getRandomDrone(drones);
    }, 20000); // Change every 10 seconds
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
            url: getRandomDrone(morningDrones),
            loop: true,
            grainSize: 0.5,
            overlap: 0.1,
            reverse: false,
            playbackRate: 0.1
        }).connect(wideRev);
        updateGrainSynth(morningGrainSynth, morningDrones);
    
        const dayGrainSynth = new Tone.GrainPlayer({
            url: getRandomDrone(dayDrones),
            loop: true,
            grainSize: 0.5,
            overlap: 0.1,
            playbackRate: 0.1
        }).connect(wideRev);
        updateGrainSynth(dayGrainSynth, dayDrones);
        
        const afternoonGrainSynth = new Tone.GrainPlayer({
            url: getRandomDrone(afternoonDrones),
            loop: true,
            grainSize: 0.1,
            overlap: 0.3,
            playbackRate: 0.5
        }).connect(wideRev);
        updateGrainSynth(afternoonGrainSynth, afternoonDrones);

        const nightGrainSynth = new Tone.GrainPlayer({
            url: getRandomDrone(nightDrones),
            loop: true,
            loopStart: 0,
            loopEnd: 1,
            reverse: false,
            grainSize: 0.5,
            overlap: 0.2,
            playbackRate: 0.2
        }).connect(wideRev);
        updateGrainSynth(nightGrainSynth, nightDrones);

        const subSynth = new Tone.Synth({
            oscillator: {
                type: 'sine',
              },
              envelope: {
                attack: 4,
                decay: 0.8,
                sustain: 0.3,
                release: 1,
              },
              volume: 0.7
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

        var afternoonSeq = new Tone.Sequence(function(time, note){
            console.log(note);
            subSynth.triggerAttackRelease(note, '4m', time);

        //straight quater notes
        }, ["A1", "A2", "A1", "A2"], "4m");

        var nightSeq = new Tone.Sequence(function(time, note){
            console.log(note);
            subSynth.triggerAttackRelease(note, '4m', time);

        //straight quater notes
        }, ["D1", "D2", "D1", "D2"], "4m");


        if (timeOfDay > 5 && timeOfDay <= 11) {
            console.log('Morning');
            let player = new Tone.Player({
                'url': './sound/samples/Morning_Clear_Sunny_Loop_01.mp3',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            switch(condition) {
                case 'Sunny':
                    Tone.Transport.start();
                    morningSeq.start(0);
                    morningGrainSynth.start();
                    player.autostart = true;
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    Tone.Transport.start();
                    morningSeq.start(0);
                    morningGrainSynth.start();
                    console.log('Cloudy');
                    break;
                default:
                    Tone.Transport.start();
                    morningSeq.start(0);
                    morningGrainSynth.start();
                    player.autostart = true;
                    console.log('DEFAULT');    
            }
        } else if (timeOfDay > 11 && timeOfDay <= 14) {
            console.log('Day');
            let dayOne = new Tone.Player({
                'url': './sound/samples/day/amb_misty_forest_4.ogg',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            let dayTwo = new Tone.Player({
                'url': './sound/samples/day/amb_misty_forest_1.ogg',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            let dayThree = new Tone.Player({
                'url': './sound/samples/day/amb_misty_forest_6.ogg',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            switch(condition) {
                case 'Sunny':
                    Tone.Transport.start();
                    daySeq.start(0);
                    dayGrainSynth.start();
                    dayOne.autostart = true;
                    console.log('Sunny');
                    break;
                case 'Cloudy':
                    Tone.Transport.start();
                    daySeq.start(0);
                    dayGrainSynth.start();
                    dayTwo.autostart = true;
                    console.log('Cloudy');
                    break;
                default:
                    Tone.Transport.start();
                    daySeq.start(0);
                    dayGrainSynth.start();
                    dayThree.autostart = true;
                    console.log('DEFAULT');
            }
        } else if (timeOfDay > 14 && timeOfDay <= 20) {
            console.log('Afternoon');
            let afternoonOne = new Tone.Player({
                'url': './sound/samples/afternoon/amb_cherry_trees.ogg',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            let afternoonTwo = new Tone.Player({
                'url': './sound/samples/afternoon/amb_desert_dunes_ridge.ogg',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            switch(condition) {
                case 'Clear':
                    console.log('Clear');
                    Tone.Transport.start();
                    afternoonGrainSynth.start();
                    afternoonSeq.start(0);
                    afternoonOne.autostart = true;
                    break;
                case 'Sunny':
                    console.log('Sunny');
                    Tone.Transport.start();
                    afternoonGrainSynth.start();
                    afternoonSeq.start(0);
                    afternoonTwo.autostart = true;
                    break;
                case 'Cloudy':
                    Tone.Transport.start();
                    afternoonGrainSynth.start();
                    afternoonSeq.start(0);
                    afternoonOne.autostart = true;
                    console.log('Cloudy');
                    break;      
                default:
                    Tone.Transport.start();
                    afternoonGrainSynth.start();
                    afternoonSeq.start(0);
                    console.log('DEFAULT');    
            }
        } else if (timeOfDay > 20 || timeOfDay <= 5) {
            console.log('Night');
            let nightOne = new Tone.Player({
                'url': './sound/samples/night/ambr_crickets_forest_night_d_lp.wav',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            let nightTwo = new Tone.Player({
                'url': './sound/samples/night/ambr_crickets_forest_night_a_lp.wav',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            let nightThree = new Tone.Player({
                'url': './sound/samples/night/ambr_crickets_forest_night_c_lp.wav',
                'loop': true,
                'fadeIn': 1,
            }).connect(samplesGain);
            switch(condition) {
                case 'Clear':
                    console.log('Clear');
                    Tone.Transport.start();
                    nightGrainSynth.start();
                    nightSeq.start(0);
                    nightOne.autostart = true;
                    break;
                case 'Cloudy':
                    Tone.Transport.start();
                    nightGrainSynth.start();
                    nightSeq.start(0);
                    nightTwo.autostart = true;
                    console.log('Cloudy');
                    break;
                default:
                    Tone.Transport.start();
                    nightGrainSynth.start();
                    nightSeq.start(0);
                    nightThree.autostart = true;
                    console.log('DEFAULT');
            }
        }
        let rainLow = new Tone.Player({
            'url': './sound/samples/rain/amb_weather_rain_drizzle_lp.wav',
            'loop': true,
            'fadeIn': 1,
        }).connect(samplesGain);
        let rainMid = new Tone.Player({
            'url': './sound/samples/rain/amb_weather_rain_light_lp.wav',
            'loop': true,
            'fadeIn': 1,
        }).connect(samplesGain);
        if (rain > 0 && rain < 1) {
            console.log('RAINING');
            rainLow.autostart = true;
        } else if (rain > 1){
            console.log('A LOT OF RAIN');
            rainMid.autostart = true;
        } else {
            console.log('NO RAIN');
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
          lfo.connect(lpf.frequency);
          lfoStereo.connect(widener.width);
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
