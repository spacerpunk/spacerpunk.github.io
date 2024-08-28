// welcomeMessage.js

const welcomeMessage = `<pre>
Welcome to SpacerPunk Terminal v1.0
-----------------------------------
Type 'help' to see available commands.</pre>
`;

// Export the welcome message so it can be imported in other files
export { welcomeMessage };

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

async function startMusic() {
    try {
        await initializeAudio();
        if (!isPlaying) {
            console.log('Tone started');
            Tone.Transport.start();
            isPlaying = true;
            eLoop.start(now);
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
