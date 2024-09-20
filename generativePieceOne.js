import * as Tonal from 'https://cdn.skypack.dev/@tonaljs/tonal';

const MusicPieceOne = (function() {
    const bpm = 40;
    const reverb = new Tone.Reverb();
    const lpf = new Tone.Filter(400, 'lowpass');
    const gainNode = new Tone.Gain(0.2);
    const rightPanner = new Tone.Panner(1);
    const leftPanner = new Tone.Panner(-1);
    const chorus = new Tone.Chorus();
    const synth = new Tone.PolySynth().toDestination();
    synth.connect(reverb).connect(chorus).connect(lpf).connect(gainNode);
    gainNode.toDestination();

    Tone.Transport.bpm.value = bpm;const notes = ["C", "D", "E", "F", "G", "A", "B"];

    const scales = [
      "major", "minor", "melodic minor", "harmonic minor", "pentatonic",
      "blues", "dorian", "phrygian", "lydian", "mixolydian", "locrian"

    ];

    let notesArray = [];
    
    function log(message) {

        document.getElementById('output').innerHTML += message + '<br>';
        console.log(message);

    }
    
    function convertNotes() {

      const randomNote = notes[Math.floor(Math.random() * notes.length)];
      const randomScale = scales[Math.floor(Math.random() * scales.length)];
      const scale = Tonal.Scale.get(`${randomNote} ${randomScale}`);
    
      notesArray = scale.notes.map(note => Tonal.Note.midi(note + "4"));
      //log(`Selected scale: ${randomNote} ${randomScale}`);
      //log(`Notes: ${scale.notes}`);
      //log(`MIDI notes: ${notesArray}`);

    }

    
    function noteGenerator() {

      const note1 = notesArray[Math.floor(Math.random() * notesArray.length)];
      const note2 = notesArray[Math.floor(Math.random() * notesArray.length)];
    
      const velocity1 = Math.random() * 0.5 + 0.3;
      const velocity2 = Math.random() * 0.4 + 0.2;
    
      const now = Tone.now();
      synth.triggerAttackRelease(Tone.Frequency(note1, "midi"), "4n", now, velocity1);
      synth.triggerAttackRelease(Tone.Frequency(note2, "midi"), "4n", now, velocity2);

    }
    
    function sequenceGenerator(numberOfNotes) {

      const sequence = new Tone.Sequence((time) => {
        noteGenerator();
      }, Array(numberOfNotes).fill(0), "8n");
      sequence.start(0);


    } 
    
    let isPlaying = false;
    let isInitialized = false;

    async function initializeAudio() {
        if (!isInitialized) {
            await Tone.start();
            convertNotes();
            sequenceGenerator(5);
            console.log('Audio context started');
            isInitialized = true;
        }
    }   

    async function startMusic() {
        try {
            await initializeAudio();
            if (!isPlaying) {
                console.log('Tone started');
                Tone.Transport.start();
                isPlaying = true;
                //eLoop.start(now);
            }
        } catch (error) {
            console.error('Error starting music:', error);
        }
    }

    function stopMusic() {
        if (isPlaying) {
            console.log('Stop Transport');
            Tone.Transport.stop();
            isPlaying = false;
            //eLoop.stop();
        }
    }

    // document.querySelector('#start').addEventListener('click', async () => {
    //     await Tone.start();
    //     convertNotes();
    //     log('Audio is ready');
    //     sequenceGenerator(5);
    //     Tone.Transport.start();
    //   });

    return {
        start: startMusic,
        stop: stopMusic,
        init: initializeAudio
    };
})();

window.MusicPieceOne = MusicPieceOne;

