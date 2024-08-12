// document.addEventListener('mousemove', generateMusic);
// 
// function generateMusic(event) {
//     // Use Web Audio API to generate music based on mouse movement
//     // Example:
//     const audioContext = new (window.AudioContext || window.webkitAudioContext)();
//     const oscillator = audioContext.createOscillator();
//     oscillator.type = 'sine';
//     oscillator.frequency.setValueAtTime(event.clientX, audioContext.currentTime);
//     oscillator.connect(audioContext.destination);
//     oscillator.start();
//     oscillator.stop(audioContext.currentTime + 0.1);
// }

console.log('Music Gen')