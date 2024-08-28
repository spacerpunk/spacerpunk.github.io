const terminalContent = document.getElementById('terminal-content');

// Also call it when the page loads
window.addEventListener('load', adjustTerminalHeight);
window.addEventListener('load', welcomeMessage);

function welcomeMessage() {

}

function createInputLine(previousCommand = '') {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `
        <span class="prompt">()&gt;&nbsp;</span>
        <span class="input-wrapper">
            <span class="input-text">${previousCommand}</span>
            <span class="cursor">&nbsp;</span>
        </span>
    `;
    terminalContent.appendChild(inputLine);
    
    const inputWrapper = inputLine.querySelector('.input-wrapper');
    const inputText = inputLine.querySelector('.input-text');
    const cursor = inputLine.querySelector('.cursor');
    
    let currentInput = previousCommand;
    
    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            document.removeEventListener('keydown', handleKeyDown);
            finalizeInput();
            processCommand(currentInput);
        } else if (e.key === 'Backspace') {
            e.preventDefault();
            currentInput = currentInput.slice(0, -1);
        } else if (e.key.length === 1) {
            currentInput += e.key;
        }
        inputText.textContent = currentInput;
        scrollToBottom();
    }

    function finalizeInput() {
        inputWrapper.removeChild(cursor);
        inputLine.removeChild(inputWrapper);
        inputLine.appendChild(document.createTextNode(currentInput));
    }

    document.addEventListener('keydown', handleKeyDown);
    inputWrapper.focus();
    scrollToBottom();
}

async function processCommand(cmd) {
    //addOutput(`<span class="prompt">C:\\&gt;</span> ${cmd}`);
    
    const lowerCmd = cmd.toLowerCase();
    
    if (terminalCommands.hasOwnProperty(lowerCmd)) {
        if (lowerCmd === 'startmusic') {
            console.log('Attempting to start music');
            if (window.MusicGenerator && typeof window.MusicGenerator.start === 'function') {
                try {
                    await window.MusicGenerator.start();
                    addOutput('Music started');
                } catch (error) {
                    console.error('Error starting music:', error);
                    addOutput('Error: Could not start music. Please try again or initialize audio first.');
                }
            } else {
                console.error('MusicGenerator.start is not a function');
                addOutput('Error: Music system not initialized properly');
            }
        } else if (lowerCmd === 'stopmusic') {
            console.log('Attempting to stop music');
            if (window.MusicGenerator && typeof window.MusicGenerator.stop === 'function') {
                window.MusicGenerator.stop();
                addOutput('Music stopped');
            } else {
                console.error('MusicGenerator.stop is not a function');
                addOutput('Error: Music system not initialized properly');
            }
        } else if (Array.isArray(terminalCommands[lowerCmd])) {
            terminalCommands[lowerCmd].forEach(line => addOutput(line));
        } else {
            addOutput(terminalCommands[lowerCmd]);
        }
    } else if (lowerCmd === 'clear') {
        terminalContent.innerHTML = '';
    } else {
        addOutput(`<span class="error">Command not recognized: ${cmd}</span>`);
    }
    
    createInputLine();
}


function adjustTerminalHeight() {
    const terminal = document.querySelector('.terminal');
    const terminalContent = document.getElementById('terminal-content');
    const banner = document.querySelector('.banner');
    
    const availableHeight = window.innerHeight - banner.offsetHeight - 40; // 40px for padding
    terminal.style.height = `${availableHeight}px`;
    
    if (terminalContent.offsetHeight > availableHeight) {
        terminal.style.overflowY = 'scroll';
    } else {
        terminal.style.overflowY = 'hidden';
    }
}

// Call this function when the window resizes
window.addEventListener('resize', adjustTerminalHeight);


function addOutput(html, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    div.innerHTML = html;
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

function typeText(html, speed = 15, callback = null, className = '') {
    const div = document.createElement('div');
    div.className = `output-line ${className}`;
    terminalContent.appendChild(div);

    const tempElement = document.createElement('div');
    tempElement.innerHTML = html;

    let textContent = tempElement.textContent;
    let currentIndex = 0;

    function type() {
        if (currentIndex < textContent.length) {
            let currentChar = textContent[currentIndex];
            let currentHTML = html.substring(0, html.indexOf(currentChar) + currentIndex + 1);
            div.innerHTML = currentHTML;
            currentIndex++;
            setTimeout(type, speed);
            scrollToBottom();
        } else {
            div.innerHTML = html; // Set full HTML at the end
            if (callback) {
                callback();
            }
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
    //inputs[inputs.length - 1].focus();
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const banner = document.querySelector('.banner');
const terminal = document.querySelector('.terminal');
const logoImg = document.querySelector('.logo img');
const inputLineColor = document.querySelector('.input-line');

let isDarkTheme = true;

themeToggle.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        inputLineColor.style.color = '#fff';
        terminal.style.borderColor = '#fff';
        themeToggle.style.backgroundColor = '#fff';
        themeToggle.style.color = '#000';
        logoImg.style.filter = 'invert(0)';
        // Change prompt color for dark theme
        document.querySelectorAll('.prompt').forEach(el => el.style.color = '#fff');
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        terminal.style.borderColor = '#000';
        inputLineColor.style.color = '#000';
        themeToggle.style.backgroundColor = '#000';
        themeToggle.style.color = '#fff';
        logoImg.style.filter = 'invert(1)';
        // Change prompt color for light theme
        document.querySelectorAll('.prompt').forEach(el => el.style.color = '#000');
    }
    
    // Update all input and output text colors
    const elements = document.querySelectorAll('.output-line, .input-line input');
    elements.forEach(el => {
        el.style.color = isDarkTheme ? '#0f0' : '#000';
    });
});

