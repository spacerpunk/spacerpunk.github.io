// welcomeMessage.js

const welcomeMessage = `<pre style="font-family:JetBrains Mono;font-size:14px;">
<span style="color:#ffffff">Welcome to the <span style="font-family:JetBrains Mono;font-size:16px;color:#00ff00">SPCRPNK</span> interface</span>

<span style="color:#ffffff">The weather is:</span>
<span style="color:#00ff00">30° Celcius, Clear, Night</span>
<span style="color:#00ff00">20:45, Colegiales, Buenos Aires, Argentina</span>
<span style="color:#ffffff">-------------------------------------------</span>

<span style="color:#ffffff">Type</span> <span style="color:#00ff00">'help'</span> and press <span style="color:#00ff00">'ENTER'</span> to see available commands.

<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Version S1.00</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">64280 Tera Bytes free</span>
<span style="font-family:JetBrains Mono;font-size:11px;style="color:#ffffff">Copyright SPCRPNK Copr. 2024,2025,2026</span>
</pre>`;

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
