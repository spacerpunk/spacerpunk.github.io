const terminalContent = document.getElementById('terminal-content');

// Update createInputLine function
function createInputLine() {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `<span>(spcrpnk)>&gt;&nbsp;</span><input type="text" class="user-input"><span class="cursor"></span>`;
    terminalContent.appendChild(inputLine);
    
    const input = inputLine.querySelector('input');
    input.focus();
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const cmd = this.value;
            this.disabled = true;
            inputLine.querySelector('.cursor').remove(); // Remove cursor from current line
            processCommand(cmd);
        }
    });
}

function processCommand(cmd) {
    //addToOutput(`C:\\> ${cmd}`);
    
    const lowerCmd = cmd.toLowerCase();
    
    if (terminalCommands.hasOwnProperty(lowerCmd)) {
        if (lowerCmd === 'help') {
            typeTextSequence(terminalCommands[lowerCmd]);
        } else if (lowerCmd === 'banner') {
            addToOutput(terminalCommands[lowerCmd]);
        } else {
            typeText(terminalCommands[lowerCmd]);
        }
    } else if (lowerCmd === 'clear') {
        terminalContent.innerHTML = '';
    } else {
        addToOutput(`Command not recognized: ${cmd}`);
    }
    
    createInputLine();
}

function addToOutput(text) {
    const div = document.createElement('div');
    if (text === terminalCommands.banner) {
        div.className = 'output-line ascii-art';
        div.innerHTML = text.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
    } else {
        div.className = 'output-line';
        div.textContent = text;
    }
    terminalContent.appendChild(div);
    scrollToBottom();
}

function typeTextSequence(textArray, index = 0) {
    if (index < textArray.length) {
        typeText(textArray[index], 30, () => {
            typeTextSequence(textArray, index + 1);
        });
    }
}

function typeText(text, speed = 50, callback = null, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    terminalContent.appendChild(div);
    let i = 0;
    function type() {
        if (i < text.length) {
            div.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
            scrollToBottom();
        } else if (callback) {
            callback();
        }
    }
    type();
}

function scrollToBottom() {
    terminalContent.scrollTop = terminalContent.scrollHeight;
}

// Initial input line
createInputLine();

// Focus input when clicking anywhere in the terminal
document.querySelector('.terminal').addEventListener('click', () => {
    const inputs = document.querySelectorAll('.user-input');
    inputs[inputs.length - 1].focus();
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const banner = document.querySelector('.banner');
const terminal = document.querySelector('.terminal');
const logoImg = document.querySelector('.logo img');

let isDarkTheme = true;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        banner.style.backgroundColor = '#000';
        banner.style.borderColor = '#fff';
        terminal.style.borderColor = '#fff';
        themeToggle.style.backgroundColor = '#fff';
        themeToggle.style.color = '#000';
        logoImg.style.filter = 'invert(0)';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        banner.style.backgroundColor = '#fff';
        banner.style.borderColor = '#000';
        terminal.style.borderColor = '#000';
        themeToggle.style.backgroundColor = '#000';
        themeToggle.style.color = '#fff';
        logoImg.style.filter = 'invert(1)';
    }
    
    // Update all input and output text colors
    const elements = document.querySelectorAll('.output-line, .input-line input');
    elements.forEach(el => {
        el.style.color = isDarkTheme ? '#0f0' : '#000';
    });
});