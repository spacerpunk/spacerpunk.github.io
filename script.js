const terminalContent = document.getElementById('terminal-content');

// Also call it when the page loads
window.addEventListener('load', adjustTerminalHeight);

function createInputLine() {
    const inputLine = document.createElement('div');
    inputLine.className = 'input-line';
    inputLine.innerHTML = `
        <span class="prompt">()>&nbsp;</span>
        <span class="input-wrapper">
            <span class="input-text"></span>
            <span class="cursor">&nbsp;</span>
        </span>
    `;
    terminalContent.appendChild(inputLine);
    
    const inputText = inputLine.querySelector('.input-text');
    
    let currentInput = '';
    
    function handleKeyDown(e) {
        e.preventDefault();
        if (e.key === 'Enter') {
            document.removeEventListener('keydown', handleKeyDown);
            processCommand(currentInput);
            inputLine.querySelector('.input-wrapper').remove();
        } else if (e.key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
        } else if (e.key.length === 1) {
            currentInput += e.key;
        }
        inputText.textContent = currentInput;
        scrollToBottom();
    }

    document.addEventListener('keydown', handleKeyDown);
    scrollToBottom();
}

function processCommand(cmd) {
    addToOutput(`()> ${cmd}`);
    
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
    adjustTerminalHeight();
    scrollToBottom();
}

function typeTextSequence(textArray, index = 0) {
    if (index < textArray.length) {
        typeText(textArray[index], 30, () => {
            typeTextSequence(textArray, index + 1);
        });
    }
}

function typeText(text, speed = 8, callback = null) {
    const div = document.createElement('div');
    div.className = 'output-line';
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
    const terminal = document.querySelector('.terminal');
    terminal.scrollTop = terminal.scrollHeight;
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