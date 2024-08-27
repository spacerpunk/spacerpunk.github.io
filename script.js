const input = document.getElementById('user-input');
const output = document.getElementById('output');

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        processCommand(this.value);
        this.value = '';
    }
});

function processCommand(cmd) {
    addToOutput(`C:\\> ${cmd}`);
    
    switch(cmd.toLowerCase()) {
        case 'about':
            typeText("This is a retro-style terminal emulator.");
            break;
        case 'help':
            typeText("Available commands: ABOUT, HELP, CLEAR");
            break;
        case 'clear':
            output.innerHTML = '';
            break;
        default:
            addToOutput(`Command not recognized: ${cmd}`);
    }
}

function addToOutput(text) {
    output.innerHTML += `<div>${text}</div>`;
    output.scrollTop = output.scrollHeight;
}

function typeText(text, speed = 50) {
    const div = document.createElement('div');
    output.appendChild(div);
    let i = 0;
    function type() {
        if (i < text.length) {
            div.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
    output.scrollTop = output.scrollHeight;
}