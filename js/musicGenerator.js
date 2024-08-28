// musicGenerator.js
const MusicGenerator = (function() {
    console.log('trackerplatz');

    const bpm = 104;
    const timeSignature = [9, 8];
    let isPlaying = false;
    const mainWave = new Tone.Waveform();

    // SYNTH DEFINITIONS
    const synth = new Tone.Synth({
        oscillator: {
            type: 'triangle',
        },
        envelope: {
            attack: 0,
            decay: 0.2,
            sustain: 0.5,
            release: 0.2,
        },
    });

    // MAIN NOTE PATTERN ARRAY
    function loopNotes(note) {
        const loopSequence = [note, null, note, null, null, note, null, note, null];
        return loopSequence;
    }

    const eLoop = new Tone.Sequence(
        (time, note) => {
            synth.triggerAttackRelease(note, '4n', time);
        },
        loopNotes('E3'),
        '8n'
    );

    synth.volume.value = -6;
    synth.connect(mainWave);
    synth.toDestination();

    let isInitialized = false;

    async function initializeAudio() {
        if (!isInitialized) {
            await Tone.start();
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
        }
    }

    return {
        start: startMusic,
        stop: stopMusic
    };
})();

window.MusicGenerator = MusicGenerator;
console.log('MusicGenerator object:', MusicGenerator);